import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AnnouncementBar from '../../Components/Layouts/AnnouncementBar';
import Header from '../../Components/Layouts/Header';
import Footer from '../../Components/Layouts/Footer';
import { Lock, RefreshCw } from 'lucide-react';

export default function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors } = useForm({
    token: token,
    email: email || '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/reset-password');
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title="Reset Password - Hulla Pindou" />

      <AnnouncementBar />
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-kawaii space-y-6">
          
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-extrabold text-brand-charcoal">Reset Password 🔐</h1>
            <p className="text-xs text-gray-500">Set a new strong password for your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-brand-charcoal mb-1">New Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 pl-10 focus:ring-brand-oilGreen focus:border-transparent"
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.password && <p className="text-rose-500 text-[11px] mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block font-bold text-brand-charcoal mb-1">Confirm New Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={data.password_confirmation}
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  placeholder="Re-enter password"
                  className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 pl-10 focus:ring-brand-oilGreen focus:border-transparent"
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-brand-oilGreen text-white font-bold py-3.5 px-4 rounded-xl shadow-kawaii hover:bg-brand-oilGreen-600 transition-all flex items-center justify-center gap-2"
            >
              Reset Password <RefreshCw className="w-4 h-4" />
            </button>
          </form>

        </div>
      </main>

      <Footer />
    </div>
  );
}
