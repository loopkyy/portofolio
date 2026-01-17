import React, { useEffect, useState } from 'react';
import profilePhoto from '../assets/profile.jpg';
import { ArrowDown, Code, Sparkles, Cpu, Zap } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let timer;
    
    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fullText.length);
      } else {
        timer = setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, 50);
      }
    } else {
      if (text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timer = setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 md:pt-20 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, #0f172a 0%, #020617 100%)'
      }}
    >
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-3 md:opacity-5" 
          style={{
            backgroundImage: `linear-gradient(to right, #1e427d  0px, transparent 1px),
                            linear-gradient(to bottom, #1e427d 0px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-cyan-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10 px-4">
        {/* Profile photo */}
        <div className="mb-6 md:mb-8 relative">
          <div className="absolute inset-0 mx-auto w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-xl opacity-60 md:opacity-70"></div>
          <div className="relative">
            <img 
              src={profilePhoto} 
              alt="Rizky"
              className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full object-cover border-4 border-gray-800 shadow-2xl hover:scale-105 transition-all duration-500 hover:rotate-3 hover:border-purple-500/50"
            />
            {/* Status indicator */}
            <div className="absolute bottom-3 md:bottom-4 right-[calc(50%-56px)] md:right-[calc(50%-72px)] w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-full border-2 border-gray-900"></div>
          </div>
        </div>

        {/* Name with gradient*/}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 leading-tight">
          <span className="block bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-clip-text text-transparent">
            Rizky Riaadha
          </span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mt-1 md:mt-2">
            Rismandana
          </span>
        </h1>

        {/* Animated role text */}
        <div className="mb-6 md:mb-8">
          <div className="text-xl sm:text-2xl md:text-3xl font-mono text-gray-300 mb-2 min-h-[1.75rem] md:min-h-[2.5rem]">
            {text}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2">
            Turning <span className="text-cyan-400 font-medium">ideas</span>{' '}into{' '}
            <span className="text-pink-400 font-medium">beautiful web experiences</span>
          </p>
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto px-2">
          {['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'Laravel', 'SQL/MySQL', 'Figma', 'Canva'].map((tech, index) => (
            <span 
              key={tech}
              className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:border-purple-500/50 hover:text-white transition-all duration-300 active:scale-95 md:hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons*/}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16 px-2">
          <a 
            href="#projects" 
            className="group relative w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              Explore My Work 
              <ArrowDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#contact" 
            className="group w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg border-2 border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-white transition-all duration-300 active:bg-gray-800/30 md:hover:bg-gray-800/30 backdrop-blur-sm"
          >
            <span className="flex items-center justify-center gap-2">
              Let's Connect 
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </a>
        </div>
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-2 md:w-1 md:h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-1 md:mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}