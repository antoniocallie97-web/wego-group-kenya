import React from 'react';
import {
  ShieldCheck,
  Award,
  Layers,
  PhoneCall,
  Truck,
  Building,
  CheckCircle2,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function About({ onOpenQuote, onNavigateToShop }) {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Banner */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden relative text-white p-8 sm:p-14 border border-slate-800 shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1600&q=80"
              alt="WeGo Group Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/20 text-sky-300 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-400/30">
              <Building className="w-3.5 h-3.5" />
              <span>WeGo Group (K) Limited</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Building Kenya's Strongest Roofs With Quality Materials
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed mb-8">
              WeGo Group (K) Limited is a premier Kenyan roofing and construction materials company based at Syokimau, Nairobi. We specialize in precision-engineered Mabati sheets, elegant stone-coated Decra tiles, architectural tiles, durable plumbing products, and comprehensive roofing accessories.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
              >
                REQUEST A FREE QUOTE
              </button>
              <button
                onClick={() => onNavigateToShop('all')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                EXPLORE PRODUCTS
              </button>
            </div>
          </div>
        </div>

        {/* About WeGo Group Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <span>Corporate Overview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              ABOUT WEGO GROUP
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WeGo Group provides roofing and construction solutions including Mabati, roofing tiles, Decra tiles, plumbing, gutters, and roofing accessories. Our product line is designed to endure Kenya's harsh sun, tropical rainstorms, and variable topography.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From our modern manufacturing and distribution facility at Pili Trade Centre, Syokimau, adjacent to the SGR Nairobi Station, we coordinate fast custom sheet shearing, bundle packaging, and reliable nationwide site deliveries for private homeowners, real estate developers, and national building contractors.
            </p>

            {/* Statistics Cards from Prompt */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-blue-700 mb-2" />
                <h4 className="text-sm font-extrabold text-slate-900 uppercase">
                  QUALITY PRODUCTS
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Engineered using premium Alu-Zinc steel and anti-fade coatings.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <Award className="w-5 h-5 text-blue-700 mb-2" />
                <h4 className="text-sm font-extrabold text-slate-900 uppercase">
                  PROFESSIONAL SERVICE
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Accurate structural takeoff and tailored gauge recommendations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <Layers className="w-5 h-5 text-blue-700 mb-2" />
                <h4 className="text-sm font-extrabold text-slate-900 uppercase">
                  ROOFING SOLUTIONS
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Corrugated, Box Profiles, IT5, and stone-coated Decra systems.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                <PhoneCall className="w-5 h-5 text-blue-700 mb-2" />
                <h4 className="text-sm font-extrabold text-slate-900 uppercase">
                  CUSTOMER SUPPORT
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Prompt phone, email, WhatsApp, and on-site support.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80"
                alt="WeGo Group Roofing Facility"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* WHY CHOOSE US SECTION */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-extrabold text-blue-700 tracking-wider uppercase block mb-1">
              Guaranteed Performance
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              WHY CHOOSE US
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Four core pillars that set WeGo Group apart in Kenya's construction industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                1
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">
                Quality Products
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Reliable roofing and construction materials that resist corrosion, denting, and color fading.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                2
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">
                Wide Product Range
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mabati, tiles, plumbing and roofing accessories readily in stock in various gauges and colors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                3
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">
                Professional Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our team helps customers select suitable products, calculate linear meters, and minimize waste.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-4">
                4
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">
                Convenient Ordering
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Request quotations and enquire directly through the website, phone, or WhatsApp for rapid delivery.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
