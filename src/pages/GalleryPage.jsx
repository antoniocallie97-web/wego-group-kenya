import React from 'react';
import Gallery from '../components/Gallery';
import { Camera, FileText } from 'lucide-react';

export default function GalleryPage({ onOpenQuote }) {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-blue-700" />
            <span>Finished Installations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            PROJECT GALLERY
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Explore authentic completed projects featuring WeGo Group Mabati roofing sheets, stone-coated Decra tiles, and architectural construction systems across Kenya. Click any image to view in high definition.
          </p>
        </div>

        {/* Gallery Grid with Live Lightbox */}
        <Gallery showFilter={true} />

        {/* Call to action */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 text-center max-w-2xl mx-auto shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Have a blueprint or roofing plan ready?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Send us your roof measurements and our engineering desk will prepare a line-item bill of quantities.
          </p>
          <button
            onClick={() => onOpenQuote()}
            className="px-8 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-700/20 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>REQUEST A FREE QUOTE</span>
          </button>
        </div>

      </div>
    </div>
  );
}
