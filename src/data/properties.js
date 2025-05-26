// Import all dependencies first
import * as propertyHelpers from './propertyHelpers';

/**
 * Mock property data 
 * In a real application, this would be fetched from a CMS or API
 */
const mockProperties = [
  {
    id: 'shankeshwar-pearl',
    name: 'Shankeshwar Pearl',
    slug: 'shankeshwar-pearl',
    status: 'under-construction',
    type: 'Residential',
    shortDescription: '1, 2, 2.5 & 3 BHK Luxury Homes in Ravet',
    description: 'Shankeshwar Pearl offers luxurious 1, 2, 2.5 & 3 BHK homes with large carpet areas in the prime location of Ravet. These carefully designed residences provide a perfect blend of comfort, style, and modern amenities to elevate your living experience.',
    location: {
      address: 'Ravet, Off Pune-Mumbai Highway',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '411033',
      coordinates: {
        lat: 18.6501,
        lng: 73.7568,
      },
      landmarks: [
        { name: 'Pimpri-Chinchwad College', distance: '2.5 km', type: 'education', details: 'One of the premier engineering colleges in Pune with modern facilities' },
        { name: 'Ravet Metro Station', distance: '1.2 km', type: 'commute', details: 'Easy access to public transportation with direct connectivity to Pune city' },
        { name: 'Aditya Birla Hospital', distance: '4 km', type: 'healthcare', details: 'Multi-specialty hospital with emergency services available 24/7' },
        { name: 'D Mart', distance: '1.8 km', type: 'shopping', details: 'Large retail store for grocery and household shopping needs' },
        { name: 'Indrayani River View', distance: '2.2 km', type: 'recreation', details: 'Beautiful river view with jogging tracks and parks' },
        { name: 'The Lexicon International School', distance: '3.2 km', type: 'education', details: 'CBSE curriculum, Grades KG-12, Known for academic excellence and sports facilities' },
        { name: 'HDFC Bank', distance: '1.0 km', type: 'convenience', details: 'Banking services with ATM facility' },
        { name: 'McDonalds & Food Court', distance: '2.4 km', type: 'food', details: 'Popular food chains and local restaurants available' }
      ],
      nearby: {
        schools: [
          { name: 'The Lexicon International School', distance: '3.2 km', rating: 4.5, details: 'CBSE curriculum, Grades KG-12' },
          { name: 'Delhi Public School', distance: '4.5 km', rating: 4.3, details: 'CBSE affiliated school with excellent facilities' },
          { name: 'Euro School', distance: '5.1 km', rating: 4.2, details: 'International curriculum school with modern amenities' }
        ],
        hospitals: [
          { name: 'Aditya Birla Hospital', distance: '4.0 km', rating: 4.4, details: 'Multi-specialty hospital with 24/7 emergency services' },
          { name: 'Jupiter Hospital', distance: '5.2 km', rating: 4.0, details: 'Advanced healthcare facility with critical care units' }
        ],
        shopping: [
          { name: 'D Mart', distance: '1.8 km', rating: 4.3, details: 'Supermarket for daily needs' },
          { name: 'Phoenix Mall', distance: '8.5 km', rating: 4.6, details: 'Premium shopping mall with entertainment options' }
        ],
        restaurants: [
          { name: 'Urban Spice', distance: '2.1 km', rating: 4.1, details: 'Multi-cuisine restaurant with outdoor seating' },
          { name: 'The Curry House', distance: '2.5 km', rating: 4.2, details: 'Authentic Indian cuisine restaurant' }
        ],
        transportation: [
          { name: 'Ravet Metro Station', distance: '1.2 km', details: 'Direct connectivity to Pune city center' },
          { name: 'PMPML Bus Stand', distance: '0.9 km', details: 'Regular bus services to all parts of the city' }
        ]
      }
    },
    images: [
      { url: '/images/property/shankeshwar-pearl/exterior/pearl-exterior-1.jpg', alt: 'Shankeshwar Pearl Exterior', type: 'exterior' },
      { url: '/images/property/shankeshwar-pearl/interior/pearl-interior-1.jpg', alt: 'Shankeshwar Pearl Lobby', type: 'interior' },
      { url: '/images/property/shankeshwar-pearl/amenities/pearl-pool.jpg', alt: 'Swimming Pool', type: 'amenity' },
      { url: '/images/property/shankeshwar-pearl/interior/pearl-interior-2.jpg', alt: 'Modern Living Room', type: 'interior' },
      { url: '/images/property/shankeshwar-pearl/interior/pearl-interior-3.jpg', alt: 'Elegant Kitchen', type: 'interior' },
      { url: '/images/property/shankeshwar-pearl/amenities/pearl-gym.jpg', alt: 'Fitness Center', type: 'amenity' }
    ],
    // New structured flat types with specific data
    flatTypes: [
      { 
        type: '1 BHK',
        configurations: [
          {
            name: '1 BHK - 580',
            carpetArea: 580,
            builtUpArea: 750,
            superBuiltUpArea: 634,
            price: 4500000,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-1bhk-580-2d.jpg',
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            additionalRooms: [],
            facing: 'East',
          },
          {
            name: '1 BHK - 600',
            carpetArea: 600,
            builtUpArea: 770,
            superBuiltUpArea: 636,
            price: 4700000,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-1bhk-600-2d.jpg',
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            additionalRooms: [],
            facing: 'North-East',
          },
          {
            name: '1 BHK - 620',
            carpetArea: 620,
            builtUpArea: 790,
            superBuiltUpArea: 649,
            price: 4900000,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-1bhk-620-2d.jpg',
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            additionalRooms: ['Study Nook'],
            facing: 'East',
          },
          {
            name: '1 BHK - 645',
            carpetArea: 645,
            builtUpArea: 810,
            superBuiltUpArea: 671,
            price: 5100000,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-1bhk-645-2d.jpg',
            bedrooms: 1,
            bathrooms: 1,
            balconies: 2,
            additionalRooms: ['Study Nook'],
            facing: 'West',
          },
          {
            name: '1 BHK - 660',
            carpetArea: 660,
            builtUpArea: 830,
            superBuiltUpArea: 680,
            price: 5300000,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-1bhk-660-2d.jpg',
            bedrooms: 1,
            bathrooms: 1,
            balconies: 2,
            additionalRooms: ['Study Room'],
            facing: 'North-West',
          }
        ]
      },
      { 
        type: '2 BHK',
        configurations: [
          {
            name: '2 BHK - 850',
            carpetArea: 850,
            builtUpArea: 1050,
            superBuiltUpArea: 1150,
            price: 7800000,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-2bhk-850-2d.jpg',
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            additionalRooms: [],
            facing: 'North-East',
          },
          {
            name: '2 BHK - 950',
            carpetArea: 950,
            builtUpArea: 1150,
            superBuiltUpArea: 1250,
            price: 8500000,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-2bhk-950-2d.jpg',
            bedrooms: 2,
            bathrooms: 2,
            balconies: 2,
            additionalRooms: ['Study Nook'],
            facing: 'South-East',
          }
        ]
      },
      { 
        type: '2.5 BHK',
        configurations: [
          {
            name: '2.5 BHK - 1050',
            carpetArea: 1050,
            builtUpArea: 1250,
            superBuiltUpArea: 1350,
            price: 9200000,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-2.5bhk-1050-2d.jpg',
            bedrooms: 2,
            bathrooms: 2,
            balconies: 2,
            additionalRooms: ['Study Room'],
            facing: 'West',
          }
        ]
      },
      { 
        type: '3 BHK',
        configurations: [
          {
            name: '3 BHK - 1250',
            carpetArea: 1250,
            builtUpArea: 1450,
            superBuiltUpArea: 1550,
            price: 10500000,
            floorPlan: '/images/property/shankeshwar-pearl/floorplans/pearl-3bhk-1250-2d.jpg',
            bedrooms: 3,
            bathrooms: 3,
            balconies: 2,
            additionalRooms: ['Powder Room'],
            facing: 'North',
          }
        ]
      }
    ],
    amenities: [
      { name: 'Swimming Pool', category: 'recreational' },
      { name: 'Clubhouse', category: 'recreational' },
      { name: 'Gym', category: 'recreational' },
      { name: 'Landscaped Gardens', category: 'recreational' },
      { name: 'Children\'s Play Area', category: 'recreational' },
      { name: '24/7 Security', category: 'security' },
      { name: 'CCTV Surveillance', category: 'security' },
      { name: 'Indoor Games', category: 'recreational' },
      { name: 'Jogging Track', category: 'recreational' },
      { name: 'Amphitheater', category: 'recreational' },
      { name: 'Gazebo', category: 'recreational' },
      { name: 'Vastu Compliant', category: 'design' },
      { name: 'Solar Energy', category: 'sustainability' },
      { name: 'Closed Car Parking', category: 'convenience' },
      { name: 'Open Parking', category: 'convenience' },
      { name: '24x7 Water Supply', category: 'convenience' },
      { name: 'Street Lighting', category: 'security' },
      { name: 'Senior Citizen Sitout', category: 'convenience' },
      { name: 'Intercom', category: 'security' },
      { name: 'Power Backup', category: 'convenience' },
      { name: 'RO Water System', category: 'convenience' },
      { name: 'High Speed Elevators', category: 'convenience' },
      { name: 'Temple', category: 'convenience' }
    ],
    // Add direct amenity image URLs
    amenityImages: [
      '/images/property/shankeshwar-pearl/amenities/pearl-amenitie-1.jpg',

      // Add more image URLs as needed
    ],
    totalUnits: 80,
    completionDate: 'December 2025',
    possessionDate: 'March 2026',
    reraNumber: 'P52100012345',
    priceRange: {
      min: 4500000,
      max: 10500000
    },
    startingPrice: 4500000,
    completionPercentage: 75,
    brochureUrl: 'https://example.com/brochures/shankeshwar-pearl-brochure.pdf',
    floorPlanPdf: 'https://example.com/floorplans/shankeshwar-pearl-floorplans.pdf',
    videoUrl: 'https://www.youtube.com/embed/562VuMrFUys',
    specifications: {
      structure: 'RCC framed structure with earthquake-resistant design',
      walls: 'External walls with superior quality bricks and internal walls with lightweight blocks',
      flooring: 'Vitrified tiles in living, dining and bedrooms; Anti-skid tiles in bathrooms',
      doors: 'Engineered wooden doors with quality fittings',
      windows: 'Powder-coated aluminum windows with mosquito mesh',
      kitchen: 'Granite countertop with stainless steel sink and provision for water purifier',
      electrical: 'Concealed copper wiring with adequate points and MCB distribution panel',
      painting: 'Internal walls with premium emulsion paint and external walls with weather-proof paint'
    },
    constructionProgress: {
      overall: 75,
      stages: [
        { name: 'Foundation', percentage: 100 },
        { name: 'Structure', percentage: 95 },
        { name: 'Brickwork', percentage: 85 },
        { name: 'Plumbing', percentage: 70 },
        { name: 'Electrical', percentage: 60 },
        { name: 'Flooring', percentage: 50 },
        { name: 'Finishing', percentage: 30 }
      ]
    },
    projectOverview: {
      total_area: '5.2 Acres',
      total_buildings: '3 Towers',
      total_units: '240 Apartments',
      unit_variants: '1, 2, 2.5 & 3 BHK',
      open_space: '65% of Total Area',
      car_parking: '1 per Apartment',
      completion_date: 'December 2025',
      possession_date: 'March 2026'
    },
    contactPhone: '+919876543210',
    contactEmail: 'sales@shankeshwarrealty.com'
  },
  {
    id: 'shankeshwar-sparsh',
    name: 'Shankeshwar Sparsh',
    slug: 'shankeshwar-sparsh',
    status: 'under-construction',
    type: 'Residential',
    shortDescription: '1 & 2 BHK Child Centric Homes in Moshi',
    description: 'Shankeshwar Sparsh is a child-centric residential project in Moshi offering thoughtfully designed 1 & 2 BHK apartments. The project features dedicated spaces and amenities for children\'s growth and development, making it the perfect home for young families.',
    location: {
      address: 'Moshi, Pune',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '412105',
      coordinates: {
        lat: 18.6791,
        lng: 73.8249,
      },
      landmarks: [
        { name: 'D Y Patil International School', distance: '1.8 km', type: 'education', details: 'Premier educational institution with excellent facilities' },
        { name: 'Moshi Bus Terminal', distance: '1 km', type: 'commute', details: 'Major transportation hub with connectivity to all parts of Pune' },
        { name: 'Aditya Birla Hospital', distance: '5.2 km', type: 'healthcare', details: 'Multi-specialty hospital with 24/7 emergency services' },
        { name: 'Indrayani River View', distance: '3.2 km', type: 'recreation', details: 'Beautiful river view with jogging tracks' },
        { name: 'Pune-Nashik Highway', distance: '0.8 km', type: 'connectivity', details: 'Easy access to major highway for intercity travel' },
        { name: 'D Mart Supermarket', distance: '2.1 km', type: 'shopping', details: 'Large retail store for everyday shopping needs' }
      ],
      nearby: {
        schools: [
          { name: 'D Y Patil International School', distance: '1.8 km', rating: 4.6, details: 'CBSE curriculum, Grades KG-12' },
          { name: 'Priyadarshani School', distance: '3.2 km', rating: 4.2, details: 'State board with modern facilities' },
          { name: 'Podar International School', distance: '4.5 km', rating: 4.4, details: 'ICSE curriculum school' }
        ],
        hospitals: [
          { name: 'Aditya Birla Hospital', distance: '5.2 km', rating: 4.5, details: 'Multi-specialty hospital with emergency services' },
          { name: 'Noble Hospital', distance: '6.1 km', rating: 4.2, details: 'Advanced healthcare facility' }
        ],
        shopping: [
          { name: 'D Mart', distance: '2.1 km', rating: 4.3, details: 'Supermarket for daily needs' },
          { name: 'Nexus Westend Mall', distance: '7.8 km', rating: 4.5, details: 'Shopping mall with entertainment options' }
        ],
        restaurants: [
          { name: 'Hotel Ashoka', distance: '1.5 km', rating: 4.0, details: 'Multi-cuisine restaurant' },
          { name: 'Spice Garden', distance: '2.8 km', rating: 4.2, details: 'Family restaurant with outdoor seating' }
        ],
        transportation: [
          { name: 'Moshi Bus Terminal', distance: '1.0 km', details: 'Major bus terminal with city and intercity services' },
          { name: 'Dehu Road Railway Station', distance: '8.5 km', details: 'Railway connectivity to major cities' }
        ]
      }
    },
    images: [
      { url: '/images/property/shankeshwar-sparsh/exterior/sparsh-exterior-1.jpeg', alt: 'Shankeshwar Sparsh Exterior', type: 'exterior' },
      { url: '/images/property/shankeshwar-sparsh/interior/sparsh-interior-1.jpeg', alt: 'Shankeshwar Sparsh Living Room', type: 'interior' },
      { url: '/images/property/shankeshwar-sparsh/exterior/sparsh-exterior-4.jpeg', alt: 'Shankeshwar Sparsh Living Room', type: 'interior' },
      { url: '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-1.jpeg', alt: 'Children\'s Play Area', type: 'amenity' },
      { url: '/images/property/shankeshwar-sparsh/exterior/sparsh-exterior-2.jpeg', alt: 'Shankeshwar Sparsh Building View', type: 'exterior' },
      { url: '/images/property/shankeshwar-sparsh/interior/sparsh-interior-2.jpeg', alt: 'Modern Kitchen', type: 'interior' },
      // { url: '/images/property/shankeshwar-sparsh/amenities/sparsh-daycare.jpeg', alt: 'Day Care Center', type: 'amenity' }
    ],
    flatTypes: [
      { 
        type: '1 BHK',
        configurations: [
          {
            name: '1 BHK - 650',
            carpetArea: 520,
            builtUpArea: 600,
            superBuiltUpArea: 650,
            price: 3800000,
            floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-650-2d.png',
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            additionalRooms: [],
            facing: 'East',
          },
          {
            name: '1 BHK - 675',
            carpetArea: 540,
            builtUpArea: 620,
            superBuiltUpArea: 675,
            price: 3950000,
            floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-675-2d.png',
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            additionalRooms: [],
            facing: 'North-East',
          },
          {
            name: '1 BHK - 700',
            carpetArea: 560,
            builtUpArea: 645,
            superBuiltUpArea: 700,
            price: 4200000,
            floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-700-2d.png',
            bedrooms: 1,
            bathrooms: 1,
            balconies: 1,
            additionalRooms: ['Study Nook'],
            facing: 'West',
          }
        ]
      },
      { 
        type: '2 BHK',
        configurations: [
          {
            name: '2 BHK - 950',
            carpetArea: 760,
            builtUpArea: 875,
            superBuiltUpArea: 950,
            price: 5500000,
            floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-950-2d.png',
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            additionalRooms: [],
            facing: 'North-East',
          },
          {
            name: '2 BHK - 1000',
            carpetArea: 800,
            builtUpArea: 920,
            superBuiltUpArea: 1000,
            price: 5800000,
            floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-1000-2d.png',
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            additionalRooms: [],
            facing: 'South-East',
          },
          {
            name: '2 BHK - 1050',
            carpetArea: 840,
            builtUpArea: 965,
            superBuiltUpArea: 1050,
            price: 6200000,
            floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-1050-2d.png',
            bedrooms: 2,
            bathrooms: 2,
            balconies: 2,
            additionalRooms: ['Study Nook'],
            facing: 'North-West',
          }
        ]
      }
    ],
    amenities: [
      { name: 'Children\'s Play Area', category: 'recreational' },
      { name: 'Day Care Center', category: 'convenience' },
      { name: 'Study Room', category: 'educational' },
      { name: 'Swimming Pool with Kids Section', category: 'recreational' },
      { name: 'Indoor Games', category: 'recreational' },
      { name: 'Library', category: 'educational' },
      { name: 'Outdoor Sports Area', category: 'recreational' },
      { name: '24/7 Security', category: 'security' },
      { name: 'CCTV Surveillance', category: 'security' },
      { name: 'Landscaped Gardens', category: 'recreational' },
      { name: 'Clubhouse', category: 'recreational' },
      { name: 'Gymnasium', category: 'recreational' },
      { name: 'Jogging Track', category: 'recreational' },
      { name: 'Gazebo', category: 'recreational' },
      { name: 'Vastu Compliant', category: 'design' },
      { name: 'Solar Energy', category: 'sustainability' },
      { name: 'Closed Car Parking', category: 'convenience' },
      { name: 'Open Parking', category: 'convenience' },
      { name: '24x7 Water Supply', category: 'convenience' },
      { name: 'Street Lighting', category: 'security' },
      { name: 'Senior Citizen Sitout', category: 'convenience' },
      { name: 'Intercom', category: 'security' },
      { name: 'Power Backup', category: 'convenience' }
    ],
    // Add amenity images for this property too
    amenityImages: [
      '/images/website/placeholder-amenity.jpg',
      '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-1.jpeg',
      '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-2.jpeg',
      '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-3.jpeg',
      '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-4.jpeg',
      // Add more image URLs as needed
    ],
    totalUnits: 120,
    completionDate: 'June 2025',
    possessionDate: 'September 2025',
    reraNumber: 'P52100023456',
    priceRange: {
      min: 3800000,
      max: 6200000
    },
    startingPrice: 3800000,
    completionPercentage: 60,
    brochureUrl: 'https://example.com/brochures/shankeshwar-sparsh-brochure.pdf',
    floorPlanPdf: 'https://example.com/floorplans/shankeshwar-sparsh-floorplans.pdf',
    videoUrl: 'https://www.youtube.com/embed/KoTJEPP-5Z8',
    specifications: {
      structure: 'RCC framed structure with child-safe design',
      walls: 'Non-toxic paint and child-safe wall finishes',
      flooring: 'Anti-slip, non-toxic flooring in all areas',
      doors: 'Engineered wooden doors with finger-protection design',
      windows: 'Child-safe locks on all windows',
      kitchen: 'Breakfast counter with child-safe edges',
      electrical: 'Child-safe electrical outlets and wiring',
      safety: 'Rounded corners on walls and child-proof balcony railings'
    },
    constructionProgress: {
      overall: 60,
      stages: [
        { name: 'Foundation', percentage: 100 },
        { name: 'Structure', percentage: 85 },
        { name: 'Brickwork', percentage: 75 },
        { name: 'Plumbing', percentage: 50 },
        { name: 'Electrical', percentage: 45 },
        { name: 'Flooring', percentage: 30 },
        { name: 'Finishing', percentage: 15 }
      ]
    },
    projectOverview: {
      total_area: '3.6 Acres',
      total_buildings: '2 Towers',
      total_units: '120 Apartments',
      unit_variants: '1 & 2 BHK',
      open_space: '60% of Total Area',
      car_parking: '1 per Apartment',
      completion_date: 'June 2025',
      possession_date: 'September 2025'
    },
    contactPhone: '+919876543210',
    contactEmail: 'sales@shankeshwarrealty.com'
  },
  {
    id: 'skyline-one',
    name: 'Skyline One',
    slug: 'skyline-one',
    status: 'under-construction',
    type: 'Residential',
    shortDescription: '2, 2.5 & 3 BHK Urban Luxury Homes in Charohli',
    description: 'Skyline One in Charohli offers premium 2, 2.5 & 3 BHK urban luxury homes with stunning views and modern amenities. These thoughtfully designed apartments feature spacious layouts, premium finishes, and state-of-the-art facilities for a truly luxurious living experience.',
    location: {
      address: 'Charohli, Pune',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '411062',
      coordinates: {
        latitude: 18.6120,
        longitude: 73.9352,
      },
      landmarks: [
        { name: 'Indira College', distance: '3 km', type: 'school' },
        { name: 'Talegaon Railway Station', distance: '4.5 km', type: 'transport' },
        { name: 'Columbia Asia Hospital', distance: '5.8 km', type: 'hospital' },
      ]
    },
    images: [
      { url: '/images/placeholders/property1.svg', alt: 'Skyline One Exterior' },
      { url: '/images/placeholders/property2.svg', alt: 'Skyline One Living Room' },
      { url: '/images/placeholders/property3.svg', alt: 'Skyline One View' },
    ],
    unitTypes: [
      { 
        name: '2 BHK Urban', 
        size: { min: 1100, max: 1200 },
        price: { min: 6900000, max: 7500000 }
      },
      { 
        name: '2.5 BHK Premium', 
        size: { min: 1300, max: 1350 },
        price: { min: 8100000, max: 8700000 }
      },
      { 
        name: '3 BHK Luxury', 
        size: { min: 1550, max: 1650 },
        price: { min: 9800000, max: 10500000 }
      }
    ],
    amenities: [
      'Infinity Pool',
      'Sky Lounge',
      'Modern Gymnasium',
      'Landscaped Gardens',
      'Multi-purpose Hall',
      'Indoor Games Room',
      'Yoga Deck',
      '24/7 Security'
    ],
    totalUnits: 90,
    completionDate: 'March 2026',
    possessionDate: 'June 2026',
    reraNumber: 'P52100034567',
    priceRange: {
      min: 6900000,
      max: 10500000
    },
    startingPrice: 6900000,
    completionPercentage: 40,
    brochure: '/documents/skyline-one-brochure.pdf',
    videoTour: 'https://www.youtube.com/watch?v=example3',
    floorPlans: [
      { name: '2 BHK Floor Plan', image: '/images/placeholders/property4.svg' },
      { name: '2.5 BHK Floor Plan', image: '/images/placeholders/property5.svg' },
      { name: '3 BHK Floor Plan', image: '/images/placeholders/property6.svg' },
    ]
  },
  {
    id: 'shankeshwar-villa',
    name: 'Shankeshwar Villa',
    slug: 'shankeshwar-villa',
    status: 'completed',
    type: 'Mixed Use',
    shortDescription: '1 & 2 BHK Homes & Commercial Spaces in Ravet',
    description: 'Shankeshwar Villa is a completed mixed-use development in Ravet offering 1 & 2 BHK residential apartments and commercial spaces. With its prime location and excellent amenities, it provides a comfortable living experience with convenient access to retail and business establishments.',
    location: {
      address: 'Ravet, Pune',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '411033',
      coordinates: {
        latitude: 18.6480,
        longitude: 73.7520,
      },
      landmarks: [
        { name: 'Symbiosis School', distance: '1.5 km', type: 'school' },
        { name: 'Ravet Bus Station', distance: '0.8 km', type: 'transport' },
        { name: 'D-Mart Supermarket', distance: '1.2 km', type: 'mall' },
      ]
    },
    images: [
      { url: '/images/placeholders/property1.svg', alt: 'Shankeshwar Villa Exterior' },
      { url: '/images/placeholders/property2.svg', alt: 'Shankeshwar Villa Interior' },
      { url: '/images/placeholders/property3.svg', alt: 'Shankeshwar Villa Commercial Space' },
    ],
    unitTypes: [
      { 
        name: '1 BHK Standard', 
        size: { min: 650, max: 700 },
        price: { min: 4200000, max: 4500000 }
      },
      { 
        name: '2 BHK Premium', 
        size: { min: 1000, max: 1100 },
        price: { min: 6000000, max: 6500000 }
      },
      {
        name: 'Commercial Shop',
        size: { min: 300, max: 800 }, // Example size in sq ft
        price: { min: 5000000, max: 12000000 } // Example price range
      }
    ],
    amenities: [
      'Ample Parking',
      'Power Backup',
      'Security',
      'Lift Access',
      'Proximity to Main Road',
      'Water Supply'
    ],
    // Add amenity images for this property too
    amenityImages: [
      '/images/website/placeholder-amenity.jpg',
      // Add more image URLs as needed
    ],
    totalUnits: 40, // Example value
    completionDate: 'January 2023',
    possessionDate: 'March 2023',
    reraNumber: 'P52100045678',
    priceRange: {
      min: 4200000,
      max: 12000000
    },
    startingPrice: 4200000,
    brochure: '/documents/shankeshwar-villa-brochure.pdf',
    videoTour: null,
    floorPlans: [
      { name: '1 BHK Floor Plan', image: '/images/placeholders/property4.svg' },
      { name: '2 BHK Floor Plan', image: '/images/placeholders/property5.svg' },
      { name: 'Commercial Unit Layout', image: '/images/placeholders/property6.svg' },
    ]
  }
];

// Timeline data for a specific project (example)
const projectTimeline = [
  { date: '2023-01-15', event: 'Project Announced', description: 'Shankeshwar Pearl groundbreaking ceremony took place.' },
  { date: '2023-04-20', event: 'Construction Started', description: 'Foundation work and initial construction phases commenced.' },
  { date: '2023-10-05', event: 'First Floor Slab Completed', description: 'Significant milestone achieved with the completion of the first floor slab.' },
  { date: '2024-03-10', event: 'Show Flat Ready', description: 'The sample apartment is now ready for viewing by prospective buyers.' }
];

// Use the mock properties as our primary data source
// No need to import from properties/index for now to avoid circular dependencies
const propertiesData = [...mockProperties];

/**
 * Get all properties
 * @returns {Array} Array of properties
 */
export function getAllProperties() {
  return propertiesData;
}

/**
 * Find property by slug
 * @param {string} slug - Property slug
 * @returns {object} Property object
 */
export function getPropertyBySlug(slug) {
  return propertiesData.find(property => property.slug === slug);
}

/**
 * Get property by ID
 * @param {string} id - Property ID
 * @returns {object} Property object
 */
export function getPropertyById(id) {
  return propertiesData.find(property => property.id === id);
}

/**
 * Get properties by status
 * @param {string|Array} status - Property status or array of statuses
 * @param {boolean} sorted - Whether to sort results
 * @returns {Array} Filtered properties
 */
export function getPropertiesByStatus(status, sorted = true) {
  // Handle both single status and array of statuses
  let filteredProperties;
  if (Array.isArray(status)) {
    filteredProperties = propertiesData.filter(property => status.includes(property.status));
  } else {
    filteredProperties = propertiesData.filter(property => property.status === status);
  }
  
  // Sort by name if requested
  if (sorted) {
    return filteredProperties.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  return filteredProperties;
}

/**
 * Get timeline data for a project
 * @returns {Array} Timeline events
 */
export function getTimelineData() {
  return projectTimeline;
}

/**
 * Get related properties
 * @param {string} propertyId - Property ID
 * @param {number} limit - Maximum number of properties to return
 * @returns {Array} Related properties
 */
export function getRelatedProperties(propertyId, limit = 3) {
  const currentProperty = propertiesData.find(p => p.id === propertyId);
  if (!currentProperty) return [];

  return propertiesData
    .filter(p => p.id !== propertyId && p.type === currentProperty.type)
    .slice(0, limit);
}

/**
 * Get featured properties
 * @param {number} limit - Maximum number of properties to return
 * @returns {Array} Featured properties
 */
export function getFeaturedProperties(limit = undefined) {
  // Logic to determine featured properties (example: completed properties first)
  const featured = [...propertiesData]
    .sort((a, b) => {
      // Prioritize completed properties
      if (a.status === 'completed' && b.status !== 'completed') return -1;
      if (a.status !== 'completed' && b.status === 'completed') return 1;
      return 0;
    });
  
  return limit ? featured.slice(0, limit) : featured;
}

/**
 * Search properties
 * @param {string} query - Search query
 * @returns {Array} Matching properties
 */
export function searchProperties(query) {
  if (!query) return [];
  const lowerCaseQuery = query.toLowerCase();
  return propertiesData.filter(property => {
    return (
      property.name.toLowerCase().includes(lowerCaseQuery) ||
      property.shortDescription.toLowerCase().includes(lowerCaseQuery) ||
      property.description.toLowerCase().includes(lowerCaseQuery) ||
      property.location.address.toLowerCase().includes(lowerCaseQuery) ||
      property.location.city.toLowerCase().includes(lowerCaseQuery)
    );
  });
}

/**
 * Get properties by number of bedrooms
 * @param {number|string} bedrooms - Number of bedrooms
 * @returns {Array} Properties with specified bedrooms
 */
export function getPropertiesByBedrooms(bedrooms) {
  if (!bedrooms) return propertiesData;
  const bedroomsStr = String(bedrooms);
  
  return propertiesData.filter(property => {
    if (!property.unitTypes) return false;
    return property.unitTypes.some(unit => unit.name.includes(bedroomsStr + ' BHK'));
  });
}

/**
 * Get properties by price range
 * @param {number} minPrice - Minimum price
 * @param {number} maxPrice - Maximum price
 * @returns {Array} Properties within price range
 */
export function getPropertiesByPriceRange(minPrice, maxPrice) {
  return propertiesData.filter(property => {
    const propertyMinPrice = property.priceRange?.min || property.startingPrice;
    return propertyMinPrice >= minPrice && propertyMinPrice <= maxPrice;
  });
}

/**
 * Get properties by location
 * @param {string} location - Location string
 * @returns {Array} Properties in specified location
 */
export function getPropertiesByLocation(location) {
  if (!location) return propertiesData;
  const locationLower = location.toLowerCase();
  
  return propertiesData.filter(property => {
    const propertyCity = property.location?.city?.toLowerCase() || '';
    const propertyAddress = property.location?.address?.toLowerCase() || '';
    
    return propertyCity.includes(locationLower) || propertyAddress.includes(locationLower);
  });
}

/**
 * Format property price using helper function if available
 * @param {number} price - The price to format
 * @returns {string} Formatted price
 */
export function formatPropertyPrice(price) {
  if (propertyHelpers && propertyHelpers.formatPropertyPrice) {
    return propertyHelpers.formatPropertyPrice(price);
  }
  
  // Fallback formatter if helper is not available
  if (!price) return 'Price on Request';
  
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
}

/**
 * Get property image URL using helper function if available
 * @param {object} property - The property object
 * @param {string} type - The image type
 * @returns {string} Image URL
 */
export function getPropertyImageUrl(property, type = 'exterior') {
  if (propertyHelpers && propertyHelpers.getPropertyImageUrl) {
    return propertyHelpers.getPropertyImageUrl(property, type);
  }
  
  // Fallback if helper is not available
  if (!property || !property.images || !property.images.length) {
    return '/images/website/placeholder-property.jpg';
  }
  
  return property.images[0].url;
}

// Export the data for use in other modules
export default propertiesData; 