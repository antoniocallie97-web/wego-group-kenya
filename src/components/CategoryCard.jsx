import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

export default function CategoryCard({ category, onSelectCategory }) {
  return (
    <div
      onClick={() => onSelectCategory(category.slug)}
      className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
    >
      {/* Category Image */}
      <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = category.fallbackImage;
          }}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

        {/* Floating Count Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
          {category.itemCount}+ Products
        </div>

        {/* Overlay Title for Mobile / Tablet */}
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-sky-300 block mb-0.5">
            {category.tagline}
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
            {category.name}
          </h3>
        </div>
      </div>

      {/* Content description & View Products Button */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
          {category.description}
        </p>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelectCategory(category.slug);
          }}
          className="w-full py-2.5 px-4 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider group-hover:bg-blue-700 group-hover:text-white transition-all flex items-center justify-center gap-2"
        >
          <span>VIEW PRODUCTS</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
