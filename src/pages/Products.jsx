import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/ProductGrid';
import ProductFilters from '../components/ProductFilters';
import SearchBar from '../components/SearchBar';
import { categories } from '../data/categories';
import { SlidersHorizontal, ArrowUpDown, Layers, Sparkles } from 'lucide-react';

export default function Products({
  products,
  initialCategory = 'all',
  onSelectProduct,
  onAddToCart,
  onOpenQuote
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [selectedGauge, setSelectedGauge] = useState('all');
  const [selectedFinish, setSelectedFinish] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [priceRange, setPriceRange] = useState(2500);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync when initialCategory prop changes from external navigation
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedGauge('all');
    setSelectedFinish('all');
    setSelectedColor('all');
    setPriceRange(2500);
    setSortBy('featured');
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // 1. Search filter
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchName = product.name.toLowerCase().includes(query);
        const matchCategory = (product.categoryName || product.category).toLowerCase().includes(query);
        const matchGauge = product.gauge ? product.gauge.toLowerCase().includes(query) : false;
        const matchFinish = product.finish ? product.finish.toLowerCase().includes(query) : false;
        const matchDescription = product.description.toLowerCase().includes(query);
        if (!matchName && !matchCategory && !matchGauge && !matchFinish && !matchDescription) {
          return false;
        }
      }

      // 2. Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // 3. Gauge filter
      if (selectedGauge !== 'all' && product.gauge !== selectedGauge) {
        return false;
      }

      // 4. Finish filter
      if (selectedFinish !== 'all' && product.finish !== selectedFinish) {
        return false;
      }

      // 5. Color filter
      if (selectedColor !== 'all') {
        const hasColor = product.colors && product.colors.includes(selectedColor);
        if (!hasColor) return false;
      }

      // 6. Price filter
      if (product.price && product.price > priceRange) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return (a.price || 0) - (b.price || 0);
      if (sortBy === 'price-high') return (b.price || 0) - (a.price || 0);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [products, searchTerm, selectedCategory, selectedGauge, selectedFinish, selectedColor, priceRange, sortBy]);

  const activeCategoryObj = categories.find((c) => c.slug === selectedCategory);

  return (
    <div className="py-8 sm:py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2.5">
              <Layers className="w-3.5 h-3.5 text-blue-700" />
              <span>WeGo Product Catalog</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {activeCategoryObj ? activeCategoryObj.name : 'All Roofing & Construction Products'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              {activeCategoryObj
                ? activeCategoryObj.description
                : 'Browse our complete catalog of corrugated sheets, Box profiles, IT5 industrial sheets, Decra tiles, and factory fittings.'}
            </p>
          </div>

          <div className="w-full md:w-auto">
            <button
              onClick={() => onOpenQuote()}
              className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-extrabold text-xs uppercase tracking-wider shadow-md shadow-blue-700/20 active:scale-95 transition-all text-center"
            >
              REQUEST A FREE QUOTE
            </button>
          </div>
        </div>

        {/* Search & Mobile Filter Toggle Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            resultCount={filteredProducts.length}
          />

          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-blue-700" />
              <span>Filters</span>
            </button>

            {/* Sorting Select */}
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm ml-auto">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-semibold text-slate-700 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Product Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content Layout (Sidebar Filters + Products Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 sticky top-28">
            <ProductFilters
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              selectedGauge={selectedGauge}
              onSelectGauge={setSelectedGauge}
              selectedFinish={selectedFinish}
              onSelectFinish={setSelectedFinish}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              onResetFilters={handleResetFilters}
            />
          </aside>

          {/* Mobile Filters Modal Drawer */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden flex justify-end">
              <div className="w-full max-w-xs bg-white h-full overflow-y-auto p-5 shadow-2xl">
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                  <h3 className="font-extrabold text-sm uppercase">Filters</h3>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="text-xs font-bold text-blue-700"
                  >
                    Done
                  </button>
                </div>
                <ProductFilters
                  selectedCategory={selectedCategory}
                  onSelectCategory={(cat) => {
                    setSelectedCategory(cat);
                    setMobileFilterOpen(false);
                  }}
                  selectedGauge={selectedGauge}
                  onSelectGauge={setSelectedGauge}
                  selectedFinish={selectedFinish}
                  onSelectFinish={setSelectedFinish}
                  selectedColor={selectedColor}
                  onSelectColor={setSelectedColor}
                  priceRange={priceRange}
                  onPriceRangeChange={setPriceRange}
                  onResetFilters={handleResetFilters}
                />
              </div>
            </div>
          )}

          {/* Products Grid Area */}
          <main className="lg:col-span-3">
            <ProductGrid
              products={filteredProducts}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
              onOpenQuote={onOpenQuote}
              onResetFilters={handleResetFilters}
            />
          </main>

        </div>

      </div>
    </div>
  );
}
