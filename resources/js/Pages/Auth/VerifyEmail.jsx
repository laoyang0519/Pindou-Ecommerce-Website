import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AnnouncementBar from '../../Components/Layouts/AnnouncementBar';
import Header from '../../Components/Layouts/Header';
import Footer from '../../Components/Layouts/Footer';
import { Mail, Send, LogOut } from 'lucide-react';

export default function VerifyEmail({ status }) {
  const { post, processing } = useForm({});

  const handleResend = (e) => {
    e.preventDefault();
    post('/email/verification-notification');
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title="Verify Email - 呼啦の小铺" />

      <AnnouncementBar />
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-kawaii text-center space-y-6">
          
          <div className="w-16 h-16 bg-brand-pinkSalt-100 rounded-full flex items-center justify-center mx-auto text-brand-oilGreen">
            <Mail className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-brand-charcoal">Verify Your Email ✉️</h1>
            <p className="text-xs text-gray-600 leading-relaxed">
              Thanks for signing up! Before getting started, please check your email inbox and click the verification link we just sent you.
            </p>
          </div>

          {status === 'verification-link-sent' && (
            <div className="p-3 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-xl">
              A new verification link has been sent to your email address!
            </div>
          )}

          <form onSubmit={handleResend} className="space-y-3">
            <button
              type="submit"
              disabled={processing}
              className="w-full bg-brand-oilGreen text-white font-bold py-3 px-4 rounded-xl shadow-kawaii hover:bg-brand-oilGreen-600 transition-all flex items-center justify-center gap-2 text-xs"
            >
              Resend Verification Email <Send className="w-4 h-4" />
            </button>

            <Link
              href="/logout"
              method="post"
              as="button"
              className="text-xs font-bold text-gray-500 hover:text-rose-600 flex items-center justify-center gap-1 mx-auto pt-2"
            >
              <LogOut className="w-3.5 h-3.5" /> Log Out
            </Link>
          </form>

        </div>
      </main>

      <Footer />
    </div>
  );
}
