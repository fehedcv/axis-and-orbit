import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Danish Roshan',
      role: 'Founder and Project Manager',
      location: 'Daejeon, Korea',
      flag: '🇮🇳',
      since: '2025',
      avatar: 'https://raw.githubusercontent.com/fehedcv/axis-and-orbit/refs/heads/main/img/danish.jpeg'
    },
    {
      name: 'Fahad Mohammed Kabeer',
      role: 'Product Manager and Python Developer',
      location: 'Kerala, India',
      flag: '🇮🇳',
      since: '2024',
      avatar: 'https://raw.githubusercontent.com/fehedcv/axis-and-orbit/refs/heads/main/img/fahad.jpeg'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl font-display font-bold text-burgundy-900 mb-6 tracking-tight">Meet Our Team</h2>
          <p className="text-2xl text-burgundy-700 max-w-4xl mx-auto leading-relaxed font-light">
            Talented professionals from Kerala delivering world-class solutions with local expertise and global perspective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-cream-50 to-cream-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-slide-up border border-cream-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative inline-block mb-6">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-500 border-4 border-cream-300"
                />
                <div className="absolute -top-2 -right-2 text-3xl animate-bounce-gentle">{member.flag}</div>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-burgundy-900 mb-2">{member.name}</h3>
              <p className="text-cream-600 font-semibold mb-4 text-lg">{member.role}</p>
              
              <div className="space-y-3 text-burgundy-600">
                <div className="flex items-center justify-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span className="font-medium">{member.location}</span>
                </div>
                {/*<div className="flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span className="font-medium">Freelancer since {member.since}</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-slide-up">
          <div className="bg-gradient-to-r from-cream-100 to-cream-200 rounded-2xl p-12 max-w-3xl mx-auto border border-cream-300">
            <h3 className="text-3xl font-display font-bold text-burgundy-900 mb-6">Want to Join Axis & Orbit?</h3>
            <p className="text-burgundy-700 mb-8 text-xl font-light leading-relaxed">
              We're always looking for talented professionals to join our network of freelancers.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-burgundy-800 text-cream-100 px-10 py-4 rounded-full font-bold text-xl hover:bg-burgundy-700 transition-all duration-500 transform hover:scale-110 hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;