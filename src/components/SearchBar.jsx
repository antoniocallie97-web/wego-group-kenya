import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ searchTerm, onSearchChange, resultCount }) {
  return (
    <div className="relative w-full max-w-xl">
      <div className="relative flex items-center">
        <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search roofing products... (e.g. 30G, Box Profile, Gloss, Grey)"
          className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            title="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {searchTerm && typeof resultCount === 'number' && (
        <div className="absolute -bottom-6 left-1 text-xs text-slate-500 font-medium">
          Found <span className="font-bold text-blue-700">{resultCount}</span> product{resultCount === 1 ? '' : 's'} matching "{searchTerm}"
        </div>
      )}
    </div>
  );
}
