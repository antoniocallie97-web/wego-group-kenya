import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, Building2 } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, initialData = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: '',
    productService: '',
    quantity: '',
    preferredGauge: '30G',
    preferredColor: 'Charcoal Grey',
    projectDescription: '',
    estimatedBudget: '',
    additionalRequirements: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        productService: initialData.productName || initialData.productService || prev.productService,
        preferredGauge: initialData.gauge || prev.preferredGauge,
        preferredColor: initialData.color || prev.preferredColor,
        quantity: initialData.quantity ? String(initialData.quantity) : prev.quantity,
        projectDescription: initialData.description || prev.projectDescription
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone / WhatsApp is required';
    if (!formData.projectLocation.trim()) newErrors.projectLocation = 'Project Location is required';
    if (!formData.productService.trim()) newErrors.productService = 'Product or Service is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `*WeGo Group Quote Request*\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Location:* ${formData.projectLocation}\n` +
      `*Product:* ${formData.productService}\n` +
      `*Gauge:* ${formData.preferredGauge}\n` +
      `*Color:* ${formData.preferredColor}\n` +
      `*Quantity:* ${formData.quantity || 'Not specified'}\n` +
      `*Budget:* ${formData.estimatedBudget || 'Not specified'}\n` +
      `*Notes:* ${formData.projectDescription || 'N/A'}`
    );
    window.open(`https://wa.me/254718785799?text=${text}`, '_blank');
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
              <Building2 className="w-5 h-5 text-sky-300" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">
                Request A Free Quote
              </h2>
              <p className="text-xs text-blue-200 mt-0.5">
                WeGo Group (K) Limited • Syokimau Branch
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Thank you!
              </h3>
              <p className="text-base text-slate-600 font-medium max-w-lg mx-auto">
                Your quotation request has been received. Our team will contact you shortly.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto text-xs text-slate-600 space-y-1">
              <p><strong>Customer:</strong> {formData.fullName}</p>
              <p><strong>Product:</strong> {formData.productService}</p>
              <p><strong>Location:</strong> {formData.projectLocation}</p>
              <p><strong>Gauge / Color:</strong> {formData.preferredGauge} • {formData.preferredColor}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Forward</span>
              </button>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Samuel Mwangi"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    errors.fullName ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                  }`}
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. samuel@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone / WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +254 712 345 678"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Project Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Project Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.projectLocation}
                  onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                  placeholder="e.g. Kitengela / Syokimau / Machakos"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    errors.projectLocation ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                  }`}
                />
                {errors.projectLocation && <p className="text-xs text-red-500 mt-1">{errors.projectLocation}</p>}
              </div>

              {/* Product / Service */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Product / Service <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.productService}
                  onChange={(e) => setFormData({ ...formData, productService: e.target.value })}
                  placeholder="e.g. Corrugated 914 / Box Profile / Decra"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 ${
                    errors.productService ? 'border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-blue-100'
                  }`}
                />
                {errors.productService && <p className="text-xs text-red-500 mt-1">{errors.productService}</p>}
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Quantity (Meters / Pieces)
                </label>
                <input
                  type="text"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="e.g. 180 meters or 60 sheets"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Preferred Gauge */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Gauge
                </label>
                <select
                  value={formData.preferredGauge}
                  onChange={(e) => setFormData({ ...formData, preferredGauge: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                >
                  <option value="30G">30 Gauge (Standard)</option>
                  <option value="28G">28 Gauge (Heavy Duty)</option>
                  <option value="26G">26 Gauge (Extra Heavy)</option>
                  <option value="24G">24 Gauge (Industrial)</option>
                  <option value="Not Sure">Need Recommendation</option>
                </select>
              </div>

              {/* Preferred Color */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Preferred Color
                </label>
                <select
                  value={formData.preferredColor}
                  onChange={(e) => setFormData({ ...formData, preferredColor: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 bg-white"
                >
                  <option value="Charcoal Grey">Charcoal Grey</option>
                  <option value="Maroon">Maroon</option>
                  <option value="Dark Green">Dark Green</option>
                  <option value="Tile Red">Tile Red</option>
                  <option value="Sky Blue">Sky Blue</option>
                  <option value="Brick Red">Brick Red</option>
                  <option value="Classic Black">Classic Black</option>
                  <option value="Terracotta">Terracotta</option>
                  <option value="Custom / Other">Other / Undecided</option>
                </select>
              </div>

              {/* Estimated Budget */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Estimated Budget (Optional)
                </label>
                <input
                  type="text"
                  value={formData.estimatedBudget}
                  onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                  placeholder="e.g. KES 150,000 - 300,000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Project Description */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Project Description
                </label>
                <textarea
                  rows={2}
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Briefly describe your building or roof structure (e.g. Residential bungalow, hip roof, timber purlins)..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Additional Requirements */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Additional Requirements (Ridges, Screws, Gutters, Delivery, etc.)
                </label>
                <input
                  type="text"
                  value={formData.additionalRequirements}
                  onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                  placeholder="e.g. Need matching roll-top ridges, 200 tek screws, and site delivery quotation"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                🔒 Your contact details will only be used to prepare your quotation.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-blue-700/25 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
