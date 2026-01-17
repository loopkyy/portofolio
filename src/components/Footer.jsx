import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const techStack = [
    'React',
    'JavaScript',
    'Tailwind CSS'
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <div 
        className="py-12 px-6"
        style={{
          background: 'linear-gradient(to bottom, #020617 0%, #0f172a 100%)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-300">Portfolio</h3>
              </div>
              <p className="text-gray-400 text-sm">
                © {currentYear} All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Tech Stack */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-gray-300 mb-4">
                Built With
              </h4>
              <div className="flex flex-wrap justify-center md:justify-end gap-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-xs rounded-full bg-gray-900/50 border border-gray-800/50 text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800/50 to-transparent my-8"></div>

          {/* Bottom Bar */}
          <div className="text-center text-gray-400 text-sm">
            <p>Thank you for visiting my portfolio</p>
          </div>
        </div>
      </div>

      {/* Back */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-800/30 text-purple-400 hover:text-white hover:border-purple-500/50 hover:scale-110 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}