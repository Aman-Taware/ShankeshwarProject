import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Define navigation links
export const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Ongoing Projects', href: '/projects/ongoing' },
  { name: 'Completed Projects', href: '/projects/completed' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const NavLinks = ({ 
  isMobile = false, 
  onClick = () => {},
  showIndicators = true,
  animation = true,
  className = ''
}) => {
  const location = useLocation();
  const pathname = location.pathname;

  if (isMobile) {
    return (
      <div className={`space-y-3 ${className}`}>
        {navigationLinks.map((item, index) => (
          <motion.div
            key={item.name}
            initial={animation ? { opacity: 0, y: -10 } : false}
            animate={animation ? { opacity: 1, y: 0 } : false}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              to={item.href}
              className={`block py-2 text-base font-medium transition-colors hover:text-amber-gold ${
                pathname === item.href
                  ? 'text-amber-gold'
                  : 'text-deep-teal'
              }`}
              onClick={onClick}
            >
              {item.name}
              {showIndicators && pathname === item.href && (
                <motion.span 
                  className="ml-2 inline-block h-1 w-1 rounded-full bg-amber-gold"
                  layoutId="mobileNavIndicator"
                />
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {navigationLinks.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="relative text-sm font-medium group"
        >
          <span className={`${pathname === item.href ? 'text-amber-gold' : 'text-deep-teal group-hover:text-amber-gold transition-colors'}`}>
            {item.name}
          </span>
          {showIndicators && pathname === item.href && (
            <motion.span 
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-gold" 
              layoutId="navIndicator"
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks; 