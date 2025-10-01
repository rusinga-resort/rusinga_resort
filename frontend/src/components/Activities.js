import React from 'react';
import { motion } from 'framer-motion';

const Activities = () => {
  const activities = [
    {
      id: 'sundowner-cruise',
      title: 'Lake Victoria Business Cruise',
      description: 'Network aboard our executive dhow, enjoying premium refreshments while conducting business meetings during golden hour.',
      icon: '🛥️',
      duration: '3 hours',
      included: 'Premium refreshments, business facilities, experienced guide'
    },
    {
      id: 'fossil-hunting',
      title: 'Educational Heritage Tours',
      description: 'Discover the archaeological significance of Rusinga Island with our expert guides and structured learning experiences.',
      icon: '🦕',
      duration: '4 hours', 
      included: 'Expert guide, educational materials, refreshments'
    },
    {
      id: 'fly-fishing',
      title: 'Executive Fishing Experience',
      description: 'Professional fishing excursions in Lake Victoria, perfect for corporate team building and executive relaxation.',
      icon: '🎣',
      duration: '6 hours',
      included: 'Professional equipment, boat, expert guide, business lunch'
    },
    {
      id: 'spa-treatment',
      title: 'Executive Wellness Center',
      description: 'Professional wellness services designed for business travelers, featuring modern therapeutic treatments and relaxation.',
      icon: '🌿',
      duration: '2-4 hours',
      included: 'Professional treatments, qualified therapists, refreshments'
    },
    {
      id: 'cultural-tour',
      title: 'Cultural Business Tours',
      description: 'Structured cultural experiences with the local Luo community, ideal for corporate social responsibility programs.',
      icon: '🎭',
      duration: '5 hours',
      included: 'Professional guide, business networking opportunities, cultural demonstrations'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50" data-testid="activities-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6" data-testid="activities-title">
            Professional <span className="text-blue-600">Experiences</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Curated professional experiences that combine business networking with the natural beauty and cultural richness of Rusinga Island.
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
              <div className="bg-white backdrop-blur-sm rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-500 border border-gray-200 group-hover:border-blue-300">
                {/* Icon */}
                <motion.div 
                  className="text-6xl mb-6 text-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {activity.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors text-center">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed text-center">
                  {activity.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Duration: {activity.duration}
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    <span className="font-semibold text-blue-600">Included:</span> {activity.included}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
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
          <p className="text-gray-700 mb-6 text-lg">
            Custom corporate experiences can be arranged. Speak with our professional concierge for personalized business solutions.
          </p>
          <motion.button
            className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="custom-experience-button"
          >
            Design Your Corporate Experience
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;