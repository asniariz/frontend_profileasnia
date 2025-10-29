import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortofolioSection from './components/PortofolioSection';
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />
      <main className="px-6 py-10">
        <HeroSection />
        <AboutSection />
        <PortofolioSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;