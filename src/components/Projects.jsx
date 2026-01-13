import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      desc: "Modern online store dengan React & Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
    },
    {
      title: "Task Management App",
      desc: "Aplikasi produktivitas dengan fitur kolaborasi",
      tech: ["Vue.js", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    },
    {
      title: "Weather Dashboard",
      desc: "Dashboard cuaca real-time dengan API integration",
      tech: ["React", "API", "Chart.js"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden bg-slate-700">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j}
                      className="text-xs px-3 py-1 bg-slate-700 rounded-full text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-cyan-400 hover:gap-3 transition-all">
                  View Project <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}