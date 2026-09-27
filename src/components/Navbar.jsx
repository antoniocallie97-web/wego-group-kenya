import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Phone, ChevronDown, ShieldCheck, Home as HomeIcon } from 'lucide-react';

export default function Navbar({
  currentPage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenQuote,
  onOpenAccount
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'home' },
    {
      label: 'Products',
      page: 'products',
      dropdown: [
        { label: 'All Products', page: 'products', category: 'all' },
        { label: 'Mabati Roofing Sheets', page: 'products', category: 'mabati' },
        { label: 'Decra Stone Tiles', page: 'products', category: 'decra-tiles' },
        { label: 'Roofing Tiles', page: 'products', category: 'roofing-tiles' },
        { label: 'Piping & Plumbing', page: 'products', category: 'piping-plumbing' },
        { label: 'Roofing Accessories', page: 'products', category: 'accessories' }
      ]
    },
    { label: 'Mabati', page: 'products', category: 'mabati' },
    { label: 'Decra Tiles', page: 'products', category: 'decra-tiles' },
    { label: 'Roofing Tiles', page: 'products', category: 'roofing-tiles' },
    { label: 'Piping & Plumbing', page: 'products', category: 'piping-plumbing' },
    { label: 'Accessories', page: 'products', category: 'accessories' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' }
  ];

  const handleLinkClick = (page, category = null) => {
    onNavigate(page, category);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-11 h-11 rounded-lg bg-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-700/20 group-hover:bg-blue-800 transition-colors">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 10l9-7 9 7v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z" />
                <path d="M8 14h8" />
                <path d="M8 18h8" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-blue-900 leading-none">
                  WeGo Group
                </span>
                <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 tracking-wide">
                  (K) LTD
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wider uppercase mt-0.5">
                Roofing & Construction Materials
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-1.5">
            <button
              onClick={() => handleLinkClick('home')}
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                currentPage === 'home'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('products', 'mabati')}
              className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
            >
              Mabati
            </button>

            <button
              onClick={() => handleLinkClick('products', 'decra-tiles')}
              className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
            >
              Decra Tiles
            </button>

            <button
              onClick={() => handleLinkClick('products', 'roofing-tiles')}
              className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
            >
              Roofing Tiles
            </button>

            <button
              onClick={() => handleLinkClick('products', 'piping-plumbing')}
              className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
            >
              Piping & Plumbing
            </button>

            <button
              onClick={() => handleLinkClick('products', 'accessories')}
              className="px-3 py-2 rounded-md text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
            >
              Accessories
            </button>

            <button
              onClick={() => handleLinkClick('gallery')}
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                currentPage === 'gallery'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Gallery
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                currentPage === 'about'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                currentPage === 'contact'
                  ? 'text-blue-700 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* My Account */}
            <button
              onClick={onOpenAccount}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-slate-50 transition-colors"
              title="My Account & Quotations"
            >
              <User className="w-4 h-4 text-slate-500" />
              <span>My Account</span>
            </button>

            {/* Shopping Cart Icon with Badge */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors focus:outline-none"
              title="View Shopping Cart & Quotation"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-700 text-white font-bold text-xs rounded-full h-5 min-w-5 px-1 flex items-center justify-center border-2 border-white animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Prominent GET A FREE QUOTE Button */}
            <button
              onClick={() => onOpenQuote()}
              className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 shadow-md shadow-blue-700/25 active:scale-95 transition-all"
            >
              GET A FREE QUOTE
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleLinkClick('home')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'home' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Home</span>
            </button>

            <button
              onClick={() => handleLinkClick('products', 'all')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'products' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>All Products</span>
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">Catalog</span>
            </button>

            <div className="pl-3 border-l-2 border-blue-200 my-1 space-y-1">
              <button
                onClick={() => handleLinkClick('products', 'mabati')}
                className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded"
              >
                Mabati Roofing Sheets
              </button>
              <button
                onClick={() => handleLinkClick('products', 'decra-tiles')}
                className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded"
              >
                Decra Stone-Coated Tiles
              </button>
              <button
                onClick={() => handleLinkClick('products', 'roofing-tiles')}
                className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded"
              >
                Roofing Tiles (Glazed / Mandarin)
              </button>
              <button
                onClick={() => handleLinkClick('products', 'piping-plumbing')}
                className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded"
              >
                Piping & Plumbing
              </button>
              <button
                onClick={() => handleLinkClick('products', 'accessories')}
                className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded"
              >
                Roofing Accessories
              </button>
            </div>

            <button
              onClick={() => handleLinkClick('gallery')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'gallery' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Project Gallery</span>
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'about' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>About WeGo Group</span>
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'contact' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Contact & Syokimau Branch</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAccount();
              }}
              className="flex items-center gap-2 px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:bg-slate-50"
            >
              <User className="w-4 h-4 text-blue-700" />
              <span>My Account</span>
            </button>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 px-4 rounded-lg bg-blue-700 text-white font-bold text-center uppercase tracking-wider shadow-md shadow-blue-700/20"
              >
                GET A FREE QUOTE
              </button>

              <a
                href="tel:+254718785799"
                className="w-full py-2.5 px-4 rounded-lg border border-slate-300 text-slate-700 font-semibold text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-700" />
                <span>Call +254 (0) 718 785 799</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
