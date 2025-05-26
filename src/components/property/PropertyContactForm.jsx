import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

const PropertyContactForm = ({ property }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `I'm interested in ${property?.name || 'this property'}. Please contact me with more information.`
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/i.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form and show success message
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: `I'm interested in ${property?.name || 'this property'}. Please contact me with more information.`
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        submit: 'There was an error submitting your request. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg p-6">
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center py-8"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <FiCheckCircle className="text-green-600 text-3xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            Your inquiry has been received. Our team will contact you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Send another inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="text-gray-400" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                  placeholder="johndoe@example.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            
            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="text-gray-400" />
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-2 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                  placeholder="9876543210"
                />
              </div>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
            
            {/* Visit Preference (Optional) */}
            <div>
              <label htmlFor="visitPreference" className="block text-gray-700 font-medium mb-2">
                Visit Preference (Optional)
              </label>
              <select
                id="visitPreference"
                name="visitPreference"
                className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">Select an option</option>
                <option value="site-visit">Site Visit</option>
                <option value="virtual-tour">Virtual Tour</option>
                <option value="call-only">Call Only</option>
              </select>
            </div>
          </div>
          
          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message*
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <FiMessageSquare className="text-gray-400" />
              </div>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-2 border ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                } rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500`}
                placeholder="I'm interested in this property..."
              ></textarea>
            </div>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          
          {/* Privacy Policy */}
          <div className="mb-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="privacy" className="text-gray-600">
                  I agree to the <a href="/privacy-policy" className="text-teal-600 hover:text-teal-700">Privacy Policy</a> and consent to being contacted by Shankeshwar Group.
                </label>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Inquiry'
              )}
            </motion.button>
          </div>
          
          {errors.submit && (
            <div className="mt-3 text-center">
              <p className="text-sm text-red-600">{errors.submit}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default PropertyContactForm; 