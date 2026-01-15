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
    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % fullText.length);
      } else {
        setTimeout(() => {
          setText(text.substring(0, text.length - 1));
        }, 50);
      }
    } else {
      if (text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setTimeout(() => {
          setText(fullText.substring(0, text.length + 1));
        }, 100);
      }
    }
  }, [text, isDeleting]);

  // Floating elements effect
  const FloatingElement = ({ Icon, top, left, delay }) => (
    <div 
      className="absolute hidden lg:block"
      style={{ 
        top: `${top}%`, 
        left: `${left}%`,
        animationDelay: `${delay}s`
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <Icon className="relative w-10 h-10 text-purple-400 animate-float" />
      </div>
    </div>
  );

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at top, #0f172a 0%, #020617 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating icons */}
      <FloatingElement Icon={Code} top={20} left={10} delay={0} />
      <FloatingElement Icon={Sparkles} top={30} left={85} delay={0.5} />
      <FloatingElement Icon={Cpu} top={70} left={15} delay={1} />
      <FloatingElement Icon={Zap} top={60} left={80} delay={1.5} />

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Profile photo with glow effect */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 mx-auto w-40 h-40 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-xl opacity-70 animate-pulse"></div>
          <div className="relative">
            <img 
              src={profilePhoto} 
              alt="Rizky"
              className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-gray-800 shadow-2xl hover:scale-105 transition-all duration-500 hover:rotate-3 hover:border-purple-500/50"
            />
            {/* Status indicator */}
            <div className="absolute bottom-4 right-[calc(50%-72px)] w-4 h-4 bg-emerald-500 rounded-full border-2 border-gray-900 animate-ping"></div>
            <div className="absolute bottom-4 right-[calc(50%-72px)] w-4 h-4 bg-emerald-500 rounded-full border-2 border-gray-900"></div>
          </div>
        </div>

        {/* Name with gradient */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          <span className="block bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-clip-text text-transparent">
            Rizky Riaadha
          </span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Rismandana
          </span>
        </h1>

        {/* Animasi role text */}
        <div className="mb-8">
          <p className="text-2xl md:text-3xl font-mono text-gray-300 mb-2 min-h-[2.5rem]">
            {text}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Turning <span className="text-cyan-400 font-medium">ideas</span>{' '}into{' '}
            <span className="text-pink-400 font-medium">beautiful web experiences</span>
          </p>
        </div>

        {/* Tech stack tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl mx-auto">
          {['HTML', 'CSS', 'JavaScript', 'React', 'PHP', 'Laravel', 'SQL/MySQL', 'Figma', 'Canva'].map((tech, index) => (
            <span 
              key={tech}
              className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:border-purple-500/50 hover:text-white transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#projects" 
            className="group relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:from-purple-700 group-hover:to-pink-700 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <span className="relative flex items-center gap-2">
              Explore My Work 
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#contact" 
            className="group px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-700 hover:border-cyan-500/50 text-gray-300 hover:text-white transition-all duration-300 hover:bg-gray-800/30 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              Let's Connect 
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}