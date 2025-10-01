import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accommodations = () => {
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);

  const accommodations = [
    {
      id: 'lakeside-villa',
      title: 'Lakeside Villa',
      price: 'Kshs 4,500 per night',
      features: ['Private lake access', 'Panoramic views', 'Private terrace', 'King-size bed'],
      description: 'Indulge in our flagship accommodation with unobstructed views of Lake Victoria. Each villa features authentic Kenyan décor and modern luxury amenities.',
      image: "https://customer-assets.emergentagent.com/job_hello-world-1288/artifacts/kcrigu17_rusinga%201.jpg",
      capacity: 'Double Occupancy'
    },
    {
      id: 'cliffside-suite',
      title: 'Cliffside Suite',
      price: 'Kshs 3,500 per night',
      features: ['Elevated position', 'Sunset views', 'Private balcony', 'Traditional architecture'],
      description: 'Perched on elevated grounds offering breathtaking sunset vistas. These suites combine traditional East African architecture with contemporary comfort.',
      image: "https://customer-assets.emergentagent.com/job_hello-world-1288/artifacts/5qjujrxd_Rusinga%203.jpg",
      capacity: 'Single Occupancy'
    },
    {
      id: 'family-cottage',
      title: 'Family Cottage',
      price: 'Kshs 4,500 per night',
      features: ['Spacious layout', 'Garden setting', 'Multiple bedrooms', 'Family-friendly'],
      description: 'Perfect for families seeking space and privacy. Set within lush tropical gardens with easy access to all resort facilities.',
      image: "https://customer-assets.emergentagent.com/job_hello-world-1288/artifacts/2aohjxxt_Rusinga%204.jpg",
      capacity: 'Double Occupancy'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white" data-testid="accommodations-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6" data-testid="accommodations-title">
            Professional <span className="text-blue-600">Accommodations</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Each accommodation is thoughtfully designed to provide the ultimate in comfort and elegance, 
            showcasing the natural beauty of Rusinga Island.
          </p>
        </motion.div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <motion.div
              key={accommodation.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedAccommodation(accommodation)}
              data-testid={`accommodation-${accommodation.id}`}
            >
              <div className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200">
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={accommodation.image}
                    alt={accommodation.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {accommodation.capacity}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {accommodation.title}
                  </h3>
                  <p className="text-amber-400 font-bold text-xl mb-4">{accommodation.price}</p>
                  <p className="text-gray-300 mb-6 line-clamp-3">{accommodation.description}</p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {accommodation.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <svg className="w-4 h-4 text-amber-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Accommodation Details */}
        <AnimatePresence>
          {selectedAccommodation && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAccommodation(null)}
            >
              <motion.div
                className="bg-emerald-900 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-amber-600/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                data-testid="accommodation-modal"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold text-white">{selectedAccommodation.title}</h3>
                  <button
                    onClick={() => setSelectedAccommodation(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid="close-modal-button"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <img
                  src={selectedAccommodation.image}
                  alt={selectedAccommodation.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <p className="text-amber-400 font-bold text-2xl mb-4">{selectedAccommodation.price}</p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{selectedAccommodation.description}</p>
                
                <h4 className="text-xl font-bold text-white mb-4">Features & Amenities</h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {selectedAccommodation.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-amber-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  data-testid="book-now-button"
                >
                  Book This Accommodation
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accommodations;