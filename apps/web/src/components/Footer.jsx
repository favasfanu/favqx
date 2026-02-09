import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, MapPin } from 'lucide-react';

function Footer() {
  const mainLinks = [
    { name: 'Products', path: '/products' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'GitHub', icon: Github, url: '#' },
  ];

  return (
    <footer className="bg-favqx-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center">
              <span className="inline-flex items-center rounded-lg px-1">
                <img
                  src="/logo.png"
                  alt="FAVQX"
                  className="h-9 sm:h-10 md:h-11 w-auto brightness-0 invert"
                />
              </span>
            </Link>
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="font-medium text-favqx-gold">Founded by Muhammed Favas Malayil</p>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-favqx-teal" />
                <span>Kozhikode, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-favqx-teal transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-favqx-teal hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} FAVQX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;