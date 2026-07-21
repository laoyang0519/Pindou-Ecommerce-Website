import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AnnouncementBar from '../Components/Layouts/AnnouncementBar';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import ProductCard from '../Components/ProductCard';
import { Sparkles, Heart, Package, ShieldCheck, ArrowRight, Instagram } from 'lucide-react';

export default function Home({ heroBanners = [], categories = [], newProducts = [], recommendedProducts = [], clearanceProducts = [] }) {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title="呼啦の小铺 - Premium Perler Beads & Craft Supplies" />

      <AnnouncementBar />
      <Header categories={categories} />

      <main className="flex-1 space-y-16 pb-16">
        
        {/* 1. Hero Section Slider / Banners */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Main Featured Hero Banner */}
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-r from-brand-oilGreen-50 to-brand-pinkSalt-100 p-8 sm:p-12 flex flex-col justify-center border border-brand-pinkSalt-200 shadow-kawaii min-h-[380px]">
              <div className="max-w-md space-y-4 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-oilGreen text-white text-xs font-bold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-brand-pinkSalt animate-spin" /> New Arrival 2026
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-oilGreen-900 leading-tight">
                  Kawaii Perler Bead World ✨
                </h1>
                <p className="text-sm text-brand-charcoal/80 leading-relaxed font-medium">
                  Create custom keychains, pixel art & cute coasters with over 72+ soft pastel shades of food-grade 2.6mm & 5mm fuse beads.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/category/perler-beads"
                    className="inline-flex items-center gap-2 bg-brand-oilGreen text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-brand-oilGreen-600 transition-all hover:scale-105"
                  >
                    Shop Bead Sets <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/category/craft-tools"
                    className="inline-flex items-center gap-2 bg-white text-brand-oilGreen border border-brand-oilGreen px-5 py-3 rounded-full font-bold text-sm hover:bg-brand-pinkSalt-100 transition-all"
                  >
                    Craft Tools
                  </Link>
                </div>
              </div>

              {/* Decorative background craft image */}
              <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 lg:opacity-40 pointer-events-none overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
                  alt="Perler Beads"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Secondary Side Banners */}
            <div className="space-y-6 flex flex-col justify-between">
              
              <div className="bg-brand-pinkSalt-100 rounded-3xl p-6 border border-brand-pinkSalt-200 flex flex-col justify-between h-full relative overflow-hidden group">
                <div className="space-y-2 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-oilGreen">Starter Bundles</span>
                  <h3 className="text-xl font-bold text-brand-charcoal">Interlocking Pegboards</h3>
                  <p className="text-xs text-gray-600">Combine multiple square boards for big pixel art project creations!</p>
                </div>
                <Link
                  href="/category/ironing-pegboards"
                  className="mt-4 text-xs font-bold text-brand-oilGreen flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Explore Pegboards <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="bg-brand-oilGreen-50 rounded-3xl p-6 border border-brand-oilGreen-200 flex flex-col justify-between h-full relative overflow-hidden group">
                <div className="space-y-2 z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-pinkSalt-700">Special Discount</span>
                  <h3 className="text-xl font-bold text-brand-oilGreen-900">Clearance Craft Sale 🔥</h3>
                  <p className="text-xs text-gray-600">Save up to 40% OFF on candy lobster keychains and accessory findings.</p>
                </div>
                <Link
                  href="/category?tag=CLEARANCE"
                  className="mt-4 text-xs font-bold text-brand-oilGreen flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  View Clearance Deals <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* 2. Brand Value Highlights Bar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-brand-pinkSalt-200 p-6 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-pinkSalt-100 text-brand-oilGreen flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-charcoal">Non-Toxic EVA Beads</h4>
                <p className="text-[11px] text-gray-500">100% safe & durable fuse beads</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-oilGreen-100 text-brand-oilGreen flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-charcoal">Ready Stock Malaysia</h4>
                <p className="text-[11px] text-gray-500">Local dispatch from KL</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-pinkSalt-100 text-brand-oilGreen flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-charcoal">Free Gift with RM50</h4>
                <p className="text-[11px] text-gray-500">Includes ironing paper & tweezers</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-oilGreen-100 text-brand-oilGreen flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-charcoal">Loved by 10k+ Crafters</h4>
                <p className="text-[11px] text-gray-500">5-star customer feedback</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Category Grid Selector */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold text-brand-oilGreen uppercase tracking-wider">Explore Collections</span>
              <h2 className="text-2xl font-extrabold text-brand-charcoal">Shop by Category</h2>
            </div>
            <Link href="/category" className="text-xs font-bold text-brand-oilGreen hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category?category=${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden border border-brand-pinkSalt-200 bg-white p-4 shadow-sm hover:shadow-softHover transition-all text-center flex flex-col items-center space-y-3"
              >
                <div className="w-20 h-20 rounded-full bg-brand-pinkSalt-100 overflow-hidden border-2 border-brand-oilGreen p-1 group-hover:scale-110 transition-transform">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-xs font-bold text-brand-charcoal group-hover:text-brand-oilGreen transition-colors">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. Collection Grid 1: "NEW NEW NEW" */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Fresh in Stock</span>
              <h2 className="text-2xl font-extrabold text-brand-charcoal flex items-center gap-2">
                NEW NEW NEW ✨
              </h2>
            </div>
            <Link href="/category?tag=NEW" className="text-xs font-bold text-brand-oilGreen hover:underline">
              See All New Arrivals →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* 5. Collection Grid 2: "RECOMMENDED" */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-oilGreen-50 rounded-3xl p-8 border border-brand-oilGreen-200">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="text-xs font-bold text-brand-oilGreen uppercase tracking-wider">Handpicked Favorites</span>
                <h2 className="text-2xl font-extrabold text-brand-oilGreen-900">
                  RECOMMENDED FOR CRAFTERS 🎨
                </h2>
              </div>
              <Link href="/category" className="text-xs font-bold text-brand-oilGreen hover:underline">
                Explore Full Store →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* 6. Brand Identity Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-brand-pinkSalt-200 p-8 sm:p-12 shadow-kawaii grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-extrabold text-brand-oilGreen uppercase tracking-wider bg-brand-pinkSalt-100 px-3 py-1 rounded-full">
                About 呼啦の小铺
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-charcoal">
                Crafting Small Happiness, One Pixel Bead at a Time.
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Founded in Kuala Lumpur, 呼啦の小铺 was born out of a passion for vibrant pixel art and therapeutic DIY crafting. We source top-tier non-toxic EVA fuse beads to ensure bright color consistency, smooth melting, and sturdy finished keychains.
              </p>
              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center gap-2 bg-brand-oilGreen text-white px-5 py-2.5 rounded-full font-bold text-xs shadow hover:bg-brand-oilGreen-600 transition-colors"
                >
                  Read Our Full Story →
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-md border-2 border-brand-pinkSalt-300">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
                alt="Crafting session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 7. Instagram / Social Feed Teaser */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div>
            <span className="text-xs font-bold text-brand-oilGreen uppercase tracking-wider flex items-center justify-center gap-1">
              <Instagram className="w-4 h-4 text-brand-pinkSalt-700" /> Follow Us @cozyhulla
            </span>
            <h2 className="text-2xl font-extrabold text-brand-charcoal mt-1">Join Our Craft Community 📸</h2>
            <p className="text-xs text-gray-500">Tag #Cozyhulla on Instagram to get featured on our page!</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden border border-brand-pinkSalt-200 shadow-sm group">
              <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80" alt="Instagram 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-brand-pinkSalt-200 shadow-sm group">
              <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80" alt="Instagram 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-brand-pinkSalt-200 shadow-sm group">
              <img src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=400&q=80" alt="Instagram 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden border border-brand-pinkSalt-200 shadow-sm group">
              <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=400&q=80" alt="Instagram 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
