import React from 'react';
import { Globe, Navigation, Zap, Briefcase, DollarSign, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Global Quality from India',
      description: 'World-class talent delivering international standards at competitive rates'
    },
    {
      icon: Navigation,
      title: 'Structured Agile Delivery',
      description: 'Proven methodologies with clear milestones and regular communication'
    },
    {
      icon: Zap,
      title: 'MVPs in 6 Weeks',
      description: 'Rapid prototyping and deployment to validate your ideas quickly'
    },
    {
      icon: Briefcase,
      title: 'Dedicated PMs',
      description: 'Experienced project managers ensuring smooth execution and delivery'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden costs, clear estimates, and flexible payment options'
    },
    {
      icon: Shield,
      title: 'IP Protection',
      description: 'Your intellectual property remains secure with comprehensive NDAs'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-cream-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl font-display font-bold text-burgundy-900 mb-6 tracking-tight">Why Choose Axis & Orbit?</h2>
          <p className="text-2xl text-burgundy-700 max-w-4xl mx-auto leading-relaxed font-light">
            We bridge the gap between freelancer flexibility and agency reliability, delivering exceptional results for businesses worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-slide-up border border-cream-200"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cream-200 to-cream-300 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                <benefit.icon className="h-10 w-10 text-burgundy-700 group-hover:text-burgundy-800 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-display font-bold text-burgundy-900 mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-burgundy-600 leading-relaxed text-lg font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;