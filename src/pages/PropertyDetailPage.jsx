import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiPhone, FiMail, FiMapPin, FiHome, FiCheckCircle, FiClock, FiList, FiGrid, FiInfo, FiStar, FiImage, FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { FaRupeeSign, FaBuilding, FaHandshake, FaPhone, FaBed, FaBath, FaRulerCombined, FaChevronDown, FaChevronUp } from 'react-icons/fa';

// Components
import PropertyGallery from '../components/property/PropertyGallery';
import PropertyAmenities from '../components/property/PropertyAmenities';
import PropertySpecifications from '../components/property/PropertySpecifications';
import PropertyLocation from '../components/property/PropertyLocation';
import PropertyContactForm from '../components/property/PropertyContactForm';
import PropertyProgressTracker from '../components/property/PropertyProgressTracker';
import FloorPlanSection from '../components/property/FloorPlanSection';
import TabButton from '../components/TabButton';

// Utils & Helpers
import { getPropertyById } from '../data/properties';
import { formatPropertyPrice, getPropertyStatusConfig } from '../utils/propertyHelpers';
import { downloadPropertyBrochure } from '../utils/download';

// Constants
import { PROPERTY_STATUS } from '../config/constants';

const PropertyDetailPage = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('specifications');
  const [isSticky, setIsSticky] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const tabsRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const contactFormRef = useRef(null);
  
  // Fetch property data
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    const fetchPropertyData = async () => {
      setLoading(true);
      try {
        const propertyData = await getPropertyById(propertyId);
        if (propertyData) {
          setProperty(propertyData);
          // Set document title
          document.title = `${propertyData.name} | Shankeshwar Group`;
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
    
    // Add scroll event listener for sticky tabs
    const handleScroll = () => {
      if (tabsRef.current) {
        const tabsPosition = tabsRef.current.getBoundingClientRect().top;
        setIsSticky(tabsPosition <= 0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [propertyId]);

  // Effect to handle scroll indicator for tabs
  useEffect(() => {
    const tabsContainer = tabsContainerRef.current;
    if (!tabsContainer) return;

    const checkScrollWidth = () => {
      // If the scrollable width is greater than the visible width, show indicator
      setShowScrollIndicator(tabsContainer.scrollWidth > tabsContainer.clientWidth);
    };

    // Run check initially
    checkScrollWidth();

    // Update when window is resized
    window.addEventListener('resize', checkScrollWidth);

    // Handle scroll events to hide indicator when user has scrolled to the end
    const handleTabScroll = () => {
      const isAtEnd = tabsContainer.scrollLeft + tabsContainer.clientWidth >= tabsContainer.scrollWidth - 10;
      if (isAtEnd) {
        setShowScrollIndicator(false);
      } else {
        checkScrollWidth();
      }
    };

    tabsContainer.addEventListener('scroll', handleTabScroll);

    return () => {
      window.removeEventListener('resize', checkScrollWidth);
      tabsContainer.removeEventListener('scroll', handleTabScroll);
    };
  }, []);

  // Use property directly instead of downloaded images
  const displayProperty = property;

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle tab selection with smooth scrolling for mobile
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    
    // If on mobile or small screen, scroll the tabs container to make the selected tab visible
    const tabsContainer = tabsContainerRef.current;
    if (tabsContainer && window.innerWidth < 768) { // 768px is typical mobile breakpoint
      const selectedTabElement = tabsContainer.querySelector(`[data-tab="${tabName}"]`);
      
      if (selectedTabElement) {
        // Calculate position to scroll to (centering the tab if possible)
        const containerWidth = tabsContainer.clientWidth;
        const tabWidth = selectedTabElement.clientWidth;
        const tabLeft = selectedTabElement.offsetLeft;
        
        const scrollPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);
        
        // Smooth scroll to the position
        tabsContainer.scrollTo({
          left: Math.max(0, scrollPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-gold"></div>
      </div>
    );
  }

  if (!displayProperty) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-8">The property you are looking for does not exist or has been removed.</p>
        <Link to="/projects" className="bg-deep-teal text-white px-4 py-2 rounded-lg hover:bg-deep-teal/90">
          View All Properties
        </Link>
      </div>
    );
  }

  const statusConfig = getPropertyStatusConfig(displayProperty.status);
  const isUnderConstruction = displayProperty.status === PROPERTY_STATUS.UNDER_CONSTRUCTION.value;
  const isCompleted = displayProperty.status === PROPERTY_STATUS.COMPLETED.value || 
                      displayProperty.status === PROPERTY_STATUS.READY_TO_MOVE_IN.value;

  // Display price range properly
  const formatPriceRange = () => {
    if (!displayProperty.priceRange) {
      return formatPropertyPrice(displayProperty.startingPrice);
    }
    
    if (displayProperty.priceRange.min === displayProperty.priceRange.max) {
      return formatPropertyPrice(displayProperty.priceRange.min);
    }
    
    return `${formatPropertyPrice(displayProperty.priceRange.min)} - ${formatPropertyPrice(displayProperty.priceRange.max)}`;
  };
  
  // Motion variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Property Gallery at the Top */}
        <motion.div 
          className="mb-8 bg-white rounded-lg shadow-md p-0 overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <PropertyGallery images={displayProperty.images} />
        </motion.div>
        
        {/* Property Header */}
        <motion.div 
          className="mb-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-2 text-xs">
                <Link to="/" className="text-gray-500 hover:text-deep-teal">Home</Link>
                <span className="mx-2">›</span>
                <Link to="/projects" className="text-gray-500 hover:text-deep-teal">Projects</Link>
                <span className="mx-2">›</span>
                <span className="text-gray-700">{displayProperty.name}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 text-deep-teal">{displayProperty.name}</h1>
              
              <div className="flex items-center mb-2">
                <FiMapPin className="text-amber-gold mr-2 flex-shrink-0" />
                <span className="text-gray-700">{displayProperty.location.address}, {displayProperty.location.city}</span>
              </div>
              
              {/* Status Badge */}
              <div className="flex items-center mb-4 flex-wrap gap-2">
                <span 
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusConfig.bgColor} ${statusConfig.textColor}`}
                >
                  <i className={`${statusConfig.icon} mr-1`}></i>
                  <span>{statusConfig.label}</span>
                </span>
                
                {isUnderConstruction && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm text-deep-teal bg-sage-teal/20">
                    <FiClock className="mr-1" />
                    Possession by: {displayProperty.possessionDate}
                  </span>
                )}
                
                {isCompleted && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm text-green-700 bg-green-100">
                    <FiCheckCircle className="mr-1" />
                    Ready to Move In
                  </span>
                )}
              </div>
              
              {/* Key features badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {displayProperty.flatTypes && displayProperty.flatTypes.map((type, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1.5 bg-white rounded-md text-sm text-gray-700 border border-gray-200 shadow-sm"
                  >
                    <FaBed className="mr-2 text-amber-gold" />
                    {type.type}
                  </span>
                ))}
                
                {displayProperty.projectOverview?.total_area && (
                  <span className="inline-flex items-center px-3 py-1.5 bg-white rounded-md text-sm text-gray-700 border border-gray-200 shadow-sm">
                    <FaRulerCombined className="mr-2 text-amber-gold" />
                    {displayProperty.projectOverview.total_area}
                  </span>
                )}
                
                {displayProperty.type && (
                  <span className="inline-flex items-center px-3 py-1.5 bg-white rounded-md text-sm text-gray-700 border border-gray-200 shadow-sm">
                    <FaBuilding className="mr-2 text-amber-gold" />
                    {displayProperty.type}
                  </span>
                )}
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-4 md:mt-0 md:text-right bg-white p-5 rounded-lg shadow-sm md:ml-4"
              variants={fadeInUp}
            >
              <div className="text-2xl md:text-3xl font-bold text-amber-gold flex items-center md:justify-end">
                <FaRupeeSign className="mr-1" />
                <span>{formatPriceRange().replace('₹', '')}</span>
              </div>
              <div className="text-sm text-gray-600 mb-3">{displayProperty.priceUnit || 'onwards'}</div>
              
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mt-4">
                <a 
                  href={`tel:${displayProperty.contactPhone || '+919876543210'}`} 
                  className="flex items-center justify-center px-4 py-2.5 bg-amber-gold hover:bg-amber-gold/90 text-deep-teal font-medium rounded-lg transition-colors w-full sm:w-auto"
                >
                  <FaPhone className="mr-2" />
                  Call Now
                </a>
                
                <button 
                  onClick={scrollToContactForm}
                  className="flex items-center justify-center px-4 py-2.5 border border-deep-teal text-deep-teal hover:bg-deep-teal/10 font-medium rounded-lg transition-colors w-full sm:w-auto"
                >
                  <FaHandshake className="mr-2" />
                  Get Callback
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Quick Action Buttons - Modified to include floor plan download */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start overflow-x-auto py-2 -mx-4 px-4 md:mx-0 md:px-0"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {displayProperty.brochureUrl && (
            <motion.a
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={displayProperty.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-sm border border-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-50 flex items-center text-sm font-medium text-deep-teal flex-shrink-0"
            >
              <FiDownload className="mr-2" />
              Download Brochure
            </motion.a>
          )}
          
          {displayProperty.floorPlanPdf && (
            <motion.a
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={displayProperty.floorPlanPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-sm border border-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-50 flex items-center text-sm font-medium text-deep-teal flex-shrink-0"
            >
              <FiGrid className="mr-2" />
              Download Floor Plans
            </motion.a>
          )}
          
          <motion.a
            variants={fadeInUp}
            href={`https://maps.google.com/?q=${displayProperty.location.coordinates?.lat},${displayProperty.location.coordinates?.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-sm border border-gray-200 px-4 py-2.5 rounded-lg hover:bg-gray-50 flex items-center text-sm font-medium text-deep-teal flex-shrink-0"
          >
            <FiMapPin className="mr-2" />
            View on Map
          </motion.a>
        </motion.div>
        
        {/* Tabs */}
        <div 
          ref={tabsRef}
          className={`relative sticky-tabs ${isSticky ? 'sticky top-0 z-20 bg-cream pt-4 shadow-sm' : ''}`}
        >
          <div 
            ref={tabsContainerRef}
            className="flex overflow-x-auto gap-2 mb-6 pb-2 no-scrollbar"
          >
            <TabButton
              active={activeTab === 'specifications'}
              onClick={() => handleTabChange('specifications')}
              icon={<FiList className="mr-2" />}
              label="Specifications"
              data-tab="specifications"
            />
            <TabButton
              active={activeTab === 'floorplans'}
              onClick={() => handleTabChange('floorplans')}
              icon={<FiGrid className="mr-2" />}
              label="Floor Plans"
              data-tab="floorplans"
            />
            <TabButton
              active={activeTab === 'overview'}
              onClick={() => handleTabChange('overview')}
              icon={<FiInfo className="mr-2" />}
              label="Overview"
              data-tab="overview"
            />
            <TabButton
              active={activeTab === 'amenities'}
              onClick={() => handleTabChange('amenities')}
              icon={<FiStar className="mr-2" />}
              label="Amenities"
              data-tab="amenities"
            />
            <TabButton
              active={activeTab === 'location'}
              onClick={() => handleTabChange('location')}
              icon={<FiMapPin className="mr-2" />}
              label="Location"
              data-tab="location"
            />
            <TabButton
              active={activeTab === 'gallery'}
              onClick={() => handleTabChange('gallery')}
              icon={<FiImage className="mr-2" />}
              label="Gallery"
              data-tab="gallery"
            />
          </div>
          
          {/* Scroll indicator for mobile */}
          {showScrollIndicator && (
            <div className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none">
              <div className="h-full flex items-center justify-center pl-8 pr-2 bg-gradient-to-r from-transparent to-cream">
                <div className="animate-pulse flex items-center text-deep-teal">
                  <FiChevronRight className="w-5 h-5" />
                  <FiChevronRight className="w-5 h-5 -ml-3" />
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6 mb-12"
          >
            <div className="min-h-[400px]">
              {activeTab === 'specifications' && (
                <PropertySpecifications specifications={displayProperty.specifications} />
              )}
              
              {activeTab === 'floorplans' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Price & Floor Plan</h2>
                  
                  {/* Updated Floor Plan Section using flatTypes */}
                  <FloorPlanSection flatTypes={displayProperty.flatTypes} />
                </div>
              )}
              
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                  
                  <div className="mb-8">
                    <p className="text-gray-700 mb-4 leading-relaxed">{displayProperty.description}</p>
                  </div>
                  
                  {/* Key Features - check if property has flatTypes with additionalRooms */}
                  {displayProperty.flatTypes && displayProperty.flatTypes.some(type => 
                    type.configurations && type.configurations.some(config => 
                      config.additionalRooms && config.additionalRooms.length > 0)) && (
                    <div className="mb-8">
                      <h3 className="text-xl font-bold mb-4">Additional Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {displayProperty.flatTypes.flatMap(type => 
                          type.configurations.flatMap(config => 
                            (config.additionalRooms || []).map((feature, index) => (
                              <motion.div 
                                key={`${type.type}-${config.name}-${feature}-${index}`} 
                                className="flex items-start bg-gray-50 p-3 rounded-lg"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <FiCheckCircle className="text-amber-gold mt-1 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.div>
                            ))
                          )
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Construction Progress for under construction properties */}
                  {isUnderConstruction && displayProperty.constructionProgress && (
                    <PropertyProgressTracker progress={displayProperty.constructionProgress} />
                  )}
                  
                  {/* Project Overview */}
                  {displayProperty.projectOverview && Object.keys(displayProperty.projectOverview).length > 0 && (
                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Object.entries(displayProperty.projectOverview).map(([key, value], index) => (
                          <motion.div 
                            key={key} 
                            className="p-4 bg-gray-50 rounded-md shadow-sm border border-gray-100"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <div className="text-sm text-gray-500 capitalize">{key.replace(/_/g, ' ')}</div>
                            <div className="font-medium text-deep-teal mt-1">{value}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'amenities' && (
                <PropertyAmenities 
                  amenities={displayProperty.amenities} 
                  propertyId={displayProperty.id} 
                  amenityImages={displayProperty.amenityImages || []}
                />
              )}
              
              {activeTab === 'location' && (
                <PropertyLocation location={displayProperty.location} />
              )}
              
              {activeTab === 'gallery' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                  {displayProperty.images && displayProperty.images.length > 0 ? (
                    <PropertyGallery images={displayProperty.images} />
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No gallery images available.</p>
                    </div>
                  )}
                  
                  {/* YouTube Video Section */}
                  {displayProperty.videoUrl && (
                    <div className="mt-12">
                      <h3 className="text-xl font-bold mb-6">Video Tour</h3>
                      <div className="relative rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                          src={displayProperty.videoUrl}
                          title={`${displayProperty.name} Video Tour`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* Contact Form */}
        <div 
          id="property-contact-form" 
          ref={contactFormRef}
          className="bg-white rounded-lg shadow-md p-6 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Interested in {displayProperty.name}?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <PropertyContactForm property={displayProperty} />
            </div>
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Contact Sales Team</h3>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <div className="w-12 h-12 bg-amber-gold/20 rounded-full flex items-center justify-center mr-3">
                      <FiPhone className="text-amber-gold text-xl" />
                    </div>
                    <div>
                      <p className="font-medium">{displayProperty.contactPhone || '+91 98765 43210'}</p>
                      <p className="text-sm text-gray-600">Mon-Sat 9am to 6pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Email Us</h3>
                  <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <div className="w-12 h-12 bg-amber-gold/20 rounded-full flex items-center justify-center mr-3">
                      <FiMail className="text-amber-gold text-xl" />
                    </div>
                    <div>
                      <p className="font-medium">{displayProperty.contactEmail || 'sales@shankeshwarrealty.com'}</p>
                      <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to receive communications from Shankeshwar Group regarding this property and other offerings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky CTA at bottom for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 flex gap-2 z-40">
        <a 
          href={`tel:${displayProperty.contactPhone || '+919876543210'}`} 
          className="flex-1 flex items-center justify-center px-4 py-2.5 bg-amber-gold hover:bg-amber-gold/90 text-deep-teal font-medium rounded-lg transition-colors"
        >
          <FaPhone className="mr-2" />
          Call Now
        </a>
        
        <button 
          onClick={scrollToContactForm}
          className="flex-1 flex items-center justify-center px-4 py-2.5 bg-deep-teal text-white hover:bg-deep-teal/90 font-medium rounded-lg transition-colors"
        >
          <FaHandshake className="mr-2" />
          Get Callback
        </button>
      </div>

      {/* Add custom styles for sticky tabs and hiding scrollbar */}
      <style jsx>{`
        .sticky-tabs {
          transition: all 0.3s ease;
        }
        
        .sticky-tabs.sticky {
          padding-top: 1rem;
          padding-bottom: 1rem;
        }
        
        /* Hide scrollbar but allow scrolling */
        .no-scrollbar {
          scrollbar-width: none;  /* Firefox */
          -ms-overflow-style: none;  /* Internet Explorer and Edge */
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, and Opera */
        }
      `}</style>
    </div>
  );
};

export default PropertyDetailPage; 