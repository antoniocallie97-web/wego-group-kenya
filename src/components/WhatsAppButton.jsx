import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  const phoneNumber = '254718785799';
  const message = encodeURIComponent(
    'Hello WeGo Group, I would like to enquire about your roofing products.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* "Chat With Us" floating pill badge */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-bold py-2 px-3.5 rounded-full shadow-lg border border-slate-100 animate-bounce duration-1000">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 transition-colors"
          >
            Chat With Us
          </a>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            title="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 active:scale-95 transition-all group"
        aria-label="Chat on WhatsApp with WeGo Group"
        title="Chat on WhatsApp (+254 718 785 799)"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}
