import React, { useState } from 'react';
import { X, User, Phone, Mail, Building, FileText, CheckCircle2, Download, Shield } from 'lucide-react';

export default function AccountModal({ isOpen, onClose, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/20">
              <User className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Client Portal & Quotations</h3>
              <p className="text-xs text-blue-200">WeGo Group (K) Limited Account</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
              Syokimau Branch Client Desk
            </h4>
            <p className="text-xs text-blue-800 leading-relaxed">
              We provide direct manufacturer billing, official tax receipts (TIMS/eTIMS), and custom purlin/cutting specs for all client orders.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-blue-700" />
                <span className="text-xs font-bold text-slate-800">Quotation Service</span>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote();
                }}
                className="text-xs font-bold text-blue-700 hover:underline"
              >
                Start New Request &rarr;
              </button>
            </div>

            <div className="p-3 rounded-lg border border-slate-200 text-xs space-y-2 text-slate-600">
              <p className="font-bold text-slate-800 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-slate-500" />
                <span>Dedicated Sales Contact:</span>
              </p>
              <div className="pl-5 space-y-1">
                <p><strong>Primary Sales Desk:</strong> +254 (0) 718 785 799</p>
                <p><strong>Anne Njambi (Sales Lead):</strong> +254 (0) 724 117 788</p>
                <p><strong>Emails:</strong> sales@wegogroup.co.ke / Anne.njambi@wegogroup.co.ke</p>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-800 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-900"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
