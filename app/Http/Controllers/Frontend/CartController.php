<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    private function getCart(Request $request)
    {
        $sessionId = $request->session()->getId();

        if (Auth::check()) {
            return Cart::firstOrCreate(
                ['user_id' => Auth::id()],
                ['session_id' => $sessionId]
            );
        }

        return Cart::firstOrCreate(
            ['session_id' => $sessionId]
        );
    }

    public function index(Request $request)
    {
        $cart = $this->getCart($request);
        $cart->load(['items.product.primaryImage']);

        return response()->json([
            'cart' => $cart,
            'total' => $cart->total,
            'count' => $cart->items->sum('quantity'),
        ]);
    }

    public function add(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'integer|min:1',
        ]);

        $product = Product::findOrFail($request->product_id);
        $quantity = $request->input('quantity', 1);

        if ($product->stock < $quantity) {
            return response()->json(['message' => 'Requested quantity exceeds stock available.'], 422);
        }

        $cart = $this->getCart($request);

        $cartItem = CartItem::where('cart_id', $cart->id)
            ->where('product_id', $product->id)
            ->first();

        if ($cartItem) {
            $cartItem->increment('quantity', $quantity);
        } else {
            CartItem::create([
                'cart_id' => $cart->id,
                'product_id' => $product->id,
                'quantity' => $quantity,
            ]);
        }

        return response()->json(['message' => 'Item added to cart successfully.']);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1',
        ]);

        $cartItem = CartItem::findOrFail($id);
        $cartItem->update(['quantity' => $request->quantity]);

        return response()->json(['message' => 'Cart updated successfully.']);
    }

    public function remove($id)
    {
        $cartItem = CartItem::findOrFail($id);
        $cartItem->delete();

        return response()->json(['message' => 'Item removed from cart.']);
    }
}
