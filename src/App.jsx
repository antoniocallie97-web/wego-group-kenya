import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import QuoteModal from './components/QuoteModal';
import AccountModal from './components/AccountModal';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';

import { products } from './data/products';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Shopping Cart state
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('wego_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Quote Modal state
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState(null);

  // Account Modal state
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('wego_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Navigation handler
  const handleNavigate = (page, category = null) => {
    setCurrentPage(page);
    if (category) {
      setActiveCategory(category);
    } else if (page === 'products' && !category) {
      setActiveCategory('all');
    }
    setSelectedProduct(null);
  };

  // Navigate to shop with category
  const handleNavigateToShop = (categorySlug = 'all') => {
    setActiveCategory(categorySlug);
    setCurrentPage('products');
    setSelectedProduct(null);
  };

  // Product selection handler
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('details');
  };

  // Add to cart
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.selectedColor === item.selectedColor
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += item.quantity || 1;
        return updated;
      } else {
        return [...prevItems, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  // Update cart quantity
  const handleUpdateQuantity = (id, selectedColor, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, selectedColor);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedColor === selectedColor
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  // Remove single item
  const handleRemoveItem = (id, selectedColor) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.selectedColor === selectedColor)
      )
    );
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Request Quote with Cart items
  const handleRequestQuoteWithCart = () => {
    setIsCartOpen(false);
    const summary = cartItems
      .map(
        (item) =>
          `${item.name} (${item.quantity} units, Color: ${item.selectedColor}, Gauge: ${item.gauge || 'Standard'})`
      )
      .join('; ');

    const totalQty = cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0);

    setQuoteInitialData({
      productService: `Multi-Item Quotation (${cartItems.length} items)`,
      quantity: totalQty,
      description: `Cart items list:\n${summary}`
    });
    setIsQuoteOpen(true);
  };

  // Open quote modal with custom payload
  const handleOpenQuote = (data = null) => {
    setQuoteInitialData(data);
    setIsQuoteOpen(true);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
      {/* 1. TOP CONTACT BAR */}
      <TopBar />

      {/* 2. MAIN NAVIGATION */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      {/* 3. MAIN PAGE CONTENT */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            products={products}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onOpenQuote={handleOpenQuote}
            onNavigate={handleNavigate}
            onNavigateToShop={handleNavigateToShop}
          />
        )}

        {currentPage === 'products' && (
          <Products
            products={products}
            initialCategory={activeCategory}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleAddToCart}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'details' && selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            allProducts={products}
            onBack={() => setCurrentPage('products')}
            onAddToCart={handleAddToCart}
            onOpenQuote={handleOpenQuote}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'about' && (
          <About
            onOpenQuote={handleOpenQuote}
            onNavigateToShop={handleNavigateToShop}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* 4. FOOTER */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
        onOpenAccount={() => setIsAccountOpen(true)}
      />

      {/* 5. FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />

      {/* 6. SHOPPING CART DRAWER */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onRequestQuoteWithCart={handleRequestQuoteWithCart}
        onContinueShopping={() => {
          setIsCartOpen(false);
          handleNavigate('products', 'all');
        }}
      />

      {/* 7. GET A FREE QUOTE MODAL */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialData={quoteInitialData}
      />

      {/* 8. CLIENT ACCOUNT MODAL */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onOpenQuote={handleOpenQuote}
      />
    </div>
  );
}
