import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { getAllProperties } from '../data/properties';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectsPage() {
  const allProperties = getAllProperties();
  const ongoingCount = allProperties.filter(p => 
    p.status === 'under-construction' || p.status === 'nearing-possession').length;
  const completedCount = allProperties.filter(p => p.status === 'completed').length;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeIn}
      className="py-16 md:py-24 bg-cream min-h-screen"
    >
      <Container>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            className="text-amber-gold text-sm md:text-base font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Explore Our Portfolio
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-5xl font-display font-semibold text-deep-teal mt-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our Properties
          </motion.h1>
          <motion.p 
            className="text-gray-600 md:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Browse through our portfolio of exceptional properties, from ongoing developments 
            to completed masterpieces, each crafted with attention to detail and quality.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
        >
          {/* Ongoing Projects Card */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            whileHover={{ scale: 1.02 }}
            variants={fadeIn}
          >
            <div className="relative h-72 overflow-hidden">
              <div 
                className="h-full w-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(/images/placeholders/property1.svg)` }}
              />
              <div className="absolute inset-0 bg-deep-teal bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110">
                  Ongoing Projects
                </h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 text-center">
                Discover our collection of {ongoingCount} projects currently under development, 
                designed with precision and built with excellence.
              </p>
              <div className="flex justify-center">
                <Button 
                  to="/projects/ongoing"
                  variant="primary"
                  className="px-6 py-3"
                >
                  View Ongoing Projects
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Completed Projects Card */}
          <motion.div 
            className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            whileHover={{ scale: 1.02 }}
            variants={fadeIn}
          >
            <div className="relative h-72 overflow-hidden">
              <div 
                className="h-full w-full bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(/images/placeholders/property2.svg)` }}
              />
              <div className="absolute inset-0 bg-deep-teal bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl font-display font-semibold drop-shadow-lg transform transition-transform duration-500 group-hover:scale-110">
                  Completed Projects
                </h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 text-center">
                Explore our portfolio of {completedCount} completed properties that exemplify 
                our commitment to quality and craftsmanship.
              </p>
              <div className="flex justify-center">
                <Button 
                  to="/projects/completed"
                  variant="primary"
                  className="px-6 py-3"
                >
                  View Completed Projects
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Section: Project Statistics */}
        <motion.div 
          className="mt-20 bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-amber-gold mb-2">
                {allProperties.length}+
              </div>
              <div className="text-deep-teal font-medium">Total Projects</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-amber-gold mb-2">12+</div>
              <div className="text-deep-teal font-medium">Years Experience</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-amber-gold mb-2">350+</div>
              <div className="text-deep-teal font-medium">Happy Families</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-amber-gold mb-2">5+</div>
              <div className="text-deep-teal font-medium">Locations</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </motion.div>
  );
} 