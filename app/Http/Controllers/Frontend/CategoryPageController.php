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
        $categorySlug = $slug ?? $request->get('category') ?? $request->get('slug');
        $categories = Category::where('is_active', true)->get();
        $currentCategory = $categorySlug ? Category::where('slug', $categorySlug)->first() : null;

        $query = Product::with(['category', 'primaryImage'])
            ->where('status', 'published');

        if ($currentCategory) {
            $query->where('category_id', $currentCategory->id);
        }

        // Search filtering
        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%")
                  ->orWhere('sku', 'like', "%{$search}%");
            });
        }

        // Tag filtering (e.g., NEW, CLEARANCE, BESTSELLER)
        if ($request->filled('tag')) {
            $tag = strtoupper($request->tag);
            $query->where(function ($q) use ($tag) {
                $q->whereJsonContains('tags', $tag)
                  ->orWhere('tags', 'like', "%{$tag}%");
            });
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
            'filters' => (object) $request->only(['tag', 'sort', 'search']),
        ]);
    }
}
