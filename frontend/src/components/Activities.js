import React from 'react';
import { motion } from 'framer-motion';

const Activities = () => {
  const activities = [
    {
      id: 'sundowner-cruise',
      title: 'Lake Victoria Sundowner Cruise',
      description: 'Sail into the golden hour aboard our traditional dhow, enjoying premium beverages as the sun sets over Lake Victoria.',
      icon: '🛥️',
      duration: '3 hours',
      included: 'Premium drinks, traditional snacks, experienced guide'
    },
    {
      id: 'fossil-hunting',
      title: 'Fossil Hunting Expedition',
      description: 'Discover ancient secrets with our archaeological experts. Rusinga Island is renowned for its paleontological significance.',
      icon: '🦕',
      duration: '4 hours', 
      included: 'Expert guide, equipment, refreshments'
    },
    {
      id: 'fly-fishing',
      title: 'Fly Fishing Adventure',
      description: 'Experience world-class fishing in the pristine waters of Lake Victoria, targeting the famous Nile perch and tilapia.',
      icon: '🎣',
      duration: '6 hours',
      included: 'Equipment, boat, professional guide, lunch'
    },
    {
      id: 'spa-treatment',
      title: 'Lakeside Spa Sanctuary',
      description: 'Rejuvenate your body and soul with traditional African healing therapies using indigenous herbs and techniques.',
      icon: '🌿',
      duration: '2-4 hours',
      included: 'Organic products, experienced therapists, refreshments'
    },
    {
      id: 'cultural-tour',
      title: 'Luo Cultural Immersion',
      description: 'Connect with the local Luo community, learning traditional crafts, music, and stories from village elders.',
      icon: '🎭',
      duration: '5 hours',
      included: 'Cultural guide, traditional meal, craft demonstration'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-emerald-900 to-amber-950" data-testid="activities-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6" data-testid="activities-title">
            Luxury <span className="text-amber-400">Experiences</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in curated experiences that celebrate the natural beauty and cultural richness of Rusinga Island.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="group"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              data-testid={`activity-${activity.id}`}
            >
              <div className="bg-gradient-to-b from-emerald-800/40 to-emerald-900/60 backdrop-blur-sm rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-amber-600/20 group-hover:border-amber-500/40">
                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-6 text-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {activity.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors text-center">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {activity.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-amber-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duration: {activity.duration}
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    <span className="font-semibold text-amber-400">Included:</span> {activity.included}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-testid={`book-${activity.id}-button`}
                >
                  Reserve Experience
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6 text-lg">
            Custom experiences can be arranged. Speak with our concierge for personalized adventures.
          </p>
          <motion.button
            className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-emerald-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="custom-experience-button"
          >
            Design Your Custom Experience
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;