import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // scroll effect
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

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 py-4' 
        : 'bg-transparent py-6'
      }
    `}>
      <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-between items-center">
        {}
        <div className="hidden md:block w-20"></div>
        
        {}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="group relative"
              >
                <span className="text-gray-300 hover:text-white transition font-medium">
                  {item.name}
                </span>
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-300`}></span>
              </a>
            ))}
          </div>
        </div>

        {}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition absolute right-6"
        >
          {menuOpen ? 
            <X className="w-6 h-6 text-gray-300" /> : 
            <Menu className="w-6 h-6 text-gray-300" />
          }
        </button>

        {}
        <div className="hidden md:block w-20"></div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg hover:bg-gray-800/50 transition text-gray-300 hover:text-white font-medium text-center"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}