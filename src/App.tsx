import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

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
import PersonPage from "./components/PersonPage.tsx";

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#team') {
            const el = document.getElementById('team');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <CaseStudies />
      <Team />
      <Testimonials />
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
                <Route path="/person/:id" element={<PersonPage />} />
            </Routes>
        </Router>
    );
}

export default App;