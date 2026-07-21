import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ShieldCheck, User, Trash2, Home } from 'lucide-react';

export default function UsersIndex({ users = { data: [] } }) {
  const { patch, delete: destroy } = useForm();

  const handleRoleToggle = (user) => {
    const newRole = user.role === 'admin' ? 'customer' : 'admin';
    if (confirm(`Change role for ${user.username} to ${newRole}?`)) {
      patch(`/admin/users/${user.id}/role`, { role: newRole });
    }
  };

  const handleDeleteUser = (user) => {
    if (confirm(`Delete user account ${user.username}? This action cannot be undone.`)) {
      destroy(`/admin/users/${user.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-xs">
      <Head title="User Management - Admin Portal" />

      {/* Header */}
      <header className="bg-brand-charcoal text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-lg">User Management</span>
          <span className="bg-brand-oilGreen text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">Admin</span>
        </div>
        <Link href="/admin/dashboard" className="text-xs hover:underline flex items-center gap-1">
          ← Back to Dashboard
        </Link>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-6">
        
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-bold text-brand-charcoal">Registered Users List</h2>
            <span className="font-semibold text-gray-500">Total Registered: {users.data.length}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 font-bold text-gray-600">
                  <th className="py-3 px-4">User</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Joined Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.data.map((u) => (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-bold text-brand-charcoal">
                      <div>{u.name}</div>
                      <div className="text-[10px] text-gray-400 font-normal">@{u.username}</div>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{u.email}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full font-extrabold uppercase text-[10px] ${
                        u.role === 'admin' ? 'bg-brand-oilGreen text-white' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-500">
                      {new Date(u.created_at).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4 text-right space-x-2">
                      <button
                        onClick={() => handleRoleToggle(u)}
                        className="bg-brand-pinkSalt-200 text-brand-oilGreen font-bold px-3 py-1 rounded-lg hover:bg-brand-pinkSalt-300 transition-colors"
                      >
                        Toggle Role
                      </button>
                      <button
                        onClick={() => handleDeleteUser(u)}
                        className="bg-rose-100 text-rose-600 font-bold px-2.5 py-1 rounded-lg hover:bg-rose-200 transition-colors"
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
