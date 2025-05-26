import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiX, FiMaximize } from 'react-icons/fi';

const PropertyGallery = ({ images = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // If no images provided, show a placeholder
  if (!images || images.length === 0) {
    return (
      <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={images[currentImageIndex].url}
            alt={images[currentImageIndex].alt || `Property Image ${currentImageIndex + 1}`}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Navigation Controls */}
        <button
          onClick={handlePrevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          aria-label="Previous image"
        >
          <FiChevronLeft className="text-gray-800 text-xl" />
        </button>

        <button
          onClick={handleNextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          aria-label="Next image"
        >
          <FiChevronRight className="text-gray-800 text-xl" />
        </button>

        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
          aria-label="Toggle fullscreen"
        >
          <FiMaximize className="text-gray-800" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex space-x-2 overflow-x-auto pb-2 hide-scrollbar">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
              index === currentImageIndex ? 'border-teal-500 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt || `Thumbnail ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
          >
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
              aria-label="Close fullscreen"
            >
              <FiX className="text-2xl" />
            </button>

            <div className="relative w-full max-w-6xl max-h-full">
              <img
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].alt || `Property Image ${currentImageIndex + 1}`}
                className="object-contain w-full h-full"
              />

              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3"
                aria-label="Previous image"
              >
                <FiChevronLeft className="text-white text-2xl" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3"
                aria-label="Next image"
              >
                <FiChevronRight className="text-white text-2xl" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PropertyGallery; 