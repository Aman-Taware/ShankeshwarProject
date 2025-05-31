/**
 * Investment Properties Data
 * This file contains client-owned offices or shops available as investments
 */

const investmentProperties = [
  {
    id: 'ashirwad-capri-1',
    name: 'Ashirwad Capri',
    status: 'completed',
    type: 'investment',
    subType: 'First Floor Shops',
    height: '14ft',
    location: {
      city: 'Ravet',
      address: 'Ravet, Pune',
      mapLink: 'https://maps.app.goo.gl/XWMUsbPCjqZVBLrDA'
    },
    shortDescription: 'Premium first floor commercial shops with excellent visibility and foot traffic in the growing neighborhood of Ravet.',
    images: {
      thumbnail: '/images/properties/investment/capri.jpg',
      featured: '/images/properties/investment/capri.jpg',
      gallery: [
        '/images/properties/investment/capri.jpg'
      ]
    },
    contactPhone: '+919604304919'
  },
  {
    id: 'akshat-khushu',
    name: 'Akshat Khushu',
    status: 'completed',
    type: 'investment',
    subType: 'Ground Floor Shops',
    height: '20ft',
    location: {
      city: 'Moshi',
      address: 'Dudalgaon, Moshi',
      mapLink: 'https://maps.app.goo.gl/iP5zJHbBttmoBkeM9?g_st=com.google.maps.preview.copy'
    },
    shortDescription: 'Prime ground floor commercial shops with excellent visibility and 20ft height in the growing area of Dudalgaon, Moshi.',
    images: {
      thumbnail: '/images/properties/investment/khushu.jpg',
      featured: '/images/properties/investment/khushu.jpg',
      gallery: [
        '/images/properties/investment/khushu.jpg'
      ]
    },
    contactPhone: '+919604304919'
  }
];

export default investmentProperties; 