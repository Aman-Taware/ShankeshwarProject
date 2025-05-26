import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

// Image imports
import heroImageDesktop from '/images/website/hero-building.jpeg';
import heroImageMobile from '/images/website/hero-building.jpeg';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Parallax effect refs and values
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for parallax effects - each element moves at different rate
  const buildingY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const architectureElementsY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // Increased base opacity for better contrast
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0.8]);
  
  // Check if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Single Hero Image with parallax effect - changed to use local images */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: isMobile 
            ? `url(${heroImageMobile})`
            : `url(${heroImageDesktop})`,
          y: buildingY
        }}
      />
      
      {/* Enhanced gradient overlay for better contrast */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-deep-teal/60 to-black/60"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Architectural blueprint elements - parallax at different rate */}
      <motion.div
        className="absolute inset-0 mix-blend-soft-light opacity-40"
        style={{ y: architectureElementsY }}
      >
        {/* Blueprint grid lines */}
        <div className="absolute inset-0 bg-repeat opacity-20" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }}
        />
        
        {/* Compass rose - architectural element */}
        <div className="absolute top-1/2 right-[15%] transform -translate-y-1/2 opacity-25 hidden md:block">
          <svg viewBox="0 0 100 100" width="200" height="200" fill="none" stroke="white" strokeWidth="1">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="20" />
            <line x1="50" y1="10" x2="50" y2="90" />
            <line x1="10" y1="50" x2="90" y2="50" />
            <line x1="22" y1="22" x2="78" y2="78" />
            <line x1="22" y1="78" x2="78" y2="22" />
            <text x="50" y="20" textAnchor="middle" fill="white" fontSize="5">N</text>
            <text x="50" y="85" textAnchor="middle" fill="white" fontSize="5">S</text>
            <text x="15" y="52" textAnchor="middle" fill="white" fontSize="5">W</text>
            <text x="85" y="52" textAnchor="middle" fill="white" fontSize="5">E</text>
          </svg>
        </div>
        
        {/* Building outline sketch */}
        <div className="absolute left-[5%] bottom-[15%] w-1/4 opacity-30 hidden md:block">
          <svg viewBox="0 0 200 300" width="200" height="300" fill="none" stroke="white">
            <path d="M50,300 L50,100 L150,100 L150,300 M30,100 L170,100 M50,150 L150,150 M70,150 L70,180 M130,150 L130,180 M80,220 L120,220 L120,300 L80,300 Z M0,300 L200,300" strokeWidth="1" />
          </svg>
        </div>
      </motion.div>
      
      {/* Content Container with added backdrop for better readability */}
      <motion.div
        className="absolute inset-0 flex items-center justify-start px-6 md:px-16 lg:px-24 z-10"
        style={{ y: textY }}
      >
        <div className="max-w-xl relative">
          {/* Semi-transparent backdrop for better text visibility */}
          <div className="absolute -left-6 -right-6 -top-6 -bottom-6 bg-black/30 backdrop-blur-sm rounded-lg -z-10"></div>
          
          {/* Award badge instead of "Visionary Developer" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-amber-gold/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-deep-teal" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-semibold text-deep-teal tracking-wide">TRUSTED EXCELLENCE SINCE 2008</span>
          </motion.div>
          
          {/* Main heading with staggered reveal - updated messaging */}
          <div className="overflow-hidden mb-2 md:mb-4">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
            >
              <div className="overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                >
                  Building
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="inline-block text-amber-gold"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Dream Homes
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  For Families
                </motion.span>
              </div>
            </motion.h1>
          </div>
          
          {/* Tagline - updated for real estate focus */}
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-md mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Shankeshwar Realty transforms visions into vibrant communities. Crafting premium living spaces with uncompromising quality and timeless design.
          </motion.p>
          
          {/* CTA Buttons - updated text */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="/projects/ongoing"
              animation="bounce"
              className="backdrop-blur-sm"
            >
              Discover Our Projects
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="/contact"
              className="text-white border-white hover:bg-white/20"
            >
              Schedule A Visit
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Floating achievement elements that parallax differently - updated content */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="absolute bottom-12 md:bottom-24 left-6 md:left-16 flex flex-col md:flex-row gap-4 md:gap-8 z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="backdrop-blur-sm bg-black/40 px-4 py-3 rounded-lg border border-white/10 flex items-center"
        >
          <span className="text-3xl md:text-4xl font-display font-bold text-amber-gold mr-3">25+</span>
          <span className="text-sm text-white/90">Premium<br />Projects</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="backdrop-blur-sm bg-black/40 px-4 py-3 rounded-lg border border-white/10 flex items-center"
        >
          <span className="text-3xl md:text-4xl font-display font-bold text-amber-gold mr-3">200+</span>
          <span className="text-sm text-white/90">Happy<br />Families</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="backdrop-blur-sm bg-black/40 px-4 py-3 rounded-lg border border-white/10 flex items-center hidden md:flex"
        >
          <span className="text-3xl md:text-4xl font-display font-bold text-amber-gold mr-3">15+</span>
          <span className="text-sm text-white/90">Years of<br />Excellence</span>
        </motion.div>
      </motion.div>
      
      {/* Decorative vertical line with animated dot */}
      <motion.div
        className="absolute left-1/2 bottom-0 hidden md:flex flex-col items-center z-10"
        initial={{ height: 0 }}
        animate={{ height: 120 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-px h-full bg-gradient-to-b from-transparent via-amber-gold to-amber-gold/30"></div>
        <motion.div
          className="w-3 h-3 rounded-full bg-amber-gold relative -top-1.5"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection; 