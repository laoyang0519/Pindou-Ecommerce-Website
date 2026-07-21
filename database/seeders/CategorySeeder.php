<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Perler Beads 拼豆',
                'slug' => 'perler-beads',
                'description' => '2.6mm & 5mm high quality food-grade EVA perler beads with 72+ soft pastel colors.',
                'image' => 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
            ],
            [
                'name' => 'Craft Tools & Kits 辅料工具',
                'slug' => 'craft-tools',
                'description' => 'Precision stainless steel tweezers, ironing paper, and starter craft kits.',
                'image' => 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
            ],
            [
                'name' => 'Keychain & Accessories 挂件饰品',
                'slug' => 'keychain-accessories',
                'description' => 'Lobster clasps, ball chains, bell pendants, and display frames.',
                'image' => 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=600&q=80',
            ],
            [
                'name' => 'Ironing & Pegboards 烫斗烫纸',
                'slug' => 'ironing-pegboards',
                'description' => 'Interlocking square & round clear pegboards with heat-resistant ironing foil.',
                'image' => 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80',
            ],
        ];

        foreach ($categories as $cat) {
            Category::create($cat);
        }
    }
}
