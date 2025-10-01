import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ activeSection, onSectionClick }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'accommodations', label: 'Accommodations' },
    { id: 'activities', label: 'Activities' },
    { id: 'rates', label: 'Rates' }
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="text-2xl font-bold text-amber-400 cursor-pointer"
            onClick={() => onSectionClick('home')}
            whileHover={{ scale: 1.05 }}
            data-testid="resort-logo"
          >
            Rusinga Six-Star Sanctuary
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`text-white hover:text-amber-400 transition-colors duration-300 relative px-4 py-2 ${
                  activeSection === item.id ? 'text-amber-400' : ''
                }`}
                onClick={() => onSectionClick(item.id)}
                whileHover={{ y: -2 }}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
                    layoutId="activeNavIndicator"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              className="text-white hover:text-amber-400"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;