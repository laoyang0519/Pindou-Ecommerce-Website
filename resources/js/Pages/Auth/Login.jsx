import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AnnouncementBar from '../../Components/Layouts/AnnouncementBar';
import Header from '../../Components/Layouts/Header';
import Footer from '../../Components/Layouts/Footer';
import { Lock, Mail, User, LogIn } from 'lucide-react';

export default function Login({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    login: '',
    password: '',
    remember: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login');
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title="Login - Hulla Pindou" />

      <AnnouncementBar />
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-kawaii space-y-6">
          
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-brand-pinkSalt-100 border border-brand-oilGreen flex items-center justify-center mx-auto text-brand-oilGreen font-bold text-xl">
              豆
            </div>
            <h1 className="text-2xl font-extrabold text-brand-charcoal">Welcome Back! 💖</h1>
            <p className="text-xs text-gray-500">Log in with your Email or Username to manage your craft orders</p>
          </div>

          {status && (
            <div className="p-3 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-xl text-center">
              {status}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-brand-charcoal mb-1">Email or Username</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={data.login}
                  onChange={(e) => setData('login', e.target.value)}
                  placeholder="Enter email or username..."
                  className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 pl-10 focus:ring-brand-oilGreen focus:border-transparent"
                />
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.login && <p className="text-rose-500 text-[11px] mt-1">{errors.login}</p>}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="font-bold text-brand-charcoal">Password</label>
                <Link href="/forgot-password" className="text-[11px] text-brand-oilGreen font-bold hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 pl-10 focus:ring-brand-oilGreen focus:border-transparent"
                />
                <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
              {errors.password && <p className="text-rose-500 text-[11px] mt-1">{errors.password}</p>}
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="remember"
                checked={data.remember}
                onChange={(e) => setData('remember', e.target.checked)}
                className="rounded text-brand-oilGreen focus:ring-brand-oilGreen"
              />
              <label htmlFor="remember" className="text-gray-600 font-semibold select-none">Remember me</label>
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-brand-oilGreen text-white font-bold py-3.5 px-4 rounded-xl shadow-kawaii hover:bg-brand-oilGreen-600 transition-all flex items-center justify-center gap-2 mt-2"
            >
              Sign In <LogIn className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center text-xs border-t border-brand-pinkSalt-100 pt-4">
            <span className="text-gray-500">Don't have an account yet? </span>
            <Link href="/register" className="font-extrabold text-brand-oilGreen hover:underline">
              Create Account
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
