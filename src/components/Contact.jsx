import React, { useState } from 'react';
import { Github, Linkedin, Mail, MessageCircle, MapPin, Send, Sparkles, MessageSquare, Coffee, Instagram, CheckCircle, X } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqeeegyy"; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Message from Portfolio Website",
          _replyto: formData.email
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        if (data.errors) {
          setError(data.errors[0].message);
        } else {
          setError("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5 md:w-6 md:h-6" />, 
      href: "https://github.com/loopkyy", 
      label: "GitHub",
      color: "from-gray-800 to-gray-900",
      hover: "hover:from-gray-700 hover:to-gray-800"
    },
    { 
      icon: <Linkedin className="w-5 h-5 md:w-6 md:h-6" />, 
      href: "https://www.linkedin.com/in/rizky-riaadha-rismandana-472173370/", 
      label: "LinkedIn",
      color: "from-blue-700 to-blue-800",
      hover: "hover:from-blue-600 hover:to-blue-700"
    },
    { 
      icon: <Instagram className="w-5 h-5 md:w-6 md:h-6" />, 
      href: "https://www.instagram.com/riaadha.rizky/", 
      label: "Instagram",
      color: "from-purple-700 to-pink-700",
      hover: "hover:from-purple-600 hover:to-pink-600"
    },
    { 
      icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />, 
      href: "https://wa.me/6285382906012", 
      label: "WhatsApp",
      color: "from-green-700 to-emerald-700",
      hover: "hover:from-green-600 hover:to-emerald-600"
    },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4 md:w-5 md:h-5" />, text: "riaadha.rizky@gmail.com", value: "mailto:riaadha.rizky@gmail.com" },
    { icon: <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />, text: "+6285382906012", value: "https://wa.me/6285382906012" },
    { icon: <MapPin className="w-4 h-4 md:w-5 md:h-5" />, text: "Kuningan, Indonesia", value: "https://maps.app.goo.gl/AEyzA9uH5hwQvXxK6" },
  ];

  return (
    <section 
      id="contact" 
      className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at bottom, #0f172a 0%, #020617 100%)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 md:left-10 w-32 h-32 md:w-64 md:h-64 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-32 h-32 md:w-64 md:h-64 bg-cyan-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10 px-2">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-cyan-900/30 to-blue-900/30 text-cyan-300 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-cyan-800/50">
            <MessageSquare className="w-3 h-3 md:w-4 md:h-4" />
            GET IN TOUCH
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="block bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
              Let's Build
            </span>
            <span className="block md:inline mx-1 md:mx-2 lg:mx-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Something
            </span>
            <span className="block md:inline bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          
          <p className="text-gray-400 text-sm md:text-lg max-w-lg md:max-w-2xl mx-auto mb-8 md:mb-12 px-2">
            Have a project in mind? Let's collaborate and turn your ideas into reality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/*Contact Info & Social */}
          <div className="space-y-6 md:space-y-8">
            <div className="p-6 md:p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50">
              <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-6 md:mb-8 flex items-center gap-2">
                <Coffee className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                Let's Connect
              </h3>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-gray-900/30 border border-gray-800/30 hover:border-cyan-500/30 hover:bg-gray-800/30 transition-all duration-300 group active:scale-[0.98]"
                  >
                    <div className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-cyan-900/50 group-hover:to-blue-900/50 transition shrink-0">
                      <div className="text-cyan-400">{info.icon}</div>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition text-sm md:text-base truncate">
                      {info.text}
                    </span>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-base md:text-lg font-semibold text-gray-300 mb-3 md:mb-4">Find me online</h4>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative p-3 md:p-4 rounded-xl bg-gradient-to-br ${social.color} border border-gray-800/50 hover:scale-105 transition-all duration-300 overflow-hidden active:scale-[0.95]`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.hover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                      <div className="relative flex flex-col items-center gap-1.5 md:gap-2">
                        <div className="text-white">{social.icon}</div>
                        <span className="text-xs md:text-sm font-medium text-gray-200">{social.label}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            {isSubmitted && (
              <div className="absolute top-0 left-0 right-0 z-50 animate-slideDown">
                <div className="p-4 md:p-6 rounded-2xl bg-gradient-to-r from-emerald-900/40 to-green-900/40 backdrop-blur-sm border border-emerald-800/50">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="p-1.5 md:p-2 rounded-full bg-emerald-500/20">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-gray-200">Message Sent!</h4>
                    </div>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="p-1 rounded-lg hover:bg-emerald-900/30 transition"
                    >
                      <X className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
                    </button>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">
                    Thank you for reaching out! I'll get back to you within 24 hours. 🚀
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="absolute top-0 left-0 right-0 z-40 animate-slideDown">
                <div className="p-3 md:p-4 rounded-2xl bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm border border-red-800/50 mb-3 md:mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-red-300 text-sm">⚠️</span>
                      <p className="text-gray-300 text-xs md:text-sm flex-1">{error}</p>
                    </div>
                    <button 
                      onClick={() => setError('')}
                      className="p-1 rounded-lg hover:bg-red-900/30 transition shrink-0 ml-2"
                    >
                      <X className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="p-6 md:p-8 rounded-2xl bg-gray-900/40 backdrop-blur-sm border border-gray-800/50">
              <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-2 flex items-center gap-2">
                <Send className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                Send a Message
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8">Fill out the form below and I'll get back to you ASAP</p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="group">
                  <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2 group-focus-within:text-cyan-400 transition">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength="2"
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-gray-900/50 border border-gray-800/50 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition text-sm md:text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2 group-focus-within:text-purple-400 transition">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-gray-900/50 border border-gray-800/50 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition text-sm md:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs md:text-sm font-medium text-gray-400 mb-2 group-focus-within:text-pink-400 transition">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength="10"
                    rows={4}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-xl bg-gray-900/50 border border-gray-800/50 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`
                    group relative w-full py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg overflow-hidden
                    ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}
                  `}
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 group-hover:from-cyan-700 group-hover:to-purple-700 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Button Content */}
                  <div className="relative flex items-center justify-center gap-2 md:gap-3">
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="text-sm md:text-base">Processing...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm md:text-base">Send Message</span>
                        <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>
              </form>
              <p className="text-gray-500 text-xs md:text-sm text-center mt-4 md:mt-6">
                Your information is secure and will never be shared with third parties
              </p>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-12 md:mt-20 pt-8 md:pt-12 border-t border-gray-800/50">
          <h4 className="text-xl md:text-2xl font-bold text-gray-300 mb-4 md:mb-6">
            Ready to start your next project?
          </h4>
          <a 
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 hover:border-cyan-500/50 text-gray-300 hover:text-white transition-all duration-300 active:scale-95 md:hover:scale-105 w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
            <span>Start a Conversation</span>
            <MessageSquare className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}