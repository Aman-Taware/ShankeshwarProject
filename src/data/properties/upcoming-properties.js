/**
 * Upcoming Properties Data
 * Contains all properties with 'upcoming' status
 */

const upcomingProperties = [
  {
    id: 'shankeshwar-harmony',
    name: 'Shankeshwar Harmony',
    slug: 'shankeshwar-harmony',
    status: 'upcoming',
    type: 'Residential',
    shortDescription: '2 & 3 BHK Premium Homes in Balewadi',
    description: 'Shankeshwar Harmony is an upcoming premium residential project in the prime location of Balewadi, offering thoughtfully designed 2 & 3 BHK apartments. The project focuses on creating harmonious living spaces with an emphasis on comfort, sustainability, and a balanced lifestyle.',
    location: {
      address: 'Balewadi, Near Balewadi High Street',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '411045',
      coordinates: {
        lat: 18.5716,
        lng: 73.7726,
      },
      landmarks: [
        { name: 'Balewadi Stadium', distance: '1.2 km', type: 'sports', details: 'Multi-purpose stadium hosting national and international events' },
        { name: 'Balewadi High Street', distance: '1.5 km', type: 'entertainment', details: 'Popular lifestyle and dining destination' },
        { name: 'Hinjewadi IT Park', distance: '6.5 km', type: 'workplace', details: 'Major IT hub with numerous multinational companies' },
        { name: 'University Circle', distance: '4.2 km', type: 'education', details: 'Educational hub with multiple institutions' },
        { name: 'Mumbai-Bangalore Highway', distance: '2.8 km', type: 'connectivity', details: 'Major highway connecting multiple cities' }
      ],
      nearby: {
        schools: [
          { name: 'Orchid International School', distance: '2.2 km', rating: 4.5, details: 'CBSE curriculum, Grades KG-12' },
          { name: 'Delhi Public School', distance: '3.5 km', rating: 4.4, details: 'CBSE curriculum with excellent facilities' },
          { name: 'The Bishop\'s School', distance: '5.8 km', rating: 4.7, details: 'ICSE curriculum with emphasis on holistic development' }
        ],
        hospitals: [
          { name: 'Jupiter Hospital', distance: '3.2 km', rating: 4.3, details: 'Multi-specialty hospital with 24/7 emergency services' },
          { name: 'Ruby Hall Clinic', distance: '5.5 km', rating: 4.6, details: 'Leading healthcare facility in Pune' }
        ],
        shopping: [
          { name: 'Balewadi High Street', distance: '1.5 km', rating: 4.7, details: 'Premium shopping and dining destination' },
          { name: 'Westend Mall', distance: '4.8 km', rating: 4.2, details: 'Shopping mall with entertainment options' },
          { name: 'D Mart', distance: '2.2 km', rating: 4.1, details: 'Supermarket for daily needs' }
        ],
        restaurants: [
          { name: 'The Urban Foundry', distance: '1.6 km', rating: 4.5, details: 'Popular dining and nightlife venue' },
          { name: 'Elephant & Co.', distance: '1.8 km', rating: 4.4, details: 'Trendy gastropub with outdoor seating' },
          { name: 'Persian Darbar', distance: '2.5 km', rating: 4.3, details: 'Authentic Mughlai cuisine restaurant' }
        ],
        transportation: [
          { name: 'Balewadi Bus Stand', distance: '1.0 km', details: 'Regular bus services to all parts of the city' },
          { name: 'Pune Metro Station (Upcoming)', distance: '3.5 km', details: 'Part of the planned metro network' }
        ]
      }
    },
    images: [
      { url: '/images/placeholders/coming-soon.jpeg', alt: 'Shankeshwar Harmony Rendering', type: 'exterior' },
      ],
    flatTypes: [
      { 
        type: '2 BHK',
        configurations: [
          {
            name: '2 BHK - 900',
            carpetArea: 900,
            builtUpArea: 1100,
            superBuiltUpArea: 1200,
            price: 9500000,
            floorPlan: '/images/property/shankeshwar-harmony/floorplans/harmony-2bhk-900-2d.jpg',
            bedrooms: 2,
            bathrooms: 2,
            balconies: 2,
            additionalRooms: [],
            facing: 'East',
          },
          {
            name: '2 BHK Premium - 1000',
            carpetArea: 1000,
            builtUpArea: 1200,
            superBuiltUpArea: 1300,
            price: 10500000,
            floorPlan: '/images/property/shankeshwar-harmony/floorplans/harmony-2bhk-premium-1000-2d.jpg',
            bedrooms: 2,
            bathrooms: 2,
            balconies: 2,
            additionalRooms: ['Study'],
            facing: 'North-East',
          }
        ]
      },
      { 
        type: '3 BHK',
        configurations: [
          {
            name: '3 BHK - 1350',
            carpetArea: 1350,
            builtUpArea: 1550,
            superBuiltUpArea: 1650,
            price: 13800000,
            floorPlan: '/images/property/shankeshwar-harmony/floorplans/harmony-3bhk-1350-2d.jpg',
            bedrooms: 3,
            bathrooms: 3,
            balconies: 2,
            additionalRooms: ['Study'],
            facing: 'North',
          },
          {
            name: '3 BHK Premium - 1500',
            carpetArea: 1500,
            builtUpArea: 1700,
            superBuiltUpArea: 1800,
            price: 15500000,
            floorPlan: '/images/property/shankeshwar-harmony/floorplans/harmony-3bhk-premium-1500-2d.jpg',
            bedrooms: 3,
            bathrooms: 3,
            balconies: 3,
            additionalRooms: ['Study', 'Servant Room'],
            facing: 'North-East',
          }
        ]
      }
    ],
    amenities: [
      { name: 'Infinity Pool', category: 'recreational' },
      { name: 'Premium Clubhouse', category: 'recreational' },
      { name: 'State-of-the-art Gym', category: 'recreational' },
      { name: 'Landscaped Gardens', category: 'recreational' },
      { name: 'Children\'s Play Area', category: 'recreational' },
      { name: 'Meditation Zone', category: 'recreational' },
      { name: 'Sports Court', category: 'recreational' },
      { name: '24/7 Security', category: 'security' },
      { name: 'CCTV Surveillance', category: 'security' },
      { name: 'Indoor Games', category: 'recreational' },
      { name: 'Jogging Track', category: 'recreational' },
      { name: 'Multipurpose Hall', category: 'recreational' },
      { name: 'Yoga Deck', category: 'recreational' },
      { name: 'Covered Parking', category: 'convenience' },
      { name: 'Visitor Parking', category: 'convenience' },
      { name: 'Power Backup', category: 'convenience' },
      { name: 'High Speed Elevators', category: 'convenience' },
      { name: 'Rainwater Harvesting', category: 'sustainability' },
      { name: 'Solar Power Integration', category: 'sustainability' }
    ],
    amenityImages: [
      '/images/placeholders/amenity-upcoming1.svg',
      '/images/placeholders/amenity-upcoming2.svg'
    ],
    totalUnits: 150,
    completionDate: 'December 2026',
    possessionDate: 'March 2027',
    reraNumber: null, // RERA registration pending
    priceRange: {
      min: 9500000,
      max: 15500000
    },
    startingPrice: 9500000,
    completionPercentage: 0,
    brochureUrl: '/documents/properties/shankeshwar-harmony/shankeshwar-harmony-brochure.pdf',
    floorPlanPdf: '/documents/properties/shankeshwar-harmony/shankeshwar-harmony-floorplans.pdf',
    videoUrl: null, // No video yet
    reraCertificateUrl: null, // RERA certificate pending
    specifications: {
      structure: 'RCC framed structure with earthquake-resistant design',
      walls: 'External walls with superior quality bricks and internal walls with lightweight blocks',
      flooring: 'Imported marble in living and dining; Wooden flooring in master bedroom',
      doors: 'Premium wooden doors with high-end hardware',
      windows: 'UPVC windows with sound insulation',
      kitchen: 'Modular kitchen with premium fixtures and fittings',
      electrical: 'Concealed copper wiring with branded modular switches',
      painting: 'Premium emulsion paint with textured finish in select areas',
      sustainability: 'Solar panels, rainwater harvesting, and waste management systems'
    },
    projectOverview: {
      total_area: '6.5 Acres',
      total_buildings: '3 Towers',
      total_units: '150 Apartments',
      unit_variants: '2 & 3 BHK',
      open_space: '65% of Total Area',
      car_parking: '2 per Apartment',
      completion_date: 'December 2026',
      possession_date: 'March 2027'
    },
    contactPhone: '+919604304919',
    contactEmail: 'shankeshwarbuildcorp@gmail.com'
  },
  {
    id: 'shankeshwar-serenity',
    name: 'Shankeshwar Serenity',
    slug: 'shankeshwar-serenity',
    status: 'upcoming',
    type: 'Residential',
    shortDescription: '3 & 4 BHK Luxury Villas in Koregaon Park',
    description: 'Shankeshwar Serenity offers exclusive 3 & 4 BHK luxury villas in the prestigious Koregaon Park area. These meticulously designed villas provide privacy, space, and premium amenities for those seeking an elevated lifestyle in one of Pune\'s most sought-after neighborhoods.',
    location: {
      address: 'Koregaon Park, Lane 5',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '411001',
      coordinates: {
        lat: 18.5362,
        lng: 73.8931,
      },
      landmarks: [
        { name: 'Osho Ashram', distance: '1.5 km', type: 'landmark', details: 'Internationally renowned meditation center' },
        { name: 'Seasons Mall', distance: '3.2 km', type: 'shopping', details: 'Premium shopping destination' },
        { name: 'Koregaon Park Plaza', distance: '2.1 km', type: 'shopping', details: 'Upscale shopping mall' },
        { name: 'Phoenix Market City', distance: '4.5 km', type: 'shopping', details: 'Large shopping mall with entertainment options' }
      ]
    },
    images: [
      { url: '/images/placeholders/coming-soon.jpeg', alt: 'Shankeshwar Serenity Villa Concept', type: 'exterior' },
 ],
    flatTypes: [
      { 
        type: '3 BHK Villa',
        configurations: [
          {
            name: '3 BHK Villa - 2500',
            carpetArea: 2500,
            builtUpArea: 2900,
            superBuiltUpArea: 3200,
            price: 48000000,
            floorPlan: '/images/property/shankeshwar-serenity/floorplans/serenity-3bhk-villa-2d.jpg',
            bedrooms: 3,
            bathrooms: 3.5,
            balconies: 2,
            additionalRooms: ['Study', 'Servant Room', 'Garden'],
            facing: 'East',
          }
        ]
      },
      { 
        type: '4 BHK Villa',
        configurations: [
          {
            name: '4 BHK Villa - 3200',
            carpetArea: 3200,
            builtUpArea: 3600,
            superBuiltUpArea: 4000,
            price: 65000000,
            floorPlan: '/images/property/shankeshwar-serenity/floorplans/serenity-4bhk-villa-2d.jpg',
            bedrooms: 4,
            bathrooms: 4.5,
            balconies: 3,
            additionalRooms: ['Study', 'Home Theater', 'Servant Room', 'Private Pool', 'Garden'],
            facing: 'North-East',
          }
        ]
      }
    ],
    amenities: [
      { name: 'Private Swimming Pools', category: 'recreational' },
      { name: 'Exclusive Clubhouse', category: 'recreational' },
      { name: 'Fully-equipped Gym', category: 'recreational' },
      { name: 'Landscaped Gardens', category: 'recreational' },
      { name: 'Tennis Court', category: 'recreational' },
      { name: 'Gated Community', category: 'security' },
      { name: '24/7 Security', category: 'security' },
      { name: 'CCTV Surveillance', category: 'security' },
      { name: 'Smart Home Technology', category: 'convenience' },
      { name: 'Concierge Services', category: 'convenience' },
      { name: 'Party Lawn', category: 'recreational' },
      { name: 'Meditation Garden', category: 'recreational' },
      { name: 'EV Charging Stations', category: 'convenience' }
    ],
    totalUnits: 25,
    completionDate: 'March 2027',
    possessionDate: 'June 2027',
    reraNumber: null, // RERA registration pending
    priceRange: {
      min: 48000000,
      max: 65000000
    },
    startingPrice: 48000000,
    completionPercentage: 0,
    brochureUrl: '/documents/properties/shankeshwar-serenity/shankeshwar-serenity-brochure.pdf',
    floorPlanPdf: '/documents/properties/shankeshwar-serenity/shankeshwar-serenity-floorplans.pdf',
    videoUrl: null, // No video yet
    reraCertificateUrl: null, // RERA certificate pending
    specifications: {
      structure: 'RCC framed structure with earthquake-resistant design',
      walls: 'External walls with superior quality bricks and internal walls with acoustic insulation',
      flooring: 'Italian marble in living and dining; Engineered wooden flooring in bedrooms',
      doors: 'Premium wooden doors with high-end hardware',
      windows: 'UPVC windows with double glazing for sound insulation',
      kitchen: 'Imported modular kitchen with premium appliances',
      electrical: 'Smart home automation system with voice control',
      painting: 'Premium imported paints with designer finishes',
      sustainability: 'Solar panels, rainwater harvesting, and organic waste converters'
    },
    projectOverview: {
      total_area: '5 Acres',
      total_units: '25 Villas',
      unit_variants: '3 & 4 BHK Villas',
      open_space: '70% of Total Area',
      car_parking: '3 per Villa',
      completion_date: 'March 2027',
      possession_date: 'June 2027'
    },
    contactPhone: '+919604304919',
    contactEmail: 'shankeshwarbuildcorp@gmail.com'
  }
];

export default upcomingProperties; 