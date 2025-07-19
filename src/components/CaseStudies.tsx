import React from 'react';
import { ExternalLink, Clock, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';


const CaseStudies = () => {
  const cases = [
    {
      name: 'ZenMarket Japan',
      description: 'E-commerce platform connecting Japanese artisans with global customers',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      timeline: '5 weeks from idea to delivery',
      results: [
        '30% load speed increase',
        '150% conversion rate improvement',
        '50K+ users in first month'
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'FinTrack Singapore',
      description: 'Personal finance management app with AI-powered insights',
      tech: ['React Native', 'Python', 'TensorFlow', 'PostgreSQL'],
      timeline: '8 weeks from concept to App Store',
      results: [
        '95% user satisfaction rating',
        '40% reduction in financial stress',
        'Featured by Apple'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'EduConnect Korea',
      description: 'Online learning platform for K-12 students with gamification',
      tech: ['Vue.js', 'Laravel', 'Redis', 'WebRTC'],
      timeline: '6 weeks MVP delivery',
      results: [
        '200K+ student registrations',
        '85% course completion rate',
        'Partnerships with 50+ schools'
      ],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-br from-cream-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl font-display font-bold text-burgundy-900 mb-6 tracking-tight">Success Stories</h2>
          <p className="text-2xl text-burgundy-700 max-w-4xl mx-auto leading-relaxed font-light">
            Real projects, real results. See how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {cases.map((caseStudy, index) => (
              <Link to={`/case${index + 1}`} key={index}>
            <div
              className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-up border border-cream-200"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-display font-bold text-cream-100">{caseStudy.name}</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-burgundy-600 mb-6 leading-relaxed text-lg font-light">{caseStudy.description}</p>
                
                <div className="flex items-center text-burgundy-500 mb-6">
                  <Clock className="h-5 w-5 mr-3" />
                  <span className="font-medium">{caseStudy.timeline}</span>
                </div>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {caseStudy.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="text-sm bg-cream-200 text-burgundy-700 px-3 py-2 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-3">
                  {caseStudy.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-sage-600 mr-3 flex-shrink-0" />
                      <span className="text-burgundy-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;