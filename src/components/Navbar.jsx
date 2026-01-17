import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', color: 'from-purple-500 to-pink-500' },
    { name: 'About', href: '#about', color: 'from-cyan-500 to-blue-500' },
    { name: 'Projects', href: '#projects', color: 'from-emerald-500 to-green-500' },
    { name: 'Contact', href: '#contact', color: 'from-amber-500 to-orange-500' },
  ];
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('nav')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 py-3 md:py-4' 
        : 'bg-transparent py-4 md:py-6'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="hidden md:block w-20"></div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 mx-auto">
          {navItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="group relative"
            >
              <span className="text-gray-300 hover:text-white transition font-medium text-sm md:text-base">
                {item.name}
              </span>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-300`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition z-50"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? 
            <X className="w-6 h-6 text-gray-300" /> : 
            <Menu className="w-6 h-6 text-gray-300" />
          }
        </button>
        <div className="hidden md:block w-20"></div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-gray-900/95 backdrop-blur-xl z-40">
          <div className="flex flex-col items-center justify-center h-full pt-8 pb-20">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                onClick={() => setMenuOpen(false)}
                className="w-full max-w-xs mx-auto mb-4"
              >
                <div className="px-6 py-4 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:border-purple-500/50 hover:bg-gray-800/50 transition-all duration-300 text-center">
                  <span className="text-xl font-medium text-gray-300 hover:text-white">
                    {item.name}
                  </span>
                </div>
              </a>
            ))}
            
            <p className="mt-8 text-gray-500 text-sm">
              Tap anywhere outside to close
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}