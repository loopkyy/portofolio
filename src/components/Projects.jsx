import React from 'react';
import { Github } from 'lucide-react';

// Import project images from assets
import ecommerceImg from '../assets/web1.png';
import FinacialImg from '../assets/web2.png';
import CashierImg from '../assets/web3.png';
import magangImg from '../assets/web4.png';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "Modern e-commerce platform with product management, cart functionality.",
      tech: ["React", "Tailwind CSS","CI4", "MySQL"],
      image: ecommerceImg,
      github: "https://github.com/loopkyy/sven-store",
      featured: true
    },
    {
      title: "Financial Recording Website",
      desc: "cash management and financial reporting.",
      tech: ["Laravel", "MySQL"],
      image: FinacialImg,
      github: "https://github.com/loopkyy/catat-keuangan",
      featured: true
    },
    {
      title: "Cashier Website",
      desc: "transactions and inventory.",
      tech: ["CI4", "MySQL","Sneat"],
      image: CashierImg,
      github: "https://github.com/loopkyy/kasir-app",
      featured: false
    },
    {
      title: "Badan Pusat Statistik",
      desc: "internship project.",
      tech: ["PHP", "MySQL", "Boostrap", "AdminLTE"],
      image: magangImg,
      github: "https://github.com/loopkyy/project-pkl",
      featured: true
    }
  ];

  return (
    <section 
      id="projects" 
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)'
      }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              My
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mx-4">
              Projects
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            A collection of my practical implementations and web development work
          </p>
        </div>

        {/* Projects Grid - 4 items, 2 per row on mobile, 2 per row on desktop */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-2xl transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/90 backdrop-blur-sm border border-gray-800/50"></div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                    <span className="text-xs font-medium text-amber-300">Featured</span>
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="relative p-6 z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-white transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j}
                      className="px-3 py-1.5 text-xs rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="pt-4 border-t border-gray-800/50">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 hover:from-purple-600/40 hover:to-pink-600/40 hover:text-white transition-all duration-300 group/btn"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}