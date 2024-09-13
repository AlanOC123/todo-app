const themes = [
  {
    default: true,
    id: 'ocean-blue',
    name: 'Ocean Blue',
    icon: "fa-solid fa-water",
    primaryClr: '52, 152, 219',        // A vibrant blue
    secondaryClr: '33, 97, 140',       // A deep ocean blue
    highlightClr: '22, 160, 133',      // Turquoise, like shallow water
    contrastClr: '243, 244, 246',      // Light grey (sea foam)
    textClr: '44, 62, 80',             // Dark grey for text
    extraColors: [
      '92, 172, 235',  // Lighter blue
      '21, 67, 96',    // Darker blue (deep water)
      '101, 198, 187', // Lighter turquoise
      '12, 40, 73',    // Almost navy blue
      '174, 214, 241', // Pale blue (sky reflection)
    ]
  },
  {
    default: false,
    id: 'forest-green',
    name: 'Forest Green',
    icon: "fa-solid fa-tree",
    primaryClr: '46, 139, 87',         // Lively green (fresh leaves)
    secondaryClr: '34, 98, 69',        // Deeper green (moss)
    highlightClr: '255, 204, 102',     // Golden highlight (sunlight)
    contrastClr: '245, 245, 220',      // Soft beige (earth/sand)
    textClr: '34, 49, 63',             // Dark grey-blue for contrast
    extraColors: [
      '67, 170, 119',  // Bright green (sunlit leaves)
      '25, 78, 54',    // Dark green (forest floor)
      '102, 204, 0',   // Lime green (vibrant undergrowth)
      '128, 128, 0',   // Olive green
      '230, 180, 80',  // Warm earthy orange
    ]
  },
  {
    default: false,
    id: 'sunset-orange',
    name: 'Sunset Orange',
    icon: "fa-solid fa-cloud-sun",
    primaryClr: '255, 144, 0',         // Glowing orange (setting sun)
    secondaryClr: '255, 87, 34',       // Fiery orange (horizon)
    highlightClr: '231, 76, 60',       // Bold red-orange (sunset glow)
    contrastClr: '255, 182, 193',      // Soft pink (sunset clouds)
    textClr: '44, 62, 80',             // Dark grey for contrast
    extraColors: [
      '255, 165, 0',   // Brighter orange (mid-sunset)
      '255, 111, 61',  // Light coral
      '255, 99, 71',   // Red-orange (intense glow)
      '250, 128, 114', // Salmon pink
      '255, 215, 0',   // Golden yellow (sunshine)
    ]
  },
  {
    default: false,
    id: 'midnight-purple',
    name: 'Midnight Purple',
    icon: "fa-solid fa-moon",
    primaryClr: '40, 28, 80',           // Deep midnight purple
    secondaryClr: '54, 44, 94',         // Cooler purple-blue
    highlightClr: '30, 20, 60',         // Dark shadowy blue-purple
    contrastClr: '180, 190, 220',       // Soft moonlit grey-blue
    textClr: '220, 220, 240',           // Light grey-blue for readability
    extraColors: [
      '74, 50, 135',   // Brighter purple (moonlit glow)
      '20, 16, 40',    // Darker purple (deep night)
      '102, 51, 153',  // Bright violet
      '58, 49, 109',   // Muted purple-blue
      '210, 180, 222', // Pale lavender
    ]
  },
  {
    default: false,
    id: 'sunny-yellow',
    name: 'Sunny Yellow',
    icon: "fa-solid fa-sun",
    primaryClr: '255, 223, 0',          // Bold, bright yellow
    secondaryClr: '255, 183, 77',       // Warm yellow-orange
    highlightClr: '255, 140, 0',        // Vibrant amber
    contrastClr: '240, 240, 240',       // Soft light grey
    textClr: '44, 62, 80',              // Dark grey for contrast
    extraColors: [
      '255, 255, 102',  // Pale yellow
      '255, 165, 0',    // Brighter orange-yellow
      '255, 204, 102',  // Soft gold
      '255, 250, 205',  // Light lemon
      '255, 229, 180',  // Light tan
    ]
  },
  {
    default: false,
    id: 'ice-blue',
    name: 'Ice Blue',
    icon: "fa-solid fa-snowflake",
    primaryClr: '173, 216, 230',       // Icy blue
    secondaryClr: '135, 206, 235',     // Sky blue
    highlightClr: '180, 220, 240',     // Soft icy white-blue
    contrastClr: '255, 255, 255',      // Crisp white
    textClr: '54, 69, 79',             // Cool dark grey for text
    extraColors: [
      '200, 229, 242',  // Pale sky blue
      '110, 175, 195',  // Deep ice blue
      '220, 235, 245',  // Frosty light blue
      '90, 160, 200',   // Muted blue
      '250, 255, 255',  // Almost white ice
    ]
  },
  {
    default: false,
    id: 'night-sky',
    name: 'Night Sky',
    icon: "fa-solid fa-star",
    primaryClr: '20, 24, 72',           // Deep midnight blue
    secondaryClr: '34, 40, 84',         // Lighter blue with purple hues
    highlightClr: '88, 92, 132',        // Muted purple-blue
    contrastClr: '235, 240, 255',       // Cool white-blue (starlight)
    textClr: '135, 145, 170',           // Dark muted blue-grey
    extraColors: [
      '58, 63, 123',    // Brighter deep blue (twilight)
      '18, 22, 50',     // Very dark blue (almost black)
      '130, 144, 179',  // Soft starlit blue
      '40, 48, 92',     // Dusk blue
      '200, 220, 240',  // Pale light blue (moonlight)
    ]
  },
  {
    default: false,
    id: 'rose-gold',
    name: 'Rose Gold',
    icon: "fas fa-heart",
    primaryClr: '241, 148, 138',        // Soft rose gold
    secondaryClr: '205, 97, 85',        // Rich rose red
    highlightClr: '255, 192, 203',      // Light soft pink
    contrastClr: '127, 140, 141',       // Soft metallic silver-grey
    textClr: '255, 255, 255',           // Crisp white
    extraColors: [
      '250, 177, 160',  // Pale rose
      '190, 75, 65',    // Dark rose
      '255, 182, 193',  // Soft pastel pink
      '220, 120, 110',  // Coral pink
      '230, 195, 204',  // Pale blush
    ]
  },
  {
    default: false,
    id: 'autumn-leaves',
    name: 'Autumn Leaves',
    icon: "fa-solid fa-leaf",
    primaryClr: '204, 102, 0',          // Burnt orange (fallen leaves)
    secondaryClr: '139, 69, 19',        // Deep brown (wet earth)
    highlightClr: '174, 94, 43',        // Golden amber (autumn leaves)
    contrastClr: '229, 152, 102',       // Muted orange (rain-soaked leaves)
    textClr: '44, 62, 80',              // Dark grey for readability
    extraColors: [
      '255, 153, 51',   // Brighter orange (sunlit leaves)
      '121, 55, 19',    // Dark earthy brown
      '210, 105, 30',   // Chocolate brown
      '244, 164, 96',   // Sandy brown
      '255, 187, 120',  // Peach orange
    ]
  }
];

export default themes;
