import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { ShoppingBag, Eye, Heart, Check } from 'lucide-react';
import axios from 'axios';

export default function ProductCard({ product }) {
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setAdding(true);
      await axios.post('/cart/add', { product_id: product.id, quantity: 1 });
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (err) {
      console.error("Failed adding to cart", err);
    } finally {
      setAdding(false);
    }
  };

  // Determine tag badge color scheme
  const renderTag = (tag) => {
    let bg = 'bg-brand-oilGreen text-white';
    if (tag === 'NEW') bg = 'bg-emerald-600 text-white';
    if (tag === 'CLEARANCE') bg = 'bg-brand-pinkSalt-400 text-white';
    if (tag === 'BESTSELLER') bg = 'bg-amber-500 text-white';

    return (
      <span
        key={tag}
        className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm ${bg}`}
      >
        {tag}
      </span>
    );
  };

  const primaryImg = product.primary_image?.image_path || product.image_url || 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80';

  return (
    <div className="group relative bg-white rounded-2xl border border-brand-pinkSalt-200 overflow-hidden shadow-sm hover:shadow-softHover transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image Container */}
      <div className="relative aspect-square overflow-hidden bg-brand-cream/50">
        
        {/* Badges Container */}
        <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1">
          {product.tags && Array.isArray(product.tags) && product.tags.map((tag) => renderTag(tag))}
          {product.stock <= 5 && product.stock > 0 && (
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white">
              Only {product.stock} Left!
            </span>
          )}
        </div>

        {/* Product Image */}
        <Link href={`/product/${product.slug}`}>
          <img
            src={primaryImg}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Quick Hover Action Overlays */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4 pointer-events-none group-hover:pointer-events-auto">
          <Link
            href={`/product/${product.slug}`}
            className="w-10 h-10 rounded-full bg-white text-brand-oilGreen flex items-center justify-center shadow-md hover:bg-brand-oilGreen hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
            title="Quick View"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold text-brand-oilGreen uppercase tracking-wider">
            {product.category?.name || 'Craft Supplies'}
          </span>
          <Link href={`/product/${product.slug}`}>
            <h3 className="text-sm font-bold text-brand-charcoal mt-1 line-clamp-2 hover:text-brand-oilGreen transition-colors">
              {product.title}
            </h3>
          </Link>
        </div>

        {/* Price & Add to Cart Action */}
        <div className="mt-4 pt-3 border-t border-brand-pinkSalt-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-extrabold text-brand-oilGreen">
                RM {parseFloat(product.price).toFixed(2)}
              </span>
              {product.compare_at_price && (
                <span className="text-xs text-gray-400 line-through">
                  RM {parseFloat(product.compare_at_price).toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-gray-400">SKU: {product.sku}</span>
          </div>

          {/* Quick Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={adding || product.stock === 0}
            className={`p-2.5 rounded-full transition-all flex items-center justify-center shadow-sm ${
              product.stock === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : added
                ? 'bg-emerald-600 text-white'
                : 'bg-brand-pinkSalt-200 text-brand-oilGreen hover:bg-brand-oilGreen hover:text-white'
            }`}
            title={product.stock === 0 ? 'Out of Stock' : 'Add to Shopping Bag'}
          >
            {added ? <Check className="w-4 h-4" /> : <ShoppingBag className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
