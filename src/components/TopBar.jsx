import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Side Contact */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
          <a
            href="mailto:sales@wegogroup.co.ke"
            className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            title="Email Primary Sales"
          >
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-medium">sales@wegogroup.co.ke</span>
          </a>

          <a
            href="tel:+254718785799"
            className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            title="Call Main Line"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-medium">+254 (0) 718 785 799</span>
          </a>

          <span className="hidden xl:inline-flex items-center gap-1 text-slate-400 text-xs">
            <MapPin className="w-3 h-3 text-sky-400" />
            Syokimau, Next to SGR Nairobi Station
          </span>
        </div>

        {/* Right Side Contact */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6">
          <a
            href="mailto:Anne.njambi@wegogroup.co.ke"
            className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            title="Email Anne Njambi"
          >
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>Anne.njambi@wegogroup.co.ke</span>
          </a>

          <a
            href="tel:+254724117788"
            className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            title="Call Support Line"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>+254 (0) 724 117 788</span>
          </a>

          <span className="hidden lg:inline-flex items-center gap-1 text-slate-400 text-xs pl-2 border-l border-slate-700">
            <Clock className="w-3 h-3 text-slate-400" />
            Mon - Sat: 8:00 AM - 5:00 PM
          </span>
        </div>
      </div>
    </div>
  );
}
