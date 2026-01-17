import React from 'react';
import { 
  Brain, Users, Target, Coffee, ArrowRight,
  Code2, Palette, Globe, Database, Server, 
  Cpu, Zap, FileCode, Atom, Terminal,
  Box, Code
} from 'lucide-react';

export default function About() {
  const skills = [
    { 
      name: "HTML", 
      level: 90, 
      color: "from-orange-500 to-yellow-500",
      icon: <Code2 className="w-4 h-4 md:w-5 md:h-5" />,
      bgColor: "bg-orange-500/10"
    },
    { 
      name: "CSS", 
      level: 88, 
      color: "from-blue-500 to-cyan-500",
      icon: <Palette className="w-4 h-4 md:w-5 md:h-5" />,
      bgColor: "bg-blue-500/10"
    },
    { 
      name: "JavaScript", 
      level: 85, 
      color: "from-yellow-500 to-amber-500",
      icon: <FileCode className="w-4 h-4 md:w-5 md:h-5" />,
      bgColor: "bg-yellow-500/10"
    },
    { 
      name: "React", 
      level: 85, 
      color: "from-cyan-500 to-blue-500",
      icon: <Atom className="w-4 h-4 md:w-5 md:h-5" />,
      bgColor: "bg-cyan-500/10"
    },
    { 
      name: "PHP", 
      level: 75, 
      color: "from-purple-500 to-pink-500",
      icon: <Terminal className="w-4 h-4 md:w-5 md:h-5" />,
      bgColor: "bg-purple-500/10"
    },
    { 
      name: "CodeIgniter 4", 
      level: 73, 
      color: "from-indigo-500 to-blue-500",
      icon: <Box className="w-4 h-4 md:w-5 md:h-5" />,
      bgColor: "bg-indigo-500/10"
    },
    { 
      name: "Laravel", 
      level: 75, 
      color: "from-red-500 to-pink-500",
      icon: <Server className="w-4 h-4 md:w-5 md:h-5" />,
      bgColor: "bg-red-500/10"
    },
    { 
      name: "SQL/MySQL", 
      level: 78, 
      color: "from-emerald-500 to-green-500",
      icon: <Database className="w-4 h-4 md:w-5 md:h-5" />,
      bgColor: "bg-emerald-500/10"
    },
  ];

  const passions = [
    { 
      icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />, 
      title: "Problem Solving", 
      desc: "Love breaking down complex challenges",
      color: "from-purple-500/20 to-pink-500/20"
    },
    { 
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />, 
      title: "Performance", 
      desc: "Optimizing for speed and efficiency",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    { 
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />, 
      title: "Collaboration", 
      desc: "Thrive in team environments",
      color: "from-emerald-500/20 to-green-500/20"
    },
    { 
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />, 
      title: "Clean Code", 
      desc: "Writing maintainable, scalable solutions",
      color: "from-amber-500/20 to-orange-500/20"
    },
  ];

  return (
    <section 
      id="about" 
      className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-cyan-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-2">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-800/50 mb-6 md:mb-8">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <span className="text-purple-300 font-medium text-xs md:text-sm">ABOUT ME</span>
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8">
            <span className="block bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Beyond the
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mt-1 md:mt-2">
              Code
            </span>
          </h2>
          
          <p className="text-gray-400 text-sm md:text-lg max-w-lg md:max-w-2xl mx-auto px-2">
            Passionate developer crafting digital solutions with precision and creativity
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-8 md:space-y-10">
            {/* About Card */}
            <div className="relative group">
              <div className="relative p-6 md:p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <Code className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-200">My Journey</h3>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    Hi, I'm <span className="text-cyan-400 font-semibold">Rizky Riaadha Rismandana</span> — an Informatics Engineering student with a strong interest in web development, especially in building modern and user-friendly web applications.
                  </p>
                  
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    I enjoy learning new technologies and turning ideas into clean, functional websites using HTML, CSS, JavaScript, and React, supported by backend fundamentals with PHP and Laravel.
                  </p>
                  
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    I'm passionate about continuous learning, problem-solving, and growing into a professional developer through real-world projects and hands-on experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Passions Grid */}
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-gray-200 mb-6 md:mb-8 flex items-center gap-3">
                <div className="p-1.5 md:p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Brain className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                </div>
                What Drives Me
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {passions.map((passion, index) => (
                  <div 
                    key={index}
                    className="group relative p-4 md:p-5 rounded-xl bg-gray-900/30 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 active:translate-y-[-2px] md:hover:translate-y-[-4px]"
                  >
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className={`p-2 md:p-3 rounded-lg bg-gradient-to-br ${passion.color} shrink-0`}>
                        {React.cloneElement(passion.icon, { 
                          className: "w-4 h-4 md:w-5 md:h-5 text-white" 
                        })}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-gray-200 text-sm md:text-base mb-1 truncate">{passion.title}</h5>
                        <p className="text-xs md:text-sm text-gray-400 line-clamp-2">{passion.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8 md:space-y-10">
            {/* Skills Card */}
            <div className="relative group">
              <div className="relative p-6 md:p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 md:mb-10 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 md:p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                      <Zap className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-200">Technical Skills</h3>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400">
                    <span className="text-cyan-400">Proficiency</span> Level
                  </div>
                </div>

                <div className="space-y-5 md:space-y-7">
                  {skills.map((skill, index) => (
                    <div key={index} className="group/skill">
                      <div className="flex items-center justify-between mb-2 md:mb-3">
                        <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                          <div className={`p-1.5 md:p-2.5 rounded-lg ${skill.bgColor} border border-gray-800/50 shrink-0`}>
                            {skill.icon}
                          </div>
                          <span className="font-medium text-gray-200 text-sm md:text-base truncate">{skill.name}</span>
                        </div>
                        <span className="text-xs md:text-sm font-medium text-gray-300 bg-gray-800/50 px-2 py-0.5 md:px-3 md:py-1 rounded-full shrink-0 ml-2">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative overflow-hidden rounded-2xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-cyan-600/30"></div>
              <div className="relative p-6 md:p-8 bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-sm border border-gray-800/50">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 shrink-0">
                    <Coffee className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-200 mb-2 md:mb-3">Let's Build Together</h4>
                    <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8">
                      Have an idea? Let's collaborate and create something extraordinary.
                    </p>
                    <a 
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 active:scale-95 md:hover:scale-105 group/btn"
                    >
                      <span>Start a Conversation</span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-2 transition-transform" />
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