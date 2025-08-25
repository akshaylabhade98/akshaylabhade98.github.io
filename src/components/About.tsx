import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      Icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices'
    },
    {
      Icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, user-friendly interfaces with attention to detail'
    },
    {
      Icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized applications for the best user experience'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate software developer with a strong foundation in computer engineering and 
                hands-on experience in various programming languages and technologies. My journey in 
                software development started with curiosity and has evolved into a love for solving 
                complex problems with elegant solutions.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I specialize in web technologies including 
                React. I'm always eager to learn new technologies and apply them to 
                create innovative solutions. When I'm not coding, you'll find me exploring new 
                frameworks and contributing to open-source projects.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'React', 'PHP', 'SQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid gap-6">
              {highlights.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
                      <p className="text-gray-600">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;