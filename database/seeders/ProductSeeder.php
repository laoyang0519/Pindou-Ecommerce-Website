<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $beadsCategory = Category::where('slug', 'perler-beads')->first();
        $toolsCategory = Category::where('slug', 'craft-tools')->first();
        $keychainCategory = Category::where('slug', 'keychain-accessories')->first();
        $ironingCategory = Category::where('slug', 'ironing-pegboards')->first();

        $products = [
            // Category 1: Perler Beads (拼豆)
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
                'category_id' => $beadsCategory?->id ?? 1,
                'title' => 'Glow in the Dark 2.6mm Night Glow Bead Pack (1000pcs)',
                'slug' => 'glow-in-the-dark-26mm-night-glow-bead-pack',
                'sku' => 'HP-BD-GLOW',
                'price' => 14.80,
                'compare_at_price' => 18.00,
                'stock' => 80,
                'description' => 'Luminescent glow-in-the-dark perler beads that shine softly in dim light after charging under sunlight or lamp.',
                'tags' => ['RECOMMENDED'],
                'status' => 'published',
                'is_featured' => true,
                'image' => 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $beadsCategory?->id ?? 1,
                'title' => 'Metallic Shimmer 5mm Glitter Fuse Beads (800pcs)',
                'slug' => 'metallic-shimmer-5mm-glitter-fuse-beads',
                'sku' => 'HP-BD-GLTR',
                'price' => 12.50,
                'compare_at_price' => null,
                'stock' => 60,
                'description' => 'Sparkling glitter-infused 5mm fuse beads for adding extra shimmer and pop to pixel artwork.',
                'tags' => ['BESTSELLER'],
                'status' => 'published',
                'is_featured' => false,
                'image' => 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
            ],

            // Category 2: Craft Tools & Kits (辅料工具)
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
                'category_id' => $toolsCategory?->id ?? 2,
                'title' => 'Mini Electric Temperature Controlled Craft Iron (便携迷你烫斗)',
                'slug' => 'mini-electric-temperature-controlled-craft-iron',
                'sku' => 'HP-TL-IRON',
                'price' => 24.90,
                'compare_at_price' => 32.00,
                'stock' => 45,
                'description' => 'Compact mini craft iron designed specifically for perler bead ironing with rapid heating and even heat distribution.',
                'tags' => ['BESTSELLER', 'NEW'],
                'status' => 'published',
                'is_featured' => true,
                'image' => 'https://images.unsplash.com/photo-1585336261026-8f5786372966?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $toolsCategory?->id ?? 2,
                'title' => 'DIY Starter Perler Bead Toolkit Set (入门工具大礼包)',
                'slug' => 'diy-starter-perler-bead-toolkit-set',
                'sku' => 'HP-TL-KIT',
                'price' => 19.90,
                'compare_at_price' => 26.00,
                'stock' => 100,
                'description' => 'All-in-one starter kit including precision tweezers, 5x ironing paper sheets, pegboards, and metal keyrings.',
                'tags' => ['RECOMMENDED'],
                'status' => 'published',
                'is_featured' => false,
                'image' => 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $toolsCategory?->id ?? 2,
                'title' => 'Bead Storage Organizer Box with 36 Compartments (36格收纳盒)',
                'slug' => 'bead-storage-organizer-box-36-compartments',
                'sku' => 'HP-TL-BOX',
                'price' => 11.50,
                'compare_at_price' => 15.00,
                'stock' => 75,
                'description' => 'Clear plastic organizer box with removable dividers to neatly store and sort different color perler beads.',
                'tags' => ['NEW'],
                'status' => 'published',
                'is_featured' => false,
                'image' => 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=800&q=80',
            ],

            // Category 3: Keychain & Accessories (挂件饰品)
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
            [
                'category_id' => $keychainCategory?->id ?? 3,
                'title' => 'Star & Heart Shaped Metal Keyrings (12pcs)',
                'slug' => 'star-heart-shaped-metal-keyrings',
                'sku' => 'HP-KC-STR',
                'price' => 6.80,
                'compare_at_price' => 8.90,
                'stock' => 150,
                'description' => 'Durable metallic keyrings featuring star and heart silhouettes for custom perler bag charms.',
                'tags' => ['BESTSELLER'],
                'status' => 'published',
                'is_featured' => true,
                'image' => 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $keychainCategory?->id ?? 3,
                'title' => 'Pastel Beaded Ball Chains for Keychains (20pcs)',
                'slug' => 'pastel-beaded-ball-chains-keychains',
                'sku' => 'HP-KC-CHN',
                'price' => 4.50,
                'compare_at_price' => 6.00,
                'stock' => 180,
                'description' => 'Colorful enamel coated metal ball chains ideal for attaching lightweight pixel art keychains.',
                'tags' => ['NEW'],
                'status' => 'published',
                'is_featured' => false,
                'image' => 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $keychainCategory?->id ?? 3,
                'title' => 'Acrylic Badge & Photo Frame Display Holders (5pcs)',
                'slug' => 'acrylic-badge-photo-frame-display-holders',
                'sku' => 'HP-KC-FRM',
                'price' => 15.90,
                'compare_at_price' => 20.00,
                'stock' => 90,
                'description' => 'Clear acrylic protective frame cases to display and protect small perler bead pixel badges.',
                'tags' => ['RECOMMENDED'],
                'status' => 'published',
                'is_featured' => false,
                'image' => 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
            ],

            // Category 4: Ironing & Pegboards (烫斗烫纸)
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
                'category_id' => $ironingCategory?->id ?? 4,
                'title' => 'Round & Hexagon Shaped Clear Pegboards Set (3pcs)',
                'slug' => 'round-hexagon-shaped-clear-pegboards-set',
                'sku' => 'HP-PB-RND',
                'price' => 14.50,
                'compare_at_price' => 18.00,
                'stock' => 65,
                'description' => 'Set of circular, hexagonal, and star shaped pegboard templates for creating symmetrical mandala and flower crafts.',
                'tags' => ['NEW'],
                'status' => 'published',
                'is_featured' => false,
                'image' => 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $ironingCategory?->id ?? 4,
                'title' => 'Premium Heat-Resistant Ironing Paper Sheets (50pcs)',
                'slug' => 'premium-heat-resistant-ironing-paper-sheets',
                'sku' => 'HP-PB-PPR',
                'price' => 8.90,
                'compare_at_price' => 12.00,
                'stock' => 140,
                'description' => 'Non-stick parchment baking paper sheets designed for fusing perler beads smoothly without sticking to iron.',
                'tags' => ['RECOMMENDED'],
                'status' => 'published',
                'is_featured' => false,
                'image' => 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
            ],
            [
                'category_id' => $ironingCategory?->id ?? 4,
                'title' => 'Non-Stick Glossy Ironing Film Foil Sheets (20pcs)',
                'slug' => 'non-stick-glossy-ironing-film-foil-sheets',
                'sku' => 'HP-PB-FLM',
                'price' => 9.90,
                'compare_at_price' => null,
                'stock' => 110,
                'description' => 'Special high-temperature plastic film sheets that give a smooth, shiny, glossy finish to fused perler bead creations.',
                'tags' => ['NEW', 'CLEARANCE'],
                'status' => 'published',
                'is_featured' => false,
                'image' => 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80',
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
