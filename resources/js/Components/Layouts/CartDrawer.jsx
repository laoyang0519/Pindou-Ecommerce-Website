import React, { useEffect, useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import axios from 'axios';

export default function CartDrawer({ isOpen, onClose, onCountChange }) {
  const [cartData, setCartData] = useState({ items: [] });
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/cart');
      setCartData(res.data.cart || { items: [] });
      setTotal(res.data.total || 0);
      if (onCountChange) {
        onCountChange(res.data.count || 0);
      }
    } catch (err) {
      console.error("Cart fetch error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchCart();
    }
  }, [isOpen]);

  const updateQuantity = async (itemId, currentQty, change) => {
    const newQty = currentQty + change;
    if (newQty < 1) return;
    try {
      await axios.patch(`/cart/update/${itemId}`, { quantity: newQty });
      fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  const removeItem = async (itemId) => {
    try {
      await axios.delete(`/cart/remove/${itemId}`);
      fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 bg-brand-oilGreen text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-pinkSalt" />
              <h2 className="font-bold text-lg">Your Shopping Bag</h2>
            </div>
            <button 
              onClick={onClose} 
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {loading ? (
              <div className="text-center py-12 text-gray-500 font-medium">Loading your craft bag... 🎨</div>
            ) : !cartData.items || cartData.items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 bg-brand-pinkSalt-100 rounded-full flex items-center justify-center mx-auto text-brand-oilGreen">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-gray-500 font-semibold">Your shopping bag is empty!</p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs font-bold bg-brand-oilGreen text-white px-4 py-2 rounded-full hover:bg-brand-oilGreen-600 transition-colors"
                >
                  Start Crafting Now
                </button>
              </div>
            ) : (
              cartData.items.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 border border-brand-pinkSalt-200 rounded-xl bg-brand-cream/50 items-center">
                  <img
                    src={item.product?.primary_image?.image_path || item.product?.image_url || 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=200&q=80'}
                    alt={item.product?.title}
                    className="w-16 h-16 object-cover rounded-lg border border-brand-pinkSalt-300"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-brand-charcoal truncate">{item.product?.title}</h4>
                    <p className="text-xs font-extrabold text-brand-oilGreen mt-0.5">
                      RM {parseFloat(item.product?.price || 0).toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-gray-300 rounded-full bg-white px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity, -1)}
                          className="text-gray-600 hover:text-brand-oilGreen"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity, 1)}
                          className="text-gray-600 hover:text-brand-oilGreen"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {cartData.items && cartData.items.length > 0 && (
            <div className="p-6 border-t border-brand-pinkSalt-200 bg-brand-cream/80 space-y-4">
              <div className="flex justify-between items-center text-sm font-bold text-brand-charcoal">
                <span>Subtotal</span>
                <span className="text-xl font-extrabold text-brand-oilGreen">
                  RM {parseFloat(total).toFixed(2)}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 text-center">Taxes & shipping calculated at checkout</p>
              
              <button 
                onClick={() => alert("Checkout integration point: Directing to secure payment gateway.")}
                className="w-full bg-brand-oilGreen text-white font-bold py-3 px-4 rounded-xl shadow-kawaii hover:bg-brand-oilGreen-600 transition-all flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
