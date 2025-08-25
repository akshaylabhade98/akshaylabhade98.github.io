import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Akshay Labhade
              </h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Passionate about crafting beautiful and functional web experiences. 
                Let's connect and create something amazing together!
              </p>
            </div>
            
            <div className="flex justify-center space-x-6">
              {[
                { Icon: Github, href: 'https://github.com/akshaylabhade', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/akshaylabhade/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:akshay.labhade98@gmail.com', label: 'Email' }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 flex items-center justify-center space-x-2">
                <span>Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>by Akshay Labhade</span>
              </p>
              <p className="text-gray-500 text-sm mt-2">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;