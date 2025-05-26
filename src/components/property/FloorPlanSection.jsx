import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2 } from 'react-icons/fi';
import { FaRupeeSign } from 'react-icons/fa';
import { formatPrice } from '../../utils/formatters';

/**
 * FloorPlanSection component for displaying floor plans with tabs for different apartment types
 * @param {object} props - Component props
 * @param {Array} props.flatTypes - Array of flat types with configurations
 * @returns {JSX.Element} FloorPlanSection component
 */
const FloorPlanSection = ({ flatTypes = [] }) => {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const [selectedConfigIndex, setSelectedConfigIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  // Reset configuration selection when apartment type changes
  useEffect(() => {
    setSelectedConfigIndex(0);
  }, [selectedTypeIndex]);
  
  // Safety check
  if (!flatTypes || flatTypes.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Floor plans will be updated soon.</p>
      </div>
    );
  }
  
  const currentType = flatTypes[selectedTypeIndex];
  if (!currentType || !currentType.configurations || currentType.configurations.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No floor plans available for this property type.</p>
      </div>
    );
  }
  
  const currentConfig = currentType.configurations[selectedConfigIndex];
  if (!currentConfig) {
    // If configuration not found, reset to first configuration
    setSelectedConfigIndex(0);
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Loading floor plan details...</p>
      </div>
    );
  }
  
  const currentImage = currentConfig.floorPlan;

  // Helper function to get range text for a flat type
  const getFlatTypeRangeText = (flatType) => {
    if (!flatType.configurations || flatType.configurations.length === 0) return '';
    
    const prices = flatType.configurations.map(cfg => cfg.price).filter(Boolean);
    if (prices.length === 0) return '';
    
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    
    if (minPrice === maxPrice) {
      return `${formatPrice(minPrice)} L`;
    }
    
    return `${formatPrice(minPrice)} L - ${formatPrice(maxPrice)} L`;
  };

  return (
    <div>
      {/* Unit Type Tabs - Similar to the image reference */}
      <div className="mb-6 flex overflow-x-auto space-x-4 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
        {flatTypes.map((type, index) => (
          <div
            key={index}
            onClick={() => setSelectedTypeIndex(index)}
            className={`px-6 py-4 rounded-lg cursor-pointer transition-all ${
              selectedTypeIndex === index
                ? 'bg-deep-teal text-white shadow-md'
                : 'bg-white border border-gray-200 text-gray-700 hover:border-deep-teal/30'
            }`}
          >
            <div className="font-medium">{type.type} Apartment</div>
            <div className="text-xs mt-1 opacity-90">{getFlatTypeRangeText(type)}</div>
          </div>
        ))}
      </div>
      
      {/* Area Size Variants - Horizontal scroll as shown in the image */}
      <div className="mb-6 overflow-x-auto hide-scrollbar pb-2">
        <div className="flex space-x-2">
          {currentType.configurations.map((config, index) => (
            <div
              key={index}
              onClick={() => setSelectedConfigIndex(index)}
              className={`flex-shrink-0 px-4 py-2 border ${
                selectedConfigIndex === index
                  ? 'border-amber-gold bg-amber-gold/10 text-amber-gold font-medium'
                  : 'border-gray-300 text-gray-700'
              } rounded-lg cursor-pointer transition-all hover:border-amber-gold/50`}
            >
              {config.superBuiltUpArea} SQ.FT
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Display */}
      <div className="mb-6">
        <div className="flex items-center">
          <FaRupeeSign className="text-amber-gold text-2xl mr-1" />
          <span className="text-3xl font-bold">{formatPrice(currentConfig.price)} L</span>
        </div>
      </div>
      
      {/* Floor Plan Content */}
      <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
        <div className="relative">
          <img
            src={currentImage}
            alt={`${currentType.type} Floor Plan - ${currentConfig.superBuiltUpArea} sq.ft`}
            className="w-full h-auto object-contain rounded-lg"
            onError={(e) => {
              e.target.src = '/images/website/placeholder-floorplan.jpg';
            }}
          />
          
          {/* View Larger Button */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            title="View Larger"
          >
            <FiMaximize2 className="text-deep-teal" />
          </button>
        </div>
        
        {/* Flat Details Section */}
        <div className="mt-6 border-t border-gray-100 pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Carpet Area */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-500">Carpet Area</div>
            <div className="font-medium">{currentConfig.carpetArea || currentConfig.superBuiltUpArea * 0.67} sq.ft</div>
          </div>
          
          {/* Built-up Area */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-500">Built-up Area</div>
            <div className="font-medium">{currentConfig.builtUpArea || currentConfig.superBuiltUpArea * 0.85} sq.ft</div>
          </div>
          
          {/* Super Built-up Area */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-500">Super Built-up Area</div>
            <div className="font-medium">{currentConfig.superBuiltUpArea} sq.ft</div>
          </div>
          
          {/* Price */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-sm text-gray-500">Price</div>
            <div className="font-medium flex items-center">
              <FaRupeeSign className="text-amber-gold text-sm mr-1" />
              {formatPrice(currentConfig.price)} L
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox for Floor Plan */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full text-white"
            >
              <FiMaximize2 className="transform rotate-45" />
            </button>
            
            <div className="max-w-4xl w-full">
              <img
                src={currentImage}
                alt={`${currentType.type} Floor Plan - ${currentConfig.superBuiltUpArea} sq.ft`}
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.target.src = '/images/website/placeholder-floorplan.jpg';
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default FloorPlanSection; 