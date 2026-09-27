import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, FileText } from 'lucide-react';
import { formatKES } from '../data/products';

export default function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onRequestQuoteWithCart,
  onContinueShopping
}) {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Cart Header */}
          <div className="p-5 border-b border-slate-100 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-sky-400" />
              <h2 className="text-base font-extrabold uppercase tracking-wide">
                Your Quotation Cart ({items.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Your cart is empty</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs">
                    Browse our Mabati profiles, Decra tiles, and accessories to add items to your quote request.
                  </p>
                </div>
                <button
                  onClick={onContinueShopping}
                  className="px-5 py-2.5 rounded-xl bg-blue-700 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-800 transition-colors shadow-sm"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              items.map((item, index) => {
                const subtotal = (item.price || 0) * (item.quantity || 1);
                return (
                  <div
                    key={`${item.id}-${item.selectedColor}-${index}`}
                    className="flex gap-3.5 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-all shadow-xs"
                  >
                    {/* Item Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = item.fallbackImage || 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=300&q=80';
                      }}
                      className="w-16 h-16 object-cover rounded-lg border border-slate-200 shrink-0"
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-slate-900 truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.id, item.selectedColor)}
                          className="text-slate-400 hover:text-red-500 p-0.5 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Attribute pills */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-1 text-[11px] text-slate-500">
                        {item.gauge && (
                          <span className="bg-slate-200 px-1.5 py-0.2 rounded font-semibold text-slate-700">
                            {item.gauge}
                          </span>
                        )}
                        {item.selectedColor && (
                          <span className="text-blue-700 font-medium">
                            {item.selectedColor}
                          </span>
                        )}
                      </div>

                      {/* Quantity & Subtotal Controls */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-200/60">
                        <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity - 1)}
                            className="p-1 text-slate-500 hover:bg-slate-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-slate-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.quantity + 1)}
                            className="p-1 text-slate-500 hover:bg-slate-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 block">Subtotal</span>
                          <span className="text-xs font-black text-blue-700">
                            {formatKES(subtotal)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500 font-medium block">
                    Estimated Subtotal
                  </span>
                  <span className="text-xs text-slate-400">
                    *Final price confirmed with custom cutting & delivery
                  </span>
                </div>
                <span className="text-xl font-black text-blue-900">
                  {formatKES(totalAmount)}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onRequestQuoteWithCart}
                  className="w-full py-3.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-700/25 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>REQUEST QUOTE</span>
                </button>

                <button
                  type="button"
                  onClick={onContinueShopping}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-white text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  CONTINUE SHOPPING
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClearCart}
                  className="text-red-500 hover:underline"
                >
                  Clear Cart
                </button>
                <span>WeGo Group Syokimau</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
