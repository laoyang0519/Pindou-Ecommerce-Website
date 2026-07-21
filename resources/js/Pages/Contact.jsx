import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AnnouncementBar from '../Components/Layouts/AnnouncementBar';
import Header from '../Components/Layouts/Header';
import Footer from '../Components/Layouts/Footer';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ contactInfo = {} }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const email = contactInfo.email || 'hello@hullapindou.com';
  const whatsappUrl = contactInfo.whatsapp_url || 'https://wa.me/60123456789';
  const instagramUrl = contactInfo.instagram_url || 'https://instagram.com/hulla.pindou';
  const address = contactInfo.store_address || 'Unit 12-08, Creative Craft Hub, Jalan Bukit Bintang, 55100 Kuala Lumpur, Malaysia';

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col font-sans">
      <Head title="Contact Us - Hulla Pindou" />

      <AnnouncementBar />
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Page Banner */}
        <div className="bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-sm text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-brand-oilGreen uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-3xl font-extrabold text-brand-charcoal">We'd Love to Hear From You 💌</h1>
          <p className="text-xs text-gray-500">
            Have questions about custom bead orders, bulk craft supplies, or parcel tracking? Drop us a line!
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* WhatsApp Direct Redirect */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-50 rounded-3xl p-6 border border-emerald-200 shadow-sm hover:shadow-softHover transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-emerald-900">WhatsApp Support</h3>
              <p className="text-xs text-emerald-700">Instant answers for order inquiries & stock availability.</p>
            </div>
            <span className="mt-4 text-xs font-bold text-emerald-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Chat on WhatsApp →
            </span>
          </a>

          {/* Email Support */}
          <div className="bg-brand-pinkSalt-100 rounded-3xl p-6 border border-brand-pinkSalt-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-brand-oilGreen text-white rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-brand-charcoal">Email Support</h3>
              <p className="text-xs text-gray-600">Send detailed business or wholesale inquiries.</p>
              <p className="text-xs font-bold text-brand-oilGreen">{email}</p>
            </div>
            <span className="mt-4 text-xs font-bold text-gray-500">Responds within 12 hours</span>
          </div>

          {/* Instagram Feed Link */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-brand-oilGreen-50 rounded-3xl p-6 border border-brand-oilGreen-200 shadow-sm hover:shadow-softHover transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 bg-brand-oilGreen text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-brand-oilGreen-900">Instagram Community</h3>
              <p className="text-xs text-gray-600">Follow @hulla.pindou for daily craft inspiration & giveaways!</p>
            </div>
            <span className="mt-4 text-xs font-bold text-brand-oilGreen flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Visit Instagram Profile →
            </span>
          </a>

        </div>

        {/* Contact Form & Store Location Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Form */}
          <div className="bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-sm space-y-6">
            <div>
              <h2 className="text-xl font-bold text-brand-charcoal">Send Us a Direct Message</h2>
              <p className="text-xs text-gray-500">Fill in your details and we'll get back to you shortly.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700">Thank you for reaching out to Hulla Pindou. We will reply soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-brand-charcoal mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Tan"
                    className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 focus:ring-brand-oilGreen focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block font-bold text-brand-charcoal mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarahtan@example.com"
                    className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 focus:ring-brand-oilGreen focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block font-bold text-brand-charcoal mb-1">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Custom Bead Kit Inquiry"
                    className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 focus:ring-brand-oilGreen focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block font-bold text-brand-charcoal mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you'd like to ask..."
                    className="w-full bg-brand-cream border border-brand-pinkSalt-300 rounded-xl p-3 focus:ring-brand-oilGreen focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-oilGreen text-white font-bold py-3.5 px-6 rounded-xl shadow-kawaii hover:bg-brand-oilGreen-600 transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Store Location Card */}
          <div className="bg-white rounded-3xl p-8 border border-brand-pinkSalt-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-brand-oilGreen">
                <MapPin className="w-6 h-6" />
                <h2 className="text-xl font-bold text-brand-charcoal">Store Location Details</h2>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{address}</p>

              <div className="space-y-2 pt-2 border-t border-brand-pinkSalt-100 text-xs">
                <div className="flex justify-between">
                  <span className="font-bold text-brand-charcoal">Operating Hours:</span>
                  <span className="text-gray-600">Mon - Sat: 10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-brand-charcoal">Sunday & Public Holidays:</span>
                  <span className="text-gray-600">Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-brand-charcoal">Self-Pick Up Available:</span>
                  <span className="text-emerald-600 font-bold">Yes (By WhatsApp Appointment)</span>
                </div>
              </div>
            </div>

            {/* Simulated Map Visual Card */}
            <div className="aspect-video rounded-2xl bg-brand-oilGreen-50 border-2 border-brand-pinkSalt-300 flex flex-col items-center justify-center p-6 text-center space-y-2">
              <MapPin className="w-8 h-8 text-brand-oilGreen animate-bounce" />
              <h4 className="text-xs font-bold text-brand-oilGreen-900">Kuala Lumpur Craft Hub Hub</h4>
              <p className="text-[11px] text-gray-500">Bukit Bintang, 55100 Kuala Lumpur</p>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
