import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';
import Navigation from './Navigation';
import Accommodations from './Accommodations';
import Activities from './Activities';
import Rates from './Rates';
import AIConcierge from './AIConcierge';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const LuxuryResortWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showConcierge, setShowConcierge] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  useEffect(() => {
    // GSAP animations for scroll-triggered reveals
    gsap.fromTo(".luxury-element", 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".luxury-element",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parallax effects
    gsap.to(".parallax-bg", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      className="professional-resort-website bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200"
      style={{ opacity }}
    >
      <Navigation 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      
      <main className="relative">
        <section id="home">
          <Hero onPlanStayClick={() => setShowConcierge(true)} />
        </section>
        
        <section id="accommodations" className="luxury-element">
          <Accommodations />
        </section>
        
        <section id="activities" className="luxury-element">
          <Activities />
        </section>
        
        <section id="rates" className="luxury-element">
          <Rates />
        </section>
      </main>

      <Footer />
      
      {/* AI Concierge Modal */}
      <AIConcierge 
        isOpen={showConcierge}
        onClose={() => setShowConcierge(false)}
      />
      
      {/* Floating Concierge Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
        onClick={() => setShowConcierge(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid="ai-concierge-button"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default LuxuryResortWebsite;