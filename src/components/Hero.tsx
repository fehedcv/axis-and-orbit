import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-900 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-cream-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-cream-400 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 border border-cream-400 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-cream-300 rounded-full animate-pulse-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cream-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-cream-300 rounded-full animate-bounce-gentle opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cream-400 rounded-full animate-pulse-slow opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-cream-50 animate-slide-in-left">
            <h1 className="text-6xl lg:text-7xl font-display font-bold leading-tight mb-8 tracking-tight">
              <span className="text-cream-300 animate-fade-in">Flexible</span> Like Freelancers.
              <br />
              <span className="text-cream-300 animate-fade-in" style={{animationDelay: '0.3s'}}>Reliable</span> Like Agencies.
            </h1>
            <p className="text-2xl text-cream-200 mb-10 leading-relaxed font-light tracking-wide animate-slide-up" style={{animationDelay: '0.6s'}}>
              Premium digital delivery from Kerala to the world. We combine the agility of elite digital teams with the structure and reliability of established agencies
            </p>
            <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{animationDelay: '0.9s'}}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-cream-400 text-burgundy-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-cream-300 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl flex items-center justify-center group"
              >
                Get a Free Estimate
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-3 border-cream-200 text-cream-100 px-10 py-5 rounded-full font-bold text-xl hover:bg-cream-100 hover:text-burgundy-900 transition-all duration-500 transform hover:scale-110 flex items-center justify-center"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center animate-slide-in-right">
            <div className="relative">
              {/* Central Globe with Enhanced Animation */}
              <div className="w-40 h-40 bg-gradient-to-br from-cream-400 to-cream-500 rounded-full flex items-center justify-center shadow-2xl animate-float">
                <Globe className="h-20 w-20 text-burgundy-900 animate-spin-slow" />
              </div>
              
              {/* Multiple Orbiting Elements */}
              <div className="absolute -inset-24">
                <div className="w-full h-full border-3 border-cream-400/40 rounded-full animate-spin-slow"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3">
                  <div className="w-6 h-6 bg-cream-400 rounded-full animate-pulse-slow shadow-lg"></div>
                </div>
              </div>
              
              <div className="absolute -inset-36">
                <div className="w-full h-full border-2 border-cream-400/30 rounded-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-4 h-4 bg-cream-300 rounded-full animate-bounce-gentle shadow-md"></div>
                </div>
              </div>

              <div className="absolute -inset-48">
                <div className="w-full h-full border border-cream-400/20 rounded-full animate-spin-slow"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
                  <div className="w-3 h-3 bg-cream-200 rounded-full animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;