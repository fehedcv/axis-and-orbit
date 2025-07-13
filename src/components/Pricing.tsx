import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const comparison = [
    { region: 'US', typical: '$50,000', axisOrbit: '$15,000' },
    { region: 'Singapore', typical: '$40,000', axisOrbit: '$14,000' },
    { region: 'Korea', typical: '$35,000', axisOrbit: '$13,000' },
    { region: 'Kerala (India)', typical: '$7,000', axisOrbit: 'Same Quality' }
  ];

  const packages = [
    {
      name: 'Starter MVP',
      price: '$8,000',
      duration: '4-6 weeks',
      description: 'Perfect for validating your idea with a functional prototype',
      features: [
        'Core functionality development',
        'Basic UI/UX design',
        'Mobile responsive',
        'Basic testing',
        '2 weeks support',
        'Source code delivery'
      ],
      popular: false
    },
    {
      name: 'Growth Plan',
      price: '$18,000',
      duration: '8-10 weeks',
      description: 'Comprehensive solution ready for market launch',
      features: [
        'Full-featured application',
        'Advanced UI/UX design',
        'Admin dashboard',
        'API integration',
        'Comprehensive testing',
        'SEO optimization',
        '1 month support',
        'Deployment assistance'
      ],
      popular: true
    },
    {
      name: 'Full-Stack + QA',
      price: '$35,000',
      duration: '12-16 weeks',
      description: 'Enterprise-grade solution with complete quality assurance',
      features: [
        'Enterprise architecture',
        'Advanced integrations',
        'Multi-platform support',
        'Advanced security',
        'Performance optimization',
        'Automated testing suite',
        '3 months support',
        'DevOps setup',
        'Training sessions'
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-cream-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl font-display font-bold text-burgundy-900 mb-6 tracking-tight">Transparent Pricing</h2>
          <p className="text-2xl text-burgundy-700 max-w-4xl mx-auto leading-relaxed font-light">
            Get premium quality at prices that make sense. Compare our rates with traditional agencies worldwide.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-20 animate-slide-up border border-cream-200">
          <div className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-cream-100 p-8">
            <h3 className="text-3xl font-display font-bold text-center">Regional Price Comparison</h3>
            <p className="text-center text-cream-200 mt-3 text-lg">For similar full-stack web applications</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-cream-100">
                <tr>
                  <th className="px-8 py-6 text-left font-display font-bold text-burgundy-900 text-lg">Region</th>
                  <th className="px-8 py-6 text-center font-display font-bold text-burgundy-900 text-lg">Typical Agency</th>
                  <th className="px-8 py-6 text-center font-display font-bold text-cream-600 text-lg">Axis & Orbit</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <tr key={index} className="border-t border-cream-200 hover:bg-cream-50 transition-colors duration-300">
                    <td className="px-8 py-6 font-semibold text-burgundy-900 text-lg">{row.region}</td>
                    <td className="px-8 py-6 text-center text-burgundy-600 text-lg">{row.typical}</td>
                    <td className="px-8 py-6 text-center font-bold text-cream-600 text-lg">{row.axisOrbit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Package Options */}
        <div className="grid lg:grid-cols-3 gap-10">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl animate-slide-up border-2 ${
                pkg.popular ? 'border-cream-400 transform scale-105 hover:scale-110' : 'border-cream-200 hover:-translate-y-2'
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-cream-400 to-cream-500 text-burgundy-900 text-center py-3 font-bold text-lg">
                  Most Popular
                </div>
              )}
              
              <div className={`p-10 ${pkg.popular ? 'pt-16' : ''}`}>
                <h3 className="text-3xl font-display font-bold text-burgundy-900 mb-3">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-display font-bold text-burgundy-900">{pkg.price}</span>
                  <span className="text-burgundy-600 ml-3 text-lg">• {pkg.duration}</span>
                </div>
                <p className="text-burgundy-600 mb-8 text-lg font-light leading-relaxed">{pkg.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-6 w-6 text-sage-600 mr-4 flex-shrink-0" />
                      <span className="text-burgundy-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className={`w-full py-4 px-8 rounded-full font-bold text-xl transition-all duration-500 flex items-center justify-center transform hover:scale-105 ${
                    pkg.popular 
                      ? 'bg-cream-400 text-burgundy-900 hover:bg-cream-300 shadow-lg hover:shadow-xl' 
                      : 'bg-burgundy-800 text-cream-100 hover:bg-burgundy-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-3 h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-slide-up">
          <p className="text-burgundy-600 mb-6 text-xl font-light">Need a custom solution? We're flexible.</p>
          <button 
            onClick={scrollToContact}
            className="text-cream-600 font-bold hover:text-cream-700 transition-colors text-xl"
          >
            Contact us for a personalized quote →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;