# 🎀 呼啦の小铺 (Hulla Pindou) - Perler Beads & Craft E-Commerce Website

A modern, full-stack E-Commerce web application for **呼啦の小铺** (Perler Beads & DIY Craft Supplies), built with **Laravel 11**, **Inertia.js**, **React**, and **Tailwind CSS**.

---

## 🛠️ Tech Stack & Requirements

- **PHP**: `>= 8.2` (PHP 8.3 recommended)
- **Node.js**: `>= v18.0.0`
- **Database**: MySQL 8.0+
- **Local Server Environment**: **Laragon** (Windows)
- **Frontend**: React 18 + Inertia.js + Tailwind CSS + Lucide Icons

---

## 🚀 Complete Step-by-Step Setup Guide (Using Laragon)

Follow these steps to set up and run the project locally using **Laragon**.

### 1️⃣ Clone or Move Project to Laragon `www` Directory

Make sure the project folder is placed directly inside Laragon's `www` directory:

```bash
cd C:\laragon\www
git clone https://github.com/laoyang0519/Pindou-Ecommerce-Website.git
```

> **Path Example**: `C:\laragon\www\Pindou-Ecommerce-Website`

---

### 2️⃣ Install PHP Dependencies

Open Laragon Terminal (or Command Prompt in project folder) and run:

```bash
composer install
```

---

### 3️⃣ Install Node.js Dependencies

Install the required npm packages:

```bash
npm install
```

---

### 4️⃣ Configure Environment File (`.env`)

Copy the `.env.example` file to create your `.env` configuration file:

```bash
cp .env.example .env
```

Ensure your `.env` database and session settings are configured as follows:

```env
APP_NAME="呼啦の小铺"
APP_ENV=local
APP_KEY=
APP_DEBUG=true
APP_URL=http://pindou-ecommerce-website.test

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hulla_pindou_db
DB_USERNAME=root
DB_PASSWORD=

SESSION_DRIVER=file
CACHE_STORE=database
```

---

### 5️⃣ Generate Laravel Application Key

Run the key generation command:

```bash
php artisan key:generate
```

---

### 6️⃣ Create Database & Run Seeders in Laragon

1. **Start Laragon**: Click **Start All** (Apache/Nginx + MySQL).
2. **Create Database**:
   - Click **Database** in Laragon (opens HeidiSQL) or use phpMyAdmin / Terminal.
   - Create a new database named **`hulla_pindou_db`**.
3. **Run Migrations & Seed Sample Data**:

```bash
php artisan migrate:fresh --seed
```

This will automatically create all tables and populate sample perler bead products, categories, and initial admin/customer credentials.

---

### 7️⃣ Run Development Server

Start the Vite development server for hot-reloading frontend changes:

```bash
npm run dev
```

*(Optional: If you want to build the static production bundle instead, run `npm run build`)*

---

### 8️⃣ Open the Project in Browser 🌐

Thanks to Laragon's auto-virtualhost feature, you can access the website directly at:

👉 **http://pindou-ecommerce-website.test**

*(Alternative if not using Laragon Virtualhost: run `php artisan serve` and open `http://localhost:8000`)*

---

## 🔑 Login Credentials

### 🛍️ Sample Customer Account
- **Email / Username**: `customer@gmail.com` *(or `craftlover`)*
- **Password**: `Customer123!`

---

## 📂 Project Structure Overview

```
Pindou-Ecommerce-Website/
├── app/
│   ├── Http/Controllers/
│   │   ├── Admin/         # Admin Management Controllers
│   │   └── Frontend/      # Storefront Controllers
│   └── Models/            # Eloquent Data Models
├── database/
│   ├── migrations/        # Database Schema Migrations
│   └── seeders/           # Initial Categories & Products Seeders
├── resources/
│   ├── js/
│   │   ├── Components/    # Layouts, Header, Footer, CartDrawer, ProductCard
│   │   ├── Pages/         # Home, Category, ProductDetail, About, Terms, Contact
│   │   └── app.jsx        # Inertia React Root Entry
│   └── views/
│       └── app.blade.php  # Blade Template Host
├── routes/
│   └── web.php            # Frontend & Admin Web Routes
└── public/                # Public Assets & Logo Images
```

---

## ✨ Features Included

- 🎨 **Kawaii & Premium Design**: Custom pastel color palette (Oil Green, Pink Salt, Cream).
- 🏷️ **Product & Category Filtering**: Browse 2.6mm & 5mm beads, pegboards, tools & accessories.
- ✂️ **Custom Order (拼豆接单定制) T&C**: Custom commission pricing guide & terms.
- 🛍️ **Interactive Shopping Bag**: Drawer cart with live item quantity updates.
- 📦 **Free Shipping Discount Banner**: Automatic RM30 half-shipping & RM50 free shipping notices.
- ⚙️ **Admin Control Panel**: Full CRUD operations for products, categories, and users.

---

© 2026 **呼啦の小铺**. All Rights Reserved.