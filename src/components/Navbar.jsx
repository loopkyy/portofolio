import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-gray-800/50 py-3 shadow-2xl shadow-purple-900/10' 
        : 'bg-transparent py-5'
      }
    `}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-50 animate-pulse"></div>
            <div className="relative bg-gray-900 p-2 rounded-lg">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Kyy
            </span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 mr-8">
            <a href="#home" className="group relative">
              <span className="text-gray-300 hover:text-white transition">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="group relative">
              <span className="text-gray-300 hover:text-white transition">About</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="group relative">
              <span className="text-gray-300 hover:text-white transition">Projects</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="group relative">
              <span className="text-gray-300 hover:text-white transition">Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition"></div>
            {darkMode ? 
              <Sun className="w-5 h-5 text-amber-300" /> : 
              <Moon className="w-5 h-5 text-blue-400" />
            }
          </button>

          {/* CTA Button */}
          <button className="px-6 py-2.5 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-900/30">
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-800"
          >
            {darkMode ? 
              <Sun className="w-5 h-5 text-amber-300" /> : 
              <Moon className="w-5 h-5 text-blue-400" />
            }
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            {menuOpen ? 
              <X className="w-6 h-6 text-gray-300" /> : 
              <Menu className="w-6 h-6 text-gray-300" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 animate-slideDown">
          <div className="flex flex-col gap-1 px-6 py-4">
            <a 
              href="#home" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition group"
            >
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <span className="text-gray-300 group-hover:text-white">Home</span>
            </a>
            <a 
              href="#about" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition group"
            >
              <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
              <span className="text-gray-300 group-hover:text-white">About</span>
            </a>
            <a 
              href="#projects" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition group"
            >
              <div className="w-1 h-6 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full"></div>
              <span className="text-gray-300 group-hover:text-white">Projects</span>
            </a>
            <a 
              href="#contact" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition group"
            >
              <div className="w-1 h-6 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full"></div>
              <span className="text-gray-300 group-hover:text-white">Contact</span>
            </a>
            <div className="pt-4 mt-2 border-t border-gray-800">
              <button className="w-full py-3 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}