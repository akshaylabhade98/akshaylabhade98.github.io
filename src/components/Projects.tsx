import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.',
      image: new URL('../assets/Portfolio.png', import.meta.url).href,
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://akshaylabhade98.github.io/',
      githubUrl: 'https://github.com/akshaylabhade98/akshaylabhade98.github.io'
    },
    {
      title: 'Shiprazor.com',
      description: 'I have made this in Wordpress using Elementor page editor. It is a logistics website that provides shipping and freight services worldwide.',
      image: new URL('../assets/Shiprazor website.png', import.meta.url).href,
      technologies: ['WordPress', 'Elementor', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://shiprazor.com/',
      // githubUrl: '#'
    },
    {
      title: 'E42.ai',
      description: 'E42.ai Website, made on Wordpress! It is an AI-powered platform for automating business processes.',
      image: new URL('../assets/E42.ai website.png', import.meta.url).href,
      technologies: ['Elementor', 'WordPress', 'CPT', 'ACF', 'JavaScript'],
      liveUrl: 'https://e42.ai/',
      // githubUrl: '#'
    },
    {
      title: 'ROI Calculator for E42.ai ',
      description: 'In this i have used the JAVASCRIPT for calculation and UI in Elementor. ',
      image: new URL('../assets/ROI Calculator.png', import.meta.url).href,
      technologies: ['JavaScript', 'Elementor'],
      liveUrl: 'https://e42.ai/roi-calculator/',
      // githubUrl: '#'
    },
    {
      title: 'AI Co-worker Marketplace',
      description: 'AI Co-worker Marketplace, made on Wordpress! in this I have used ACF for dynamic content and CPT for custom post types.',
      image: new URL('../assets/AI Co-worker Marketplace.png', import.meta.url).href,
      technologies: ['WordPress', 'Elementor-pro', 'loop Post Grid'],
      liveUrl: 'https://e42.ai/marketplace/',
      // githubUrl: '#'
    }
    ,
    {
      title: 'APautomation.solutions',
      description: 'APautomation.solutions, made on Wordpress! in this I have Created custom themes and plugins from scratch.',
      image: new URL('../assets/APautomation Website.png', import.meta.url).href,
      technologies: ['Wordpress', 'Elementor', 'MySQL'],
      liveUrl: 'https://apautomation.solutions/',
      // githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-12xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden group relative"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[2px]">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl"></div>
                </div>
                
                <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-left-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;