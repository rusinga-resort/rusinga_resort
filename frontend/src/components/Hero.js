import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Hero = ({ onPlanStayClick }) => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  const heroImages = [
    "https://customer-assets.emergentagent.com/job_hello-world-1288/artifacts/jq74ix1l_image.png"
  ];

  useEffect(() => {
    // Parallax effect for hero background
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    // Floating animation for decorative elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImages[0]}
          alt="Rusinga Six-Star Sanctuary"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-20 floating-element">
        <motion.div 
          className="w-4 h-4 bg-amber-400 rounded-full opacity-60"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: -1, ease: "linear" }}
        />
      </div>
      <div className="absolute bottom-40 right-32 floating-element">
        <motion.div 
          className="w-6 h-6 bg-emerald-400 rounded-full opacity-40"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: -1, ease: "linear" }}
        />
      </div>

      {/* Hero Content */}
      <div 
        ref={textRef}
        className="relative z-10 text-center max-w-6xl mx-auto px-6"
      >
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="inline-block text-amber-400 text-lg font-semibold tracking-wide uppercase mb-4">
            Escape to Paradise
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          data-testid="hero-title"
        >
          <span className="block text-amber-400">Rusinga</span>
          <span className="block text-white text-5xl md:text-7xl">Six-Star Sanctuary</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Experience unparalleled luxury on the pristine shores of Lake Victoria. 
          Where East African elegance meets world-class hospitality in perfect harmony.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-2xl transition-all duration-300 hover:shadow-amber-500/25"
            onClick={onPlanStayClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            data-testid="plan-stay-button"
          >
            Plan Your Dream Stay
          </motion.button>
          
          <motion.button 
            className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-emerald-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('accommodations')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="explore-button"
          >
            Explore Accommodations
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: -1 }}
      >
        <svg className="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <span className="text-sm">Scroll to Explore</span>
      </motion.div>
    </div>
  );
};

export default Hero;