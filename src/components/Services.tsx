import React from 'react';
import { Smartphone, Palette, TestTube, Server, Users, Rocket, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications built with modern frameworks',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      icon: Palette,
      title: 'Web Design (UI/UX)',
      description: 'Beautiful, user-centered designs that convert visitors into customers',
      technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
    },
    {
      icon: TestTube,
      title: 'QA & Testing',
      description: 'Comprehensive testing strategies ensuring bug-free, reliable software',
      technologies: ['Automated Testing', 'Manual QA', 'Performance Testing']
    },
    {
      icon: Server,
      title: 'DevOps',
      description: 'Streamlined deployment pipelines and infrastructure management',
      technologies: ['AWS', 'Docker', 'CI/CD', 'Monitoring']
    },
    {
      icon: Users,
      title: 'Project Management',
      description: 'Expert coordination ensuring projects stay on time and within budget',
      technologies: ['Agile', 'Scrum', 'Kanban', 'Risk Management']
    },
    {
      icon: Rocket,
      title: 'MVP Acceleration',
      description: 'Rapid development of minimum viable products to test market fit',
      technologies: ['Rapid Prototyping', 'Market Validation', 'User Feedback']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl font-display font-bold text-burgundy-900 mb-6 tracking-tight">Our Services</h2>
          <p className="text-2xl text-burgundy-700 max-w-4xl mx-auto leading-relaxed font-light">
            From concept to deployment, we provide end-to-end digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-cream-50 to-white border-2 border-cream-200 rounded-2xl p-10 hover:border-burgundy-300 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-burgundy-800 to-burgundy-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <service.icon className="h-10 w-10 text-cream-100" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-burgundy-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-burgundy-600 mb-6 leading-relaxed text-lg font-light">{service.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {service.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="text-sm bg-cream-200 text-burgundy-700 px-4 py-2 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              
              <button 
                onClick={scrollToContact}
                className="group/btn flex items-center text-burgundy-700 font-bold hover:text-burgundy-800 transition-all duration-300 text-lg"
              >
                Request Quote
                <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;