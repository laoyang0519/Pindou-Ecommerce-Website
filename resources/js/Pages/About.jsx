import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AnnouncementBar from '../Components/Layouts/AnnouncementBar';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import { Heart, Sparkles, ShieldCheck, Smile, Award } from 'lucide-react';

export default function About({ brandInfo }) {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title="About Us - Hulla Pindou (拼豆小铺)" />

      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Hero About Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-pinkSalt-200 shadow-kawaii text-center space-y-4 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-pinkSalt-100 text-brand-oilGreen text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> About Hulla Pindou (拼豆小铺)
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal leading-tight">
            Bringing Pixel Art Dreams to Life, Bead by Bead. ✨
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
            Hulla Pindou is a Malaysian craft brand dedicated to perler bead lovers, DIY creators, and pixel art enthusiasts. We curate premium 2.6mm & 5mm food-grade EVA fuse beads in over 72 vibrant pastel colors.
          </p>
        </div>

        {/* Our Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-sm">
            <h2 className="text-2xl font-extrabold text-brand-oilGreen-900">Why Crafters Choose Hulla Pindou?</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Crafting should be therapeutic and joyful. Unlike generic beads that warp easily or produce uneven melts under heat, our perler beads are strictly selected for uniform height, consistent inner diameter, and non-toxic EVA composition.
            </p>
            <ul className="space-y-3 text-xs font-semibold text-brand-charcoal pt-2">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Non-Toxic Food Grade EVA Polymer</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>72+ Soft Kawaii Colors (Macaron & Jelly Series)</span>
              </li>
              <li className="flex items-center gap-2">
                <Smile className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Precision Pegboards & Heat-Resistant Ironing Paper</span>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-md border-2 border-brand-pinkSalt-200 aspect-video">
            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80"
              alt="Hulla Pindou Beads"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Brand Values */}
        <div className="bg-brand-oilGreen-50 rounded-3xl p-8 border border-brand-oilGreen-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-2 bg-white p-6 rounded-2xl border border-brand-oilGreen-100 shadow-sm">
            <div className="w-12 h-12 bg-brand-pinkSalt-100 rounded-full flex items-center justify-center mx-auto text-brand-oilGreen font-extrabold text-xl">
              🎨
            </div>
            <h3 className="text-sm font-bold text-brand-charcoal">Vibrant Creativity</h3>
            <p className="text-xs text-gray-500">Unleash your imagination with endless pixel combinations.</p>
          </div>

          <div className="space-y-2 bg-white p-6 rounded-2xl border border-brand-oilGreen-100 shadow-sm">
            <div className="w-12 h-12 bg-brand-pinkSalt-100 rounded-full flex items-center justify-center mx-auto text-brand-oilGreen font-extrabold text-xl">
              💖
            </div>
            <h3 className="text-sm font-bold text-brand-charcoal">Quality Assured</h3>
            <p className="text-xs text-gray-500">Smooth melting without harsh chemical odors.</p>
          </div>

          <div className="space-y-2 bg-white p-6 rounded-2xl border border-brand-oilGreen-100 shadow-sm">
            <div className="w-12 h-12 bg-brand-pinkSalt-100 rounded-full flex items-center justify-center mx-auto text-brand-oilGreen font-extrabold text-xl">
              🚀
            </div>
            <h3 className="text-sm font-bold text-brand-charcoal">Fast Local Shipping</h3>
            <p className="text-xs text-gray-500">Packed securely and shipped directly from Kuala Lumpur.</p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
