/**
 * Emerald Heights Property Data
 * Complete property data for Emerald Heights
 */

const emeraldHeightsData = {
  id: 'emerald-heights',
  name: 'Emerald Heights',
  slug: 'emerald-heights',
  status: 'under-construction',
  type: 'Residential',
  shortDescription: 'Premium 2 & 3 BHK Residences in Charohli',
  description: 'Emerald Heights offers meticulously designed 2 & 3 BHK apartments in the rapidly developing Charohli area. With cutting-edge amenities and thoughtful designs, these homes represent the perfect blend of luxury and functionality. Each residence is crafted to maximize space utilization while ensuring aesthetic appeal and comfort.',
  location: {
    address: 'Survey No. 142, Charohli, Pune',
    city: 'Pune',
    state: 'Maharashtra',
    zipCode: '412105',
    coordinates: {
      latitude: 18.6820,
      longitude: 73.8125,
    },
    landmarks: [
      { name: 'MIT College', distance: '3.2 km', type: 'education' },
      { name: 'Charohli Metro Station', distance: '0.8 km', type: 'transport' },
      { name: 'Medipoint Hospital', distance: '2.5 km', type: 'hospital' },
      { name: 'Inorbit Mall', distance: '4.1 km', type: 'shopping' },
      { name: 'Indira Gandhi School', distance: '1.2 km', type: 'education' }
    ],
    nearbyPlaces: [
      { name: 'D-Mart Supermarket', distance: '1.1 km', type: 'shopping' },
      { name: 'Bank of Maharashtra', distance: '0.5 km', type: 'bank' },
      { name: 'Charohli Garden', distance: '1.3 km', type: 'park' },
      { name: 'Sunrise Restaurant', distance: '0.7 km', type: 'restaurant' },
      { name: 'Police Station', distance: '2.2 km', type: 'safety' }
    ]
  },
  images: [
    // Main project images
    { url: '/images/properties/emerald-heights/exterior-1.jpg', alt: 'Emerald Heights Exterior View', type: 'exterior' },
    { url: '/images/properties/emerald-heights/exterior-2.jpg', alt: 'Emerald Heights Front View', type: 'exterior' },
    { url: '/images/properties/emerald-heights/lobby.jpg', alt: 'Grand Entrance Lobby', type: 'interior' },
    { url: '/images/properties/emerald-heights/clubhouse.jpg', alt: 'Clubhouse Facilities', type: 'amenities' },
    { url: '/images/properties/emerald-heights/garden.jpg', alt: 'Landscaped Gardens', type: 'amenities' },
    { url: '/images/properties/emerald-heights/gym.jpg', alt: 'Fully Equipped Gymnasium', type: 'amenities' },
    { url: '/images/properties/emerald-heights/pool.jpg', alt: 'Swimming Pool', type: 'amenities' },
    { url: '/images/properties/emerald-heights/kids-play.jpg', alt: 'Children\'s Play Area', type: 'amenities' },
    
    // Sample apartment interiors
    { url: '/images/properties/emerald-heights/2bhk-living.jpg', alt: '2 BHK Living Room', type: 'interior' },
    { url: '/images/properties/emerald-heights/2bhk-bedroom.jpg', alt: '2 BHK Master Bedroom', type: 'interior' },
    { url: '/images/properties/emerald-heights/3bhk-living.jpg', alt: '3 BHK Living Room', type: 'interior' },
    { url: '/images/properties/emerald-heights/3bhk-bedroom.jpg', alt: '3 BHK Master Bedroom', type: 'interior' },
    { url: '/images/properties/emerald-heights/kitchen.jpg', alt: 'Modern Kitchen', type: 'interior' },
    { url: '/images/properties/emerald-heights/bathroom.jpg', alt: 'Premium Bathroom', type: 'interior' }
  ],
  unitTypes: [
    { 
      name: '2 BHK Compact', 
      size: { min: 950, max: 1000 },
      price: { min: 7200000, max: 7500000 },
      bedrooms: 2,
      bathrooms: 2,
      balconies: 1,
      floorPlans: [
        { name: '2 BHK Compact Floor Plan', image: '/images/properties/emerald-heights/floorplans/2bhk-compact.jpg', type: '2d' },
        { name: '2 BHK Compact 3D Floor Plan', image: '/images/properties/emerald-heights/floorplans/2bhk-compact-3d.jpg', type: '3d' }
      ]
    },
    { 
      name: '2 BHK Premium', 
      size: { min: 1050, max: 1150 },
      price: { min: 7900000, max: 8600000 },
      bedrooms: 2,
      bathrooms: 2,
      balconies: 2,
      floorPlans: [
        { name: '2 BHK Premium Floor Plan', image: '/images/properties/emerald-heights/floorplans/2bhk-premium.jpg', type: '2d' },
        { name: '2 BHK Premium 3D Floor Plan', image: '/images/properties/emerald-heights/floorplans/2bhk-premium-3d.jpg', type: '3d' }
      ]
    },
    { 
      name: '3 BHK Standard', 
      size: { min: 1250, max: 1350 },
      price: { min: 9400000, max: 10200000 },
      bedrooms: 3,
      bathrooms: 2,
      balconies: 2,
      floorPlans: [
        { name: '3 BHK Standard Floor Plan', image: '/images/properties/emerald-heights/floorplans/3bhk-standard.jpg', type: '2d' },
        { name: '3 BHK Standard 3D Floor Plan', image: '/images/properties/emerald-heights/floorplans/3bhk-standard-3d.jpg', type: '3d' }
      ]
    },
    { 
      name: '3 BHK Luxury', 
      size: { min: 1450, max: 1550 },
      price: { min: 10800000, max: 11500000 },
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      floorPlans: [
        { name: '3 BHK Luxury Floor Plan', image: '/images/properties/emerald-heights/floorplans/3bhk-luxury.jpg', type: '2d' },
        { name: '3 BHK Luxury 3D Floor Plan', image: '/images/properties/emerald-heights/floorplans/3bhk-luxury-3d.jpg', type: '3d' }
      ]
    }
  ],
  amenities: [
    'Swimming Pool',
    'Clubhouse',
    'Fully Equipped Gym',
    'Landscaped Gardens',
    'Children\'s Play Area',
    'Indoor Games Room',
    'Jogging Track',
    'Yoga Deck',
    'Senior Citizen Area',
    'Amphitheater',
    'BBQ Area',
    'Multipurpose Court',
    'Visitor Parking',
    'High-Speed Elevators',
    '24/7 Security',
    'Power Backup',
    'CCTV Surveillance',
    'Intercom Facility',
    'Rainwater Harvesting',
    'Sewage Treatment Plant'
  ],
  totalUnits: 120,
  launchDate: 'January 2023',
  completionDate: 'December 2025',
  possessionDate: 'March 2026',
  reraNumber: 'P52100034567',
  priceRange: {
    min: 7200000,
    max: 11500000
  },
  startingPrice: 7200000,
  completionPercentage: 45,
  brochure: '/documents/emerald-heights-brochure.pdf',
  priceSheet: '/documents/emerald-heights-price-sheet.pdf',
  legalDocuments: '/documents/emerald-heights-legal-docs.pdf',
  videoTour: 'https://www.youtube.com/watch?v=emerald-heights-tour',
  virtualTour: 'https://360-tour.example.com/emerald-heights',
  floorPlans: [
    { name: 'Master Layout Plan', image: '/images/properties/emerald-heights/floorplans/master-plan.jpg', type: 'master' },
    { name: 'Tower A Layout', image: '/images/properties/emerald-heights/floorplans/tower-a-layout.jpg', type: 'tower' },
    { name: 'Tower B Layout', image: '/images/properties/emerald-heights/floorplans/tower-b-layout.jpg', type: 'tower' }
  ],
  keyFeatures: [
    'Premium Italian Marble Flooring in Living Areas',
    'Designer Modular Kitchen with Chimney & Hob',
    'Engineered Wooden Flooring in Master Bedroom',
    'Anti-skid Vitrified Tiles in Bathrooms',
    'High-quality CP Fittings & Sanitary Ware',
    'Earthquake Resistant Structure',
    'Ample Natural Light in All Rooms',
    'Cross-ventilation Design',
    'Energy-efficient Lighting in Common Areas',
    'Smart Home Features (Optional)',
    'Vastu Compliant Design',
    'Premium Aluminum Windows with Mosquito Mesh'
  ],
  specifications: {
    structure: 'RCC framed structure with earthquake-resistant design (Seismic Zone III standards)',
    walls: {
      external: 'AAC blocks with weather-proof paint',
      internal: 'AAC blocks with premium emulsion paint'
    },
    flooring: {
      living: 'Premium Italian marble flooring',
      bedrooms: 'Engineered wooden flooring in master bedroom, vitrified tiles in other bedrooms',
      kitchen: 'Anti-skid ceramic tiles',
      bathrooms: 'Anti-skid ceramic tiles with designer wall tiles up to door height',
      balcony: 'Anti-skid ceramic tiles with MS railing'
    },
    doors: {
      main: 'Polished teak wood frame with designer flush door',
      internal: 'Hardwood frames with flush doors',
      fittings: 'Quality hardware with cylindrical locks'
    },
    windows: 'Powder-coated aluminum windows with mosquito mesh and safety grills',
    kitchen: {
      counter: 'Granite countertop with stainless steel sink',
      fittings: 'Provision for exhaust fan, water purifier, and washing machine',
      cabinets: 'Modular kitchen cabinets with chimney and hob (optional)'
    },
    electrical: {
      wiring: 'Concealed copper wiring with modular switches',
      outlets: 'Ample electrical points with safety devices',
      backup: '24-hour power backup for essential areas'
    },
    bathroom: {
      sanitaryware: 'Premium quality branded sanitaryware',
      fittings: 'Chrome-plated CP fittings of reputed make',
      accessories: 'Overhead shower, health faucet, and bathroom accessories'
    },
    security: {
      entrance: 'Grand entrance lobby with 24/7 security personnel',
      surveillance: 'CCTV cameras at strategic locations',
      intercom: 'Video door phone and intercom facility'
    }
  },
  constructionProgress: {
    overall: 45,
    stages: [
      { name: 'Foundation', percentage: 100, description: 'Deep foundation completed with structural engineering excellence' },
      { name: 'Structure', percentage: 80, description: 'RCC framework for all towers in progress' },
      { name: 'Brickwork', percentage: 60, description: 'AAC block masonry work in progress' },
      { name: 'Plumbing', percentage: 40, description: 'UPVC and CPVC pipeline installation in progress' },
      { name: 'Electrical', percentage: 35, description: 'Electrical conduit and box fixing in progress' },
      { name: 'Flooring', percentage: 20, description: 'Flooring work started in Tower A' },
      { name: 'Plastering', percentage: 55, description: 'Internal and external plastering in progress' },
      { name: 'Painting', percentage: 10, description: 'Primer work started in Tower A' },
      { name: 'Finishing', percentage: 5, description: 'Finishing work initiated in model apartment' }
    ],
    updates: [
      { 
        date: '2023-10-15', 
        title: 'Tower A structural work completed',
        description: 'We are pleased to announce that the structural work for Tower A has been completed ahead of schedule.'
      },
      { 
        date: '2023-09-01', 
        title: 'Plumbing and electrical work in progress',
        description: 'Plumbing and electrical conduit work is in full swing across all towers.'
      },
      { 
        date: '2023-07-15', 
        title: 'Clubhouse foundation completed',
        description: 'Foundation work for the clubhouse has been completed, and structure work will begin next week.'
      }
    ]
  },
  paymentSchedule: [
    { milestone: 'Booking Amount', percentage: 10, description: 'At the time of booking' },
    { milestone: 'Agreement Execution', percentage: 10, description: 'Within 30 days of booking' },
    { milestone: 'Foundation Completion', percentage: 10, description: 'On completion of foundation work' },
    { milestone: 'Slab Casting of First Floor', percentage: 10, description: 'On completion of first floor slab' },
    { milestone: 'Slab Casting of Fourth Floor', percentage: 10, description: 'On completion of fourth floor slab' },
    { milestone: 'Slab Casting of Eighth Floor', percentage: 10, description: 'On completion of eighth floor slab' },
    { milestone: 'Slab Casting of Top Floor', percentage: 10, description: 'On completion of top floor slab' },
    { milestone: 'Brick Work and Plastering', percentage: 10, description: 'On completion of brick work and plastering' },
    { milestone: 'Flooring and Tiling', percentage: 10, description: 'On completion of flooring and tiling work' },
    { milestone: 'Possession', percentage: 10, description: 'At the time of possession' }
  ],
  bankApprovals: [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Bank of Baroda',
    'Punjab National Bank'
  ],
  developer: {
    name: 'Shankeshwar Developers',
    established: '2008',
    completedProjects: 12,
    ongoingProjects: 3,
    description: 'Shankeshwar Developers is a premier real estate developer renowned for creating high-quality residential and commercial spaces. With over a decade of experience, the company has delivered numerous successful projects across Pune.',
    awards: [
      { year: '2022', name: 'Best Residential Project', issuer: 'Pune Real Estate Awards' },
      { year: '2021', name: 'Developer of the Year', issuer: 'Maharashtra Construction Excellence Awards' }
    ],
    officeAddress: '123 Developer Plaza, Baner Road, Pune - 411045',
    contactPhone: '+91 98765 43210',
    contactEmail: 'info@shankeshwarbuildcon.com',
    website: 'https://www.shankeshwarbuildcon.com'
  },
  faq: [
    {
      question: 'When is the expected possession date?',
      answer: 'The project is scheduled for completion by December 2025, with possessions starting from March 2026.'
    },
    {
      question: 'Are there any pre-launch or early booking discounts available?',
      answer: 'Yes, we offer early bird discounts for bookings made during the pre-launch phase. Please contact our sales team for details.'
    },
    {
      question: 'What are the payment plan options?',
      answer: 'We offer flexible payment plans including construction-linked plans and customized payment schedules. Details are available in our pricing brochure.'
    },
    {
      question: 'Is the property RERA approved?',
      answer: 'Yes, Emerald Heights is RERA approved with registration number P52100034567.'
    },
    {
      question: 'Are there any sample flats to visit?',
      answer: 'Yes, we have a fully furnished model apartment available for viewing at the project site. Please schedule an appointment with our sales team.'
    }
  ],
  metaInfo: {
    title: 'Emerald Heights - Premium 2 & 3 BHK Residences in Charohli, Pune',
    description: 'Luxury 2 & 3 BHK apartments in Charohli with world-class amenities. RERA registered project by Shankeshwar Developers.',
    keywords: ['2 BHK flats in Charohli', '3 BHK apartments in Pune', 'luxury flats in Pune', 'Emerald Heights', 'Shankeshwar Developers']
  }
};

export default emeraldHeightsData; 