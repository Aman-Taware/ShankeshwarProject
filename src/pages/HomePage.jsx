import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import PropertyCard from '../components/property/PropertyCard';
import { getPropertiesByStatus } from '../data/properties';
import Button from '../components/ui/Button';
import { PROPERTY_STATUS } from '../config/constants';
import HeroSection from '../components/home/HeroSection';
import AboutUsSummary from '../components/home/AboutUsSummary';
import AchievementsCounter from '../components/home/AchievementsCounter';
import TestimonialsSection from '../components/home/TestimonialsSection';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function HomePage() {
  const ongoingProperties = getPropertiesByStatus(PROPERTY_STATUS.UNDER_CONSTRUCTION.value).slice(0, 3);
  const completedProperties = getPropertiesByStatus(PROPERTY_STATUS.COMPLETED.value).slice(0, 3);

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section - Full width, no container */}
      <HeroSection />
      
      {/* About Us Summary */}
      <AboutUsSummary />
      
      {/* Achievements Section */}
      <AchievementsCounter />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Main Content */}
      <motion.section
        className="py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-deep-teal mb-6">
              Welcome to <span className="text-amber-gold">Shankeshwar Realty</span>
            </h2>
            <p className="text-lg text-deep-teal max-w-2xl mx-auto leading-relaxed">
              Your trusted partner in finding the perfect property. We specialize in premium real estate solutions tailored to your needs, offering exceptional homes, commercial spaces, and investment opportunities.
            </p>
          </div>
          
          {/* Ongoing Projects */}
          {ongoingProperties && ongoingProperties.length > 0 && (
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl md:text-4xl font-display text-deep-teal">
                  <span className="relative inline-block">
                    Ongoing Projects
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-gold/30 rounded-full"></span>
                  </span>
                </h2>
                {getPropertiesByStatus(PROPERTY_STATUS.UNDER_CONSTRUCTION.value).length > 3 && (
                  <Button href="/projects/ongoing" variant="ghost" size="sm" className="hidden md:inline-flex">
                    View All
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {ongoingProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PropertyCard property={property} index={index} />
                  </motion.div>
                ))}
              </div>
              
              {getPropertiesByStatus(PROPERTY_STATUS.UNDER_CONSTRUCTION.value).length > 3 && (
                <div className="text-center mt-10 md:hidden">
                  <Button href="/projects/ongoing" variant="outline" size="lg" animation="bounce">
                    View All Ongoing Projects
                  </Button>
                </div>
              )}
            </motion.div>
          )}
          
          {/* Completed Projects */}
          {completedProperties && completedProperties.length > 0 && (
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-3xl md:text-4xl font-display text-deep-teal">
                  <span className="relative inline-block">
                    Completed Projects
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-gold/30 rounded-full"></span>
                  </span>
                </h2>
                {getPropertiesByStatus(PROPERTY_STATUS.COMPLETED.value).length > 3 && (
                  <Button href="/projects/completed" variant="ghost" size="sm" className="hidden md:inline-flex">
                    View All
                  </Button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {completedProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <PropertyCard property={property} index={index} />
                  </motion.div>
                ))}
              </div>
              
              {getPropertiesByStatus(PROPERTY_STATUS.COMPLETED.value).length > 3 && (
                <div className="text-center mt-10 md:hidden">
                  <Button href="/projects/completed" variant="outline" size="lg" animation="bounce">
                    View All Completed Projects
                  </Button>
                </div>
              )}
            </motion.div>
          )}
          
          {/* Property Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display text-deep-teal mb-6">
                <span className="relative inline-block">
                  Discover Your Ideal Space
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-gold/30 rounded-full"></span>
                </span>
              </h2>
              <p className="text-lg text-deep-teal/90 max-w-2xl mx-auto mb-12">
                We offer a wide range of properties to suit your specific needs, from luxurious homes to prime commercial spaces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Property Type Cards with animations */}
              <motion.div 
                className="bg-sage-teal p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-deep-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-deep-teal mb-4">Residential Properties</h3>
                <p className="text-deep-teal/90 mb-6">Find your dream home among our premium residential listings, crafted for comfort and luxury.</p>
                <Button variant="outline" size="sm" href="/projects/residential" className="mt-auto" animation="bounce">
                  Explore Homes
                </Button>
              </motion.div>

              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg border border-sage-teal text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-sage-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-16 h-16 rounded-full bg-sage-teal/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-deep-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-deep-teal mb-4">Commercial Spaces</h3>
                <p className="text-deep-teal/90 mb-6">Perfect locations for your business to thrive and grow, designed for success.</p>
                <Button variant="outline" size="sm" href="/projects/commercial" className="mt-auto" animation="bounce">
                  View Spaces
                </Button>
              </motion.div>

              <motion.div 
                className="bg-deep-teal p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-amber-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-16 h-16 rounded-full bg-amber-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display text-cream mb-4">Investment Opportunities</h3>
                <p className="text-cream/90 mb-6">Secure your future with our high-return investment properties and strategic advice.</p>
                <Button variant="accent" size="sm" href="/projects/investment" className="mt-auto" animation="bounce">
                  Invest Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </motion.section>
    </div>
  );
} 