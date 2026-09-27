import React from 'react';
import { ArrowRight, ShieldCheck, Award, Truck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Hero({ onOpenQuote, onNavigateToShop }) {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Image with Deep Blue / Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2000&q=85"
          alt="WeGo Group Roofing and Construction"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/90 to-blue-900/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-blue-950/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <div className="max-w-3xl">
          
          {/* Trust Statement Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold tracking-wide mb-6 backdrop-blur-sm shadow-inner">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Quality Materials • Reliable Service • Nationwide Solutions</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 uppercase">
            Quality Roofing Materials <span className="text-sky-400">For Stronger Homes</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
            Premium Mabati, roofing tiles, Decra tiles, plumbing products and roofing accessories for residential and commercial projects across Kenya.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/35 hover:shadow-blue-500/50 active:scale-95 transition-all"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onNavigateToShop('all')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold uppercase tracking-wider text-slate-100 bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md active:scale-95 transition-all"
            >
              <span>SHOP PRODUCTS</span>
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </button>
          </div>

          {/* Value Props Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-700/60">
            <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Custom Lengths Cut-to-Order</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
              <Award className="w-4 h-4 text-sky-400 shrink-0" />
              <span>100% Anti-Fade Alu-Zinc Base</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm col-span-2 sm:col-span-1">
              <Truck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Prompt Nationwide Delivery</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Subtle Wave Transition */}
      <div className="relative z-10 -mt-2">
        <svg
          className="w-full h-8 sm:h-12 text-slate-50 fill-current"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C280,36 720,48 1440,0 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </div>
  );
}
