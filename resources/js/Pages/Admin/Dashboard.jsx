import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Users, Package, Layers, AlertTriangle, ArrowRight, ShieldCheck, Home } from 'lucide-react';

export default function AdminDashboard({ stats = {} }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      <Head title="Admin Dashboard - Hulla Pindou" />

      {/* Admin Top Navbar */}
      <header className="bg-brand-charcoal text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand-pinkSalt-200 border border-brand-oilGreen flex items-center justify-center font-bold text-brand-oilGreen-800 text-base">
            豆
          </div>
          <span className="font-extrabold text-lg tracking-tight">Hulla Pindou Back-Office</span>
          <span className="bg-brand-oilGreen text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">Admin Portal</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <Link href="/" className="flex items-center gap-1 hover:text-brand-pinkSalt transition-colors">
            <Home className="w-4 h-4" /> Customer Storefront
          </Link>
          <Link href="/logout" method="post" as="button" className="bg-rose-600 px-3 py-1.5 rounded-lg hover:bg-rose-700">
            Logout
          </Link>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex gap-3 text-xs font-bold border-b border-gray-300 pb-3">
          <Link href="/admin/dashboard" className="bg-brand-oilGreen text-white px-4 py-2 rounded-lg shadow-sm">
            Overview Stats
          </Link>
          <Link href="/admin/products" className="bg-white text-gray-700 hover:bg-brand-pinkSalt-100 px-4 py-2 rounded-lg border border-gray-200">
            Product Management
          </Link>
          <Link href="/admin/categories" className="bg-white text-gray-700 hover:bg-brand-pinkSalt-100 px-4 py-2 rounded-lg border border-gray-200">
            Category Management
          </Link>
          <Link href="/admin/users" className="bg-white text-gray-700 hover:bg-brand-pinkSalt-100 px-4 py-2 rounded-lg border border-gray-200">
            User Roles & Registration
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase">Total Users</span>
              <h3 className="text-2xl font-extrabold text-brand-charcoal mt-1">{stats.total_users || 0}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-brand-pinkSalt-100 text-brand-oilGreen flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase">Catalog Products</span>
              <h3 className="text-2xl font-extrabold text-brand-charcoal mt-1">{stats.total_products || 0}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-brand-oilGreen-100 text-brand-oilGreen flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-gray-400 uppercase">Active Categories</span>
              <h3 className="text-2xl font-extrabold text-brand-charcoal mt-1">{stats.total_categories || 0}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-brand-pinkSalt-100 text-brand-oilGreen flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-rose-500 uppercase">Low Stock Alert</span>
              <h3 className="text-2xl font-extrabold text-rose-600 mt-1">{stats.low_stock_products || 0}</h3>
            </div>
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
          </div>

        </div>

        {/* Quick Shortcut Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/admin/products" className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-brand-oilGreen transition-all group">
            <h4 className="font-bold text-brand-charcoal group-hover:text-brand-oilGreen">Manage Products & Stock →</h4>
            <p className="text-xs text-gray-500 mt-1">Add new perler bead sets, edit prices in MYR, and upload product images.</p>
          </Link>

          <Link href="/admin/categories" className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-brand-oilGreen transition-all group">
            <h4 className="font-bold text-brand-charcoal group-hover:text-brand-oilGreen">Manage Categories →</h4>
            <p className="text-xs text-gray-500 mt-1">Organize perler beads, craft tools, pegboards, and keychain findings.</p>
          </Link>

          <Link href="/admin/users" className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-brand-oilGreen transition-all group">
            <h4 className="font-bold text-brand-charcoal group-hover:text-brand-oilGreen">User Role Permissions →</h4>
            <p className="text-xs text-gray-500 mt-1">View user accounts, registration dates, and promote admin privileges.</p>
          </Link>
        </div>

      </div>
    </div>
  );
}
