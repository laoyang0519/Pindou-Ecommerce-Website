<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class StaticPageController extends Controller
{
    public function about()
    {
        return Inertia::render('About', [
            'brandInfo' => [
                'title' => 'Welcome to Hulla Pindou (拼豆小铺)',
                'tagline' => 'Spreading joy pixel by pixel with premium Perler Beads & handmade craft supplies.',
                'founded_year' => 2024,
                'location' => 'Kuala Lumpur, Malaysia',
            ]
        ]);
    }

    public function terms()
    {
        return Inertia::render('Terms', [
            'lastUpdated' => 'July 2026',
        ]);
    }

    public function contact()
    {
        return Inertia::render('Contact', [
            'contactInfo' => [
                'email' => 'hello@hullapindou.com',
                'whatsapp' => '+60123456789',
                'whatsapp_url' => 'https://wa.me/60123456789?text=Hi%20Hulla%20Pindou!%20I%20have%20an%20inquiry.',
                'instagram' => '@cozyhulla',
                'instagram_url' => 'https://instagram.com/cozyhulla',
                'store_address' => 'Unit 12-08, Creative Craft Hub, Jalan Bukit Bintang, 55100 Kuala Lumpur, Malaysia',
                'business_hours' => 'Mon - Sat: 10:00 AM - 7:00 PM (GMT+8)',
            ]
        ]);
    }
}
