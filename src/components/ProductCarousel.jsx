import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, ArrowUpRight } from 'lucide-react';
import { formatKES } from '../data/products';

export default function ProductCarousel({ products, onSelectProduct, onOpenShop }) {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  // Showcase items covering Corrugated, Box Profile, Glazed, Mandarin, Star, Elegant, Decra, Gutters, Plumbing, Accessories
  const showcaseProducts = products.filter(p => [
    'corrugated-914-cgrey-gloss-30g',
    'corrugated-914-maroon-gloss-30g',
    'box-profile-914-30-gauge',
    'box-profile-it5-28-gauge',
    'glazed-tile-30-gauge',
    'mandarin-tile-30-gauge',
    'star-tile-30-gauge',
    'elegant-tile-30-gauge',
    'decra-classic-charcoal',
    'decra-milano-roman-tile',
    'seamless-pvc-box-gutter-system',
    'self-drilling-roofing-screws-pack-100'
  ].includes(p.id));

  // If filtered set is small, fallback to first 12 products
  const displayItems = showcaseProducts.length >= 8 ? showcaseProducts : products.slice(0, 12);

  // Duplicate items for seamless continuous loop
  const marqueeItems = [...displayItems, ...displayItems];

  const handleManualScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Live Moving Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Roofing & Building Materials
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
              Explore our best-selling Mabati profiles, stone-coated Decra tiles, and factory accessories.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Play/Pause Toggle Indicator */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-600 hover:text-blue-700 hover:border-blue-300 shadow-sm transition-colors"
              title={isPaused ? "Resume continuous movement" : "Pause moving showcase"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-blue-600 fill-current" />
                  <span>Resume</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-slate-500" />
                  <span>Pause</span>
                </>
              )}
            </button>

            {/* Quick Manual Arrows */}
            <button
              onClick={() => handleManualScroll('left')}
              className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-blue-700 hover:border-blue-300 shadow-sm active:scale-95 transition-all"
              aria-label="Previous Products"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-blue-700 hover:border-blue-300 shadow-sm active:scale-95 transition-all"
              aria-label="Next Products"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
      >
        <div
          className={`flex gap-5 px-4 sm:px-6 w-max ${
            isPaused ? '' : 'animate-marquee'
          }`}
          style={{ animationDuration: '48s' }}
        >
          {marqueeItems.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              onClick={() => onSelectProduct(product)}
              className="w-72 sm:w-80 flex-shrink-0 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              {/* Product Card Image Container */}
              <div className="relative h-44 sm:h-48 w-full bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = product.fallbackImage;
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-slate-900/80 backdrop-blur-md text-white shadow-sm">
                    {product.categoryName || product.category}
                  </span>
                </div>

                {/* Gauge Badge */}
                {product.gauge && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[11px] font-extrabold bg-blue-700 text-white shadow">
                      {product.gauge}
                    </span>
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-white/95 text-blue-900 font-bold text-xs shadow-md flex items-center gap-1">
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-700 transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Price
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-blue-700">
                      {formatKES(product.price)}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
                    Order Now &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Touch hint for mobile users */}
      <div className="max-w-7xl mx-auto px-4 mt-4 text-center">
        <span className="text-xs text-slate-400 sm:hidden">
          Swipe horizontally to browse or tap any product to view full specifications
        </span>
      </div>
    </section>
  );
}
