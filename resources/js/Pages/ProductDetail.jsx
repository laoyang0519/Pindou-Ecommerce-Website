import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AnnouncementBar from '../Components/Layouts/AnnouncementBar';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import ProductCard from '../Components/ProductCard';
import { ShoppingBag, Plus, Minus, Check, ShieldCheck, Truck, RefreshCw, Heart } from 'lucide-react';
import axios from 'axios';

export default function ProductDetail({ product, relatedProducts = [] }) {
  const primaryImg = product.primary_image?.image_path || product.images?.[0]?.image_path || 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80';
  const [activeImage, setActiveImage] = useState(primaryImg);
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    try {
      setAdding(true);
      await axios.post('/cart/add', { product_id: product.id, quantity });
      setAdded(true);
      setTimeout(() => setAdded(false), 2500);
    } catch (err) {
      console.error("Cart add error", err);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title={`${product.title} - Hulla Pindou`} />

      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-brand-oilGreen">Home</Link>
          <span>/</span>
          <Link href={`/category/${product.category?.slug}`} className="hover:text-brand-oilGreen">
            {product.category?.name || 'Craft Supplies'}
          </Link>
          <span>/</span>
          <span className="text-brand-charcoal font-semibold truncate">{product.title}</span>
        </nav>

        {/* Product Details Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-pinkSalt-200 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left: Gallery View */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-brand-cream border border-brand-pinkSalt-300 relative">
              <img src={activeImage} alt={product.title} className="w-full h-full object-cover" />
            </div>

            {/* Thumbnail Selection Strip */}
            {product.images && product.images.length > 0 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImage(img.image_path)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImage === img.image_path ? 'border-brand-oilGreen scale-105 shadow-sm' : 'border-gray-200 opacity-70'
                    }`}
                  >
                    <img src={img.image_path} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Info & Purchase Controls */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-brand-pinkSalt-100 text-brand-oilGreen px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.category?.name}
                </span>
                <span className="text-xs font-semibold text-gray-400">SKU: {product.sku}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal leading-tight">
                {product.title}
              </h1>

              {/* Pricing */}
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-3xl font-extrabold text-brand-oilGreen">
                  RM {parseFloat(product.price).toFixed(2)}
                </span>
                {product.compare_at_price && (
                  <span className="text-base text-gray-400 line-through">
                    RM {parseFloat(product.compare_at_price).toFixed(2)}
                  </span>
                )}
                {product.compare_at_price && (
                  <span className="text-xs font-extrabold bg-rose-100 text-rose-600 px-2 py-0.5 rounded">
                    SAVE {Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)}%
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <div className="pt-1">
                {product.stock > 0 ? (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    In Stock ({product.stock} units available)
                  </span>
                ) : (
                  <span className="text-xs font-bold text-rose-500">Out of Stock</span>
                )}
              </div>

              {/* Short Description */}
              <p className="text-xs text-gray-600 leading-relaxed border-t border-brand-pinkSalt-100 pt-3">
                {product.description || "High quality 2.6mm & 5mm non-toxic EVA perler beads. Bright color consistency and smooth melt parameters perfect for keychains, coasters, and pixel art designs."}
              </p>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="space-y-4 border-t border-brand-pinkSalt-100 pt-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-brand-charcoal">Quantity</span>
                <div className="flex items-center border border-brand-pinkSalt-300 rounded-full bg-white px-3 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-gray-600 hover:text-brand-oilGreen"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-bold text-brand-charcoal">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-gray-600 hover:text-brand-oilGreen"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={adding || product.stock === 0}
                  className={`flex-1 py-3.5 px-6 rounded-full font-bold text-sm shadow-kawaii transition-all flex items-center justify-center gap-2 ${
                    product.stock === 0
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-brand-oilGreen text-white hover:bg-brand-oilGreen-600 hover:scale-[1.02]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" /> Added to Craft Bag!
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" /> Add to Shopping Bag
                    </>
                  )}
                </button>
              </div>

              {/* Assurance Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100 text-[11px] text-gray-500 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-brand-oilGreen" />
                  <span>24-48h MY Shipping</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-brand-oilGreen" />
                  <span>Food-Grade EVA</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RefreshCw className="w-4 h-4 text-brand-oilGreen" />
                  <span>7-Day Replacement</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-extrabold text-brand-charcoal">You Might Also Like 🎨</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
