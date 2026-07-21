import React from 'react';
import { Link } from '@inertiajs/react';
import { Heart, Mail, Phone, Instagram, MessageCircle } from 'lucide-react';

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
                alt="Hulla Pindou Logo"
                className="w-10 h-10 object-contain rounded-full bg-white p-0.5"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="text-xl font-bold text-white tracking-wide">
                呼啦の小铺 <span className="text-xs text-brand-pinkSalt font-normal">(Perler Beads & Crafts)</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Your Malaysian home for premium 2.6mm & 5mm perler fuse beads, accessories, pegboards, and creative DIY craft kits.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-brand-pinkSalt hover:bg-brand-oilGreen hover:text-white transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/cozyhulla" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-brand-pinkSalt-100 flex items-center justify-center text-brand-oilGreen hover:bg-brand-oilGreen hover:text-white transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              Quick Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-brand-pinkSalt transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/category/perler-beads" className="hover:text-brand-pinkSalt transition-colors">Perler Beads (拼豆)</Link>
              </li>
              <li>
                <Link href="/category/craft-tools" className="hover:text-brand-pinkSalt transition-colors">DIY Craft Kits & Tools</Link>
              </li>
              <li>
                <Link href="/category/keychain-accessories" className="hover:text-brand-pinkSalt transition-colors">Keychain Accessories</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-brand-pinkSalt transition-colors">About Hulla Pindou</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-us" className="hover:text-brand-pinkSalt transition-colors">About Us (关于我们)</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-brand-pinkSalt transition-colors">
                  Custom Orders & After-Sales T&C (接单须知与售后)
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-pinkSalt transition-colors">Contact Us & FAQ (联系我们与常见问题)</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              Contact Us
            </h4>
            <div className="flex items-center gap-2.5 text-xs text-gray-400">
              <Mail className="w-4 h-4 text-brand-pinkSalt flex-shrink-0" />
              <span>hullaaaa167@gmail.com</span>
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
          <p>© 2026 呼啦の小铺. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-brand-pinkSalt fill-brand-pinkSalt" /> for craft enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
}
