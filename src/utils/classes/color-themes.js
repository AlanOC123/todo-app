const colourThemes = [
  {
    default: true,
    id: 'ocean-blue',
    name: 'Ocean Blue',
    primaryClr: '52, 152, 219',        // A vibrant blue
    secondaryClr: '41, 128, 185',      // A deeper blue
    highlightClr: '26, 82, 118',       // A dark, contrasting blue
    contrastClr: '255, 255, 255',      // White
    textClr: '44, 62, 80',             // Dark grey
    notStartedClr: '239, 83, 80',      // Soft Red (Muted Coral)
    startedClr: '255, 213, 79',        // Soft Yellow (Muted Amber)
    completeClr: '129, 199, 132',      // Soft Green (Muted Mint)
  },
  {
    default: false,
    id: 'forest-green',
    name: 'Forest Green',
    primaryClr: '34, 153, 84',         // A lush green
    secondaryClr: '29, 131, 72',       // A deeper green
    highlightClr: '21, 90, 50',        // A dark, forest green
    contrastClr: '255, 255, 255',      // White
    textClr: '236, 240, 241',          // Light grey
    notStartedClr: '239, 83, 80',      // Soft Red (Muted Coral)
    startedClr: '255, 213, 79',        // Soft Yellow (Muted Amber)
    completeClr: '129, 199, 132',      // Soft Green (Muted Mint)
  },
  {
    default: false,
    id: 'sunset-orange',
    name: 'Sunset Orange',
    primaryClr: '243, 156, 18',        // A bright orange
    secondaryClr: '211, 84, 0',        // A deeper, more saturated orange
    highlightClr: '192, 57, 43',       // A bold red-orange
    contrastClr: '44, 62, 80',         // Dark grey
    textClr: '255, 255, 255',          // White
    notStartedClr: '239, 83, 80',      // Soft Red (Muted Coral)
    startedClr: '255, 213, 79',        // Soft Yellow (Muted Amber)
    completeClr: '129, 199, 132',      // Soft Green (Muted Mint)
  },
  {
    default: false,
    id: 'midnight-purple',
    name: 'Midnight Purple',
    primaryClr: '155, 89, 182',        // A rich purple
    secondaryClr: '142, 68, 173',      // A darker, more intense purple
    highlightClr: '103, 65, 114',      // A deep, shadowy purple
    contrastClr: '255, 255, 255',      // White
    textClr: '236, 240, 241',          // Light grey
    notStartedClr: '239, 83, 80',      // Soft Red (Muted Coral)
    startedClr: '255, 213, 79',        // Soft Yellow (Muted Amber)
    completeClr: '129, 199, 132',      // Soft Green (Muted Mint)
  },
  {
    default: false,
    id: 'sunny-yellow',
    name: 'Sunny Yellow',
    primaryClr: '241, 196, 15',        // A bright yellow
    secondaryClr: '243, 156, 18',      // A warm yellow-orange
    highlightClr: '230, 126, 34',      // A deep amber
    contrastClr: '44, 62, 80',         // Dark grey
    textClr: '255, 255, 255',          // White
    notStartedClr: '239, 83, 80',      // Soft Red (Muted Coral)
    startedClr: '255, 213, 79',        // Soft Yellow (Muted Amber)
    completeClr: '129, 199, 132',      // Soft Green (Muted Mint)
  },
  {
    default: false,
    id: 'ice-blue',
    name: 'Ice Blue',
    primaryClr: '52, 152, 219',        // A cool blue
    secondaryClr: '41, 128, 185',      // A slightly darker blue
    highlightClr: '26, 82, 118',       // A deep ice blue
    contrastClr: '236, 240, 241',      // Very light grey
    textClr: '44, 62, 80',             // Dark grey
    notStartedClr: '239, 83, 80',      // Soft Red (Muted Coral)
    startedClr: '255, 213, 79',        // Soft Yellow (Muted Amber)
    completeClr: '129, 199, 132',      // Soft Green (Muted Mint)
  },
  {
    default: false,
    id: 'night-sky',
    name: 'Night Sky',
    primaryClr: '44, 62, 80',          // A dark navy blue
    secondaryClr: '52, 73, 94',        // A slightly lighter blue-grey
    highlightClr: '34, 47, 62',        // A deep, dark blue
    contrastClr: '255, 255, 255',      // White
    textClr: '236, 240, 241',          // Light grey
    notStartedClr: '239, 83, 80',      // Soft Red (Muted Coral)
    startedClr: '255, 213, 79',        // Soft Yellow (Muted Amber)
    completeClr: '129, 199, 132',      // Soft Green (Muted Mint)
  },
  {
    default: false,
    id: 'rose-gold',
    name: 'Rose Gold',
    primaryClr: '231, 76, 60',         // A warm rose red
    secondaryClr: '192, 57, 43',       // A deeper red
    highlightClr: '149, 165, 166',     // A cool silver-grey
    contrastClr: '44, 62, 80',         // Dark grey
    textClr: '255, 255, 255',          // White
    notStartedClr: '239, 83, 80',      // Soft Red (Muted Coral)
    startedClr: '255, 213, 79',        // Soft Yellow (Muted Amber)
    completeClr: '129, 199, 132',      // Soft Green (Muted Mint)
  },
  {
    default: false,
    id: 'autumn-leaves',
    name: 'Autumn Leaves',
    primaryClr: '211, 84, 0',          // A deep burnt orange
    secondaryClr: '165, 55, 0',        // A dark reddish-brown
    highlightClr: '142, 68, 173',      // A deep, rich purple
    contrastClr: '255, 255, 255',      // White
    textClr: '236, 240, 241',          // Light grey
    notStartedClr: '239, 83, 80',      // Soft Red (Muted Coral)
    startedClr: '255, 213, 79',        // Soft Yellow (Muted Amber)
    completeClr: '129, 199, 132',      // Soft Green (Muted Mint)
  },
];

export default colourThemes;
