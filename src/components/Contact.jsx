import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Send, Sparkles, MessageSquare, Coffee, Rocket, CheckCircle, X } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: "https://github.com", 
      label: "GitHub",
      color: "from-gray-800 to-gray-900",
      hover: "hover:from-gray-700 hover:to-gray-800"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "https://linkedin.com", 
      label: "LinkedIn",
      color: "from-blue-700 to-blue-800",
      hover: "hover:from-blue-600 hover:to-blue-700"
    },
    { 
      icon: <Mail className="w-6 h-6" />, 
      href: "mailto:hello@example.com", 
      label: "Email",
      color: "from-purple-700 to-pink-700",
      hover: "hover:from-purple-600 hover:to-pink-600"
    },
    { 
      icon: <Phone className="w-6 h-6" />, 
      href: "tel:+1234567890", 
      label: "Phone",
      color: "from-green-700 to-emerald-700",
      hover: "hover:from-green-600 hover:to-emerald-600"
    },
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, text: "hello@rizky.dev", value: "mailto:hello@rizky.dev" },
    { icon: <Phone className="w-5 h-5" />, text: "+62 812 3456 7890", value: "tel:+6281234567890" },
    { icon: <MapPin className="w-5 h-5" />, text: "Jakarta, Indonesia", value: "#" },
  ];

  return (
    <section 
      id="contact" 
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at bottom, #0f172a 0%, #020617 100%)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-900/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-900/30 to-blue-900/30 text-cyan-300 text-sm font-medium mb-6 border border-cyan-800/50">
            <MessageSquare className="w-4 h-4" />
            GET IN TOUCH
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Let's Build
            </span>
            <span className="mx-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Something
            </span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Have a project in mind? Let's collaborate and turn your ideas into reality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50">
              <h3 className="text-2xl font-bold text-gray-200 mb-8 flex items-center gap-2">
                <Coffee className="w-6 h-6 text-amber-400" />
                Let's Connect
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.value}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/30 border border-gray-800/30 hover:border-cyan-500/30 hover:bg-gray-800/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-cyan-900/50 group-hover:to-blue-900/50 transition">
                      <div className="text-cyan-400">{info.icon}</div>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition">{info.text}</span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-4">Find me online</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-4 rounded-xl bg-gradient-to-br ${social.color} border border-gray-800/50 hover:scale-105 transition-all duration-300 overflow-hidden`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.hover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className="relative flex flex-col items-center gap-2">
                        <div className="text-white">{social.icon}</div>
                        <span className="text-sm font-medium text-gray-200">{social.label}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-800/30">
              <div className="flex items-center justify-between mb-6">
                <Rocket className="w-8 h-8 text-purple-400" />
                <Sparkles className="w-6 h-6 text-pink-400 animate-pulse" />
              </div>
              <h4 className="text-xl font-bold text-gray-200 mb-2">Quick Response</h4>
              <p className="text-gray-400 text-sm mb-4">I typically reply within 24 hours</p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">100%</div>
                  <div className="text-gray-400 text-sm">Response Rate</div>
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-purple-700/50 to-transparent"></div>
                <div className="flex-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">24h</div>
                  <div className="text-gray-400 text-sm">Avg. Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            {/* Success Message */}
            {isSubmitted && (
              <div className="absolute top-0 left-0 right-0 z-50 animate-slideDown">
                <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-900/40 to-green-900/40 backdrop-blur-sm border border-emerald-800/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-emerald-500/20">
                        <CheckCircle className="w-6 h-6 text-emerald-400" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-200">Message Sent!</h4>
                    </div>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="p-1 rounded-lg hover:bg-emerald-900/30 transition"
                    >
                      <X className="w-4 h-4 text-emerald-400" />
                    </button>
                  </div>
                  <p className="text-gray-300">
                    Thank you for reaching out! I'll get back to you within 24 hours. 🚀
                  </p>
                </div>
              </div>
            )}

            <div className="p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50">
              <h3 className="text-2xl font-bold text-gray-200 mb-2 flex items-center gap-2">
                <Send className="w-6 h-6 text-cyan-400" />
                Send a Message
              </h3>
              <p className="text-gray-400 mb-8">Fill out the form below and I'll get back to you ASAP</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-cyan-400 transition">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800/50 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-purple-400 transition">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800/50 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-pink-400 transition">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-800/50 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`
                    group relative w-full py-4 rounded-xl font-semibold text-lg overflow-hidden
                    ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}
                  `}
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 group-hover:from-cyan-700 group-hover:to-purple-700 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Button Content */}
                  <div className="relative flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>
              </form>

              {/* Privacy Note */}
              <p className="text-gray-500 text-sm text-center mt-6">
                Your information is secure and will never be shared with third parties
              </p>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-20 pt-12 border-t border-gray-800/50">
          <h4 className="text-2xl font-bold text-gray-300 mb-6">
            Ready to start your next project?
          </h4>
          <a 
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 hover:border-cyan-500/50 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            <span>Start a Conversation</span>
            <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}