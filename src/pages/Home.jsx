import React from 'react';
import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import Gallery from '../components/Gallery';
import { categories } from '../data/categories';
import {
  ShieldCheck,
  Award,
  Layers,
  PhoneCall,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Truck,
  Building,
  Check
} from 'lucide-react';

export default function Home({
  products,
  onSelectProduct,
  onAddToCart,
  onOpenQuote,
  onNavigate,
  onNavigateToShop
}) {
  // Featured products
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  // Dedicated Mabati & Tiles subset
  const mabatiSubset = products.filter(
    (p) => p.category === 'mabati' || p.category === 'roofing-tiles'
  ).slice(0, 8);

  // Corrugated 914 Priced showcase
  const corrugated914List = products.filter((p) =>
    p.id.startsWith('corrugated-914-')
  );

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <Hero
        onOpenQuote={() => onOpenQuote()}
        onNavigateToShop={onNavigateToShop}
      />

      {/* 2. AUTOMATIC MOVING PRODUCT CAROUSEL */}
      <ProductCarousel
        products={products}
        onSelectProduct={onSelectProduct}
        onOpenShop={() => onNavigateToShop('all')}
      />

      {/* 3. PRODUCT CATEGORIES: WHAT WE OFFER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            <Layers className="w-3.5 h-3.5 text-blue-700" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            WHAT WE OFFER
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Engineered roofing sheets, stone-coated tiles, drainage plumbing, and factory fasteners for homes and commercial establishments across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelectCategory={(slug) => onNavigateToShop(slug)}
            />
          ))}
        </div>
      </section>

      {/* 4. CORRUGATED 914 PRICED PRODUCTS SPOTLIGHT */}
      <section className="bg-gradient-to-b from-blue-50/70 via-slate-50 to-white py-16 sm:py-20 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-extrabold text-blue-700 tracking-widest uppercase block mb-1">
                Factory Direct Pricing
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                CORRUGATED 914 ROOFING SHEETS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl">
                Genuine 30 Gauge Alu-Zinc corrugated sheets available in vibrant Gloss lacquer and ultra-durable Matt finishes.
              </p>
            </div>

            <button
              onClick={() => onNavigateToShop('mabati')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-all self-start md:self-auto shadow-md shadow-blue-700/20"
            >
              <span>View All Mabati</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {corrugated914List.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToCart={onAddToCart}
                onOpenQuote={onOpenQuote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. MABATI & TILES DEDICATED SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-extrabold text-blue-700 tracking-widest uppercase block mb-1">
              Engineered Profiles
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              MABATI ROOFING SHEETS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
              Box Profile 914, IT5 Industrial, Glazed Tiles, Mandarin, and Star Tile profiles available in 24G, 26G, 28G, and 30G.
            </p>
          </div>

          <button
            onClick={() => onNavigateToShop('mabati')}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800 uppercase tracking-wider group"
          >
            <span>See All Profiles</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mabatiSubset.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              onOpenQuote={onOpenQuote}
            />
          ))}
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Top Picks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            FEATURED PRODUCTS
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Selected customer favorites engineered for superior aesthetic appeal, strength, and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              onOpenQuote={onOpenQuote}
            />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => onNavigateToShop('all')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-700/25 active:scale-95 transition-all"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-extrabold text-sky-400 tracking-widest uppercase block mb-2">
              The WeGo Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              WHY CHOOSE US
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Serving private homebuilders, contractors, and corporate institutions with pride and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-sky-400 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Quality Products
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Reliable roofing and construction materials engineered from high-grade Alu-Zinc steel and UV-shielded polymers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-sky-400 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Wide Product Range
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Mabati, stone-coated Decra tiles, architectural tiles, plumbing systems, and matching roofing accessories in one place.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-sky-400 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Professional Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our knowledgeable technical team helps customers calculate purlin spans, select suitable gauges, and minimize sheet wastage.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 hover:border-sky-400 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Convenient Ordering
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Request quotations and enquire directly through the website, via phone, or WhatsApp for rapid processing and site delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. ABOUT WEGO GROUP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              <Building className="w-3.5 h-3.5 text-blue-700" />
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              ABOUT WEGO GROUP
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              WeGo Group provides roofing and construction solutions including Mabati, roofing tiles, Decra tiles, plumbing, gutters, and roofing accessories. Based at Pili Trade Centre, Syokimau, adjacent to the SGR Nairobi Station, we serve clients across Kenya with factory-calibrated materials that stand up to the most demanding climatic conditions.
            </p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Commitment
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 uppercase">
                  QUALITY PRODUCTS
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">Tested for weather & anti-rust endurance</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Standard
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 uppercase">
                  PROFESSIONAL SERVICE
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">Direct technical & sales coordination</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Catalog
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 uppercase">
                  ROOFING SOLUTIONS
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">Box profiles, tiles, and fittings</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                  Assistance
                </span>
                <h4 className="text-sm font-extrabold text-slate-900 uppercase">
                  CUSTOMER SUPPORT
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">Prompt quotation & delivery handling</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-xl bg-blue-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-sm"
              >
                Learn More About Us
              </button>
              <button
                onClick={() => onOpenQuote()}
                className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-colors"
              >
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1000&q=80"
                alt="WeGo Group Roofing Installation"
                className="w-full h-[420px] object-cover"
              />
            </div>
            {/* Syokimau Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:block">
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
                Primary Branch
              </span>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                Pili Trade Centre, Syokimau
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Next to SGR Nairobi Station
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 9. GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-extrabold text-blue-700 tracking-widest uppercase block mb-1">
              Project Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              RECENT INSTALLATIONS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-xl">
              Take a look at finished residential homes, commercial depots, and estates utilizing WeGo Group materials.
            </p>
          </div>

          <button
            onClick={() => onNavigate('gallery')}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 hover:text-blue-800 uppercase tracking-wider group"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <Gallery limit={6} showFilter={false} />
      </section>

      {/* 10. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-extrabold text-sky-400 tracking-wider uppercase block mb-2">
              Ready to start your building project?
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-4">
              Get Your Free Quotation Today
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Contact our sales specialists directly at Syokimau. We will assist you with structural calculations, gauge selection, and transport planning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenQuote()}
              className="px-8 py-4 rounded-xl bg-white text-blue-900 font-extrabold text-xs uppercase tracking-wider shadow-lg hover:bg-slate-100 active:scale-95 transition-all text-center"
            >
              REQUEST A FREE QUOTE
            </button>
            <a
              href="tel:+254718785799"
              className="px-6 py-4 rounded-xl bg-blue-700/80 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider border border-white/20 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-sky-300" />
              <span>+254 (0) 718 785 799</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
