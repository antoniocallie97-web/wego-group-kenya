import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, ChevronRight, X, Shield, Clock } from 'lucide-react';

export default function Footer({ onNavigate, onOpenQuote, onOpenAccount }) {
  const [policyModal, setPolicyModal] = useState(null);

  const policyContent = {
    privacy: {
      title: 'Privacy Policy',
      content: 'WeGo Group (K) Limited respects your privacy and complies with the Kenya Data Protection Act. Customer telephone numbers, email addresses, and site project delivery locations are strictly used for quotation preparation, invoicing, and logistics coordination. We never sell or share your personal data with third-party advertising companies.'
    },
    cookie: {
      title: 'Cookie Policy',
      content: 'Our website uses essential local storage and session cookies to preserve your product quotations, shopping cart selections, and search preferences across sessions. No intrusive tracking is employed.'
    },
    terms: {
      title: 'Terms & Conditions',
      content: '1. All roofing sheet prices are quoted per linear meter or per piece in Kenya Shillings (KES).\n2. Standard orders are custom cut to precise builder specifications. Once factory shearing commences, changes must be requested immediately.\n3. Defect claims must be reported within 48 hours of offloading at the client project site.\n4. Official invoices and TIMS/eTIMS compliant receipts are issued for all corporate and private transactions.'
    },
    transport: {
      title: 'Transport & Site Delivery Policy',
      content: 'WeGo Group provides reliable nationwide transport coordination from our Syokimau manufacturing & distribution branch. We deliver across Nairobi, Machakos, Kiambu, Kajiado, Nakuru, Eldoret, Kisumu, Mombasa and nationwide. Offloading assistance and protective strapping are ensured to guarantee dent-free arrival.'
    },
    faqs: {
      title: 'Frequently Asked Questions (FAQs)',
      content: 'Q: What is the difference between 28 Gauge and 30 Gauge?\nA: 28 Gauge is thicker and structurally stiffer than 30 Gauge, making it ideal for permanent family residences and institutional projects. 30 Gauge is an economical and highly popular solution for standard residential roofs.\n\nQ: Can I get custom sheet lengths cut at your factory?\nA: Yes! We precision cut any length from 1.0 meter up to 12 meters to eliminate wasted overlaps.\n\nQ: Where is your branch located?\nA: Pili Trade Centre, Syokimau, Next to SGR Nairobi Station.'
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z" />
                  <path d="M8 14h8" />
                  <path d="M8 18h8" />
                </svg>
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                WeGo Group <span className="text-sky-400 text-sm">(K) Ltd</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              WeGo Group (K) Limited is Kenya's trusted supplier and manufacturer of premium Mabati, stone-coated Decra tiles, architectural step tiles, plumbing solutions, and roofing accessories.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-blue-600/20"
              >
                REQUEST A FREE QUOTE
              </button>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('products', 'mabati')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Mabati (Corrugated & Box Profile)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', 'decra-tiles')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Decra Tiles (Stone-Coated)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', 'roofing-tiles')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Roofing Tiles (Glazed & Mandarin)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', 'piping-plumbing')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Piping & Plumbing (Gutters & Downpipes)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products', 'accessories')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Accessories (Ridges, Screws & Flashing)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Project Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>Contact & Syokimau Branch</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAccount}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-blue-500" />
                  <span>My Account</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href="tel:+254718785799"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+254 (0) 718 785 799</span>
              </a>

              <a
                href="tel:+254724117788"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+254 (0) 724 117 788</span>
              </a>

              <a
                href="mailto:sales@wegogroup.co.ke"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>sales@wegogroup.co.ke</span>
              </a>

              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Pili Trade Centre, Syokimau, Next to SGR Nairobi Station</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="http://www.wegogroup.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 underline"
                >
                  www.wegogroup.co.ke
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Policies */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 WeGo Group (K) Limited. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
            <button
              onClick={() => setPolicyModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setPolicyModal('cookie')}
              className="hover:text-slate-300 transition-colors"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => setPolicyModal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => setPolicyModal('transport')}
              className="hover:text-slate-300 transition-colors"
            >
              Transport Policy
            </button>
            <button
              onClick={() => setPolicyModal('faqs')}
              className="hover:text-slate-300 transition-colors text-sky-400 font-bold"
            >
              FAQs
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      {policyModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-white text-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-lg font-bold text-blue-900">
                {policyContent[policyModal]?.title}
              </h3>
              <button
                onClick={() => setPolicyModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {policyContent[policyModal]?.content}
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setPolicyModal(null)}
                className="px-5 py-2 rounded-xl bg-blue-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
