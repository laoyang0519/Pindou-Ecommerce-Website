import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AnnouncementBar from '../../Components/Layouts/AnnouncementBar';
import Header from '../../Components/Layouts/Header';
import Footer from '../../Components/Layouts/Footer';
import { Mail, Send, ArrowLeft } from 'lucide-react';

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/forgot-password');
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title="Forgot Password - Hulla Pindou" />

      <AnnouncementBar />
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-kawaii space-y-6">
          
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-extrabold text-brand-charcoal">Forgot Password? 🔑</h1>
            <p className="text-xs text-gray-500">
              Enter your registered email address and we'll send a signed password reset link.
            </p>
          </div>

          {status && (
            <div className="p-3 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-xl text-center">
              {status}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-brand-charcoal mb-1">Registered Email</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  placeholder="yourname@example.com"
                  className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 pl-10 focus:ring-brand-oilGreen focus:border-transparent"
                />
                <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.email && <p className="text-rose-500 text-[11px] mt-1">{errors.email}</p>}
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-brand-oilGreen text-white font-bold py-3.5 px-4 rounded-xl shadow-kawaii hover:bg-brand-oilGreen-600 transition-all flex items-center justify-center gap-2"
            >
              Send Reset Link <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center text-xs border-t border-brand-pinkSalt-100 pt-4">
            <Link href="/login" className="font-extrabold text-brand-oilGreen hover:underline inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
