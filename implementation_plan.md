# Implementation Plan - Hulla Pindou (Perler Beads & Craft Store)

This implementation plan outlines the architecture, database schema, design system integration, and phase-by-phase development roadmap for the **Hulla Pindou** e-commerce platform.

---

## 🏗️ 1. Architecture & Folder Structure

The application is built using **Laravel 11** with **Inertia.js (React/Vue)** or **Laravel Blade + Alpine.js/Tailwind CSS** along with **Shadcn UI** components.

```
Pindou-Ecommerce-Website/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Auth/
│   │   │   │   ├── AuthenticatedSessionController.php
│   │   │   │   ├── RegisteredUserController.php
│   │   │   │   └── PasswordResetLinkController.php
│   │   │   ├── Admin/
│   │   │   │   ├── DashboardController.php
│   │   │   │   ├── UserController.php
│   │   │   │   ├── CategoryController.php
│   │   │   │   └── ProductController.php
│   │   │   ├── Frontend/
│   │   │   │   ├── HomeController.php
│   │   │   │   ├── CategoryPageController.php
│   │   │   │   ├── ProductPageController.php
│   │   │   │   ├── CartController.php
│   │   │   │   └── StaticPageController.php
│   │   ├── Middleware/
│   │   │   ├── AdminMiddleware.php
│   │   │   └── EnsureEmailIsVerified.php
│   │   └── Requests/
│   │       ├── LoginRequest.php
│   │       ├── RegisterRequest.php
│   │       └── ProductRequest.php
│   ├── Models/
│   │   ├── User.php
│   │   ├── Category.php
│   │   ├── Product.php
│   │   ├── ProductImage.php
│   │   ├── Cart.php
│   │   ├── CartItem.php
│   │   ├── Order.php
│   │   └── OrderItem.php
│   └── Notifications/
│       └── CustomVerifyEmailNotification.php
├── config/
├── database/
│   ├── migrations/
│   └── seeders/
├── resources/
│   ├── css/
│   │   └── app.css
│   ├── js/
│   │   ├── Components/
│   │   │   ├── Layouts/
│   │   │   │   ├── AnnouncementBar.jsx
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── CartDrawer.jsx
│   │   │   ├── UI/ (Shadcn components)
│   │   │   │   ├── button.jsx
│   │   │   │   ├── badge.jsx
│   │   │   │   ├── dialog.jsx
│   │   │   │   ├── dropdown-menu.jsx
│   │   │   │   ├── input.jsx
│   │   │   │   └── sheet.jsx
│   │   │   └── ProductCard.jsx
│   │   └── Pages/
│   │       ├── Home.jsx
│   │       ├── Category.jsx
│   │       ├── ProductDetail.jsx
│   │       ├── About.jsx
│   │       ├── Terms.jsx
│   │       ├── Contact.jsx
│   │       └── Admin/
├── routes/
│   ├── web.php
│   └── auth.php
└── tailwind.config.js
```

---

## 🗄️ 2. Database Schema Design

### `users` Table
```sql
CREATE TABLE `users` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(255) UNIQUE NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `email_verified_at` TIMESTAMP NULL DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('admin', 'customer') DEFAULT 'customer',
  `remember_token` VARCHAR(100) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
```

### `categories` Table
```sql
CREATE TABLE `categories` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) UNIQUE NOT NULL,
  `description` TEXT NULL,
  `image` VARCHAR(255) NULL,
  `is_active` BOOLEAN DEFAULT TRUE,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL
);
```

### `products` Table
```sql
CREATE TABLE `products` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `category_id` BIGINT UNSIGNED NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) UNIQUE NOT NULL,
  `sku` VARCHAR(100) UNIQUE NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  `compare_at_price` DECIMAL(10, 2) NULL,
  `stock` INT NOT NULL DEFAULT 0,
  `description` LONGTEXT NULL,
  `tags` JSON NULL, -- e.g. ["NEW", "BESTSELLER", "CLEARANCE"]
  `status` ENUM('draft', 'published', 'archived') DEFAULT 'published',
  `is_featured` BOOLEAN DEFAULT FALSE,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE
);
```

### `product_images` Table
```sql
CREATE TABLE `product_images` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `product_id` BIGINT UNSIGNED NOT NULL,
  `image_path` VARCHAR(255) NOT NULL,
  `is_primary` BOOLEAN DEFAULT FALSE,
  `sort_order` INT DEFAULT 0,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE
);
```

### `carts` & `cart_items` Tables
```sql
CREATE TABLE `carts` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `user_id` BIGINT UNSIGNED NULL,
  `session_id` VARCHAR(255) NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);

CREATE TABLE `cart_items` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `cart_id` BIGINT UNSIGNED NOT NULL,
  `product_id` BIGINT UNSIGNED NOT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  FOREIGN KEY (`cart_id`) REFERENCES `carts`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE
);
```

### `orders` & `order_items` Tables
```sql
CREATE TABLE `orders` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `order_number` VARCHAR(100) UNIQUE NOT NULL,
  `user_id` BIGINT UNSIGNED NOT NULL,
  `total_amount` DECIMAL(10, 2) NOT NULL,
  `status` ENUM('pending', 'processing', 'completed', 'cancelled') DEFAULT 'pending',
  `shipping_address` TEXT NOT NULL,
  `contact_phone` VARCHAR(50) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
);

CREATE TABLE `order_items` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `order_id` BIGINT UNSIGNED NOT NULL,
  `product_id` BIGINT UNSIGNED NOT NULL,
  `quantity` INT NOT NULL,
  `price` DECIMAL(10, 2) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE
);
```

---

## 🎨 3. UI Component & Theme Setup (Tailwind + Shadcn)

### Custom Colors Configuration (`tailwind.config.js`)
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          oilGreen: {
            DEFAULT: "#80856D",
            light: "#9CA189",
            dark: "#656A54",
          },
          pinkSalt: {
            DEFAULT: "#F7CDC7",
            light: "#FBE3DF",
            dark: "#E3B2AB",
          },
          cream: "#FAF8F5",
          charcoal: "#2D312E",
        },
      },
      fontFamily: {
        sans: ['"Quicksand"', '"Nunito"', 'sans-serif'],
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### Key Shadcn UI Components to Install / Create
1. **Sheet / Drawer**: For Shopping Cart drawer slide-over.
2. **Dropdown Menu**: For Category navigation and User profile menu.
3. **Badge**: Soft pill badges for product tags ("NEW", "CLEARANCE", "BESTSELLER").
4. **Button & Input**: Kawaii soft-rounded buttons and form fields.
5. **Dialog / Modal**: Image zoom & quick view modals.

---

## 🗺️ 4. Step-by-Step Development Roadmap

### Phase 1: Environment Setup, DB & Authentication
- [ ] Initialize Laravel 11 project, configure `.env` (MySQL DB connection, Mailtrap/SMTP settings).
- [ ] Run initial migrations (`users`, `categories`, `products`, `product_images`, `carts`, `cart_items`, `orders`).
- [ ] Configure Laravel Breeze / Fortify with custom email verification & signed link handlers.
- [ ] Implement dual authentication logic (login via Email or Username).
- [ ] Implement strong password validation rules and password reset flow.

### Phase 2: Admin Portal (Back-Office)
- [ ] Create `AdminMiddleware` checking for `role === 'admin'`.
- [ ] Build User Management CRUD (view user list, registration dates, toggle Admin/Customer roles).
- [ ] Build Category Management CRUD (Name, Slug, Image upload).
- [ ] Build Product Management CRUD (Title, SKU, Category, Price, Compare-at Price, Stock, Description, Multiple Image dropzone upload, Status, Tags).

### Phase 3: Global Front-End Layouts
- [ ] Implement Top Announcement Bar with promo text.
- [ ] Build Responsive Header with brand logo, Category dropdown menu, live search input, user menu, and Cart Drawer trigger.
- [ ] Implement Cart Drawer component (slide-in from right with item list, subtotal, quantity modifier, and checkout button).
- [ ] Build 4-Column Footer (About summary, Quick Links, Payment Badges, Contact/Location info, T&C links).

### Phase 4: Customer Homepage, Categories & Product Cards
- [ ] Construct Homepage Hero Banner / Promo slider section.
- [ ] Build Product Collection Grids ("NEW NEW NEW", "RECOMMENDED", "CLEARANCE").
- [ ] Build Product Card Component with smooth hover zoom effect, price in **MYR / RM**, tag badges, and Quick Add to Cart button.
- [ ] Build Category Filter Page with side/top sorting (Price, Newest, In-Stock) and category selector.
- [ ] Build Product Detail Page with image gallery thumbnail selector and quantity selector.

### Phase 5: Static Pages & Final QA Checklist
- [ ] **About Us Page**: Soft visual branding, story of Hulla Pindou, Perler Bead crafting intro.
- [ ] **After-Sales T&C Page (关于售后 / Terms & Conditions)**: Clear accordion format for return policies, shipping times, and damage claims.
- [ ] **Contact Us Page**: Email contact card, WhatsApp redirect button, Instagram feed integration teaser, and embedded store map/location.
- [ ] End-to-end testing: Registration -> Email Verification -> Login -> Cart -> Checkout flow mock -> Admin CRUD checks.

---

## 🧪 Verification Plan

### Automated Tests
- `php artisan test --filter=AuthTest`: Verify email/username login, registration validation, and password reset logic.
- `php artisan test --filter=ProductCrudTest`: Verify product creation, image uploading, and inventory stock tracking.

### Manual Verification
- Visual check of responsive layouts across mobile, tablet, and desktop viewports.
- Verification of custom color palette (#80856D Oil Green, #F7CDC7 Pink Salt) implementation across buttons, badges, and headers.
