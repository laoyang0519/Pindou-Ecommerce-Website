<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::where('is_active', true)->get();

        // Hero Banners Mock Data
        $heroBanners = [
            [
                'id' => 1,
                'title' => 'Kawaii Perler Bead World ✨',
                'subtitle' => 'Unleash your creativity with 72+ vibrant bead shades',
                'button_text' => 'Shop New Arrivals',
                'button_url' => '/category/perler-beads',
                'bg_color' => 'bg-brand-pinkSalt-100',
                'accent_color' => 'text-brand-oilGreen',
            ],
            [
                'id' => 2,
                'title' => 'DIY Craft Kits & Accessories 🎨',
                'subtitle' => 'Pegboards, tweezers, ironing paper & starter bundles',
                'button_text' => 'Explore Craft Tools',
                'button_url' => '/category/craft-tools',
                'bg_color' => 'bg-brand-oilGreen-50',
                'accent_color' => 'text-brand-pinkSalt-700',
            ],
        ];

        // New Arrivals ("NEW NEW NEW")
        $newProducts = Product::with(['category', 'primaryImage'])
            ->where('status', 'published')
            ->latest()
            ->take(8)
            ->get();

        // Recommended / Featured Collection
        $recommendedProducts = Product::with(['category', 'primaryImage'])
            ->where('status', 'published')
            ->where('is_featured', true)
            ->take(8)
            ->get();

        // Clearance Collection
        $clearanceProducts = Product::with(['category', 'primaryImage'])
            ->where('status', 'published')
            ->whereNotNull('compare_at_price')
            ->take(4)
            ->get();

        return Inertia::render('Home', [
            'heroBanners' => $heroBanners,
            'categories' => $categories,
            'newProducts' => $newProducts,
            'recommendedProducts' => $recommendedProducts,
            'clearanceProducts' => $clearanceProducts,
        ]);
    }
}
