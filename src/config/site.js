export const siteConfig = {
  name: "Shankeshwar Buildcorp",
  description: "Premier real estate developer in Pune, Maharashtra. Luxury apartments, villas, and commercial spaces crafted with excellence.",
  url: "https://shankeshwarbuildcorp.com",
  founded: 2010,
  legalName: 'Shankeshwar Buildcorp Pvt. Ltd.',
  registration: {
    gst: 'GSTIN12345678901',
    cin: 'U45309MH2010PTC123456',
  },
  logo: "/images/logo.svg", // Main logo
  favicon: "/favicon.ico",
  images: {
    logo: "/images/logo.svg",
    logoIcon: "/images/logo-icon.svg", // if you have a smaller icon variant
    favicon: "/favicon.ico",
    ogImage: "/images/og-image.jpg", // For social sharing
    // Placeholders from constants.js might be preferred, but good to have structure
    placeholders: {
      property: '/images/placeholders/property1.svg',
      profile: '/images/placeholders/profile.svg',
      video: '/images/placeholders/video.jpg',
    }
  },
  branding: {
    primaryColor: '#16404D', // deep-teal
    secondaryColor: '#A6CDC6', // sage-teal
    accentColor: '#DDA853', // amber-gold
    lightColor: '#FBF5DD', // cream
  },
  seo: {
    title: "Shankeshwar Buildcorp | Premier Real Estate Developer in Pune",
    description: "Discover luxury apartments, villas, and commercial spaces built with excellence and innovation. Explore our ongoing and completed projects in Pune.",
    keywords: ["real estate", "property", "developer", "pune", "maharashtra", "apartments", "villas", "luxury homes", "commercial spaces"],
    ogImage: "/images/og-image.jpg" // Redundant if images.ogImage is used, but standard SEO practice
  },
  contact: {
    sales: {
      name: "Priya Sharma",
      position: "Sales Executive",
      phone: "9112233445",
      email: "sales@shankeshwar.com",
      image: "/images/team/sales-agent.jpg"
    },
    customerService: {
      name: "Rahul Mehta",
      position: "Customer Relations",
      phone: "9223344556",
      email: "support@shankeshwar.com",
      image: "/images/team/customer-service.jpg"
    },
    officeAddress: "Shankeshwar House, Plot 42, Sector 27, Pune, Maharashtra 411027", // Main office address from previous version
    officePhone: "020-27455500",
    officeEmail: "info@shankeshwar.com",
    whatsapp: "9112233445",
    socialLinks: { // Merged and more consistent naming
      facebook: "https://facebook.com/shankeshwarbuildcorp",
      twitter: "https://twitter.com/shankeshwarbuild" , // Note: old project had shankeshwarbuild, previous siteConfig had shankeshwarbc
      instagram: "https://instagram.com/shankeshwarbuildcorp",
      linkedin: "https://linkedin.com/company/shankeshwar-buildcorp",
      youtube: "https://youtube.com/@shankeshwarbuildcorp" // Note: old project added @ symbol
    },
  },
  mainOffice: {
    address: 'Survey No. 270, Ravet, Pune, Maharashtra',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411033',
    country: 'India',
    location: {
      latitude: 18.6501,
      longitude: 73.7568,
    },
  },
  branches: [
    {
      name: 'Mumbai Office',
      address: '42, Maker Towers, Cuffe Parade, Mumbai, Maharashtra',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400005',
    },
  ],
}; 