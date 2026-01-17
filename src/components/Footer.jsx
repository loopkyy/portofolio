import React from 'react';

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
      {/* Top Gradient Border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      {/* Main Footer */}
      <div 
        className="py-8 md:py-12 px-4 sm:px-6"
        style={{
          background: 'linear-gradient(to bottom, #020617 0%, #0f172a 100%)'
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-8 md:mb-10">
            {/*Copyright */}
            <div className="text-center md:text-left">
              <div className="mb-3 md:mb-4">
                <h3 className="text-base md:text-lg font-bold text-gray-300">Portfolio</h3>
              </div>
              <p className="text-gray-400 text-xs md:text-sm">
                © {currentYear} Rizky Riaadha Rismandana. All rights reserved.
              </p>
            </div>

            {/*Quick Links */}
            <div className="text-center">
              <h4 className="text-base md:text-lg font-semibold text-gray-300 mb-3 md:mb-4">
                Navigation
              </h4>
              <ul className="flex flex-wrap justify-center gap-4 md:gap-0 md:space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index} className="md:w-full">
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/*Tech Stack */}
            <div className="text-center md:text-right">
              <h4 className="text-base md:text-lg font-semibold text-gray-300 mb-3 md:mb-4">
                Built With
              </h4>
              <div className="flex flex-wrap justify-center md:justify-end gap-1.5 md:gap-2">
                {techStack.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2.5 py-1 md:px-3 md:py-1.5 text-xs rounded-full bg-gray-900/50 border border-gray-800/50 text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800/50 to-transparent my-6 md:my-8"></div>

          {/* Bottom Bar */}
          <div className="text-center text-gray-400 text-xs md:text-sm">
            <p>Thank you for visiting my portfolio</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button*/}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 p-2.5 md:p-3 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-800/30 text-purple-400 hover:text-white hover:border-purple-500/50 active:scale-95 md:hover:scale-110 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <span className="text-sm md:text-base">↑</span>
      </button>
    </footer>
  );
}