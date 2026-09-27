import React from 'react';
import { Filter, RotateCcw, Check } from 'lucide-react';
import { COLOR_SWATCHES, formatKES } from '../data/products';
import { categories } from '../data/categories';

export default function ProductFilters({
  selectedCategory,
  onSelectCategory,
  selectedGauge,
  onSelectGauge,
  selectedFinish,
  onSelectFinish,
  selectedColor,
  onSelectColor,
  priceRange,
  onPriceRangeChange,
  onResetFilters
}) {
  const gauges = ['All', '24G', '26G', '28G', '30G'];
  const finishes = ['All', 'Gloss', 'Matt / Textured', 'Stone-Coated'];
  const filterColors = [
    'Charcoal Grey',
    'Maroon',
    'Dark Green',
    'Tile Red',
    'Sky Blue',
    'Brick Red'
  ];

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedGauge !== 'all' ||
    selectedFinish !== 'all' ||
    selectedColor !== 'all' ||
    priceRange < 2500;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-blue-700" />
          <h3 className="font-extrabold text-slate-900 text-sm tracking-wide uppercase">
            Filter Products
          </h3>
        </div>

        <button
          type="button"
          onClick={onResetFilters}
          disabled={!hasActiveFilters}
          className={`flex items-center gap-1.5 text-xs font-bold transition-colors ${
            hasActiveFilters
              ? 'text-blue-700 hover:text-blue-800 cursor-pointer'
              : 'text-slate-300 cursor-not-allowed'
          }`}
          title="Reset all active filters"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>RESET FILTERS</span>
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
          Category
        </label>
        <div className="flex flex-col space-y-1">
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
              selectedCategory === 'all'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>All Categories</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.slug)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center justify-between ${
                selectedCategory === cat.slug
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Gauge Filter */}
      <div className="pt-4 border-t border-slate-100">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
          Gauge (Thickness)
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {gauges.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => onSelectGauge(g === 'All' ? 'all' : g)}
              className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center ${
                (g === 'All' && selectedGauge === 'all') || selectedGauge === g
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Finish Filter */}
      <div className="pt-4 border-t border-slate-100">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
          Finish Type
        </label>
        <div className="flex flex-col space-y-1">
          {finishes.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => onSelectFinish(f === 'All' ? 'all' : f)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                (f === 'All' && selectedFinish === 'all') || selectedFinish === f
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-2.5">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Color
          </label>
          {selectedColor !== 'all' && (
            <button
              type="button"
              onClick={() => onSelectColor('all')}
              className="text-[11px] text-blue-600 hover:underline"
            >
              Clear
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {filterColors.map((colorName) => {
            const swatch = COLOR_SWATCHES[colorName] || { hex: '#64748b' };
            const isSelected = selectedColor === colorName;
            return (
              <button
                key={colorName}
                type="button"
                onClick={() => onSelectColor(isSelected ? 'all' : colorName)}
                className={`flex items-center gap-2 p-1.5 rounded-lg border text-left text-xs font-medium transition-all ${
                  isSelected
                    ? 'border-blue-700 bg-blue-50/50 text-blue-900 ring-1 ring-blue-700'
                    : 'border-slate-200 hover:border-slate-300 text-slate-700'
                }`}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/10 shrink-0"
                  style={{ backgroundColor: swatch.hex }}
                />
                <span className="truncate">{colorName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Max Price
          </label>
          <span className="text-xs font-bold text-blue-700">
            {formatKES(priceRange)}
          </span>
        </div>
        <input
          type="range"
          min="400"
          max="2500"
          step="50"
          value={priceRange}
          onChange={(e) => onPriceRangeChange(Number(e.target.value))}
          className="w-full accent-blue-700 cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-slate-400 mt-1">
          <span>KES 400</span>
          <span>KES 2,500+</span>
        </div>
      </div>
    </div>
  );
}
