import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Rates = () => {
  const [selectedSeason, setSelectedSeason] = useState('high');

  const rateData = {
    high: {
      title: 'High Season Rates',
      period: 'December - March & July - August',
      description: 'Peak season with optimal weather conditions',
      accommodations: [
        { type: 'Single Room', rate: 3500, meals: 'Bed & Breakfast' },
        { type: 'Double Room', rate: 4500, meals: 'Bed & Breakfast' }
      ],
      dining: [
        { item: 'Buffet Lunch/Dinner', rate: 1200, description: '2 proteins, 2 carbohydrates, vegetables & water' },
        { item: 'Tilapia (Small)', rate: 700, description: 'Fresh catch with ugali & vegetables' },
        { item: 'Tilapia (Large)', rate: 1200, description: 'Premium size with ugali & vegetables' },
        { item: 'Beef/Pork Plate', rate: 800, description: 'Served with rice or ugali & vegetables' }
      ]
    },
    low: {
      title: 'Low Season Rates',
      period: 'April - June & September - November', 
      description: 'Exceptional value with fewer crowds',
      accommodations: [
        { type: 'Single Room', rate: 2800, meals: 'Bed & Breakfast' },
        { type: 'Double Room', rate: 3600, meals: 'Bed & Breakfast' }
      ],
      dining: [
        { item: 'Buffet Lunch/Dinner', rate: 1000, description: '2 proteins, 2 carbohydrates, vegetables & water' },
        { item: 'Tilapia (Small)', rate: 600, description: 'Fresh catch with ugali & vegetables' },
        { item: 'Tilapia (Large)', rate: 1000, description: 'Premium size with ugali & vegetables' },
        { item: 'Beef/Pork Plate', rate: 700, description: 'Served with rice or ugali & vegetables' }
      ]
    }
  };

  const currentRates = rateData[selectedSeason];

  const breakfastInclusions = [
    'Eggs prepared to your preference (fried, boiled, scrambled)',
    'Sausage selection',
    'Fresh bread or traditional ndazi',
    'Tea, coffee, and drinking chocolate',
    'Seasonal fresh fruits'
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-amber-950 to-emerald-950" data-testid="rates-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6" data-testid="rates-title">
            Transparent <span className="text-amber-400">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience luxury that's accessible. Our rates include exceptional service and authentic Kenyan hospitality.
          </p>
          
          {/* Season Selector */}
          <div className="flex justify-center">
            <div className="bg-emerald-900/50 rounded-lg p-1 border border-amber-600/20">
              {Object.keys(rateData).map((season) => (
                <button
                  key={season}
                  className={`px-6 py-3 rounded-md transition-all duration-300 font-semibold ${
                    selectedSeason === season 
                      ? 'bg-amber-600 text-white shadow-lg' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onClick={() => setSelectedSeason(season)}
                  data-testid={`season-${season}-button`}
                >
                  {season === 'high' ? 'High Season' : 'Low Season'}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Current Season Info */}
        <motion.div 
          className="text-center mb-12"
          key={selectedSeason}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-amber-400 mb-2">{currentRates.title}</h3>
          <p className="text-lg text-gray-300 mb-1">{currentRates.period}</p>
          <p className="text-gray-400">{currentRates.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Accommodation Rates */}
          <motion.div
            className="bg-gradient-to-b from-emerald-800/40 to-emerald-900/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-600/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="accommodation-rates-card"
          >
            <div className="flex items-center mb-6">
              <svg className="w-8 h-8 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0v-4a2 2 0 00-2-2h-4a2 2 0 00-2 2v4m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12" />
              </svg>
              <h4 className="text-2xl font-bold text-white">Accommodation Rates</h4>
            </div>
            
            <div className="space-y-4 mb-8">
              {currentRates.accommodations.map((room, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-emerald-900/40 rounded-lg border border-amber-600/10">
                  <div>
                    <h5 className="text-lg font-semibold text-white">{room.type}</h5>
                    <p className="text-sm text-gray-400">{room.meals}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-amber-400">Kshs {room.rate.toLocaleString()}/-</p>
                    <p className="text-sm text-gray-400">per night</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Breakfast Inclusions */}
            <div className="bg-amber-900/20 rounded-lg p-6 border border-amber-600/20">
              <h5 className="text-lg font-semibold text-amber-400 mb-4">Bed & Breakfast Includes:</h5>
              <ul className="space-y-2">
                {breakfastInclusions.map((item, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-300">
                    <svg className="w-4 h-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Dining Rates */}
          <motion.div
            className="bg-gradient-to-b from-amber-800/40 to-amber-900/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-600/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="dining-rates-card"
          >
            <div className="flex items-center mb-6">
              <svg className="w-8 h-8 text-amber-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <h4 className="text-2xl font-bold text-white">Dining Options</h4>
            </div>
            
            <div className="space-y-4">
              {currentRates.dining.map((item, index) => (
                <div key={index} className="p-4 bg-amber-900/40 rounded-lg border border-amber-600/10">
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-lg font-semibold text-white">{item.item}</h5>
                    <p className="text-xl font-bold text-amber-400">Kshs {item.rate.toLocaleString()}/-</p>
                  </div>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div 
          className="mt-12 text-center bg-emerald-900/30 rounded-2xl p-8 border border-amber-600/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold text-white mb-4">Planning Your Stay?</h4>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Our AI Concierge can help calculate costs for your specific group size, duration, and preferences. 
            Get personalized recommendations based on your budget and interests.
          </p>
          <motion.button
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="calculate-costs-button"
          >
            Calculate Your Stay Costs
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Rates;