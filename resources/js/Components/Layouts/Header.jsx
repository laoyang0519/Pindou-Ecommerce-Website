import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { ShoppingBag, Search, User, ChevronDown, Menu, X, ShieldCheck } from 'lucide-react';
import CartDrawer from './CartDrawer';

export default function Header({ categories = [] }) {
  const { auth } = usePage().props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/category?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-pinkSalt-200 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-brand-charcoal hover:bg-brand-pinkSalt-100 transition-colors"
                aria-label="Toggle Navigation"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Official Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <img
                  src="/images/logo.png"
                  alt="Hulla Perler Beads & More Logo"
                  className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                  onError={(e) => {
                    // Fallback to stylized text badge if image fails
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center gap-2">
                  <div className="flex flex-col">
                    <span className="font-extrabold text-2xl tracking-tight text-brand-oilGreen font-sans">
                      呼啦の小铺
                    </span>
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-brand-oilGreen-600 -mt-1">
                      Perler Beads & Craft Store
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links & Category Dropdown */}
            <nav className="hidden lg:flex items-center gap-8 font-bold text-xs uppercase tracking-wider text-brand-charcoal">
              <Link href="/" className="hover:text-brand-oilGreen transition-colors">
                Home
              </Link>

              {/* Category Dropdown */}
              <div className="relative" onMouseEnter={() => setIsCategoryOpen(true)} onMouseLeave={() => setIsCategoryOpen(false)}>
                <button 
                  className="flex items-center gap-1 hover:text-brand-oilGreen py-2 transition-colors"
                >
                  Categories <ChevronDown className="w-3.5 h-3.5 text-brand-oilGreen" />
                </button>

                {isCategoryOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-kawaii border border-brand-pinkSalt-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/category"
                      className="block px-4 py-2 text-xs font-extrabold text-brand-oilGreen uppercase tracking-wider hover:bg-brand-pinkSalt-50 border-b border-gray-100"
                    >
                      All Craft Supplies 🎀
                    </Link>
                    {categories.length > 0 ? (
                      categories.map((cat) => (
                        <Link
                          key={cat.id}
                          href={`/category?category=${cat.slug}`}
                          className="block px-4 py-2.5 text-xs font-semibold hover:bg-brand-pinkSalt-100 hover:text-brand-oilGreen-800 transition-colors normal-case"
                        >
                          {cat.name}
                        </Link>
                      ))
                    ) : (
                      <>
                        <Link href="/category?category=perler-beads" className="block px-4 py-2.5 text-xs font-semibold hover:bg-brand-pinkSalt-100 normal-case">Perler Beads 拼豆</Link>
                        <Link href="/category?category=craft-tools" className="block px-4 py-2.5 text-xs font-semibold hover:bg-brand-pinkSalt-100 normal-case">Craft Tools & Kits 辅料工具</Link>
                        <Link href="/category?category=keychain-accessories" className="block px-4 py-2.5 text-xs font-semibold hover:bg-brand-pinkSalt-100 normal-case">Keychain & Accessories 挂件饰品</Link>
                        <Link href="/category?category=ironing-pegboards" className="block px-4 py-2.5 text-xs font-semibold hover:bg-brand-pinkSalt-100 normal-case">Ironing & Pegboards 烫斗烫纸</Link>
                      </>
                    )}
                  </div>
                )}
              </div>

              <Link href="/about-us" className="hover:text-brand-oilGreen transition-colors">
                About Us
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-brand-oilGreen transition-colors">
                After-Sales T&C (关于售后)
              </Link>
              <Link href="/contact-us" className="hover:text-brand-oilGreen transition-colors">
                Contact
              </Link>
            </nav>

            {/* Search Input Bar */}
            <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-xs relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search perler beads, pegboards..."
                className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-full py-2 pl-4 pr-10 text-xs focus:ring-2 focus:ring-brand-oilGreen focus:border-transparent transition-all placeholder:text-gray-400"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-oilGreen hover:text-brand-oilGreen-700">
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* User Account & Cart Controls */}
            <div className="flex items-center gap-3">
              {auth?.user ? (
                <div className="flex items-center gap-2">
                  {auth.user.role === 'admin' && (
                    <Link
                      href="/admin/dashboard"
                      className="hidden sm:flex items-center gap-1 text-xs bg-brand-oilGreen text-white px-3 py-1.5 rounded-full font-bold shadow-sm hover:bg-brand-oilGreen-600 transition-all"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" /> Admin Panel
                    </Link>
                  )}
                  <Link
                    href="/logout"
                    method="post"
                    as="button"
                    className="p-2 rounded-full hover:bg-brand-pinkSalt-100 text-brand-charcoal transition-colors"
                    title={`Logged in as @${auth.user.username}`}
                  >
                    <User className="w-5 h-5 text-brand-oilGreen" />
                  </Link>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-oilGreen border border-brand-oilGreen px-3.5 py-1.5 rounded-full hover:bg-brand-oilGreen hover:text-white transition-all shadow-sm"
                >
                  <User className="w-3.5 h-3.5" /> Login / Join
                </Link>
              )}

              {/* Cart Drawer Trigger Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full bg-brand-pinkSalt-200 text-brand-oilGreen hover:bg-brand-pinkSalt-300 transition-all shadow-sm group"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-oilGreen text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-pinkSalt-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <form onSubmit={handleSearchSubmit} className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-full py-2 pl-4 pr-10 text-xs"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-oilGreen">
                <Search className="w-4 h-4" />
              </button>
            </form>

            <Link href="/" className="block py-2 font-bold text-xs uppercase text-brand-charcoal hover:text-brand-oilGreen">Home</Link>
            <Link href="/category" className="block py-2 font-bold text-xs uppercase text-brand-charcoal hover:text-brand-oilGreen">All Categories</Link>
            <Link href="/about-us" className="block py-2 font-bold text-xs uppercase text-brand-charcoal hover:text-brand-oilGreen">About Us</Link>
            <Link href="/terms-and-conditions" className="block py-2 font-bold text-xs uppercase text-brand-charcoal hover:text-brand-oilGreen">After-Sales T&C (关于售后)</Link>
            <Link href="/contact-us" className="block py-2 font-bold text-xs uppercase text-brand-charcoal hover:text-brand-oilGreen">Contact Us</Link>
          </div>
        )}
      </header>

      {/* Cart Slide-Over Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onCountChange={setCartCount} />
    </>
  );
}
