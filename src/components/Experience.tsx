import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Wordpress Developer',
      company: 'E42.ai',
      company_website: 'https://e42.ai',
      location: 'Remote',
      period: 'Apr 2022 - Present',
      description: 'Led the development and optimization of enterprise-level WordPress sites, focusing on performance, scalability, and backend integration.',
      achievements: [
        'Reduced site load time by 35% by optimizing assets and implementing lazy loading.',
        'Developed Java-based backend systems.',
        'Implemented database solutions with MySQL and MongoDB.'
      ]
    },
    {
      title: 'Wordpress Developer',
      company: 'NeurosofTech',
      company_website: 'https://neurosoftech.in/',
      location: 'Pune, India',
      period: 'Oct 2020 - Feb 2022',
      description: 'Designed and maintained marketing websites, ensuring SEO compliance and automating content workflows for improved efficiency.',
      achievements: [
        'Built 15+ high-traffic marketing websites with SEO and performance best practices.',
        'Created a plugin that reduced manual content entry by automating REST API sync.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Pangea Global Services',
      company_website: 'https://pangeaglobalservices.com/',
      location: 'Pune, India',
      period: 'Jan 2019 - Sep 2020',
      description: 'Developed custom websites for clients, delivering tailored solutions with a focus on speed, reliability, and user experience.',
      achievements: [
        'Successfully delivered 10+ client websites with custom functionalities and highperformance.',
        'Reduced page load times by optimizing images, scripts, and using caching plugins.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-px"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform md:-translate-x-2 z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <a href={exp.company_website} target="_blank" rel="noopener noreferrer">
                      <div className="ml-16 md:ml-0 bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-blue-600 mb-3">{exp.company}</h4>

                        <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2 text-gray-600">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </a>
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

export default Experience;