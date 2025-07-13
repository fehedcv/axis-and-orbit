import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Axis & Orbit gave us the agility of a startup with the reliability of an enterprise dev house. They delivered our MVP in 6 weeks and it's been performing flawlessly.",
      author: "Sarah Chen",
      role: "CTO, TechFlow Singapore",
      location: "Singapore",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The project management was exceptional. Daily updates, clear communication, and they delivered exactly what we needed within budget. Highly recommend for any serious project.",
      author: "Marcus Kim",
      role: "Founder, EduTech Korea",
      location: "Seoul, Korea",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "Working with Axis & Orbit was like having an extension of our team in India. They understood our vision and brought technical expertise we didn't have in-house.",
      author: "Jennifer Martinez",
      role: "Product Manager, RetailPro",
      location: "Austin, USA",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-burgundy-900 to-burgundy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl font-display font-bold text-cream-100 mb-6 tracking-tight">What Our Clients Say</h2>
          <p className="text-2xl text-cream-200 max-w-4xl mx-auto leading-relaxed font-light">
            Don't just take our word for it. Here's what business leaders say about working with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-10 relative hover:transform hover:-translate-y-3 transition-all duration-500 shadow-xl hover:shadow-2xl animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="absolute -top-6 left-10">
                <div className="w-12 h-12 bg-cream-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Quote className="h-6 w-6 text-burgundy-900" fill="currentColor" />
                </div>
              </div>
              
              <div className="flex items-center mb-6 pt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-cream-500" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-burgundy-700 mb-8 leading-relaxed italic text-lg font-light">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-5 border-3 border-cream-300"
                />
                <div>
                  <h4 className="font-display font-bold text-burgundy-900 text-lg">{testimonial.author}</h4>
                  <p className="text-burgundy-600 font-medium">{testimonial.role}</p>
                  <p className="text-burgundy-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;