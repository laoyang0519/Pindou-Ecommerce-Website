import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AnnouncementBar from '../../Components/Layouts/AnnouncementBar';
import Header from '../../Components/Layouts/Header';
import Footer from '../../Components/Layouts/Footer';
import { User, Mail, Lock, UserPlus, ShieldCheck } from 'lucide-react';

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    username: '',
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/register');
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title="Register Account - 呼啦の小铺" />

      <AnnouncementBar />
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-kawaii space-y-6">
          
          <div className="text-center space-y-2">
            <img
              src="/images/logo.png"
              alt="呼啦の小铺 Logo"
              className="h-14 w-auto mx-auto object-contain mb-1"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <h1 className="text-2xl font-extrabold text-brand-charcoal">Join 呼啦の小铺 🎀</h1>
            <p className="text-xs text-gray-500">Sign up to save craft favorites and track your orders</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            <div>
              <label className="block font-bold text-brand-charcoal mb-1">Username</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={data.username}
                  onChange={(e) => setData('username', e.target.value)}
                  placeholder="e.g. craft_lover99"
                  className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 pl-10 focus:ring-brand-oilGreen focus:border-transparent"
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.username && <p className="text-rose-500 text-[11px] mt-1">{errors.username}</p>}
            </div>

            <div>
              <label className="block font-bold text-brand-charcoal mb-1">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  placeholder="e.g. Jane Doe"
                  className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 pl-10 focus:ring-brand-oilGreen focus:border-transparent"
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.name && <p className="text-rose-500 text-[11px] mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block font-bold text-brand-charcoal mb-1">Email Address</label>
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

            <div>
              <label className="block font-bold text-brand-charcoal mb-1">Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  placeholder="At least 8 chars (min 1 uppercase, number & symbol)"
                  className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 pl-10 focus:ring-brand-oilGreen focus:border-transparent"
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.password && <p className="text-rose-500 text-[11px] mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block font-bold text-brand-charcoal mb-1">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={data.password_confirmation}
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  placeholder="Re-enter your password"
                  className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 pl-10 focus:ring-brand-oilGreen focus:border-transparent"
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div className="p-3 bg-brand-oilGreen-50 rounded-xl border border-brand-oilGreen-200 text-[11px] text-gray-600 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-oilGreen flex-shrink-0 mt-0.5" />
              <span>We send an automated email verification link immediately upon registration to secure your account.</span>
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-brand-oilGreen text-white font-bold py-3.5 px-4 rounded-xl shadow-kawaii hover:bg-brand-oilGreen-600 transition-all flex items-center justify-center gap-2 mt-2"
            >
              Create Account <UserPlus className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center text-xs border-t border-brand-pinkSalt-100 pt-4">
            <span className="text-gray-500">Already have an account? </span>
            <Link href="/login" className="font-extrabold text-brand-oilGreen hover:underline">
              Log In
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
