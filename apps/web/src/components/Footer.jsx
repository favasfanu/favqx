import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        {/* Trust Line */}
        <div className="text-center mb-12">
          <p className="text-[#1A1A1A] text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            FAVQX is a premium business solutions and advisory brand founded by Muhammed Favas, 
            committed to transparency, structure, and long-term value creation.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-2xl font-bold text-[#1E3A8A] mb-4 inline-block">
              FAVQX
            </Link>
            <p className="text-[#1A1A1A] text-sm">
              Think Global. Move Forward.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#1E3A8A] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#1A1A1A] hover:text-[#1E3A8A] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#1A1A1A] hover:text-[#1E3A8A] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#1A1A1A] hover:text-[#1E3A8A] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#1A1A1A] hover:text-[#1E3A8A] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

         {/* Contact Info */}
<div>
  <h3 className="text-[#1E3A8A] font-semibold mb-4">Get in Touch</h3>

  {/* Legal Business Info */}
  <div className="mb-4 text-sm text-[#1A1A1A] leading-relaxed">
    <p className="font-semibold">FAVQX</p>
    <p>Proprietor: Muhammed Favas Malayil</p>
    <p>
      Address: Malayil, Thachampoyil, Kedavur,<br />
      Thamarassery, Kozhikode, Kerala – 673573, India
    </p>
  </div>

  <ul className="space-y-3">
    <li className="flex items-center space-x-3 text-[#1A1A1A]">
      <Phone size={18} className="text-[#1E3A8A] flex-shrink-0" />
      <a
        href="tel:+918129380457"
        className="text-sm hover:text-[#1E3A8A] transition-colors duration-300"
      >
        +91 81293 80457
      </a>
    </li>

    <li className="flex items-center space-x-3 text-[#1A1A1A]">
      <Mail size={18} className="text-[#1E3A8A] flex-shrink-0" />
      <a
        href="mailto:contact@favqx.com"
        className="text-sm hover:text-[#1E3A8A] transition-colors duration-300"
      >
        contact@favqx.com
      </a>
    </li>

    <li className="flex items-center space-x-3 text-[#1A1A1A]">
      <Linkedin size={18} className="text-[#1E3A8A] flex-shrink-0" />
      <a
        href="https://www.linkedin.com/in/mu-favaz"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:text-[#1E3A8A] transition-colors duration-300"
      >
        www.linkedin.com/in/mu-favaz
      </a>
    </li>
  </ul>
</div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-[#1A1A1A] text-sm">
            © {currentYear} FAVQX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
