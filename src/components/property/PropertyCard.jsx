import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPropertyImageUrl, formatPropertyPrice } from '../../data/properties';
import ImageWithFallback from '../ui/ImageWithFallback';
import { PROPERTY_STATUS } from '../../config/constants';

const PropertyCard = ({ property, compact = false, index = 0 }) => {
  if (!property) {
    return null;
  }

  const {
    id,
    name,
    status,
    type,
    bedrooms,
    bathrooms,
    area,
    location,
    slug,
    startingPrice,
    shortDescription,
    completionPercentage, // For under-construction projects
    possessionDate,       // For completed or nearing-possession projects
  } = property;

  // Get status configuration and styling
  const statusConfig = {
    'under-construction': { 
      label: 'Under Construction',
      color: 'bg-sage-teal text-deep-teal',
      icon: 'fas fa-hard-hat'
    },
    'nearing-possession': { 
      label: 'Nearing Possession',
      color: 'bg-amber-gold text-deep-teal',
      icon: 'fas fa-key'
    },
    'ready-to-move-in': { 
      label: 'Ready to Move',
      color: 'bg-green-600 text-white',
      icon: 'fas fa-home'
    },
    'completed': { 
      label: 'Completed',
      color: 'bg-green-600 text-white',
      icon: 'fas fa-check-circle'
    }
  };

  // Use status config or fallback
  const currentStatus = statusConfig[status] || {
    label: status ? status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "N/A",
    color: 'bg-gray-500 text-white',
    icon: 'fas fa-building'
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.05,
      },
    },
  };

  // Enhanced hover animations
  const hoverEffect = {
    y: -8,
    scale: 1.02,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 15 
    },
  };

  // Image hover animation
  const imageHoverVariants = {
    hover: { 
      scale: 1.08, 
      filter: "brightness(1.05)",
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Badge animation
  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8, x: 10 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { delay: index * 0.05 + 0.3, duration: 0.3 }
    },
    hover: { 
      y: -3,
      scale: 1.05,
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 }
    }
  };

  // Content animation for staggered children
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { y: -3 }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05 + custom * 0.1,
        duration: 0.3
      }
    })
  };

  // Get appropriate image
  const propertyImageUrl = getPropertyImageUrl(property, 'exterior');
  const displayPrice = formatPropertyPrice(property.startingPrice);
  
  // Compact Card (Simplified)
  if (compact) {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        whileHover={hoverEffect}
        className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 h-full w-1.5 bg-amber-gold"></div>
        
        <Link to={`/property/${id}`} className="flex w-full">
          <motion.div 
            className="w-1/3 flex-shrink-0 relative overflow-hidden rounded-l-lg"
            whileHover="hover"
          >
            <motion.div
              variants={imageHoverVariants}
              className="w-full h-full"
            >
              <ImageWithFallback
                src={propertyImageUrl}
                alt={name || 'Property image'}
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div 
              className={`absolute top-2 right-2 px-3 py-1 text-xs font-semibold rounded-full shadow ${currentStatus.color} flex items-center`}
              variants={badgeVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <i className={`${currentStatus.icon} mr-1`}></i>
              <span>{currentStatus.label}</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="p-5 flex-grow flex flex-col justify-center"
            variants={contentVariants}
          >
            <motion.h3 
              variants={childVariants}
              custom={0}
              className="text-md md:text-lg font-display font-semibold text-deep-teal mb-1.5 group-hover:text-amber-gold transition-colors truncate"
            >
              {name || "Unnamed Property"}
            </motion.h3>
            
            <motion.div 
              variants={childVariants}
              custom={1}
              className="flex items-center text-xs text-sage-teal mb-3"
            >
              <i className="fas fa-map-marker-alt mr-1.5"></i>
              <span className="truncate">{location?.address || location?.city || "N/A"}</span>
            </motion.div>
            
            <motion.p 
              variants={childVariants}
              custom={2}
              className="text-md font-bold text-amber-gold"
            >
              {displayPrice}
            </motion.p>
          </motion.div>
        </Link>
      </motion.div>
    );
  }

  // Enhanced Standard Vertical Card
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={hoverEffect}
      className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden h-full relative"
    >
      {/* Status ribbon with icon - different color based on status */}
      <motion.div 
        className="absolute -top-1 -right-1 z-10 flex items-center"
        variants={badgeVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <div className="relative">
          <div className={`font-medium text-xs px-4 py-1.5 ${currentStatus.color} shadow-lg flex items-center`}>
            <i className={`${currentStatus.icon} mr-1.5`}></i>
            {currentStatus.label}
          </div>
          <div className="w-1 h-1 absolute bottom-0 right-0 bg-deep-teal/60 transform translate-y-full"></div>
        </div>
      </motion.div>
      
      {/* Property type badge */}
      <div className="absolute top-3 left-3 z-10">
        <div className="bg-white/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded shadow-sm">
          {type || "Residential"}
        </div>
      </div>
      
      <Link to={`/property/${id}`} className="block">
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <motion.div
            whileHover="hover"
            initial="initial"
            className="h-full w-full"
          >
            <motion.div
              variants={imageHoverVariants}
              className="h-full w-full"
            >
              <ImageWithFallback
                src={propertyImageUrl}
                alt={name || 'Property image'}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 transition-opacity"></div>
          
          {/* Floating price badge in image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 + 0.5, duration: 0.5 }}
            className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg"
          >
            <p className="font-bold text-sm sm:text-base text-amber-gold">
              {displayPrice}
            </p>
          </motion.div>
        </div>
      </Link>

      <motion.div 
        className="p-5 sm:p-6 flex flex-col flex-grow"
        variants={contentVariants}
      >
        <Link to={`/property/${id}`} className="block mb-2">
          <motion.h3 
            variants={childVariants} 
            custom={0}
            className="text-lg sm:text-xl font-display font-bold text-deep-teal group-hover:text-amber-gold transition-colors duration-300 leading-tight"
          >
            {name || "Unnamed Property"}
          </motion.h3>
        </Link>

        <motion.div 
          variants={childVariants}
          custom={1}
          className="flex items-center text-xs sm:text-sm text-sage-teal mb-3"
        >
          <i className="fas fa-map-marker-alt mr-1.5"></i>
          <span className="truncate">{location?.address || location?.city || "N/A"}</span>
        </motion.div>

        <motion.p 
          variants={childVariants}
          custom={2}
          className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2"
        >
          {shortDescription || (property.description ? property.description.substring(0, 100) + '...' : 'An excellent property opportunity.')}
        </motion.p>

        {/* Property Details Box with status-specific content */}
        <motion.div
          variants={childVariants}
          custom={3}
          className="mb-5 p-4 bg-sage-teal/10 rounded-lg"
        >
          {/* For Under Construction Properties */}
          {status === 'under-construction' && completionPercentage != null && (
            <div className="mb-3 space-y-2">
              <div className="text-xs">
                <div className="flex items-center justify-between text-gray-600 mb-1">
                  <span className="font-medium">Construction Progress</span>
                  <span className="font-semibold text-deep-teal">{completionPercentage}%</span>
                </div>
                <div className="w-full bg-sage-teal/30 rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    className="bg-amber-gold h-2.5 rounded-full"
                    initial={{ width: 0 }}                    
                    animate={{ width: `${completionPercentage}%` }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 + 0.7 }}
                  ></motion.div>
                </div>
              </div>
              {possessionDate && (
                <div className="text-xs text-gray-600 flex justify-between items-center mt-2">
                  <span className="font-medium">Expected Possession:</span>
                  <span className="font-semibold text-deep-teal">{possessionDate}</span>
                </div>
              )}
            </div>
          )}
          
          {/* For Nearing Possession Properties */}
          {status === 'nearing-possession' && (
            <div className="mb-3 space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span className="font-medium">Ready for Possession:</span>
                <span className="font-semibold text-amber-gold">{possessionDate || "Soon"}</span>
              </div>
              <div className="flex items-center justify-center bg-amber-gold/10 p-1.5 rounded mt-1">
                <i className="fas fa-bell text-amber-gold mr-1.5"></i>
                <span className="text-xs text-deep-teal font-medium">Book Now for Early Bird Offers!</span>
              </div>
            </div>
          )}
          
          {/* For Completed Properties */}
          {(status === 'completed' || status === 'ready-to-move-in') && (
            <div className="mb-3 space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span className="font-medium">Move In:</span>
                <span className="font-semibold text-green-600">Immediately</span>
              </div>
              <div className="flex items-center justify-center bg-green-600/10 p-1.5 rounded mt-1">
                <i className="fas fa-check-circle text-green-600 mr-1.5"></i>
                <span className="text-xs text-deep-teal font-medium">Ready for Immediate Possession!</span>
              </div>
            </div>
          )}

          {/* Property Specs in Flex Layout */}
          {(bedrooms || bathrooms || area) && (
            <div className="flex justify-between text-xs sm:text-sm text-gray-700 mt-3">
              {bedrooms && (
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 rounded-full mb-1.5">
                    <i className="fas fa-bed text-sage-teal"></i>
                  </div>
                  <span className="font-medium">{bedrooms} {bedrooms.includes(',') ? 'Beds' : (parseInt(bedrooms) === 1 ? 'Bed' : 'Beds')}</span>
                </div>
              )}
              {bathrooms && (
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 rounded-full mb-1.5">
                    <i className="fas fa-bath text-sage-teal"></i>
                  </div>
                  <span className="font-medium">{bathrooms} {bathrooms.includes(',') ? 'Baths' : (parseInt(bathrooms) === 1 ? 'Bath' : 'Baths')}</span>
                </div>
              )}
              {area && (
                <div className="flex flex-col items-center">
                  <div className="bg-white p-2 rounded-full mb-1.5">
                    <i className="fas fa-vector-square text-sage-teal"></i>
                  </div>
                  <span className="font-medium">{area} sqft</span>
                </div>
              )}
            </div>
          )}
        </motion.div>
        
        {property.unitTypes && property.unitTypes.length > 0 && (
          <motion.div 
            variants={childVariants}
            custom={4}
            className="mb-5 flex flex-wrap gap-1.5"
          >
            {property.unitTypes.slice(0, 3).map((unit, idx) => (
              <span key={idx} className="bg-deep-teal/10 text-deep-teal px-2 py-0.5 rounded text-xs font-medium border-l-2 border-amber-gold">
                {unit.name}
              </span>
            ))}
            {property.unitTypes.length > 3 && (
              <span className="bg-amber-gold/10 text-amber-gold px-2 py-0.5 rounded text-xs font-medium">
                +{property.unitTypes.length - 3} more
              </span>
            )}
          </motion.div>
        )}

        <motion.div 
          variants={childVariants}
          custom={5}
          className="mt-auto"
        >
          <Link to={`/property/${id}`}>
            <motion.div
              className={`w-full text-center py-2.5 px-5 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base flex items-center justify-center
                ${status === 'completed' || status === 'ready-to-move-in' 
                  ? 'bg-green-600 text-white hover:bg-amber-gold hover:text-deep-teal' 
                  : 'bg-deep-teal text-white hover:bg-amber-gold hover:text-deep-teal'}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'completed' || status === 'ready-to-move-in' ? (
                <>
                  <i className="fas fa-home mr-2"></i>
                  View Ready Home
                </>
              ) : status === 'nearing-possession' ? (
                <>
                  <i className="fas fa-key mr-2"></i>
                  Book Now
                </>
              ) : (
                <>
                  <i className="fas fa-info-circle mr-2"></i>
                  View Details
                </>
              )}
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PropertyCard; 