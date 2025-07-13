import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 animate-fade-in">
            <img
              src="img/LOGO-removebg-preview.png"
              alt="Axis & Orbit Logo" 
              className="h-15 w-2/5 transition-transform duration-300 hover:scale-105"
            />
            {/* <span className="text-2xl font-display font-bold text-burgundy-900 tracking-tight">
              Axis & Orbit
            </span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-burgundy-700 hover:text-cream-600 transition-all duration-300 font-medium text-lg tracking-wide hover:scale-105">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-burgundy-700 hover:text-cream-600 transition-all duration-300 font-medium text-lg tracking-wide hover:scale-105">
              Services
            </button>
            <button onClick={() => scrollToSection('case-studies')} className="text-burgundy-700 hover:text-cream-600 transition-all duration-300 font-medium text-lg tracking-wide hover:scale-105">
              Case Studies
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-burgundy-700 hover:text-cream-600 transition-all duration-300 font-medium text-lg tracking-wide hover:scale-105">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-burgundy-800 text-cream-100 px-8 py-3 rounded-full hover:bg-burgundy-700 transition-all duration-300 font-semibold text-lg tracking-wide transform hover:scale-105 hover:shadow-lg">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-burgundy-700 hover:text-cream-600 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-cream-200 animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-burgundy-700 hover:text-cream-600 transition-colors duration-300 font-medium text-lg">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-burgundy-700 hover:text-cream-600 transition-colors duration-300 font-medium text-lg">
                Services
              </button>
              <button onClick={() => scrollToSection('case-studies')} className="block w-full text-left px-4 py-3 text-burgundy-700 hover:text-cream-600 transition-colors duration-300 font-medium text-lg">
                Case Studies
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-3 text-burgundy-700 hover:text-cream-600 transition-colors duration-300 font-medium text-lg">
                Pricing
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 bg-burgundy-800 text-cream-100 rounded-lg hover:bg-burgundy-700 transition-colors duration-300 font-semibold text-lg mt-2">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;