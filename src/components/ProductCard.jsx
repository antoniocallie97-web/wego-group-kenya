import React, { useState } from 'react';
import { ShoppingCart, Eye, FileText, Check, MessageSquare } from 'lucide-react';
import { COLOR_SWATCHES, formatKES } from '../data/products';

export default function ProductCard({
  product,
  onSelectProduct,
  onAddToCart,
  onOpenQuote
}) {
  const [selectedColor, setSelectedColor] = useState(
    product.defaultColor || (product.colors && product.colors[0]) || 'Charcoal Grey'
  );
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart({
      ...product,
      selectedColor,
      quantity: 1
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleQuickQuote = (e) => {
    e.stopPropagation();
    onOpenQuote({
      productName: product.name,
      gauge: product.gauge,
      color: selectedColor,
      category: product.categoryName || product.category
    });
  };

  const openWhatsAppEnquiry = (e) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello WeGo Group, I would like to enquire about: ${product.name} (Gauge: ${product.gauge || 'Standard'}, Color: ${selectedColor}).`
    );
    window.open(`https://wa.me/254718785799?text=${message}`, '_blank');
  };

  return (
    <div
      onClick={() => onSelectProduct(product)}
      className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 overflow-hidden flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Product Image Header */}
        <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = product.fallbackImage;
            }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-slate-900/85 backdrop-blur-md text-white shadow-sm">
              {product.categoryName || product.category}
            </span>
            {product.finish && (
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/90 text-slate-800 shadow-sm backdrop-blur-sm">
                {product.finish}
              </span>
            )}
          </div>

          {product.gauge && (
            <div className="absolute top-3 right-3">
              <span className="px-2 py-0.5 rounded text-xs font-black bg-blue-700 text-white shadow">
                {product.gauge}
              </span>
            </div>
          )}

          {/* View Details hover overlay */}
          <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-3.5 py-2 rounded-xl bg-white text-blue-900 font-bold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-4 h-4 text-blue-600" />
              View Specifications
            </span>
          </div>
        </div>

        {/* Product Content */}
        <div className="p-4 sm:p-5">
          <h3 className="font-extrabold text-slate-900 text-base group-hover:text-blue-700 transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>

          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
            {product.description}
          </p>

          {/* Color Swatches if available */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-3.5" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5 font-medium">
                <span>Color: <strong className="text-slate-800 font-semibold">{selectedColor}</strong></span>
                <span className="text-[10px] text-slate-400">{product.colors.length} choices</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {product.colors.map((colorName) => {
                  const swatch = COLOR_SWATCHES[colorName] || { hex: '#64748b' };
                  const isSelected = selectedColor === colorName;
                  return (
                    <button
                      key={colorName}
                      type="button"
                      onClick={() => setSelectedColor(colorName)}
                      className={`w-5 h-5 rounded-full border-2 transition-all relative ${
                        isSelected
                          ? 'border-blue-700 ring-2 ring-blue-300 scale-110 shadow-sm'
                          : 'border-white hover:scale-110 opacity-80 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                      title={colorName}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* Price Tag */}
          <div className="flex items-baseline justify-between pt-2 border-t border-slate-100">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">
                Price
              </span>
              <span className="text-lg font-black text-blue-700 tracking-tight">
                {formatKES(product.price)}
              </span>
            </div>
            {product.unit && (
              <span className="text-[11px] text-slate-400 font-medium">
                {product.unit}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-4 sm:p-5 pt-0 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
            addedAnimation
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-blue-50 text-blue-700 hover:bg-blue-100 active:scale-95'
          }`}
          title="Add to shopping cart"
        >
          {addedAnimation ? (
            <>
              <Check className="w-3.5 h-3.5 text-white" />
              <span>Added!</span>
            </>
          ) : (
            <>
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Add to Cart</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleQuickQuote}
          className="py-2.5 px-3 rounded-xl bg-blue-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-800 shadow-md shadow-blue-700/20 active:scale-95 transition-all flex items-center justify-center gap-1.5"
          title="Request free quote for this item"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Get Quote</span>
        </button>

        {/* WhatsApp quick contact */}
        <button
          type="button"
          onClick={openWhatsAppEnquiry}
          className="col-span-2 py-1.5 px-2 rounded-lg text-[11px] font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-3 h-3 text-emerald-600" />
          <span>Quick WhatsApp Enquiry</span>
        </button>
      </div>
    </div>
  );
}
