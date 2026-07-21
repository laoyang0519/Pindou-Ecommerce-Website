<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $beadsCategory = Category::where('slug', 'perler-beads')->first();
        $toolsCategory = Category::where('slug', 'craft-tools')->first();
        $keychainCategory = Category::where('slug', 'keychain-accessories')->first();
        $ironingCategory = Category::where('slug', 'ironing-pegboards')->first();

        $products = [
            [
                'category_id' => $beadsCategory?->id ?? 1,
                'title' => 'Kawaii Pastel 72-Color 2.6mm Perler Beads Box Set (拼豆马卡龙色盒装)',
                'slug' => 'kawaii-pastel-72-color-26mm-perler-beads-box-set',
                'sku' => 'HP-BD-72P',
                'price' => 38.90,
                'compare_at_price' => 48.00,
                'stock' => 50,
                'description' => 'Comprehensive 72-color perler bead box set with 2.6mm mini beads. Made from high quality non-toxic EVA material.',
                'tags' => ['NEW', 'BESTSELLER'],
                'status' => 'published',
                'is_featured' => true,
                'image' => 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $beadsCategory?->id ?? 1,
                'title' => '5mm Standard Soft Jelly Bead Refill Bag (500pcs)',
                'slug' => '5mm-standard-soft-jelly-bead-refill-bag',
                'sku' => 'HP-BD-5MM-JL',
                'price' => 6.50,
                'compare_at_price' => 8.50,
                'stock' => 120,
                'description' => 'Translucent jelly series 5mm fuse beads. Great for suncatchers, keychains, and coasters.',
                'tags' => ['NEW'],
                'status' => 'published',
                'is_featured' => false,
                'image' => 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $toolsCategory?->id ?? 2,
                'title' => 'Precision Curved Stainless Tweezers (专业不锈钢弯头镊子)',
                'slug' => 'precision-curved-stainless-tweezers',
                'sku' => 'HP-TL-TWZ',
                'price' => 7.90,
                'compare_at_price' => null,
                'stock' => 85,
                'description' => 'Ultra-fine tip ergonomic tweezers specially designed for placing 2.6mm and 5mm perler beads with zero slippage.',
                'tags' => ['RECOMMENDED'],
                'status' => 'published',
                'is_featured' => true,
                'image' => 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $ironingCategory?->id ?? 4,
                'title' => 'Interlocking Square Clear Pegboard (5mm/2.6mm Dual Fit)',
                'slug' => 'interlocking-square-clear-pegboard',
                'sku' => 'HP-PB-SQ',
                'price' => 12.00,
                'compare_at_price' => 15.00,
                'stock' => 40,
                'description' => 'Clear grid template board with interlocking side notches to combine multiple boards for larger art pieces.',
                'tags' => ['BESTSELLER'],
                'status' => 'published',
                'is_featured' => true,
                'image' => 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $keychainCategory?->id ?? 3,
                'title' => 'Macaron Colored Candy Lobster Clasp Pack (10pcs)',
                'slug' => 'macaron-colored-candy-lobster-clasp-pack',
                'sku' => 'HP-KC-MCR',
                'price' => 5.20,
                'compare_at_price' => 9.90,
                'stock' => 200,
                'description' => 'Cute pastel acrylic lobster clasp keyrings. Add instant kawaii charm to your finished perler bead creations.',
                'tags' => ['CLEARANCE'],
                'status' => 'published',
                'is_featured' => false,
                'image' => 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
            ],
        ];

        foreach ($products as $pData) {
            $image = $pData['image'];
            unset($pData['image']);

            $product = Product::create($pData);

            ProductImage::create([
                'product_id' => $product->id,
                'image_path' => $image,
                'is_primary' => true,
                'sort_order' => 0,
            ]);
        }
    }
}
