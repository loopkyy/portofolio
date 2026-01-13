import React from 'react';
import profilePhoto from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <div className="mb-6">
          <img 
            src={profilePhoto} 
            alt="Rizky"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-cyan-500 shadow-lg shadow-cyan-500/50 mb-6 hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Rizky Riaadha Rismandana
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 mb-8">
          Full Stack Developer
        </p>
        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Passionate about creating beautiful, functional web applications that solve real-world problems.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:opacity-90 transition font-medium">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border border-slate-600 rounded-lg hover:bg-slate-800 transition font-medium">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
