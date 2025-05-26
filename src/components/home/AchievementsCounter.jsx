import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Container from '../ui/Container';

// Enhanced achievement data with icons and descriptions
const achievements = [
  { 
    id: 'projects',
    name: 'Projects Completed', 
    value: 50, 
    suffix: '+',
    icon: 'fas fa-building',
    description: 'Successful real estate projects delivered with excellence'
  },
  { 
    id: 'clients',
    name: 'Happy Clients', 
    value: 1000, 
    suffix: '+',
    icon: 'fas fa-smile',
    description: 'Families and businesses who trust our quality and service'
  },
  { 
    id: 'experience',
    name: 'Years of Experience', 
    value: 15, 
    suffix: '+',
    icon: 'fas fa-calendar-alt',
    description: 'Building excellence in the real estate industry since 2008'
  },
  { 
    id: 'awards',
    name: 'Awards Won', 
    value: 12, 
    suffix: '+',
    icon: 'fas fa-trophy',
    description: 'Recognition for our innovative designs and quality'
  }
];

// Counter animation hook
const useCounter = (end, duration = 2, start = 0) => {
  const [count, setCount] = useState(start);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !isIntersecting) {
      setIsIntersecting(true);
    }
  }, [isInView, isIntersecting]);

  useEffect(() => {
    let startTime;
    let animationFrame;
    
    if (isIntersecting) {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };
      
      animationFrame = requestAnimationFrame(step);
    }
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start, isIntersecting]);

  return { count, ref: countRef };
};

const AchievementsCounter = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring", 
        stiffness: 100, 
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sage-teal/10 to-transparent">
      <Container>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-deep-teal mb-4">
            Our <span className="text-amber-gold">Achievements</span>
          </h2>
          <div className="flex justify-center">
            <p className="text-lg text-deep-teal/80 max-w-2xl text-center">
              A legacy of excellence in real estate development, built on trust and quality craftsmanship
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {achievements.map((achievement) => {
            // Use the counter hook for each achievement
            const { count, ref } = useCounter(achievement.value, 2.5);
            
            return (
              <motion.div 
                key={achievement.id}
                className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.2 } 
                }}
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-amber-gold rounded-full w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className={`${achievement.icon} text-deep-teal text-2xl`}></i>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center">
                    <span 
                      ref={ref}
                      className="text-5xl md:text-6xl font-bold text-deep-teal transition-colors duration-300 group-hover:text-amber-gold"
                    >
                      {count}
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-amber-gold ml-1">
                      {achievement.suffix}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-deep-teal mt-2 mb-3">
                    {achievement.name}
                  </h3>
                  
                  <p className="text-sm text-deep-teal/70">
                    {achievement.description}
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-deep-teal to-amber-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
      
      {/* Optional: Curved shape divider at the bottom */}
      <div className="w-full overflow-hidden relative h-24 mt-16">
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,138.7C840,139,960,181,1080,192C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default AchievementsCounter; 