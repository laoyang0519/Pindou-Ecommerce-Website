import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Trash2, Edit, Package } from 'lucide-react';

export default function ProductsIndex({ products = { data: [] }, categories = [] }) {
  const [showModal, setShowModal] = useState(false);
  const { data, setData, post, reset, delete: destroy } = useForm({
    title: '',
    sku: '',
    category_id: categories[0]?.id || 1,
    price: '',
    compare_at_price: '',
    stock: 10,
    description: '',
    status: 'published',
    tags: ['NEW'],
    images: ['https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/products', {
      onSuccess: () => {
        reset();
        setShowModal(false);
      },
    });
  };

  const handleDelete = (id) => {
    if (confirm("Delete this product from catalog?")) {
      destroy(`/admin/products/${id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-xs">
      <Head title="Product Catalog - Admin Portal" />

      <header className="bg-brand-charcoal text-white px-6 py-4 flex items-center justify-between shadow-md">
        <span className="font-extrabold text-lg">Product Catalog CRUD</span>
        <Link href="/admin/dashboard" className="text-xs hover:underline">
          ← Back to Dashboard
        </Link>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-brand-charcoal">All Catalog Products</h2>
            <button
              onClick={() => setShowModal(true)}
              className="bg-brand-oilGreen text-white font-bold px-4 py-2 rounded-xl flex items-center gap-1 shadow-sm hover:bg-brand-oilGreen-600"
            >
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>

          {/* Create Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50 overflow-y-auto">
              <div className="bg-white rounded-2xl p-6 max-w-lg w-full space-y-4 my-8">
                <h3 className="text-base font-bold text-brand-charcoal">Add New Product</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block font-bold mb-1">Product Title</label>
                    <input
                      type="text"
                      required
                      value={data.title}
                      onChange={(e) => setData('title', e.target.value)}
                      placeholder="e.g. 5mm Pastel Beads Kit"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold mb-1">SKU</label>
                      <input
                        type="text"
                        required
                        value={data.sku}
                        onChange={(e) => setData('sku', e.target.value)}
                        placeholder="HP-BD-001"
                        className="w-full border rounded-lg p-2"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Category</label>
                      <select
                        value={data.category_id}
                        onChange={(e) => setData('category_id', e.target.value)}
                        className="w-full border rounded-lg p-2"
                      >
                        {categories.map((c) => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold mb-1">Price (MYR)</label>
                      <input
                        type="number"
                        step="0.01"
                        required
                        value={data.price}
                        onChange={(e) => setData('price', e.target.value)}
                        placeholder="38.90"
                        className="w-full border rounded-lg p-2"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Compare Price</label>
                      <input
                        type="number"
                        step="0.01"
                        value={data.compare_at_price}
                        onChange={(e) => setData('compare_at_price', e.target.value)}
                        placeholder="48.00"
                        className="w-full border rounded-lg p-2"
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">Stock Qty</label>
                      <input
                        type="number"
                        required
                        value={data.stock}
                        onChange={(e) => setData('stock', e.target.value)}
                        className="w-full border rounded-lg p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Image URL</label>
                    <input
                      type="text"
                      value={data.images[0]}
                      onChange={(e) => setData('images', [e.target.value])}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={data.description}
                      onChange={(e) => setData('description', e.target.value)}
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg">
                      Cancel
                    </button>
                    <button type="submit" className="bg-brand-oilGreen text-white font-bold px-4 py-2 rounded-lg">
                      Save Product
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 font-bold text-gray-600">
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">SKU</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Price (MYR)</th>
                  <th className="py-3 px-4">Stock</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.data.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 flex items-center gap-3">
                      <img
                        src={p.primary_image?.image_path || 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=150&q=80'}
                        alt=""
                        className="w-10 h-10 rounded-lg object-cover border"
                      />
                      <span className="font-bold text-brand-charcoal">{p.title}</span>
                    </td>
                    <td className="py-3 px-4 text-gray-500 font-mono">{p.sku}</td>
                    <td className="py-3 px-4 text-gray-600">{p.category?.name}</td>
                    <td className="py-3 px-4 font-bold text-brand-oilGreen">
                      RM {parseFloat(p.price).toFixed(2)}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded font-bold ${
                        p.stock > 10 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                      }`}>
                        {p.stock} units
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="bg-rose-100 text-rose-600 font-bold px-2.5 py-1 rounded-lg hover:bg-rose-200"
                      >
                        <Trash2 className="w-3.5 h-3.5 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </div>
  );
}
