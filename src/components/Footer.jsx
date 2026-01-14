import React from 'react';
import { Heart, Coffee, ArrowUp, Code, Sparkles, Moon } from 'lucide-react';

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
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Node.js',
    'Git'
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top Gradient Border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      {/* Main Footer */}
      <div 
        className="py-12 px-6"
        style={{
          background: 'linear-gradient(to bottom, #020617 0%, #0f172a 100%)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold">
                  <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Rizky
                  </span>
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    .folio
                  </span>
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                Crafting exceptional digital experiences through innovative design and cutting-edge technology.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Coffee className="w-4 h-4" />
                <span>Made with passion</span>
                <Heart className="w-4 h-4 fill-pink-500 text-pink-500 animate-pulse" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-gray-300 mb-4 flex items-center justify-center md:justify-end gap-2">
                <Moon className="w-4 h-4 text-cyan-400" />
                Tech Stack
              </h4>
              <div className="flex flex-wrap justify-center md:justify-end gap-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 text-xs rounded-full bg-gray-900/50 border border-gray-800/50 text-gray-400 hover:border-purple-500/50 hover:text-white transition-all duration-300"
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} 
              <span className="text-cyan-400 font-medium mx-1">Rizky Riaadha Rismandana</span>
              . All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:hello@rizky.dev"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-800/30 text-purple-400 hover:text-white hover:border-purple-500/50 hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Floating Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="absolute -bottom-24 left-1/4 w-48 h-48 bg-purple-900/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-48 h-48 bg-cyan-900/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}