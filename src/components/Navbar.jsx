import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Portfolio
        </h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-cyan-400 transition">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-100"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700/50">
          <div className="flex flex-col gap-4 px-6 py-4">
            <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}