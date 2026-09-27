import React from 'react';
import ProductCard from './ProductCard';
import { PackageSearch } from 'lucide-react';

export default function ProductGrid({
  products,
  onSelectProduct,
  onAddToCart,
  onOpenQuote,
  onResetFilters
}) {
  if (!products || products.length === 0) {
    return (
      <div className="py-16 px-4 text-center bg-white rounded-2xl border border-slate-200">
        <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
          <PackageSearch className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-1">
          No matching products found
        </h3>
        <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
          We couldn't find any roofing products matching your current search or filter combination.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-xl bg-blue-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-sm"
          >
            Reset All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelectProduct={onSelectProduct}
          onAddToCart={onAddToCart}
          onOpenQuote={onOpenQuote}
        />
      ))}
    </div>
  );
}
