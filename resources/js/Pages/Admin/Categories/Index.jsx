import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Trash2, Edit } from 'lucide-react';

export default function CategoriesIndex({ categories = [] }) {
  const [showModal, setShowModal] = useState(false);
  const { data, setData, post, reset, errors } = useForm({
    name: '',
    description: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/categories', {
      onSuccess: () => {
        reset();
        setShowModal(false);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-xs">
      <Head title="Category Management - Admin Portal" />

      <header className="bg-brand-charcoal text-white px-6 py-4 flex items-center justify-between shadow-md">
        <span className="font-extrabold text-lg">Category Management</span>
        <Link href="/admin/dashboard" className="text-xs hover:underline">
          ← Back to Dashboard
        </Link>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-brand-charcoal">Categories List</h2>
            <button
              onClick={() => setShowModal(true)}
              className="bg-brand-oilGreen text-white font-bold px-4 py-2 rounded-xl flex items-center gap-1 shadow-sm hover:bg-brand-oilGreen-600"
            >
              <Plus className="w-4 h-4" /> Add New Category
            </button>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl p-6 max-w-md w-full space-y-4">
                <h3 className="text-base font-bold text-brand-charcoal">Create Category</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block font-bold mb-1">Category Name</label>
                    <input
                      type="text"
                      required
                      value={data.name}
                      onChange={(e) => setData('name', e.target.value)}
                      placeholder="e.g. Perler Beads 拼豆"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Description</label>
                    <textarea
                      rows={2}
                      value={data.description}
                      onChange={(e) => setData('description', e.target.value)}
                      placeholder="Category description..."
                      className="w-full border rounded-lg p-2"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">Image URL</label>
                    <input
                      type="text"
                      value={data.image}
                      onChange={(e) => setData('image', e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full border rounded-lg p-2"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg">
                      Cancel
                    </button>
                    <button type="submit" className="bg-brand-oilGreen text-white font-bold px-4 py-2 rounded-lg">
                      Save Category
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div key={cat.id} className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between space-y-2 bg-white">
                <div className="flex items-center gap-3">
                  <img src={cat.image || 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=150&q=80'} alt="" className="w-12 h-12 rounded-lg object-cover" />
                  <div>
                    <h4 className="font-bold text-brand-charcoal">{cat.name}</h4>
                    <span className="text-[10px] text-gray-400">Products: {cat.products_count || 0}</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 line-clamp-2">{cat.description}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
