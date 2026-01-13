import React from 'react';

export default function About() {
  const skills = [
    "React", "JavaScript", "TypeScript", "Node.js",
    "Tailwind CSS", "MongoDB", "Git", "REST API"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Hi! I'm a passionate full-stack developer with 3+ years of experience building web applications. 
              I love turning complex problems into simple, beautiful solutions.
            </p>
            <p className="text-slate-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical writing.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Skills</h4>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-full text-sm hover:border-cyan-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
