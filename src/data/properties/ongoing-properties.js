/**
 * Ongoing Properties Data
 * Contains all properties with 'under-construction' status
 */

const ongoingProperties = [
  {
    id: 'shankeshwar-pearl',
    name: 'Shankeshwar Pearl',
    slug: 'shankeshwar-pearl',
    status: 'under-construction',
    type: 'Residential',
    shortDescription: '1 & 2 BHK Luxury Homes in Ravet',
    description: 'Shankeshwar Pearl is a premium residential project offering luxurious 1, 2, 2.5 & 3 BHK homes with spacious carpet areas in the prime location of Ravet. These thoughtfully designed residences provide a perfect blend of comfort, elegance, and modern amenities to elevate your living experience. Surrounded by lush greenery and excellent connectivity, Shankeshwar Pearl presents the perfect balance of serene living and urban convenience.',
    location: {
      address: ' Survey No. 97/1A/1A/1, Opposite PCMC Watertanks, Maskevasti, Ravet ',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '412101',
      coordinates: {
        lat: 18.662495947400885,
        lng: 73.74524432404442,
      },
      landmarks: [
        { name: 'Akurdi Railway Station', distance: '2.5 km', type: 'commute', details: 'Suburban railway station with connectivity across Pune' },
        { name: 'Pune-Mumbai Expressway', distance: '2.0 km', type: 'commute', details: 'Major highway ensuring smooth travel to Mumbai and Pune city' },
        { name: 'Bhakti-Shakti Chowk', distance: '2.0 km', type: 'commute', details: 'Prominent junction connecting Ravet to major Pune suburbs' },
        { name: 'Chinchwad Railway Station', distance: '7.0 km', type: 'commute', details: 'Well-connected railway station for intercity and suburban trains' },
        { name: 'D Mart Ready', distance: '100 m', type: 'shopping', details: 'Convenience grocery outlet located right next door' },
        { name: 'Reliance Smart', distance: '2.5 km', type: 'shopping', details: 'Multi-brand supermarket for all household needs' },
        { name: 'Star Bazaar', distance: '6.0 km', type: 'shopping', details: 'Large-format hypermarket with groceries and apparel' },
        { name: 'Elpro Mall', distance: '4.0 km', type: 'recreation', details: 'Shopping mall with retail, dining and entertainment options' },
        { name: 'Gahunje Stadium', distance: '4.0 km', type: 'recreation', details: 'Cricket stadium known for IPL and other sports events' },
        { name: 'Upcoming Phoenix Mall', distance: '6.5 km', type: 'shopping', details: 'Under-construction premium lifestyle mall' },
        { name: 'PVR', distance: '7.0 km', type: 'recreation', details: 'Popular multiplex for latest movies and leisure' }
      ],
      
      nearby: {
        schools: [
          { name: 'S B Patil Public School', distance: '1.5 km', rating: 4.4, details: 'CBSE-affiliated school with modern learning environment' },
          { name: 'City Pride School', distance: '1.0 km', rating: 4.5, details: 'Reputed school offering quality education' },
          { name: 'D.Y. Patil School', distance: '2.5 km', rating: 4.3, details: 'School with strong academic and co-curricular focus' },
          { name: 'Elpro School', distance: '6.0 km', rating: 4.2, details: 'Known for holistic development and infrastructure' }
        ],
        colleges: [
          { name: 'Symbiosis College', distance: '3.0 km', rating: 4.6, details: 'Prestigious institution offering diverse undergraduate programs' },
          { name: 'Indira Institute', distance: '7.0 km', rating: 4.3, details: 'Well-known management and technical college' },
          { name: 'JSPM', distance: '6.5 km', rating: 4.2, details: 'Engineering and technology institute with strong faculty' },
          { name: 'PCCOE (Pimpri-Chinchwad College of Engineering)', distance: '4.0 km', rating: 4.5, details: 'Renowned engineering college with strong placement record' }
        ],
        hospitals: [
          { name: 'Ojas Multispeciality Hospital', distance: '2.5 km', rating: 4.1, details: 'Full-service hospital for general and specialized treatments' },
          { name: 'Sterling Multispeciality Hospital', distance: '2.0 km', rating: 4.2, details: 'Modern facility with emergency and surgical care' },
          { name: 'Aditya Birla Hospital', distance: '5.0 km', rating: 4.4, details: 'Multi-specialty hospital with 24/7 emergency services' },
          { name: 'Lokmanya Hospital', distance: '7.0 km', rating: 4.0, details: 'Trusted name in orthopedics and trauma care' }
        ],
        shopping: [
          { name: 'D Mart', distance: '2.0 km', rating: 4.3, details: 'Comprehensive supermarket for everyday essentials' },
          { name: 'Reliance Smart', distance: '2.5 km', rating: 4.2, details: 'Convenient shopping for groceries and household goods' },
          { name: 'Star Bazaar', distance: '6.0 km', rating: 4.1, details: 'Hypermarket with food, fashion and electronics' },
          { name: 'Elpro Mall', distance: '4.0 km', rating: 4.4, details: 'Retail and entertainment complex with PVR and food court' },
          { name: 'Upcoming Phoenix Mall', distance: '6.5 km', rating: null, details: 'Upcoming luxury shopping destination under development' }
        ],
        transportation: [
          { name: 'Akurdi Railway Station', distance: '2.5 km', details: 'Key railway hub for local and intercity trains' },
          { name: 'Chinchwad Railway Station', distance: '7.0 km', details: 'Another nearby rail connectivity option' },
          { name: 'PMPML Bus Stand', distance: '0.9 km', details: 'Regular PMPML bus routes to various parts of Pune' },
          { name: 'Pune-Mumbai Expressway', distance: '2.0 km', details: 'Direct access to highway for intercity commute' },
          { name: 'Bhakti-Shakti Chowk', distance: '2.0 km', details: 'Major traffic junction with connectivity to multiple suburbs' }
        ]
      }
      
    },
    images: [
      { url: '/images/property/shankeshwar-pearl/exterior/pearl-exterior-1.jpeg', alt: 'Shankeshwar Pearl Exterior', type: 'exterior' },
      { url: '/images/property/shankeshwar-pearl/exterior/pearl-exterior-2.jpeg', alt: 'Shankeshwar Pearl Exterior', type: 'exterior' },
      { url: '/images/property/shankeshwar-pearl/exterior/pearl-exterior-3.jpeg', alt: 'Shankeshwar Pearl Exterior', type: 'exterior' },
      { url: '/images/property/shankeshwar-pearl/exterior/pearl-exterior-1.jpeg', alt: 'Shankeshwar Pearl Exterior', type: 'exterior' },
 ],
    flatTypes: [
      { 
        type: '3 BHK',
        configurations: [
          {
            name: '3 BHK Type A',
            carpetArea: 1136,
            netCarpetAreaSqm: 94.32,
            balconyAreaSqm: 11.25,
            totalCarpetAreaSqm: 105.56,
            superBuiltUpArea: 1350,
            price: 9800000,
            bedrooms: 3,
            bathrooms: 2,
            balconies: 2,
            additionalRooms: [],
            facing: 'East',
          },
          {
            name: '3 BHK Type B',
            carpetArea: 1142,
            netCarpetAreaSqm: 94.80,
            balconyAreaSqm: 11.25,
            totalCarpetAreaSqm: 106.05,
            superBuiltUpArea: 1360,
            price: 9900000,
            bedrooms: 3,
            bathrooms: 2,
            balconies: 2,
            additionalRooms: [],
            facing: 'North-East',
          }
        ]
      },
      { 
        type: '2 BHK',
        configurations: [
          {
            name: '2 BHK Type A',
            carpetArea: 835,
            netCarpetAreaSqm: 69.14,
            balconyAreaSqm: 8.43,
            totalCarpetAreaSqm: 77.58,
            superBuiltUpArea: 995,
            price: 7200000,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            additionalRooms: [],
            facing: 'North-East',
            count: 14
          },
          {
            name: '2 BHK Type B',
            carpetArea: 905,
            netCarpetAreaSqm: 75.48,
            balconyAreaSqm: 8.57,
            totalCarpetAreaSqm: 84.06,
            superBuiltUpArea: 1075,
            price: 7800000,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            additionalRooms: [],
            facing: 'South-East',
          },
          {
            name: '2 BHK Type C',
            carpetArea: 909,
            netCarpetAreaSqm: 75.90,
            balconyAreaSqm: 8.57,
            totalCarpetAreaSqm: 84.47,
            superBuiltUpArea: 1080,
            price: 7850000,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            additionalRooms: [],
            facing: 'North',
          }
        ]
      },
      { 
        type: 'Duplex',
        configurations: [
          {
            name: 'Duplex Type A',
            carpetArea: 2015,
            netCarpetAreaSqm: 161.94,
            balconyAreaSqm: 25.23,
            totalCarpetAreaSqm: 187.17,
            superBuiltUpArea: 2400,
            price: 16500000,
            bedrooms: 4,
            bathrooms: 3,
            balconies: 3,
            additionalRooms: ['Study Room', 'Servant Room'],
            facing: 'East',
          },
          {
            name: 'Duplex Type B',
            carpetArea: 879,
            netCarpetAreaSqm: 76.92,
            balconyAreaSqm: 4.76,
            totalCarpetAreaSqm: 81.68,
            superBuiltUpArea: 1050,
            price: 8000000,
            bedrooms: 2,
            bathrooms: 2,
            balconies: 1,
            additionalRooms: ['Study Room'],
            facing: 'North',
          }
        ]
      }
    ],
    amenities: [
        // Sustainability
        { name: 'Limited Solar Water System', category: 'sustainability' },
        { name: 'Rainwater Harvesting System', category: 'sustainability' },
      
        // Security
        { name: 'Security Cabin with Modern Equipment', category: 'security' },
        { name: 'CCTV System for Common Areas', category: 'security' },
        { name: 'Video Door Phone with Intercom Facility', category: 'security' },
        { name: 'Individual Fire Extinguisher in Each Flat', category: 'security' },
        { name: '24/7 Security', category: 'security' },
        { name: 'LED Street Lighting', category: 'security' },
      
        // Recreational & Lifestyle
        { name: 'Double Height Entrance Lobby', category: 'recreational' },
        { name: 'Childrens Play Area', category: 'recreational' },
        { name: 'Equipped Gym', category: 'recreational' },
        { name: 'Yoga Deck', category: 'recreational' },
        { name: 'Indoor Games Zone', category: 'recreational' },
        { name: 'Multipurpose Area', category: 'recreational' },
        { name: 'Creche', category: 'recreational' },
        { name: 'Lounge', category: 'recreational' },
        { name: 'Co-working & Library Space', category: 'recreational' },
        { name: 'Amphitheater', category: 'recreational' },
        { name: 'Gazebo & Seating Areas', category: 'recreational' },
        { name: 'Jogging Track', category: 'recreational' },
        { name: 'Badminton Court', category: 'recreational' },
        { name: 'Yoga & Meditation Area', category: 'recreational' },
        { name: 'A Wide Range of Amenities', category: 'recreational' }, // summary/highlight from brochure
      
        // Design
        { name: 'Vastu Compliant Design', category: 'design' },
      
        // Convenience
        { name: 'Branded Lift with Power Backup', category: 'convenience' },
        { name: 'Letter Box with Name Plate', category: 'convenience' },
        { name: 'Garbage Chute', category: 'convenience' },
        { name: 'Covered Car Parking', category: 'convenience' },
        { name: 'Visitor Parking', category: 'convenience' },
        { name: '24x7 Water Supply', category: 'convenience' },
        { name: 'Water Purification System', category: 'convenience' },
        { name: 'High-Speed Elevators', category: 'convenience' },
        { name: 'Senior Citizen Sitting Area', category: 'convenience' },
        { name: 'Power Backup for Common Areas', category: 'convenience' },
        { name: 'Temple', category: 'convenience' },
        { name: 'Choice of Parking', category: 'convenience' },
      
        // Unique/Project Features
        { name: 'Dedicated Puja Room', category: 'special' },
        { name: 'Dedicated Storage Room', category: 'special' },
        { name: 'Granite Platform & Sink in Dry Balcony', category: 'special' },
        { name: 'Largest Carpet Area in the Vicinity', category: 'special' }
      ],
      
    amenityImages: [
      '/images/property/shankeshwar-pearl/amenities/pearl-amenitie-1.jpg',
      '/images/property/shankeshwar-pearl/amenities/pearl-pool.jpg',
      '/images/property/shankeshwar-pearl/amenities/pearl-gym.jpg',
      '/images/property/shankeshwar-pearl/amenities/pearl-garden.jpg'
    ],
    totalUnits: 240,
    completionDate: 'December 2025',
    possessionDate: 'March 2026',
    reraNumber: 'P52100035074',
    reraCertificatePath: '/documents/properties/shankeshwar-pearl/rera-certificate.pdf',
    reraRegistrationUrl: 'https://maharera.mahaonline.gov.in',
    priceRange: {
      min: 4600000,
      max: 10800000
    },
    startingPrice: 4600000,
    completionPercentage: 75,
    brochureUrl: '/documents/properties/shankeshwar-pearl/shankeshwar-pearl-brochure.pdf',
    floorPlanPdf: '/documents/properties/shankeshwar-pearl/shankeshwar-pearl-floorplans.pdf',
    videoUrl: 'https://www.youtube.com/embed/562VuMrFUys',
    showSections: {
      specifications: true,
      floorplans: true,
      overview: true,
      amenities: true, 
      location: true,
      gallery: true,
      rera: true
    },
    specifications: {
        structure: 'Earthquake-resistant RCC framed structure designed for seismic zone safety',
        entranceLobby: 'Double-height decorative entrance lobby with name board and letterbox',
        kitchen: 'Granite platform with stainless steel sink, designer glazed dado tiles up to 4 feet height above platform, provision for water purifier and exhaust fan, and a service counter',
        electrical: {
          internal: 'Concealed copper wiring with standard quality fittings, fixtures, and MCB; modular switches; ample light points; AC point in master bedroom; common areas illuminated with sufficient lighting; provision for inverter and FTTH facility',
          external: 'Automatic timer lights and sensor lights in common areas'
        },
        windows: 'Three-track powder-coated aluminum sliding windows with glass shutters, mosquito net, M.S. safety grills, and marble/granite window sills',
        flooring: '1m x 1m or 4ft x 2ft vitrified tile flooring with skirting; anti-skid tiles in terrace, dry terrace, bathroom, and toilet',
        doors: {
          main: 'Laminated flush door with wooden/granite frame and premium fittings; safety/mortise lock; name plate; safety door in entrance lobby',
          internal: 'Laminated flush doors with wooden/granite frame and quality fittings',
          toilet: 'FRP doors with quality fittings and marble/granite door frames'
        },
        painting: 'Internal walls with oil bound distemper; external walls with water-resistant paint',
        bathrooms: 'Standard quality chromium plated bathroom fittings and fixtures; designer glazed dado tiles up to lintel level; provision for water heater and exhaust fan in all bathrooms; hot & cold mixer unit with overhead shower',
        plaster: 'Double coat good quality external plaster; internal single coat plaster with gypsum finish',
        lifts: 'Branded lifts for all buildings'
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
      unit_variants: '1 & 2 BHK',
      open_space: '65% of Total Area',
      car_parking: '1 per Apartment',
      completion_date: 'December 2025',
      possession_date: 'March 2026',
      rera_registration: 'P52100035074',
      project_architect: 'Karan Darda Architects',
      landscape_architect: 'Vikas Labba-Design Terra',
      legal_advisor: 'Adv. Shrikant Kadam'
    },
    contactPhone: '+919604304919',
    contactEmail: 'sales@shankeshwarbuildcorp.com'
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
      address: 'Kudale Vasti, Moshi, Pune',
      city: 'Pune',
      state: 'Maharashtra',
      zipCode: '413015',
      coordinates: {
        lat: 18.67159381786681,
        lng: 73.86041782740445,
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
      // { url: '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-1.jpg', alt: 'Children\'s Play Area', type: 'amenity' },
      { url: '/images/property/shankeshwar-sparsh/exterior/sparsh-exterior-2.jpeg', alt: 'Shankeshwar Sparsh Building View', type: 'exterior' },
      { url: '/images/property/shankeshwar-sparsh/interior/sparsh-interior-2.jpeg', alt: 'Modern Kitchen', type: 'interior' }
    ],
    flatTypes: [
        { 
            type: '2 BHK',
            configurations: [
              {
                name: '2 BHK - 632',
                carpetArea: 632,
                builtUpArea: 725,
                superBuiltUpArea: 755,
                NetCarpetAre: 53.05,
                NetBalconyArea: 5.70,
                price: 3800000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-633-2d.png',
                bedrooms: 2,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              },
              {
                name: '2 BHK - 663',
                carpetArea: 663,
                builtUpArea: 750,
                superBuiltUpArea: 790,
                NetCarpetAre: 53.54,
                NetBalconyArea: 8.05,
                price: 3800000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-663-2d.png',
                bedrooms: 2,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              },
              {
                name: '2 BHK - 633',
                carpetArea: 633,
                builtUpArea: 726,
                superBuiltUpArea: 756,
                NetCarpetAre: 53.38,
                NetBalconyArea: 5.48,
                price: 3800000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-633-2d.png',
                bedrooms: 2,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              },
              {
                name: '2 BHK - 665',
                carpetArea: 665,
                builtUpArea: 752,
                superBuiltUpArea: 792,
                NetCarpetAre: 53.99,
                NetBalconyArea: 7.80,
                price: 5500000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-2bhk-665-2d.png',
                bedrooms: 2,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              }
            ]
          },
          { 
            type: '1 BHK',
            configurations: [
              {
                name: '1 BHK - 452',
                carpetArea: 452,
                builtUpArea: 510,
                superBuiltUpArea: 540,
                ReraCarpet: 392,
                BalconyArea: 61,
                price: 5500000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-452-2d.png',
                bedrooms: 1,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              },
              {
                name: '1 BHK - 459',
                carpetArea: 459,
                builtUpArea: 520,
                superBuiltUpArea: 550,
                ReraCarpet: 387,
                BalconyArea: 72,
                price: 5500000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-459-2d.png',
                bedrooms: 1,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              },
              {
                name: '1 BHK - 435',
                carpetArea: 435,
                builtUpArea: 495,
                superBuiltUpArea: 520,
                ReraCarpet: 377,
                BalconyArea: 58,
                price: 5500000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-435-2d.png',
                bedrooms: 1,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              },
              {
                name: '1 BHK - 458',
                carpetArea: 458,
                builtUpArea: 518,
                superBuiltUpArea: 548,
                ReraCarpet: 390,
                BalconyArea: 69,
                price: 5500000,
                floorPlan: '/images/property/shankeshwar-sparsh/floorplans/sparsh-1bhk-458-2d.png',
                bedrooms: 1,
                bathrooms: 2,
                balconies: 1,
                DryBalcony: 1,
                additionalRooms: []
              }
            ]
          }
    ],    amenities: [
        // Lifestyle Amenities (Recreational)
        { name: 'Multipurpose Sports Court', category: 'recreational' },
        { name: 'Calisthenics Area', category: 'recreational' },
        { name: 'Walking Track', category: 'recreational' },
        { name: 'Temple', category: 'recreational' },
        { name: 'Temple Courtyard', category: 'recreational' },
        { name: 'Kids Play Area', category: 'recreational' },
        { name: 'Parents Seating', category: 'recreational' },
        { name: 'Open Amphitheater', category: 'recreational' },
        { name: 'Stage Seating', category: 'recreational' },
        { name: 'Multipurpose Party Lawn', category: 'recreational' },
        { name: 'Table Tennis', category: 'recreational' },
        { name: 'Foosball', category: 'recreational' },
        { name: 'Board Games', category: 'recreational' },
        { name: 'Fitness Arena', category: 'recreational' },
        { name: 'Gazebos', category: 'recreational' },
        { name: 'Yoga Room', category: 'recreational' },
        { name: 'Co-working Space', category: 'recreational' },
        { name: 'Library', category: 'recreational' },
        { name: 'Lounge Seatings', category: 'recreational' },
        { name: 'Fragrance Garden', category: 'recreational' },
        { name: 'Sculpture Zone', category: 'recreational' },
      
        // Other Amenities
        { name: 'Modern Elevation', category: 'design' },
        { name: 'Designer Entrance', category: 'design' },
        { name: 'Designer Lobbies', category: 'design' },
        { name: 'Designer Driveways', category: 'design' },
        { name: 'Society Office', category: 'convenience' },
        { name: 'Limited Solar Water Heating System', category: 'sustainability' },
        { name: 'Rainwater Harvesting', category: 'sustainability' },
        { name: 'Sewage Treatment Plant', category: 'sustainability' },
        { name: 'Garbage Chute', category: 'convenience' },
        { name: 'Letter Box with Name Plate', category: 'convenience' },
      
        // Safety Features (Security)
        { name: 'Security Cabin', category: 'security' },
        { name: 'CCTV Camera for Common Areas', category: 'security' },
        { name: 'Video Door Phone with Intercom Facility', category: 'security' },
        { name: 'Fire Extinguisher in Each Flat', category: 'security' },
        { name: 'Emergency Alarm on Each Floor', category: 'security' }
      ],
      
    amenityImages: [
      '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-1.jpeg',
      '/images/property/shankeshwar-sparsh/amenities/sparsh-amenitie-2.jpeg'
    ],
    totalUnits: 120,
    completionDate: 'June 2025',
    possessionDate: 'September 2025',
    reraNumber: 'P52100055256',
    reraCertificatePath: '/documents/properties/shankeshwar-sparsh/rera-certificate.pdf',
    reraRegistrationUrl: 'https://maharerait.mahaonline.gov.in/ProjectSummaryView/ProjectSummaryQRCodeView?id=Q2VydGlmaWNhdGVObz1QNTIxMDAwNTUyNTYmU2NhbnR5cGU9UHJvbW90ZXJMb2dpblFSQ29kZQ==',
    priceRange: {
      min: 3800000,
      max: 6200000
    },
    startingPrice: 3800000,
    completionPercentage: 60,
    brochureUrl: '/documents/properties/shankeshwar-sparsh/shankeshwar-sparsh-brochure.pdf',
    floorPlanPdf: '/documents/properties/shankeshwar-sparsh/shankeshwar-sparsh-floorplans.pdf',
    videoUrl: 'https://www.youtube.com/embed/KoTJEPP-5Z8',
    showSections: {
      specifications: true,
      floorplans: true,
      overview: true,
      amenities: true,
      location: true,
      gallery: true,
      rera: true
    },
    specifications: {
        structure: 'Earthquake-resistant seismic zone structural RCC frame',
        kitchen: 'Kitchen platform with granite top; stainless steel sink; glazed tile dado up to 4 ft height above platform; provision for water purifier; provision for exhaust fan',
        electrical: 'Concealed copper wiring with standard quality fittings, fixtures & MCB; modular switches; ample light points; AC point in master bedroom; common areas illuminated with sufficient lighting; provision for inverter; FTTH cable facility',
        windows: 'Three-track powder-coated aluminum sliding windows with mosquito net; M.S. railing; marble/granite window frame',
        flooring: '1200 × 600 mm vitrified tile flooring; vitrified tile with skirting in living/dining area and all bedrooms; anti-skid tiles in terrace, bathroom & toilet',
        entranceLobby: 'Decorative entrance lobby with name board & letter box',
        doors: 'Laminated flushed entrance door with safety/mortise/digital lock, premium fittings & name plate; laminated flush doors for internal rooms; laminated waterproof doors for washrooms; three-track powder-coated sliding balcony doors with mosquito net; marble/granite/wooden door frames for all doors',
        paint: 'Internal walls with oil-bound distemper; external walls with water-resistant paint',
        toilet: 'Standard chromium-plated bathroom fittings & fixtures; marble/granite door frames; designer glazed dado tiles up to lintel level; provision for exhaust fan in all bathrooms; hot & cold mixer unit with overhead shower',
        plaster: 'External two-coat plaster; internal single-coat gypsum-finished plaster',
        lift: 'Branded lift'
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
    contactPhone: '+919604304919',
    contactEmail: 'shankeshwarbuildcorp@gmail.com'
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
        { name: 'Columbia Asia Hospital', distance: '5.8 km', type: 'hospital' }
      ]
    },
    images: [
      { url: '/images/property/skyline-one/exterior/skyline.jpg', alt: 'Skyline One Exterior' },

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
    reraCertificatePath: '/documents/properties/skyline-one/rera-certificate.pdf',
    reraRegistrationUrl: 'https://maharera.mahaonline.gov.in',
    priceRange: {
      min: 6900000,
      max: 10500000
    },
    startingPrice: 6900000,
    completionPercentage: 40,
    brochure: '/documents/skyline-one-brochure.pdf',
    videoTour: 'https://www.youtube.com/watch?v=example3',
    showSections: {
      specifications: false,
      floorplans: false,
      overview: false,
      amenities: false,
      location: false,
      gallery: false,
      rera: false
    },
    floorPlans: [
      { name: '2 BHK Floor Plan', image: '/images/placeholders/property4.svg' },
      { name: '2.5 BHK Floor Plan', image: '/images/placeholders/property5.svg' },
      { name: '3 BHK Floor Plan', image: '/images/placeholders/property6.svg' }
    ],
    specifications: {
        structure: 'Earthquake-resistant RCC framed structure designed for seismic zone safety',
        entranceLobby: 'Double-height decorative entrance lobby with name board and letterbox',
        kitchen: 'Granite platform with stainless steel sink, designer glazed dado tiles up to 4 feet height above platform, provision for water purifier and exhaust fan, and a service counter',
        electrical: {
          internal: 'Concealed copper wiring with standard quality fittings, fixtures, and MCB; modular switches; ample light points; AC point in master bedroom; common areas illuminated with sufficient lighting; provision for inverter and FTTH facility',
          external: 'Automatic timer lights and sensor lights in common areas'
        },
        windows: 'Three-track powder-coated aluminum sliding windows with glass shutters, mosquito net, M.S. safety grills, and marble/granite window sills',
        flooring: '1m x 1m or 4ft x 2ft vitrified tile flooring with skirting; anti-skid tiles in terrace, dry terrace, bathroom, and toilet',
        doors: {
          main: 'Laminated flush door with wooden/granite frame and premium fittings; safety/mortise lock; name plate; safety door in entrance lobby',
          internal: 'Laminated flush doors with wooden/granite frame and quality fittings',
          toilet: 'FRP doors with quality fittings and marble/granite door frames'
        },
        painting: 'Internal walls with oil bound distemper; external walls with water-resistant paint',
        bathrooms: 'Standard quality chromium plated bathroom fittings and fixtures; designer glazed dado tiles up to lintel level; provision for water heater and exhaust fan in all bathrooms; hot & cold mixer unit with overhead shower',
        plaster: 'Double coat good quality external plaster; internal single coat plaster with gypsum finish',
        lifts: 'Branded lifts for all buildings'
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
      unit_variants: '1 & 2 BHK',
      open_space: '65% of Total Area',
      car_parking: '1 per Apartment',
      completion_date: 'December 2025',
      possession_date: 'March 2026',
      rera_registration: 'P52100029876',
      project_architect: 'Karan Darda Architects',
      landscape_architect: 'Vikas Labba-Design Terra',
      legal_advisor: 'Adv. Shrikant Kadam'
    },
    contactPhone: '+919604304919',
    contactEmail: 'sales@shankeshwarbuildcorp.com'
  }
];

export default ongoingProperties; 