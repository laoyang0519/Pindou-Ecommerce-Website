import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AnnouncementBar from '../Components/Layouts/AnnouncementBar';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import ProductCard from '../Components/ProductCard';
import { SlidersHorizontal, ArrowUpDown, Sparkles } from 'lucide-react';

export default function Category({ categories = [], currentCategory = null, products = { data: [] }, filters = {} }) {
  const [selectedSort, setSelectedSort] = useState(filters.sort === Array.prototype.sort ? 'latest' : (filters.sort || 'latest'));
  const [selectedTag, setSelectedTag] = useState(filters.tag || '');

  const productList = Array.isArray(products)
    ? products
    : (Array.isArray(products?.data) ? products.data : []);

  const handleFilterChange = (tagVal, sortVal) => {
    const params = new URLSearchParams();
    if (currentCategory) params.append('category', currentCategory.slug);
    if (tagVal) params.append('tag', tagVal);
    if (sortVal) params.append('sort', sortVal);
    window.location.href = `/category?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title={currentCategory ? `${currentCategory.name} - Hulla Pindou` : "All Craft Products - Hulla Pindou"} />

      <AnnouncementBar />
      <Header categories={categories} />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Category Header Banner */}
        <div className="bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-bold text-brand-oilGreen uppercase tracking-wider">
              {currentCategory ? "Category Collection" : "All Products"}
            </span>
            <h1 className="text-3xl font-extrabold text-brand-charcoal mt-1">
              {currentCategory ? currentCategory.name : "Explore All Craft Supplies ✨"}
            </h1>
            <p className="text-xs text-gray-500 mt-1 max-w-xl">
              {currentCategory ? currentCategory.description : "Browse our full range of 2.6mm & 5mm perler beads, pegboards, precision tweezers, and craft accessories."}
            </p>
          </div>

          <div className="text-xs font-bold text-brand-oilGreen bg-brand-pinkSalt-100 px-4 py-2 rounded-full">
            Showing {productList.length} items
          </div>
        </div>

        {/* Filter Bar & Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-white p-4 rounded-2xl border border-brand-pinkSalt-200 shadow-sm text-xs">
          
          {/* Categories Quick Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/category"
              className={`px-3.5 py-1.5 rounded-full font-bold transition-all ${
                !currentCategory ? 'bg-brand-oilGreen text-white' : 'bg-brand-cream text-brand-charcoal hover:bg-brand-pinkSalt-100'
              }`}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/category?category=${cat.slug}`}
                className={`px-3.5 py-1.5 rounded-full font-bold transition-all ${
                  currentCategory?.id === cat.id ? 'bg-brand-oilGreen text-white' : 'bg-brand-cream text-brand-charcoal hover:bg-brand-pinkSalt-100'
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Tag & Sort Selectors */}
          <div className="flex items-center gap-3">
            {/* Tag selector */}
            <div className="flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-oilGreen" />
              <select
                value={selectedTag}
                onChange={(e) => {
                  setSelectedTag(e.target.value);
                  handleFilterChange(e.target.value, selectedSort);
                }}
                className="bg-brand-cream border border-brand-pinkSalt-300 rounded-lg py-1.5 px-2 text-xs font-semibold focus:ring-brand-oilGreen"
              >
                <option value="">All Tags</option>
                <option value="NEW">New Arrivals</option>
                <option value="BESTSELLER">Bestsellers</option>
                <option value="CLEARANCE">Clearance</option>
                <option value="RECOMMENDED">Recommended</option>
              </select>
            </div>

            {/* Sort selector */}
            <div className="flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5 text-brand-oilGreen" />
              <select
                value={selectedSort}
                onChange={(e) => {
                  setSelectedSort(e.target.value);
                  handleFilterChange(selectedTag, e.target.value);
                }}
                className="bg-brand-cream border border-brand-pinkSalt-300 rounded-lg py-1.5 px-2 text-xs font-semibold focus:ring-brand-oilGreen"
              >
                <option value="latest">Sort: Newest First</option>
                <option value="price_low">Sort: Price Low → High</option>
                <option value="price_high">Sort: Price High → Low</option>
              </select>
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {productList.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-16 text-center space-y-3 border border-brand-pinkSalt-200">
            <div className="w-16 h-16 bg-brand-pinkSalt-100 rounded-full flex items-center justify-center mx-auto text-brand-oilGreen">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-brand-charcoal">No craft products found</h3>
            <p className="text-xs text-gray-500">Try adjusting your filters or category selection.</p>
            <Link href="/category" className="inline-block mt-2 text-xs font-bold bg-brand-oilGreen text-white px-4 py-2 rounded-full">
              Reset Filters
            </Link>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
