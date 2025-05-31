import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getPropertyImageUrl, formatPropertyPrice } from '../../data/properties';
import ImageWithFallback from '../ui/ImageWithFallback';
import { PROPERTY_STATUS } from '../../config/constants';
import Button from '../ui/Button';
import { FiChevronDown, FiChevronUp, FiMapPin, FiCalendar, FiInfo, FiHome, FiMaximize, FiDownload } from 'react-icons/fi';
import { FaBed, FaBath, FaRulerCombined, FaWhatsapp } from 'react-icons/fa';

const PropertyCard = ({ property, compact = false, index = 0, isCompletedProperty = false, isUpcomingProperty = false }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  if (!property) {
    return null;
  }

  const {
    id,
    name,
    status,
    type,
    subType,
    bedrooms,
    bathrooms,
    area,
    height,
    location,
    slug,
    startingPrice,
    shortDescription,
    completionPercentage,
    possessionDate,
    totalUnits,
    amenities,
    projectOverview,
    flatTypes,
    description,
    images,
    rentalYield,
    expectedAppreciation,
    documents,
    contactPhone
  } = property;

  // Check if this is an investment property
  const isInvestment = type?.toLowerCase() === 'investment';

  // Status configuration
  const getStatusConfig = (statusValue) => {
    // First check if it matches one of our constants
    for (const key in PROPERTY_STATUS) {
      if (PROPERTY_STATUS[key].value === statusValue) {
        return {
          label: PROPERTY_STATUS[key].label,
          color: PROPERTY_STATUS[key].color,
          icon: PROPERTY_STATUS[key].icon
        };
      }
    }
    
    // Fallback
    return {
      label: statusValue ? statusValue.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : "N/A",
      color: 'bg-gray-500 text-white',
      icon: 'fas fa-building'
    };
  };

  // Use status config
  const currentStatus = getStatusConfig(status);

  // Determine if this is a completed property
  const isCompleted = status === PROPERTY_STATUS.COMPLETED.value || 
                     status === PROPERTY_STATUS.READY_TO_MOVE_IN.value ||
                     isCompletedProperty;
  
  // Determine if this is an upcoming property
  const isUpcoming = status === PROPERTY_STATUS.UPCOMING.value || isUpcomingProperty;

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
        
        {/* For completed properties, don't link to detail page */}
        {isCompleted ? (
          <div className="flex w-full">
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
                className="text-md md:text-lg font-display font-semibold text-deep-teal mb-1.5 truncate"
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
          </div>
        ) : (
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
                className="text-md md:text-lg font-display font-semibold text-deep-teal mb-1.5 truncate"
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
        )}
      </motion.div>
    );
  }

  // Full Card (With all information)
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${isCompleted ? 'h-auto' : 'h-full'}`}
    >
      {/* For completed properties, don't link to detail page */}
      {isCompleted ? (
        <div className="h-full flex flex-col">
          <div className="relative overflow-hidden h-52">
            <motion.div
              whileHover={imageHoverVariants.hover}
              className="h-full w-full"
            >
              <ImageWithFallback
                src={propertyImageUrl}
                alt={name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
            </motion.div>
            
            <motion.div 
              className={`absolute top-4 left-4 px-3 py-1.5 rounded-full shadow-md ${currentStatus.color} flex items-center`}
              variants={badgeVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <i className={`${currentStatus.icon} mr-1.5`}></i>
              <span className="font-medium">{currentStatus.label}</span>
            </motion.div>
            
            {startingPrice && (
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-deep-teal font-bold">
                {displayPrice}
              </div>
            )}
          </div>
          
          <div className="p-6 flex-grow">
            <h3 className="text-xl font-display font-bold text-deep-teal group-hover:text-amber-gold transition-colors mb-2">{name}</h3>
            
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <FiMapPin className="mr-1.5 text-sage-teal" />
              <span>{location?.address || location?.city || "N/A"}</span>
              {location?.mapLink && (
                <a 
                  href={location.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 text-amber-gold hover:text-deep-teal transition-colors"
                >
                  <i className="fas fa-map-marked-alt"></i>
                </a>
              )}
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {type && !isInvestment && (
                <div className="p-2 bg-gray-50 rounded-md flex flex-col items-center justify-center">
                  <FiHome className="text-amber-gold mb-1" />
                  <span className="text-xs text-center text-gray-600">{type}</span>
                </div>
              )}
              
              {subType && isInvestment && (
                <div className="p-2 bg-gray-50 rounded-md flex flex-col items-center justify-center">
                  <FiHome className="text-amber-gold mb-1" />
                  <span className="text-xs text-center text-gray-600">{subType}</span>
                </div>
              )}
              
              {flatTypes && flatTypes.length > 0 && !isInvestment && (
                <div className="p-2 bg-gray-50 rounded-md flex flex-col items-center justify-center">
                  <FaBed className="text-amber-gold mb-1" />
                  <span className="text-xs text-center text-gray-600">
                    {flatTypes.map(flat => flat.type.replace(' BHK', '')).join(' & ')} BHK
                  </span>
                </div>
              )}
              
              {area && (
                <div className="p-2 bg-gray-50 rounded-md flex flex-col items-center justify-center">
                  <FaRulerCombined className="text-amber-gold mb-1" />
                  <span className="text-xs text-center text-gray-600">{area}</span>
                </div>
              )}
              
              {height && isInvestment && (
                <div className="p-2 bg-gray-50 rounded-md flex flex-col items-center justify-center">
                  <i className="fas fa-arrows-alt-v text-amber-gold mb-1"></i>
                  <span className="text-xs text-center text-gray-600">Height: {height}</span>
                </div>
              )}
            </div>
            
            {/* Short Description */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 line-clamp-3">{shortDescription || description?.substring(0, 120) + '...' || "A premium property by Shankeshwar Realty designed to provide exceptional living experience."}</p>
            </div>
            
            {/* Investment-specific details */}
            {isInvestment && (
              <div className="bg-amber-gold/10 p-3 rounded-md mb-4">
                <div className="text-deep-teal font-medium text-sm mb-2">Investment Highlights</div>
                <div className="grid grid-cols-2 gap-2">
                  {rentalYield && (
                    <div className="flex items-center">
                      <i className="fas fa-chart-line text-amber-gold mr-2"></i>
                      <span className="text-xs">Rental Yield: {rentalYield}</span>
                    </div>
                  )}
                  {expectedAppreciation && (
                    <div className="flex items-center">
                      <i className="fas fa-arrow-trend-up text-amber-gold mr-2"></i>
                      <span className="text-xs">Appreciation: {expectedAppreciation}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* Documents for investment properties */}
            {isInvestment && documents && documents.length > 0 && (
              <div className="mb-4">
                <div className="text-deep-teal font-medium text-sm mb-2">Documents</div>
                <div className="flex flex-wrap gap-2">
                  {documents.map((doc, idx) => (
                    <a 
                      key={idx}
                      href={doc.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs bg-gray-100 hover:bg-deep-teal/10 px-3 py-1.5 rounded text-deep-teal transition-colors"
                    >
                      <FiDownload className="mr-1.5" />
                      {doc.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
            
            {/* Contact Sales Button for Completed Properties */}
            {!isInvestment && (
              <div className="text-center">
                <a 
                  href={`tel:${contactPhone || '+919604304919'}`}
                  className="inline-flex items-center bg-amber-gold text-deep-teal px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-gold/90 transition-colors"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Contact Sales
                </a>
              </div>
            )}
            
            {/* Investment Property Buttons */}
            {isInvestment && (
              <div className="grid grid-cols-2 gap-2 mt-4">
                <a 
                  href={`tel:${contactPhone || '+919604304919'}`}
                  className="flex items-center justify-center bg-deep-teal text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-deep-teal/90 transition-colors"
                >
                  <i className="fas fa-phone-alt mr-1.5"></i>
                  Call Now
                </a>
                <a 
                  href={`https://wa.me/${contactPhone?.replace(/[^0-9]/g, '') || '919604304919'}?text=Hi, I'm interested in ${name} at ${location?.address || location?.city}. Please share details about this investment opportunity.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="mr-1.5" />
                  WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      ) : isUpcoming ? (
        // For upcoming properties
        <Link to={`/property/${id}`} className="block h-full">
          <div className="h-full flex flex-col">
            <div className="relative overflow-hidden h-52 group">
              <div className="h-full w-full">
                <ImageWithFallback
                  src={propertyImageUrl}
                  alt={name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              <motion.div 
                className={`absolute top-4 left-4 px-3 py-1.5 rounded-full shadow-md ${currentStatus.color} flex items-center`}
                variants={badgeVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <i className={`${currentStatus.icon} mr-1.5`}></i>
                <span className="font-medium">{currentStatus.label}</span>
              </motion.div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-display font-bold text-white mb-1">{name}</h3>
                <div className="flex items-center text-sm text-white/90">
                  <FiMapPin className="mr-1.5" />
                  <span>{location?.address || location?.city || "N/A"}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              {/* Show message for upcoming property */}
              <div className="mb-4 flex items-center text-blue-600">
                <FiCalendar className="mr-2" />
                <span className="font-medium">Coming Soon</span>
              </div>
              
              {/* Short Description with "Will be updated soon" if missing */}
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {shortDescription || "More details about this exciting upcoming project will be updated soon. Register your interest to stay informed!"}
              </p>
              
              {/* Price or CTA */}
              <div className="flex items-center justify-between mt-auto">
                <div>
                  {startingPrice ? (
                    <div className="text-amber-gold font-bold">{displayPrice}</div>
                  ) : (
                    <div className="text-gray-500 text-sm">Price coming soon</div>
                  )}
                </div>
                
                <div className="group-hover:translate-x-2 transition-transform duration-300 text-deep-teal font-medium text-sm flex items-center">
                  Register Interest
                  <i className="fas fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        // For ongoing/regular properties with link to detail page
        <Link to={`/property/${id}`} className="block h-full">
          <div className="h-full flex flex-col">
            <div className="relative overflow-hidden h-52 group">
              <motion.div
                whileHover={imageHoverVariants.hover}
                className="h-full w-full"
              >
                <ImageWithFallback
                  src={propertyImageUrl}
                  alt={name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </motion.div>
              
              <motion.div 
                className={`absolute top-4 left-4 px-3 py-1.5 rounded-full shadow-md ${currentStatus.color} flex items-center`}
                variants={badgeVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <i className={`${currentStatus.icon} mr-1.5`}></i>
                <span className="font-medium">{currentStatus.label}</span>
              </motion.div>
              
              {startingPrice && (
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-deep-teal font-bold">
                  {displayPrice}
                </div>
              )}
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-display font-bold text-deep-teal group-hover:text-amber-gold transition-colors mb-2">{name}</h3>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <FiMapPin className="mr-1.5 text-sage-teal" />
                <span>{location?.address || location?.city || "N/A"}</span>
              </div>
              
              {/* Key Features */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {type && !isInvestment && (
                  <div className="p-2 bg-gray-50 rounded-md flex flex-col items-center justify-center">
                    <FiHome className="text-amber-gold mb-1" />
                    <span className="text-xs text-center text-gray-600">{type}</span>
                  </div>
                )}
                
                {subType && isInvestment && (
                  <div className="p-2 bg-gray-50 rounded-md flex flex-col items-center justify-center">
                    <FiHome className="text-amber-gold mb-1" />
                    <span className="text-xs text-center text-gray-600">{subType}</span>
                  </div>
                )}
                
                {flatTypes && flatTypes.length > 0 && !isInvestment && (
                  <div className="p-2 bg-gray-50 rounded-md flex flex-col items-center justify-center">
                    <FaBed className="text-amber-gold mb-1" />
                    <span className="text-xs text-center text-gray-600">
                      {flatTypes.map(flat => flat.type.replace(' BHK', '')).join(' & ')} BHK
                    </span>
                  </div>
                )}
                
                {area && (
                  <div className="p-2 bg-gray-50 rounded-md flex flex-col items-center justify-center">
                    <FaRulerCombined className="text-amber-gold mb-1" />
                    <span className="text-xs text-center text-gray-600">{area}</span>
                  </div>
                )}
              </div>
              
              {/* Short Description */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 line-clamp-3">{shortDescription || description?.substring(0, 120) + '...' || "A premium property by Shankeshwar Realty designed to provide exceptional living experience."}</p>
              </div>
              
              {/* View Details Button for Ongoing Properties */}
              <div className="mt-auto group-hover:translate-x-2 transition-transform duration-300 text-deep-teal font-medium flex items-center justify-end">
                View Details
                <i className="fas fa-arrow-right ml-2 group-hover:ml-3 transition-all"></i>
              </div>
            </div>
          </div>
        </Link>
      )}
    </motion.div>
  );
};

export default PropertyCard; 