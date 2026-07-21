<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryPageController extends Controller
{
    public function show(Request $request, $slug = null)
    {
        $categories = Category::where('is_active', true)->get();
        $currentCategory = $slug ? Category::where('slug', $slug)->firstOrFail() : null;

        $query = Product::with(['category', 'primaryImage'])
            ->where('status', 'published');

        if ($currentCategory) {
            $query->where('category_id', $currentCategory->id);
        }

        // Tag filtering (e.g., NEW, CLEARANCE, BESTSELLER)
        if ($request->filled('tag')) {
            $tag = strtoupper($request->tag);
            $query->whereJsonContains('tags', $tag);
        }

        // Sorting
        $sort = $request->get('sort', 'latest');
        if ($sort === 'price_low') {
            $query->orderBy('price', 'asc');
        } elseif ($sort === 'price_high') {
            $query->orderBy('price', 'desc');
        } else {
            $query->latest();
        }

        $products = $query->paginate(12)->withQueryString();

        return Inertia::render('Category', [
            'categories' => $categories,
            'currentCategory' => $currentCategory,
            'products' => $products,
            'filters' => $request->only(['tag', 'sort', 'search']),
        ]);
    }
}
