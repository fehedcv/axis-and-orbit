import React from 'react';
import { Linkedin, Github, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-burgundy-900 to-burgundy-800 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <img 
                src="/img/LOGO-removebg-preview.png"
                alt="Axis & Orbit Logo" 
                className="h-12 w-auto"
              />
              <span className="text-3xl font-display font-bold">Axis & Orbit</span>
            </div>
            <p className="text-cream-200 leading-relaxed mb-8 max-w-md text-lg font-light">
              Premium digital delivery from Kerala to the world. We combine freelancer flexibility 
              with agency reliability to deliver exceptional results for businesses worldwide.
            </p>
            <div className="space-y-4">
              <div className="flex items-center group">
                <MapPin className="h-5 w-5 mr-4 text-cream-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-cream-200 text-lg">Kochi, Kerala, India</span>
              </div>
              <div className="flex items-center group">
                <Mail className="h-5 w-5 mr-4 text-cream-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-cream-200 text-lg">hello@axisandorbit.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-8">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-cream-200 hover:text-cream-400 transition-all duration-300 text-lg font-light hover:translate-x-2 transform"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-cream-200 hover:text-cream-400 transition-all duration-300 text-lg font-light hover:translate-x-2 transform"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('case-studies')}
                  className="text-cream-200 hover:text-cream-400 transition-all duration-300 text-lg font-light hover:translate-x-2 transform"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-cream-200 hover:text-cream-400 transition-all duration-300 text-lg font-light hover:translate-x-2 transform"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-cream-200 hover:text-cream-400 transition-all duration-300 text-lg font-light hover:translate-x-2 transform"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-8">Services</h3>
            <ul className="space-y-4 text-cream-200 text-lg font-light">
              <li>App Development</li>
              <li>Web Design (UI/UX)</li>
              <li>QA & Testing</li>
              <li>DevOps</li>
              <li>Project Management</li>
              <li>MVP Acceleration</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-burgundy-700 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-300 mb-6 md:mb-0 text-lg">
              © 2025 Axis & Orbit. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-8">
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors text-lg">
                Privacy Policy
              </a>
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors text-lg">
                Terms of Service
              </a>
              
              <div className="flex items-center space-x-6 ml-8">
                <a href="#" className="text-cream-300 hover:text-cream-400 transition-all duration-300 transform hover:scale-125">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-cream-300 hover:text-cream-400 transition-all duration-300 transform hover:scale-125">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-cream-300 hover:text-cream-400 transition-all duration-300 transform hover:scale-125">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;