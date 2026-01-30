import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // For mobile accordion
  const [isDesktopServicesHovered, setIsDesktopServicesHovered] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const services = [
    { name: 'Business Setup & Structuring', path: '/services' },
    { name: 'Advisory & Strategy', path: '/services' },
    { name: 'Digital & Technology Solutions', path: '/services' },
    { name: 'Global Support', path: '/services' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    // Services is handled separately in the render
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <span className="text-2xl font-bold text-[#1E3A8A] font-sans tracking-tight group-hover:opacity-90 transition-opacity">
              FAVQX
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home & About */}
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[#1A1A1A] hover:text-[#1E3A8A] font-medium transition-colors duration-200 relative group ${
                  location.pathname === link.path ? 'text-[#1E3A8A]' : ''
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E3A8A] transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full' : ''
                }`} />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsDesktopServicesHovered(true)}
              onMouseLeave={() => setIsDesktopServicesHovered(false)}
            >
              <Link 
                to="/services"
                className={`flex items-center space-x-1 text-[#1A1A1A] group-hover:text-[#1E3A8A] font-medium transition-colors duration-200 ${
                  location.pathname === '/services' ? 'text-[#1E3A8A]' : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-200 ${isDesktopServicesHovered ? 'rotate-180' : ''}`} 
                />
              </Link>

              <AnimatePresence>
                {isDesktopServicesHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-6 py-3 text-sm text-[#1A1A1A] hover:bg-gray-50 hover:text-[#1E3A8A] transition-colors duration-150 border-l-2 border-transparent hover:border-[#1E3A8A]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`text-[#1A1A1A] hover:text-[#1E3A8A] font-medium transition-colors duration-200 relative group ${
                location.pathname === '/contact' ? 'text-[#1E3A8A]' : ''
              }`}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1E3A8A] transition-all duration-300 group-hover:w-full ${
                location.pathname === '/contact' ? 'w-full' : ''
              }`} />
            </Link>

            {/* CTA Button */}
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#172554' }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-md font-medium shadow-md hover:shadow-lg transition-all duration-200"
              >
                Get Consultation
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#1A1A1A] hover:text-[#1E3A8A] p-2 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg absolute w-full left-0"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[#1E3A8A] bg-blue-50'
                      : 'text-[#1A1A1A] hover:text-[#1E3A8A] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services Accordion */}
              <div className="rounded-md overflow-hidden">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium transition-colors ${
                    location.pathname === '/services' 
                      ? 'text-[#1E3A8A] bg-blue-50' 
                      : 'text-[#1A1A1A] hover:text-[#1E3A8A] hover:bg-gray-50'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform duration-200 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-gray-50"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className="block px-8 py-3 text-sm text-gray-600 hover:text-[#1E3A8A] hover:bg-gray-100 transition-colors border-l-4 border-transparent hover:border-[#1E3A8A]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-[#1E3A8A] bg-blue-50'
                    : 'text-[#1A1A1A] hover:text-[#1E3A8A] hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>

              <div className="pt-6 px-2">
                <Link to="/contact" className="block w-full">
                  <button className="w-full bg-[#1E3A8A] text-white px-6 py-4 rounded-lg font-bold shadow-md hover:bg-[#172554] transition-colors duration-200 text-center text-lg">
                    Get Consultation
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;