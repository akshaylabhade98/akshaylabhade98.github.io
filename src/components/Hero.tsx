import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import resumePdf from '../assets/Akshay_Labhade_CV.pdf';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 animate-pulse hover:scale-110 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AL
                </span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-800 dark:text-gray-200 animate-fade-in-up">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Akshay Labhade
            </span>
          </h1>
          
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Full Stack Developer & Problem Solver
            </p>
          
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Passionate software developer with expertise in React, Python, and modern web technologies. 
            I love building efficient solutions and exploring new technologies to solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            
                  <a
                    href={resumePdf}
                    download="Akshay_Labhade_CV.pdf"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700 flex items-center justify-center"
                  >
                    <Download className="inline-block w-5 h-5 mr-2" />
                    Download Resume
                  </a>
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              View My Work
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            {[
              { Icon: Github, href: 'https://github.com/akshaylabhade98/', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/akshaylabhade/', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:akshaylabhade98@gmail.com', label: 'Email' }
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors duration-300"
              aria-label="Scroll down"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;