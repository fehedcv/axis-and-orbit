import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="animate-slide-in-left">
            <h2 className="text-5xl font-display font-bold text-burgundy-900 mb-8 tracking-tight">Ready to Get Started?</h2>
            <p className="text-2xl text-burgundy-700 mb-12 leading-relaxed font-light">
              Let's discuss your project and see how we can help bring your vision to life. 
              We'll get back to you within 24 hours with a detailed proposal.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-cream-200 to-cream-300 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-burgundy-700 font-bold text-2xl">1</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-burgundy-900 mb-3 text-xl">Tell us about your project</h3>
                  <p className="text-burgundy-600 text-lg font-light">Share your requirements, timeline, and goals</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-cream-200 to-cream-300 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-burgundy-700 font-bold text-2xl">2</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-burgundy-900 mb-3 text-xl">Get a detailed proposal</h3>
                  <p className="text-burgundy-600 text-lg font-light">Receive timeline, team structure, and transparent pricing</p>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-cream-200 to-cream-300 rounded-full flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-burgundy-700 font-bold text-2xl">3</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-burgundy-900 mb-3 text-xl">Start building</h3>
                  <p className="text-burgundy-600 text-lg font-light">Begin development with regular updates and milestones</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-2xl p-10 border border-cream-200 animate-slide-in-right">
            {isSubmitted ? (
              <div className="text-center py-16 animate-fade-in">
                <CheckCircle className="h-20 w-20 text-sage-600 mx-auto mb-6 animate-bounce-gentle" />
                <h3 className="text-3xl font-display font-bold text-burgundy-900 mb-4">Thank You!</h3>
                <p className="text-burgundy-600 text-lg font-light">We've received your message and will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-lg font-semibold text-burgundy-900 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-cream-300 rounded-xl focus:ring-2 focus:ring-cream-400 focus:border-transparent transition-all duration-300 text-lg"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-lg font-semibold text-burgundy-900 mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-cream-300 rounded-xl focus:ring-2 focus:ring-cream-400 focus:border-transparent transition-all duration-300 text-lg"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-semibold text-burgundy-900 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-cream-300 rounded-xl focus:ring-2 focus:ring-cream-400 focus:border-transparent transition-all duration-300 text-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-lg font-semibold text-burgundy-900 mb-3">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-cream-300 rounded-xl focus:ring-2 focus:ring-cream-400 focus:border-transparent transition-all duration-300 text-lg"
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="mvp">MVP Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="full-stack">Full-Stack Solution</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-lg font-semibold text-burgundy-900 mb-3">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-cream-300 rounded-xl focus:ring-2 focus:ring-cream-400 focus:border-transparent transition-all duration-300 text-lg"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-semibold text-burgundy-900 mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-cream-300 rounded-xl focus:ring-2 focus:ring-cream-400 focus:border-transparent transition-all duration-300 resize-none text-lg"
                    placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-burgundy-800 text-cream-100 py-5 px-8 rounded-xl font-bold text-xl hover:bg-burgundy-700 transition-all duration-500 flex items-center justify-center transform hover:scale-105 hover:shadow-xl"
                >
                  Send Proposal Request
                  <Send className="ml-3 h-6 w-6" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;