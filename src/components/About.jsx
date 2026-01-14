import React, { useState } from 'react';
import { Code2, Palette, Globe, Database, Cloud, Cpu, Zap, Brain, Rocket, Target, Users, Coffee } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('skills');
  
  const skills = [
    { name: "React", icon: <Code2 className="w-5 h-5" />, level: 95, color: "from-cyan-400 to-blue-500" },
    { name: "TypeScript", icon: <Cpu className="w-5 h-5" />, level: 90, color: "from-blue-400 to-indigo-500" },
    { name: "Node.js", icon: <Database className="w-5 h-5" />, level: 88, color: "from-emerald-400 to-green-500" },
    { name: "Next.js", icon: <Rocket className="w-5 h-5" />, level: 92, color: "from-gray-400 to-gray-600" },
    { name: "Tailwind", icon: <Palette className="w-5 h-5" />, level: 96, color: "from-teal-400 to-cyan-500" },
    { name: "MongoDB", icon: <Cloud className="w-5 h-5" />, level: 85, color: "from-green-400 to-emerald-500" },
    { name: "Git", icon: <GitBranch className="w-5 h-5" />, level: 90, color: "from-orange-400 to-red-500" },
    { name: "REST API", icon: <Globe className="w-5 h-5" />, level: 87, color: "from-purple-400 to-pink-500" },
  ];

  const passions = [
    { icon: <Brain />, title: "Problem Solving", desc: "Love breaking down complex challenges" },
    { icon: <Zap />, title: "Performance", desc: "Optimizing for speed and efficiency" },
    { icon: <Users />, title: "Collaboration", desc: "Thrive in team environments" },
    { icon: <Target />, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-900/5 to-cyan-900/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 text-purple-300 text-sm font-medium mb-4 border border-purple-800/50">
            ABOUT ME
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Experiences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="relative p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                Hello! I'm <span className="text-cyan-300 font-semibold">Rizky</span>, a passionate full-stack developer with over 3 years of experience transforming ideas into 
                <span className="text-purple-300"> functional, elegant digital solutions</span>.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                My journey began with a curiosity about how things work, which evolved into a deep love for 
                <span className="text-pink-300"> creating seamless user experiences</span> and 
                <span className="text-emerald-300"> scalable architectures</span>.
              </p>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-gray-800/50">
                <div className="flex-1 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
                <div className="flex-1 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">50+</div>
                  <div className="text-gray-400 text-sm">Projects Delivered</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
                <div className="flex-1 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">100%</div>
                  <div className="text-gray-400 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Passions */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-gray-300 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                What Drives Me
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {passions.map((passion, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-purple-900/50 group-hover:to-pink-900/50 transition">
                        {React.cloneElement(passion.icon, { 
                          className: "w-4 h-4 text-purple-400" 
                        })}
                      </div>
                      <span className="font-medium text-gray-200">{passion.title}</span>
                    </div>
                    <p className="text-sm text-gray-400">{passion.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-200 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-amber-400" />
                  Technical Skills
                </h3>
                <div className="text-sm text-gray-400">
                  <span className="text-cyan-400">Proficiency</span> Level
                </div>
              </div>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-20`}>
                          <div className="text-gray-200">{skill.icon}</div>
                        </div>
                        <span className="font-medium text-gray-200">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: '0%' }}
                        onAnimationEnd={(e) => {
                          e.currentTarget.style.width = `${skill.level}%`;
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative overflow-hidden rounded-2xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative p-8 bg-gray-900/60 backdrop-blur-sm border border-gray-800/50">
                <div className="flex items-start gap-4">
                  <Coffee className="w-10 h-10 text-amber-400" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">Let's Build Something Amazing</h4>
                    <p className="text-gray-400 mb-6">
                      Have a project in mind? I'd love to help bring your vision to life.
                    </p>
                    <a 
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105"
                    >
                      Start a Conversation
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Import tambahan untuk icon
import { GitBranch, ArrowRight } from 'lucide-react';