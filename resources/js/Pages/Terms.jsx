import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AnnouncementBar from '../Components/Layouts/AnnouncementBar';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import { ShieldCheck, Truck, RefreshCw, AlertCircle, HelpCircle } from 'lucide-react';

export default function Terms({ lastUpdated }) {
  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title="After-Sales T&C (关于售后) - Hulla Pindou" />

      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Page Header */}
        <div className="bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-sm space-y-2">
          <span className="text-xs font-bold text-brand-oilGreen uppercase tracking-wider">
            Customer Assurance & Policy
          </span>
          <h1 className="text-3xl font-extrabold text-brand-charcoal">
            After-Sales Terms & Conditions (关于售后与退换货规则)
          </h1>
          <p className="text-xs text-gray-500">
            Last Updated: {lastUpdated || 'July 2026'} • Hulla Pindou (拼豆小铺) Customer Care Team
          </p>
        </div>

        {/* Accordion Policy Sections */}
        <div className="space-y-6">
          
          {/* Section 1: Damaged & Defective Items (漏发/损坏赔偿) */}
          <div className="bg-white rounded-2xl p-6 border border-brand-pinkSalt-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-brand-oilGreen font-bold text-base">
              <AlertCircle className="w-5 h-5 text-brand-pinkSalt-700" />
              <h2>1. Damaged, Missing, or Defective Items (包裹破损 / 漏发补发规则)</h2>
            </div>
            <div className="text-xs text-gray-600 space-y-2 leading-relaxed pl-7">
              <p>
                We strive to inspect every order thoroughly before dispatch. If your package arrives damaged, or if any items/colors are missing:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-gray-700">
                <li>Please take a photo or unboxing video of the parcel label and affected products within <strong>48 hours</strong> of receipt.</li>
                <li>Contact our customer service team via WhatsApp at <a href="https://wa.me/60123456789" className="text-brand-oilGreen font-bold underline">+60 12-345 6789</a> or email <strong>hello@hullapindou.com</strong>.</li>
                <li>We will process a 100% free replacement shipment or full refund for the affected item within 24 hours.</li>
              </ul>
            </div>
          </div>

          {/* Section 2: Shipping & Delivery Times (物流与发货) */}
          <div className="bg-white rounded-2xl p-6 border border-brand-pinkSalt-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-brand-oilGreen font-bold text-base">
              <Truck className="w-5 h-5 text-brand-oilGreen" />
              <h2>2. Shipping & Delivery Timeline (发货时间与配送时效)</h2>
            </div>
            <div className="text-xs text-gray-600 space-y-2 leading-relaxed pl-7">
              <p>
                All orders are packed securely with bubble wrap and dispatched from our Kuala Lumpur warehouse.
              </p>
              <ul className="list-disc pl-4 space-y-1 text-gray-700">
                <li><strong>West Malaysia (Peninsular):</strong> 1 - 3 working days via PosLaju / J&T / NinjaVan.</li>
                <li><strong>East Malaysia (Sabah & Sarawak):</strong> 3 - 5 working days.</li>
                <li>Orders placed before 2:00 PM (Mon-Fri) are dispatched on the same business day.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Return & Exchange Policy (7天退换货) */}
          <div className="bg-white rounded-2xl p-6 border border-brand-pinkSalt-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-brand-oilGreen font-bold text-base">
              <RefreshCw className="w-5 h-5 text-emerald-600" />
              <h2>3. 7-Day Return & Exchange Policy (7天无理由退换货条件)</h2>
            </div>
            <div className="text-xs text-gray-600 space-y-2 leading-relaxed pl-7">
              <p>
                If you change your mind, unopened perler bead boxes or craft tools in their original factory seal can be exchanged within 7 days.
              </p>
              <ul className="list-disc pl-4 space-y-1 text-gray-700">
                <li>Products must remain sealed, unused, and in resalable condition.</li>
                <li>Return postage costs for change-of-mind exchanges are borne by the buyer.</li>
              </ul>
            </div>
          </div>

          {/* Section 4: Ironing & Bead Safety Notice (拼豆烫斗使用说明) */}
          <div className="bg-white rounded-2xl p-6 border border-brand-pinkSalt-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-brand-oilGreen font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <h2>4. Ironing & Craft Safety Guidelines (拼豆熨烫与安全提示)</h2>
            </div>
            <div className="text-xs text-gray-600 space-y-2 leading-relaxed pl-7">
              <p>
                Perler beads require low-to-medium heat application with ironing paper:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-gray-700">
                <li>Always use our heat-resistant ironing paper or teflon foil between the iron and beads to avoid melting onto the iron plate.</li>
                <li>Children under 8 years old must be supervised by an adult when operating heating irons.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Customer Support Redirect */}
        <div className="bg-brand-oilGreen-50 rounded-3xl p-8 border border-brand-oilGreen-200 text-center space-y-3">
          <HelpCircle className="w-8 h-8 text-brand-oilGreen mx-auto" />
          <h3 className="text-lg font-bold text-brand-charcoal">Have Questions About Your Order?</h3>
          <p className="text-xs text-gray-600">Our customer care representatives are ready to assist you on WhatsApp!</p>
          <a
            href="https://wa.me/60123456789?text=Hi%20Hulla%20Pindou,%20I%20have%20an%20after-sales%20inquiry."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-brand-oilGreen text-white px-6 py-2.5 rounded-full font-bold text-xs shadow hover:bg-brand-oilGreen-600 transition-colors"
          >
            Chat with Customer Support on WhatsApp
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
}
