import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code, ArrowRight, Sparkles, Zap, Layers, Globe } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "Nexus Commerce",
      desc: "Modern e-commerce platform with real-time analytics, AI recommendations, and seamless payment integration.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Stripe", "Tailwind"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      category: "fullstack",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "FlowTask Pro",
      desc: "Advanced task management with team collaboration, time tracking, and AI-powered productivity insights.",
      tech: ["React", "Firebase", "Redux", "Tailwind", "Chart.js"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      category: "frontend",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Meteora Dashboard",
      desc: "Real-time weather analytics platform with predictive modeling and interactive data visualization.",
      tech: ["React", "D3.js", "Express", "Redis", "Socket.io"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      category: "fullstack",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Crypto Tracker",
      desc: "Cryptocurrency tracking dashboard with real-time market data, portfolio management, and alerts.",
      tech: ["Vue 3", "Vuetify", "WebSocket", "Firebase"],
      image: "https://images.unsplash.com/photo-1620336655055-bd87c5f1f8a8?w=800&h=600&fit=crop",
      category: "frontend",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "HealthSync API",
      desc: "Healthcare API platform for medical data management with HIPAA compliance and advanced security.",
      tech: ["Node.js", "PostgreSQL", "Docker", "Redis", "JWT"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      category: "backend",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Design System Pro",
      desc: "Comprehensive design system with React components, Figma integration, and documentation.",
      tech: ["React", "Storybook", "Figma API", "TypeScript", "SCSS"],
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop",
      category: "frontend",
      github: "#",
      live: "#",
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      id="projects" 
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 100%)'
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-t from-gray-900/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 text-purple-300 text-sm font-medium mb-6 border border-purple-800/50">
            <Sparkles className="w-4 h-4" />
            PORTFOLIO SHOWCASE
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Recent
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient mx-4">
              Works
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Transforming ideas into <span className="text-cyan-300">innovative solutions</span> through code and creativity
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  relative group px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${activeFilter === filter.id 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-900/30' 
                    : 'bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800/50 border border-gray-800/50'
                  }
                `}
              >
                <span className="relative z-10">{filter.label}</span>
                <span className={`ml-2 text-xs ${activeFilter === filter.id ? 'text-white/80' : 'text-gray-500'}`}>
                  ({filter.count})
                </span>
                {activeFilter === filter.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-sm"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/90 backdrop-blur-sm border border-gray-800/50"></div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/20 via-transparent to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                    <Zap className="w-3 h-3 text-amber-400" />
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
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="px-3 py-1.5 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50">
                    <span className="text-xs font-medium text-gray-300 capitalize">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:text-white transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>
                  </div>
                  <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-purple-900/30 transition">
                    <Globe className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition" />
                  </div>
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

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800/50">
                  <a 
                    href={project.github}
                    className="flex-1 group/btn"
                  >
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-purple-500/30 transition-all duration-300">
                      <Code className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                  </a>
                  <a 
                    href={project.live}
                    className="flex-1 group/btn"
                  >
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 hover:from-purple-600/40 hover:to-pink-600/40 hover:text-white hover:scale-105 transition-all duration-300">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <a 
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 hover:border-purple-500/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}