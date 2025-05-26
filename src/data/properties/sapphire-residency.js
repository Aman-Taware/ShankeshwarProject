/**
 * Sapphire Residency Property Data
 * Complete property data for Sapphire Residency (Completed Project)
 */

const sapphireResidencyData = {
  id: 'sapphire-residency',
  name: 'Sapphire Residency',
  slug: 'sapphire-residency',
  status: 'completed',
  type: 'Residential',
  shortDescription: 'Exclusive 2 & 3 BHK Homes in Ravet with 5-Star Amenities',
  description: 'Sapphire Residency is a prestigious residential development offering exquisite 2 & 3 BHK apartments in Ravet. The project stands as a testament to modern architecture and superior craftsmanship, designed to provide residents with an unparalleled living experience. With meticulous attention to detail, the project combines aesthetic appeal with functional design, surrounded by lush greenery and state-of-the-art amenities.',
  location: {
    address: 'Survey No. 65, Near Ravet Bridge, Ravet',
    city: 'Pune',
    state: 'Maharashtra',
    zipCode: '412101',
    coordinates: {
      latitude: 18.6472,
      longitude: 73.7532,
    },
    landmarks: [
      { name: 'Indira College of Commerce and Science', distance: '1.5 km', type: 'education' },
      { name: 'Ravet Bus Station', distance: '0.7 km', type: 'transport' },
      { name: 'Pimpri-Chinchwad Municipal Hospital', distance: '3.2 km', type: 'hospital' },
      { name: 'Phoenix MarketCity', distance: '5.5 km', type: 'shopping' },
      { name: 'DY Patil International School', distance: '2.1 km', type: 'education' }
    ],
    nearbyPlaces: [
      { name: 'Big Bazaar', distance: '1.8 km', type: 'shopping' },
      { name: 'ICICI Bank', distance: '0.9 km', type: 'bank' },
      { name: 'Ravet Central Park', distance: '1.0 km', type: 'park' },
      { name: 'Cloud 9 Restaurant', distance: '1.2 km', type: 'restaurant' },
      { name: 'Ravet Police Station', distance: '1.5 km', type: 'safety' },
      { name: 'Symbiosis International University', distance: '4.8 km', type: 'education' },
      { name: 'Mumbai-Pune Expressway', distance: '3.0 km', type: 'highway' }
    ]
  },
  images: [
    // Main project images
    { url: '/images/properties/sapphire-residency/exterior-1.jpg', alt: 'Sapphire Residency Exterior View', type: 'exterior' },
    { url: '/images/properties/sapphire-residency/exterior-2.jpg', alt: 'Sapphire Residency Building View', type: 'exterior' },
    { url: '/images/properties/sapphire-residency/entrance.jpg', alt: 'Grand Entrance Gate', type: 'exterior' },
    { url: '/images/properties/sapphire-residency/lobby.jpg', alt: 'Luxurious Lobby', type: 'interior' },
    { url: '/images/properties/sapphire-residency/clubhouse.jpg', alt: 'Premium Clubhouse', type: 'amenities' },
    { url: '/images/properties/sapphire-residency/garden.jpg', alt: 'Landscaped Gardens', type: 'amenities' },
    { url: '/images/properties/sapphire-residency/gym.jpg', alt: 'Modern Gymnasium', type: 'amenities' },
    { url: '/images/properties/sapphire-residency/pool.jpg', alt: 'Swimming Pool', type: 'amenities' },
    { url: '/images/properties/sapphire-residency/yoga-deck.jpg', alt: 'Yoga and Meditation Area', type: 'amenities' },
    { url: '/images/properties/sapphire-residency/playground.jpg', alt: 'Children\'s Playground', type: 'amenities' },
    
    // Sample apartment interiors
    { url: '/images/properties/sapphire-residency/2bhk-living.jpg', alt: '2 BHK Living Room', type: 'interior' },
    { url: '/images/properties/sapphire-residency/2bhk-bedroom.jpg', alt: '2 BHK Master Bedroom', type: 'interior' },
    { url: '/images/properties/sapphire-residency/2bhk-kitchen.jpg', alt: '2 BHK Kitchen', type: 'interior' },
    { url: '/images/properties/sapphire-residency/3bhk-living.jpg', alt: '3 BHK Living Room', type: 'interior' },
    { url: '/images/properties/sapphire-residency/3bhk-bedroom.jpg', alt: '3 BHK Master Bedroom', type: 'interior' },
    { url: '/images/properties/sapphire-residency/3bhk-kitchen.jpg', alt: '3 BHK Kitchen', type: 'interior' },
    { url: '/images/properties/sapphire-residency/bathroom.jpg', alt: 'Premium Bathroom', type: 'interior' },
    { url: '/images/properties/sapphire-residency/balcony.jpg', alt: 'Spacious Balcony', type: 'interior' }
  ],
  unitTypes: [
    { 
      name: '2 BHK Comfort', 
      size: { min: 985, max: 1025 },
      price: { min: 8200000, max: 8500000 },
      bedrooms: 2,
      bathrooms: 2,
      balconies: 1,
      floorPlans: [
        { name: '2 BHK Comfort Floor Plan', image: '/images/properties/sapphire-residency/floorplans/2bhk-comfort.jpg', type: '2d' },
        { name: '2 BHK Comfort 3D Floor Plan', image: '/images/properties/sapphire-residency/floorplans/2bhk-comfort-3d.jpg', type: '3d' }
      ]
    },
    { 
      name: '2 BHK Grand', 
      size: { min: 1080, max: 1120 },
      price: { min: 8900000, max: 9300000 },
      bedrooms: 2,
      bathrooms: 2,
      balconies: 2,
      floorPlans: [
        { name: '2 BHK Grand Floor Plan', image: '/images/properties/sapphire-residency/floorplans/2bhk-grand.jpg', type: '2d' },
        { name: '2 BHK Grand 3D Floor Plan', image: '/images/properties/sapphire-residency/floorplans/2bhk-grand-3d.jpg', type: '3d' }
      ]
    },
    { 
      name: '3 BHK Premium', 
      size: { min: 1375, max: 1425 },
      price: { min: 10500000, max: 10900000 },
      bedrooms: 3,
      bathrooms: 2,
      balconies: 2,
      floorPlans: [
        { name: '3 BHK Premium Floor Plan', image: '/images/properties/sapphire-residency/floorplans/3bhk-premium.jpg', type: '2d' },
        { name: '3 BHK Premium 3D Floor Plan', image: '/images/properties/sapphire-residency/floorplans/3bhk-premium-3d.jpg', type: '3d' }
      ]
    },
    { 
      name: '3 BHK Elite', 
      size: { min: 1550, max: 1600 },
      price: { min: 11800000, max: 12400000 },
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      floorPlans: [
        { name: '3 BHK Elite Floor Plan', image: '/images/properties/sapphire-residency/floorplans/3bhk-elite.jpg', type: '2d' },
        { name: '3 BHK Elite 3D Floor Plan', image: '/images/properties/sapphire-residency/floorplans/3bhk-elite-3d.jpg', type: '3d' }
      ]
    }
  ],
  amenities: [
    'Temperature-Controlled Swimming Pool',
    'Fully-Equipped Gymnasium',
    'Multipurpose Hall',
    'Indoor Games Room',
    'Children\'s Play Area',
    'Landscaped Gardens',
    'Yoga and Meditation Zone',
    'Open-Air Theater',
    'Senior Citizen Sit-Out',
    'Party Lawn',
    'Jogging Track',
    'Basketball Court',
    'Library',
    'Steam Room',
    'High-Speed Elevators',
    '24/7 Security',
    'CCTV Surveillance',
    'Power Backup',
    'Rainwater Harvesting',
    'Solar-Powered Common Areas',
    'Car Charging Stations',
    'Visitor Parking'
  ],
  totalUnits: 96,
  launchDate: 'June 2018',
  completionDate: 'October 2022',
  possessionDate: 'December 2022',
  reraNumber: 'P52100026789',
  priceRange: {
    min: 8200000,
    max: 12400000
  },
  startingPrice: 8200000,
  completionPercentage: 100,
  brochure: '/documents/sapphire-residency-brochure.pdf',
  priceSheet: '/documents/sapphire-residency-price-sheet.pdf',
  legalDocuments: '/documents/sapphire-residency-legal-docs.pdf',
  videoTour: 'https://www.youtube.com/watch?v=sapphire-residency-tour',
  virtualTour: 'https://360-tour.example.com/sapphire-residency',
  floorPlans: [
    { name: 'Master Layout Plan', image: '/images/properties/sapphire-residency/floorplans/master-plan.jpg', type: 'master' },
    { name: 'Wing A Layout', image: '/images/properties/sapphire-residency/floorplans/wing-a-layout.jpg', type: 'tower' },
    { name: 'Wing B Layout', image: '/images/properties/sapphire-residency/floorplans/wing-b-layout.jpg', type: 'tower' },
    { name: 'Typical Floor Plan', image: '/images/properties/sapphire-residency/floorplans/typical-floor.jpg', type: 'floor' }
  ],
  keyFeatures: [
    'Italian Marble Flooring in Living Room',
    'Vitrified Tile Flooring in Bedrooms',
    'Modular Kitchen with Granite Countertop',
    'Premium CP Fittings in Bathrooms',
    'Branded Sanitary Ware',
    'Laminated Wooden Flooring in Master Bedroom',
    'POP Finish in All Rooms',
    'Split AC Provision in Living Room and Bedrooms',
    'Video Door Phone',
    'WiFi Connectivity',
    'Intercom Facility',
    'Premium Quality Doors',
    'Powder-coated Aluminum Windows',
    'Anti-skid Tiles in Bathrooms',
    'Fire Safety Measures',
    'Earthquake-Resistant Structure'
  ],
  specifications: {
    structure: 'RCC framed earthquake-resistant structure (as per Seismic Zone III standards)',
    walls: {
      external: 'AAC blocks with quality weatherproof paint',
      internal: 'AAC blocks with premium emulsion paint'
    },
    flooring: {
      living: 'Italian marble flooring',
      dining: 'Italian marble flooring',
      bedrooms: 'Vitrified tiles with laminated wooden flooring in master bedroom',
      kitchen: 'Anti-skid ceramic tiles',
      bathrooms: 'Anti-skid ceramic tiles with designer wall tiles up to ceiling height',
      balcony: 'Outdoor-grade anti-skid ceramic tiles with glass railing'
    },
    doors: {
      main: 'Elegant teak wood frame with designer veneer flush door and quality hardware',
      internal: 'Hardwood frames with flush doors and quality fittings',
      bathroom: 'WPC doors with waterproof treatment'
    },
    windows: 'Powder-coated aluminum sliding windows with mosquito mesh and safety grills',
    kitchen: {
      counter: 'Granite countertop with stainless steel sink and drain board',
      fittings: 'Provision for water purifier, exhaust fan, and washing machine',
      cabinets: 'Modular kitchen cabinets with hob and chimney'
    },
    electrical: {
      wiring: 'Concealed copper wiring with circuit breakers',
      outlets: 'Ample electrical points with modular switches',
      backup: 'Full power backup for apartments and common areas'
    },
    bathroom: {
      sanitaryware: 'Premium branded sanitaryware in all bathrooms',
      fittings: 'Chrome-plated CP fittings of reputed make',
      accessories: 'Shower enclosure in master bathroom, overhead shower in all bathrooms'
    },
    security: {
      entrance: 'Grand entrance lobby with 24/7 security personnel',
      surveillance: 'CCTV surveillance for common areas and perimeter',
      access: 'Access control for main entry and clubhouse'
    },
    finishing: {
      walls: 'POP finish with premium emulsion paint',
      ceiling: 'POP cornice and moldings at selected locations'
    }
  },
  availableUnits: [
    {
      unitNumber: 'A-802',
      type: '2 BHK Comfort',
      floor: 8,
      wing: 'A',
      carpetArea: 985,
      price: 8300000,
      facing: 'East',
      status: 'available'
    },
    {
      unitNumber: 'A-1202',
      type: '3 BHK Premium',
      floor: 12,
      wing: 'A',
      carpetArea: 1390,
      price: 10700000,
      facing: 'North-East',
      status: 'available'
    },
    {
      unitNumber: 'B-901',
      type: '2 BHK Grand',
      floor: 9,
      wing: 'B',
      carpetArea: 1100,
      price: 9100000,
      facing: 'West',
      status: 'available'
    },
    {
      unitNumber: 'B-1103',
      type: '3 BHK Elite',
      floor: 11,
      wing: 'B',
      carpetArea: 1580,
      price: 12200000,
      facing: 'South-West',
      status: 'available'
    }
  ],
  testimonials: [
    {
      name: 'Rajesh & Seema Kapoor',
      unitType: '3 BHK Premium',
      occupation: 'IT Professionals',
      quote: 'We were looking for a home that offered both quality and convenience, and Sapphire Residency exceeded our expectations. The amenities are excellent and the community is wonderful.',
      rating: 5,
      date: 'March 2023'
    },
    {
      name: 'Dr. Anjali Sharma',
      unitType: '2 BHK Grand',
      occupation: 'Physician',
      quote: 'As a doctor with a demanding schedule, I wanted a hassle-free living experience. The security, maintenance, and facilities at Sapphire Residency are top-notch, making life truly comfortable.',
      rating: 5,
      date: 'January 2023'
    },
    {
      name: 'Vikram Malhotra',
      unitType: '3 BHK Elite',
      occupation: 'Business Owner',
      quote: 'The construction quality and attention to detail is impressive. We particularly love the spacious rooms and the beautiful view from our balcony. Truly a premium living experience.',
      rating: 4,
      date: 'April 2023'
    }
  ],
  awards: [
    { 
      title: 'Best Residential Project',
      year: '2023',
      issuedBy: 'Pune Real Estate Forum'
    },
    { 
      title: 'Excellence in Construction Quality',
      year: '2022',
      issuedBy: 'Maharashtra Builders Association'
    }
  ],
  bankApprovals: [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Bank of Baroda',
    'Kotak Mahindra Bank',
    'LIC Housing Finance'
  ],
  developer: {
    name: 'Shankeshwar Developers',
    established: '2008',
    completedProjects: 12,
    ongoingProjects: 3,
    description: 'Shankeshwar Developers is a premier real estate developer with a track record of excellence in creating residential and commercial spaces. With over 15 years of experience, the company has built a reputation for quality construction, timely delivery, and customer satisfaction.',
    awards: [
      { year: '2022', name: 'Best Developer of the Year', issuer: 'Maharashtra Real Estate Awards' },
      { year: '2021', name: 'Excellence in Residential Development', issuer: 'Indian Real Estate Awards' }
    ],
    officeAddress: '123 Developer Plaza, Baner Road, Pune - 411045',
    contactPhone: '+91 98765 43210',
    contactEmail: 'sales@shankeshwarbuildcon.com',
    website: 'https://www.shankeshwarbuildcon.com'
  },
  faq: [
    {
      question: 'Are there any ready-to-move-in apartments available?',
      answer: 'Yes, we have select units available for immediate possession. Please contact our sales team for details on currently available units.'
    },
    {
      question: 'What is included in the maintenance charges?',
      answer: 'The maintenance charges cover common area electricity, water supply, security, housekeeping, swimming pool and gym maintenance, gardening, and basic repairs. They are calculated per square foot basis.'
    },
    {
      question: 'Is there sufficient parking space?',
      answer: 'Yes, each unit comes with designated parking space. 2 BHK units have one parking space, while 3 BHK units have two parking spaces. Additional visitor parking is also available.'
    },
    {
      question: 'What are the nearby schools and colleges?',
      answer: 'Within a 5 km radius, you can find DY Patil International School, Indira College of Commerce and Science, Symbiosis International University, and several other educational institutions.'
    },
    {
      question: 'Is the property RERA registered?',
      answer: 'Yes, Sapphire Residency is RERA approved with registration number P52100026789.'
    }
  ],
  metaInfo: {
    title: 'Sapphire Residency - Ready to Move 2 & 3 BHK Apartments in Ravet, Pune',
    description: 'Luxury 2 & 3 BHK ready-to-move apartments in Ravet with premium amenities. RERA registered project by Shankeshwar Developers.',
    keywords: ['2 BHK flats in Ravet', '3 BHK apartments in Pune', 'ready to move flats in Pune', 'Sapphire Residency', 'luxury apartments in Ravet']
  }
};

export default sapphireResidencyData; 