import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Products', path: '/products' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="FAVQX"
              className="h-9 sm:h-10 md:h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-favqx-navy hover:text-favqx-teal transition-colors font-medium text-sm tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-favqx-teal hover:bg-favqx-teal/90 text-white font-semibold rounded-full px-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-favqx-navy hover:text-favqx-teal transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white z-50 shadow-2xl p-6 md:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-favqx-navy hover:text-favqx-teal"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-favqx-navy hover:text-favqx-teal transition-colors font-medium text-xl"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-gray-100">
                  <Button
                    asChild
                    className="w-full bg-favqx-teal hover:bg-favqx-teal/90 text-white rounded-full py-6 text-lg"
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;