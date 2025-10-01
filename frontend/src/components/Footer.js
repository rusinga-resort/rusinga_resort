import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-emerald-950 to-black py-12 border-t border-amber-600/20" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resort Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Rusinga Six-Star Sanctuary</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Where East African elegance meets world-class luxury on the pristine shores of Lake Victoria.
            </p>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Rusinga Island, Lake Victoria, Kenya
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@rusingasanctuary.co.ke
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-xl font-bold text-white mb-4">Experience</h4>
            <ul className="space-y-3">
              {[
                'Luxury Accommodations',
                'Fine Dining',
                'Cultural Experiences',
                'Water Activities',
                'Spa & Wellness',
                'Private Events'
              ].map((item, index) => (
                <li key={index}>
                  <motion.a 
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-bold text-white mb-4">Connect With Us</h4>
            <p className="text-gray-300 mb-6">
              Follow our journey and get exclusive updates on luxury experiences.
            </p>
            
            {/* Social Media Links */}
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              {[
                { icon: 'facebook', href: '#' },
                { icon: 'instagram', href: '#' },
                { icon: 'twitter', href: '#' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-emerald-800/50 hover:bg-amber-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 border border-emerald-700/50 hover:border-amber-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid={`social-${social.icon}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'facebook' && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    )}
                    {social.icon === 'instagram' && (
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM12.017 18.634c-3.662 0-6.637-2.975-6.637-6.637s2.975-6.637 6.637-6.637s6.637 2.975 6.637 6.637s-2.975 6.637-6.637 6.637z"/>
                    )}
                    {social.icon === 'twitter' && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    )}
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-sm mx-auto md:ml-auto md:mr-0">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-emerald-800/50 text-white placeholder-gray-400 px-4 py-2 rounded-l-lg border border-emerald-700/50 focus:border-amber-500/50 focus:outline-none text-sm"
                />
                <motion.button
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-4 py-2 rounded-r-lg transition-all duration-300 text-sm font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-testid="newsletter-subscribe"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-amber-600/20 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Rusinga Six-Star Sanctuary. All rights reserved. | Luxury redefined on Lake Victoria.
            </p>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms & Conditions', 'Booking Policy'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;