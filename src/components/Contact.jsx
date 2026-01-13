import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/50">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Let's Work Together
        </h3>
        <p className="text-slate-300 mb-12">
          Have a project in mind? Feel free to reach out and let's create something amazing together.
        </p>
        <div className="flex gap-6 justify-center mb-8">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-700 rounded-full hover:bg-cyan-500 transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-slate-700 rounded-full hover:bg-cyan-500 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:hello@example.com"
            className="p-4 bg-slate-700 rounded-full hover:bg-cyan-500 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        <a 
          href="mailto:hello@example.com"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:opacity-90 transition font-medium"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
