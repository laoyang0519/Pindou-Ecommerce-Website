import React from 'react';
import { Link } from '@inertiajs/react';
import { Heart, MapPin, Mail, Phone, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-gray-300 pt-16 pb-8 border-t-4 border-brand-oilGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: About Summary & Brand Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Hulla Perler Beads & More"
                className="h-16 w-auto bg-white p-1.5 rounded-full border-2 border-brand-pinkSalt shadow-sm"
              />
              <span className="font-extrabold text-xl text-white font-sans tracking-tight">
                Hulla Pindou
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Hulla Pindou (拼豆小铺) is your #1 craft destination for high-grade 2.6mm & 5mm food-grade EVA perler beads, interlocking pegboards, precision craft tools, and DIY accessories in Malaysia.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/hulla.pindou"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-brand-pinkSalt hover:text-brand-oilGreen-900 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Support"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Shop */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="hover:text-brand-pinkSalt transition-colors">Home Storefront</Link>
              </li>
              <li>
                <Link href="/category/perler-beads" className="hover:text-brand-pinkSalt transition-colors">Perler Beads Collection (拼豆)</Link>
              </li>
              <li>
                <Link href="/category/craft-tools" className="hover:text-brand-pinkSalt transition-colors">Tweezers & Craft Tools (辅料工具)</Link>
              </li>
              <li>
                <Link href="/category/ironing-pegboards" className="hover:text-brand-pinkSalt transition-colors">Pegboards & Ironing Paper (烫板烫纸)</Link>
              </li>
              <li>
                <Link href="/category/keychain-accessories" className="hover:text-brand-pinkSalt transition-colors">Keychain Accessories (挂件)</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care & T&C */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              Customer Care & Policy
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about-us" className="hover:text-brand-pinkSalt transition-colors">About Our Brand</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-brand-pinkSalt transition-colors">
                  After-Sales T&C (关于售后)
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-brand-pinkSalt transition-colors">Shipping & Delivery Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-brand-pinkSalt transition-colors">Returns & Exchange Terms</Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-pinkSalt transition-colors">Help Center & FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              Store Location & Contact
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-brand-pinkSalt flex-shrink-0 mt-0.5" />
              <span>Unit 12-08, Creative Craft Hub, Bukit Bintang, 55100 Kuala Lumpur, Malaysia</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-400">
              <Mail className="w-4 h-4 text-brand-pinkSalt flex-shrink-0" />
              <span>hello@hullapindou.com</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-400">
              <Phone className="w-4 h-4 text-brand-pinkSalt flex-shrink-0" />
              <span>+60 12-345 6789 (WhatsApp Support)</span>
            </div>

            {/* Payment Methods */}
            <div className="pt-3">
              <span className="text-[11px] uppercase font-bold text-gray-400 block mb-2">Accepted Payment Methods</span>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-800 text-brand-pinkSalt text-[10px] font-bold px-2 py-1 rounded border border-gray-700">FPX Online Banking</span>
                <span className="bg-gray-800 text-brand-pinkSalt text-[10px] font-bold px-2 py-1 rounded border border-gray-700">Touch 'n Go E-Wallet</span>
                <span className="bg-gray-800 text-brand-pinkSalt text-[10px] font-bold px-2 py-1 rounded border border-gray-700">Visa / Mastercard</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>© 2026 Hulla Pindou (拼豆小铺). All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-brand-pinkSalt fill-brand-pinkSalt" /> for craft enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
}
