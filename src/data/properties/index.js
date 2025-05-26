/**
 * Properties Index
 * Imports all property data files and exports them together
 */

// Import individual property data files
import emeraldHeightsData from './emerald-heights';
import sapphireResidencyData from './sapphire-residency';
// Import additional properties as they're added
// import rubyTowers from './ruby-towers';
// import diamondPlaza from './diamond-plaza';

// Create an array of all properties
const properties = [
  emeraldHeightsData,
  sapphireResidencyData,
  // Add more properties here as they are created
  // rubyTowers,
  // diamondPlaza,
];

// Export individual properties and the properties array
export {
  emeraldHeightsData,
  sapphireResidencyData
};

// Default export is the array of all properties
export default properties; 