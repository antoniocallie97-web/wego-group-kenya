import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  Navigation,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*WeGo Group Inquiry*\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Subject:* ${form.subject || 'General Inquiry'}\n` +
      `*Message:* ${form.message}`
    );
    window.open(`https://wa.me/254718785799?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Connect With Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            CONTACT WEGO GROUP
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Visit our Syokimau branch next to SGR Nairobi Station, or contact our sales specialists for quotations and technical assistance.
          </p>
        </div>

        {/* 2 Columns: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Branch Info & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Syokimau Branch Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 block mb-1">
                  Primary Headquarters & Factory Desk
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  WEGO GROUP (K) LIMITED
                </h2>
                <h3 className="text-base font-bold text-blue-800 mt-1">
                  Syokimau Branch
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Physical Location:</strong>
                    <span>Pili Trade Centre, Syokimau</span>
                    <span className="block text-slate-500 text-xs mt-0.5">
                      Next to SGR Nairobi Station, Mombasa Road Corridor
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-slate-900 block font-semibold">Phone Lines:</strong>
                    <div>
                      <a href="tel:+254718785799" className="hover:text-blue-700 font-bold block">
                        +254 (0) 718 785 799 (Main Desk)
                      </a>
                      <a href="tel:+254724117788" className="hover:text-blue-700 font-bold block">
                        +254 (0) 724 117 788 (Anne Njambi)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <strong className="text-slate-900 block font-semibold">Emails:</strong>
                    <div>
                      <a href="mailto:sales@wegogroup.co.ke" className="hover:text-blue-700 font-medium block">
                        sales@wegogroup.co.ke
                      </a>
                      <a href="mailto:Anne.njambi@wegogroup.co.ke" className="hover:text-blue-700 font-medium block">
                        Anne.njambi@wegogroup.co.ke
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Website:</strong>
                    <a
                      href="http://www.wegogroup.co.ke"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline font-semibold"
                    >
                      www.wegogroup.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Business Hours:</strong>
                    <span>Monday – Friday: 8:00 AM – 5:00 PM</span>
                    <span className="block">Saturday: 8:00 AM – 1:00 PM</span>
                    <span className="block text-slate-400 text-xs">Sunday & Public Holidays: Closed</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href="https://wa.me/254718785799?text=Hello%20WeGo%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20roofing%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+254 718 785 799)</span>
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
                Send Us A Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out the form below and an official WeGo Group sales representative will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 text-center space-y-4 bg-blue-50/50 rounded-2xl border border-blue-100">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, {form.name}. Your enquiry has been received at our Syokimau branch. We will reach out to you via phone or email.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. David Kamau"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                          errors.name ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. +254 700 000 000"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                          errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="e.g. david@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="e.g. Mabati 30G Quotation / Site Visit"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Write your questions, product requirements or measurements here..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                        errors.message ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-700/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Google Maps Embed / Interactive Location Area */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Branch Map Location
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Pili Trade Centre, Syokimau – Next to SGR Nairobi Station
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Pili+Trade+Centre+Syokimau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider hover:bg-blue-100 transition-colors self-start sm:self-auto"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Driving Directions</span>
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 relative bg-slate-100 shadow-inner">
            <iframe
              title="WeGo Group Syokimau Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Pili+Trade+Centre+Syokimau+Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
