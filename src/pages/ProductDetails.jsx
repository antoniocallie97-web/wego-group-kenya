import React, { useState } from 'react';
import {
  ArrowLeft,
  ShoppingCart,
  FileText,
  MessageSquare,
  Check,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';
import { COLOR_SWATCHES, formatKES } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetails({
  product,
  allProducts,
  onBack,
  onAddToCart,
  onOpenQuote,
  onSelectProduct
}) {
  const [selectedColor, setSelectedColor] = useState(
    product.defaultColor || (product.colors && product.colors[0]) || 'Charcoal Grey'
  );
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Sync selected color if product changes
  React.useEffect(() => {
    setSelectedColor(product.defaultColor || (product.colors && product.colors[0]) || 'Charcoal Grey');
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product]);

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedColor,
      quantity
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleQuoteClick = () => {
    onOpenQuote({
      productName: product.name,
      gauge: product.gauge,
      color: selectedColor,
      quantity,
      description: `Inquiry for ${quantity} meters/units of ${product.name} in ${selectedColor}.`
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello WeGo Group, I am interested in: ${product.name}\n` +
      `- Gauge: ${product.gauge || 'Standard'}\n` +
      `- Color: ${selectedColor}\n` +
      `- Quantity: ${quantity}\n` +
      `Please provide an official quotation and availability at your Syokimau branch.`
    );
    window.open(`https://wa.me/254718785799?text=${message}`, '_blank');
  };

  // Related products in the same category
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb / Back button */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
            <span>Products</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>{product.categoryName || product.category}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-semibold truncate max-w-xs">{product.name}</span>
          </div>
        </div>

        {/* Main Product Details Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            
            {/* Left: Large Product Image */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = product.fallbackImage;
                  }}
                  className="w-full h-full object-cover object-center"
                />

                {/* Floating Badge */}
                {product.gauge && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-lg text-xs font-black bg-blue-700 text-white shadow-md">
                      {product.gauge}
                    </span>
                  </div>
                )}

                {product.finish && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-900/80 backdrop-blur-md text-white shadow-md">
                      {product.finish}
                    </span>
                  </div>
                )}
              </div>

              {/* Trust highlights below image */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-blue-700 mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-slate-700 block">KEBS Standard</span>
                  <span className="text-[10px] text-slate-400">Certified steel</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Truck className="w-4 h-4 text-blue-700 mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-slate-700 block">Site Delivery</span>
                  <span className="text-[10px] text-slate-400">Nationwide Kenya</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <RotateCcw className="w-4 h-4 text-blue-700 mx-auto mb-1" />
                  <span className="text-[11px] font-bold text-slate-700 block">Custom Shearing</span>
                  <span className="text-[10px] text-slate-400">Cut to any meter</span>
                </div>
              </div>
            </div>

            {/* Right: Info & Purchase Controls */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 block mb-1">
                  {product.categoryName || product.category}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {product.name}
                </h1>
              </div>

              {/* Price Banner */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">
                    Unit Price
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-900">
                    {formatKES(product.price)}
                  </span>
                  {product.unit && (
                    <span className="text-xs text-slate-500 font-medium ml-1.5">
                      / {product.unit}
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-md">
                  In Stock • Syokimau
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                      Select Color: <span className="text-blue-700 font-bold">{selectedColor}</span>
                    </label>
                    <span className="text-xs text-slate-400">{product.colors.length} Available</span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {product.colors.map((colorName) => {
                      const swatch = COLOR_SWATCHES[colorName] || { hex: '#64748b' };
                      const isSelected = selectedColor === colorName;
                      return (
                        <button
                          key={colorName}
                          type="button"
                          onClick={() => setSelectedColor(colorName)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                            isSelected
                              ? 'border-blue-700 bg-blue-50/50 text-blue-900 ring-2 ring-blue-700 shadow-xs'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                          }`}
                        >
                          <span
                            className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                            style={{ backgroundColor: swatch.hex }}
                          />
                          <span>{colorName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
                  Quantity (Meters / Pieces)
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-slate-300 rounded-xl bg-white overflow-hidden shadow-xs">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center text-sm font-bold text-slate-900 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-slate-600 hover:bg-slate-100 font-bold"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-500">
                    Est. Total: <strong className="text-blue-700">{formatKES((product.price || 0) * quantity)}</strong>
                  </span>
                </div>
              </div>

              {/* Action Buttons: ADD TO CART, REQUEST QUOTE, CHAT ON WHATSAPP */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className={`py-3.5 px-5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      addedAnimation
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100 active:scale-95'
                    }`}
                  >
                    {addedAnimation ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        <span>ADD TO CART</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleQuoteClick}
                    className="py-3.5 px-5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-700/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>REQUEST QUOTE</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-emerald-600/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CHAT ON WHATSAPP</span>
                </button>
              </div>

              {/* Technical Specifications */}
              {product.specs && (
                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-3">
                    Technical Specifications
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2 text-xs">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-1 border-b border-slate-200/50 last:border-0">
                        <span className="text-slate-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="font-semibold text-slate-800 text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Related Products
              </h2>
              <button
                onClick={onBack}
                className="text-xs font-bold text-blue-700 hover:underline uppercase tracking-wider"
              >
                Browse All In Category &rarr;
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.id}
                  product={relProduct}
                  onSelectProduct={onSelectProduct}
                  onAddToCart={onAddToCart}
                  onOpenQuote={onOpenQuote}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
