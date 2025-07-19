import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Case2 from "./components/case2.tsx";
import Case1 from "./components/case1.tsx";
import Case3 from "./components/case3.tsx";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <CaseStudies />
      <Team />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/case2" element={<Case2 />} />
                <Route path="/case1" element={<Case1 />} />
                <Route path="/case3" element={<Case3 />} />
            </Routes>
        </Router>
    );
}

export default App;