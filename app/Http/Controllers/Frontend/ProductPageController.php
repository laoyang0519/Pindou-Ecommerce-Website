<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;

class ProductPageController extends Controller
{
    public function show($slug)
    {
        $product = Product::with(['category', 'images', 'primaryImage'])
            ->where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        $relatedProducts = Product::with(['category', 'primaryImage'])
            ->where('category_id', $product->category_id)
            ->where('id', '!=', $product->id)
            ->where('status', 'published')
            ->take(4)
            ->get();

        return Inertia::render('ProductDetail', [
            'product' => $product,
            'relatedProducts' => $relatedProducts,
        ]);
    }
}
