import { Wallpaper } from './categories';

// This is a placeholder for the actual wallpapers
// We'll need to add real wallpaper URLs and data here
export const wallpapers: Record<string, Wallpaper[]> = {
  nature: [
    {
      id: 'nature-1',
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      title: 'Mountain Lake',
      description: 'Serene mountain lake surrounded by pine trees',
      tags: ['nature', 'mountains', 'lake']
    },
    {
      id: 'nature-2',
      url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
      title: 'Forest Path',
      description: 'Mystical forest path with morning fog',
      tags: ['nature', 'forest', 'fog']
    },
    {
      id: 'nature-3',
      url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      title: 'Sunset Valley',
      description: 'Beautiful valley during golden hour',
      tags: ['nature', 'sunset', 'valley']
    },
    {
      id: 'nature-4',
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      title: 'Green Forest',
      description: 'Lush green forest with sunlight filtering through trees',
      tags: ['nature', 'forest', 'green']
    },
    {
      id: 'nature-5',
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      title: 'Misty Mountains',
      description: 'Misty mountains at dawn',
      tags: ['nature', 'mountains', 'mist']
    }
  ],
  animals: [
    {
      id: 'animals-1',
      url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d',
      title: 'Majestic Lion',
      description: 'Close-up of a lion in its natural habitat',
      tags: ['animals', 'lion', 'wildlife']
    },
    {
      id: 'animals-2',
      url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      title: 'Cute Cat',
      description: 'Adorable cat with curious expression',
      tags: ['animals', 'cat', 'pets']
    },
    {
      id: 'animals-3',
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
      title: 'Playful Dog',
      description: 'Happy dog playing in the park',
      tags: ['animals', 'dog', 'pets']
    },
    {
      id: 'animals-4',
      url: 'https://images.unsplash.com/photo-1474314170901-f351b68f544f',
      title: 'Elegant Bird',
      description: 'Beautiful bird in flight',
      tags: ['animals', 'bird', 'wildlife']
    },
    {
      id: 'animals-5',
      url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131',
      title: 'Wild Deer',
      description: 'Graceful deer in natural habitat',
      tags: ['animals', 'deer', 'wildlife']
    }
  ],
  abstract: [
    {
      id: 'abstract-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Abstract Waves',
      description: 'Fluid abstract art with vibrant colors',
      tags: ['abstract', 'art', 'waves']
    },
    {
      id: 'abstract-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Colorful Abstract',
      description: 'Modern abstract composition',
      tags: ['abstract', 'art', 'colorful']
    },
    {
      id: 'abstract-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Geometric Abstract',
      description: 'Abstract geometric patterns',
      tags: ['abstract', 'art', 'geometric']
    },
    {
      id: 'abstract-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Abstract Flow',
      description: 'Flowing abstract design',
      tags: ['abstract', 'art', 'flow']
    },
    {
      id: 'abstract-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Abstract Harmony',
      description: 'Harmonious abstract composition',
      tags: ['abstract', 'art', 'harmony']
    }
  ],
  minimalist: [
    {
      id: 'minimalist-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Minimalist Lines',
      description: 'Clean minimalist design with lines',
      tags: ['minimalist', 'design', 'lines']
    },
    {
      id: 'minimalist-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Simple Space',
      description: 'Minimalist space design',
      tags: ['minimalist', 'design', 'space']
    },
    {
      id: 'minimalist-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Clean Design',
      description: 'Clean and minimal aesthetic',
      tags: ['minimalist', 'design', 'clean']
    },
    {
      id: 'minimalist-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Minimalist Art',
      description: 'Simple yet elegant design',
      tags: ['minimalist', 'art', 'elegant']
    },
    {
      id: 'minimalist-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Minimalist Pattern',
      description: 'Subtle minimalist pattern',
      tags: ['minimalist', 'pattern', 'subtle']
    }
  ],
  space: [
    {
      id: 'space-1',
      url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      title: 'Galaxy',
      description: 'Beautiful galaxy in deep space',
      tags: ['space', 'galaxy', 'cosmos']
    },
    {
      id: 'space-2',
      url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      title: 'Milky Way',
      description: 'Stunning Milky Way galaxy',
      tags: ['space', 'milky-way', 'stars']
    },
    {
      id: 'space-3',
      url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      title: 'Nebula',
      description: 'Colorful space nebula',
      tags: ['space', 'nebula', 'cosmos']
    },
    {
      id: 'space-4',
      url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      title: 'Star Field',
      description: 'Vast field of stars',
      tags: ['space', 'stars', 'night']
    },
    {
      id: 'space-5',
      url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      title: 'Cosmic Dust',
      description: 'Cosmic dust and stars',
      tags: ['space', 'cosmos', 'dust']
    }
  ],
  cityscape: [
    {
      id: 'cityscape-1',
      url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
      title: 'City Lights',
      description: 'City skyline at night',
      tags: ['cityscape', 'city', 'night']
    },
    {
      id: 'cityscape-2',
      url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
      title: 'Urban Architecture',
      description: 'Modern city architecture',
      tags: ['cityscape', 'architecture', 'urban']
    },
    {
      id: 'cityscape-3',
      url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
      title: 'City Streets',
      description: 'Vibrant city streets',
      tags: ['cityscape', 'streets', 'urban']
    },
    {
      id: 'cityscape-4',
      url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
      title: 'Downtown',
      description: 'Busy downtown area',
      tags: ['cityscape', 'downtown', 'city']
    },
    {
      id: 'cityscape-5',
      url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
      title: 'City Sunset',
      description: 'City skyline at sunset',
      tags: ['cityscape', 'sunset', 'city']
    }
  ],
  mountains: [
    {
      id: 'mountains-1',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      title: 'Snowy Peaks',
      description: 'Snow-covered mountain peaks',
      tags: ['mountains', 'snow', 'peaks']
    },
    {
      id: 'mountains-2',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      title: 'Mountain Range',
      description: 'Majestic mountain range',
      tags: ['mountains', 'range', 'landscape']
    },
    {
      id: 'mountains-3',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      title: 'Alpine Valley',
      description: 'Beautiful alpine valley',
      tags: ['mountains', 'alpine', 'valley']
    },
    {
      id: 'mountains-4',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      title: 'Mountain Lake',
      description: 'Serene lake surrounded by mountains',
      tags: ['mountains', 'lake', 'nature']
    },
    {
      id: 'mountains-5',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      title: 'Mountain Sunset',
      description: 'Mountains at golden hour',
      tags: ['mountains', 'sunset', 'golden-hour']
    }
  ],
  water: [
    {
      id: 'water-1',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      title: 'Ocean Waves',
      description: 'Peaceful ocean waves',
      tags: ['water', 'ocean', 'waves']
    },
    {
      id: 'water-2',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      title: 'River Flow',
      description: 'Flowing river in nature',
      tags: ['water', 'river', 'flow']
    },
    {
      id: 'water-3',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      title: 'Waterfall',
      description: 'Majestic waterfall',
      tags: ['water', 'waterfall', 'nature']
    },
    {
      id: 'water-4',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      title: 'Rain Drops',
      description: 'Rain drops on window',
      tags: ['water', 'rain', 'drops']
    },
    {
      id: 'water-5',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      title: 'Lake Reflection',
      description: 'Calm lake with perfect reflection',
      tags: ['water', 'lake', 'reflection']
    }
  ],
  'neon-cyberpunk': [
    {
      id: 'neon-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Neon City',
      description: 'Cyberpunk city with neon lights',
      tags: ['neon', 'cyberpunk', 'city']
    },
    {
      id: 'neon-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Cyberpunk Street',
      description: 'Futuristic street with neon signs',
      tags: ['neon', 'cyberpunk', 'street']
    },
    {
      id: 'neon-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Neon Lights',
      description: 'Vibrant neon lighting',
      tags: ['neon', 'lights', 'vibrant']
    },
    {
      id: 'neon-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Cyberpunk Future',
      description: 'Futuristic cyberpunk scene',
      tags: ['neon', 'cyberpunk', 'future']
    },
    {
      id: 'neon-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Neon Night',
      description: 'Night scene with neon atmosphere',
      tags: ['neon', 'night', 'atmosphere']
    }
  ],
  'anime-art': [
    {
      id: 'anime-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Anime Scene',
      description: 'Beautiful anime-style artwork',
      tags: ['anime', 'art', 'illustration']
    },
    {
      id: 'anime-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Digital Art',
      description: 'Modern digital artwork',
      tags: ['anime', 'digital', 'art']
    },
    {
      id: 'anime-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Anime Character',
      description: 'Stylized anime character',
      tags: ['anime', 'character', 'art']
    },
    {
      id: 'anime-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Artistic Scene',
      description: 'Creative artistic composition',
      tags: ['anime', 'art', 'creative']
    },
    {
      id: 'anime-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Anime Landscape',
      description: 'Anime-style landscape art',
      tags: ['anime', 'landscape', 'art']
    }
  ],
  'cars-vehicles': [
    {
      id: 'cars-1',
      url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027',
      title: 'Classic Car',
      description: 'Vintage car in perfect condition',
      tags: ['cars', 'vintage', 'classic']
    },
    {
      id: 'cars-2',
      url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027',
      title: 'Sports Car',
      description: 'Modern sports car on the road',
      tags: ['cars', 'sports', 'modern']
    },
    {
      id: 'cars-3',
      url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027',
      title: 'Luxury Vehicle',
      description: 'Premium luxury car',
      tags: ['cars', 'luxury', 'premium']
    },
    {
      id: 'cars-4',
      url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027',
      title: 'Vintage Motorcycle',
      description: 'Classic motorcycle design',
      tags: ['vehicles', 'motorcycle', 'vintage']
    },
    {
      id: 'cars-5',
      url: 'https://images.unsplash.com/photo-1550355291-bbee04a92027',
      title: 'Modern Bike',
      description: 'Contemporary bicycle design',
      tags: ['vehicles', 'bike', 'modern']
    }
  ],
  'dark-black': [
    {
      id: 'dark-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Dark Forest',
      description: 'Mysterious dark forest scene',
      tags: ['dark', 'forest', 'mysterious']
    },
    {
      id: 'dark-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Night Sky',
      description: 'Dark night sky with stars',
      tags: ['dark', 'night', 'stars']
    },
    {
      id: 'dark-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Dark Abstract',
      description: 'Abstract dark composition',
      tags: ['dark', 'abstract', 'art']
    },
    {
      id: 'dark-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Dark City',
      description: 'Cityscape at night',
      tags: ['dark', 'city', 'night']
    },
    {
      id: 'dark-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Dark Minimal',
      description: 'Minimalist dark design',
      tags: ['dark', 'minimal', 'design']
    }
  ],
  floral: [
    {
      id: 'floral-1',
      url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
      title: 'Rose Garden',
      description: 'Beautiful rose garden in bloom',
      tags: ['floral', 'roses', 'garden']
    },
    {
      id: 'floral-2',
      url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
      title: 'Wild Flowers',
      description: 'Colorful wild flowers in field',
      tags: ['floral', 'wildflowers', 'nature']
    },
    {
      id: 'floral-3',
      url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
      title: 'Spring Flowers',
      description: 'Spring flowers in bloom',
      tags: ['floral', 'spring', 'bloom']
    },
    {
      id: 'floral-4',
      url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
      title: 'Floral Arrangement',
      description: 'Elegant floral arrangement',
      tags: ['floral', 'arrangement', 'elegant']
    },
    {
      id: 'floral-5',
      url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
      title: 'Garden Flowers',
      description: 'Beautiful garden flowers',
      tags: ['floral', 'garden', 'flowers']
    }
  ],
  'fantasy-scifi': [
    {
      id: 'fantasy-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Fantasy Castle',
      description: 'Magical fantasy castle',
      tags: ['fantasy', 'castle', 'magical']
    },
    {
      id: 'fantasy-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Sci-Fi City',
      description: 'Futuristic sci-fi cityscape',
      tags: ['scifi', 'city', 'future']
    },
    {
      id: 'fantasy-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Fantasy Forest',
      description: 'Enchanted fantasy forest',
      tags: ['fantasy', 'forest', 'enchanted']
    },
    {
      id: 'fantasy-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Space Station',
      description: 'Futuristic space station',
      tags: ['scifi', 'space', 'future']
    },
    {
      id: 'fantasy-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Dragon Realm',
      description: 'Fantasy dragon landscape',
      tags: ['fantasy', 'dragon', 'magical']
    }
  ],
  seasons: [
    {
      id: 'seasons-1',
      url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56',
      title: 'Winter Wonderland',
      description: 'Snow-covered winter scene',
      tags: ['seasons', 'winter', 'snow']
    },
    {
      id: 'seasons-2',
      url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56',
      title: 'Spring Blossoms',
      description: 'Spring flowers in bloom',
      tags: ['seasons', 'spring', 'blossoms']
    },
    {
      id: 'seasons-3',
      url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56',
      title: 'Summer Beach',
      description: 'Beautiful summer beach scene',
      tags: ['seasons', 'summer', 'beach']
    },
    {
      id: 'seasons-4',
      url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56',
      title: 'Autumn Colors',
      description: 'Fall colors in nature',
      tags: ['seasons', 'autumn', 'colors']
    },
    {
      id: 'seasons-5',
      url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56',
      title: 'Seasonal Change',
      description: 'Transition between seasons',
      tags: ['seasons', 'transition', 'nature']
    }
  ],
  'textures-patterns': [
    {
      id: 'textures-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Wood Texture',
      description: 'Natural wood grain pattern',
      tags: ['textures', 'wood', 'pattern']
    },
    {
      id: 'textures-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Marble Pattern',
      description: 'Elegant marble texture',
      tags: ['textures', 'marble', 'elegant']
    },
    {
      id: 'textures-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Fabric Texture',
      description: 'Detailed fabric pattern',
      tags: ['textures', 'fabric', 'pattern']
    },
    {
      id: 'textures-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Geometric Pattern',
      description: 'Modern geometric design',
      tags: ['textures', 'geometric', 'modern']
    },
    {
      id: 'textures-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Natural Texture',
      description: 'Organic natural pattern',
      tags: ['textures', 'natural', 'organic']
    }
  ],
  'quotes-typography': [
    {
      id: 'quotes-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Inspirational Quote',
      description: 'Beautiful typography with quote',
      tags: ['quotes', 'typography', 'inspiration']
    },
    {
      id: 'quotes-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Typography Art',
      description: 'Creative typography design',
      tags: ['typography', 'art', 'creative']
    },
    {
      id: 'quotes-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Quote Design',
      description: 'Elegant quote presentation',
      tags: ['quotes', 'design', 'elegant']
    },
    {
      id: 'quotes-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Typography Pattern',
      description: 'Patterned typography design',
      tags: ['typography', 'pattern', 'design']
    },
    {
      id: 'quotes-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Quote Art',
      description: 'Artistic quote presentation',
      tags: ['quotes', 'art', 'creative']
    }
  ],
  gaming: [
    {
      id: 'gaming-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Gaming Setup',
      description: 'Professional gaming setup',
      tags: ['gaming', 'setup', 'professional']
    },
    {
      id: 'gaming-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Game Controller',
      description: 'Modern gaming controller',
      tags: ['gaming', 'controller', 'modern']
    },
    {
      id: 'gaming-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Gaming Room',
      description: 'Cozy gaming environment',
      tags: ['gaming', 'room', 'cozy']
    },
    {
      id: 'gaming-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Gaming Art',
      description: 'Gaming-themed artwork',
      tags: ['gaming', 'art', 'theme']
    },
    {
      id: 'gaming-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Gaming Scene',
      description: 'Dynamic gaming scene',
      tags: ['gaming', 'scene', 'dynamic']
    }
  ],
  sports: [
    {
      id: 'sports-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Sports Action',
      description: 'Dynamic sports moment',
      tags: ['sports', 'action', 'dynamic']
    },
    {
      id: 'sports-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Sports Field',
      description: 'Beautiful sports field',
      tags: ['sports', 'field', 'nature']
    },
    {
      id: 'sports-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Sports Equipment',
      description: 'Professional sports equipment',
      tags: ['sports', 'equipment', 'professional']
    },
    {
      id: 'sports-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Sports Arena',
      description: 'Impressive sports arena',
      tags: ['sports', 'arena', 'impressive']
    },
    {
      id: 'sports-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Sports Action',
      description: 'Exciting sports moment',
      tags: ['sports', 'action', 'exciting']
    }
  ],
  'aesthetic-pastel': [
    {
      id: 'aesthetic-1',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Pastel Sunset',
      description: 'Soft pastel colors at sunset',
      tags: ['aesthetic', 'pastel', 'sunset']
    },
    {
      id: 'aesthetic-2',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Soft Colors',
      description: 'Gentle pastel color palette',
      tags: ['aesthetic', 'pastel', 'colors']
    },
    {
      id: 'aesthetic-3',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Aesthetic Scene',
      description: 'Beautiful aesthetic composition',
      tags: ['aesthetic', 'scene', 'beautiful']
    },
    {
      id: 'aesthetic-4',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Pastel Flowers',
      description: 'Soft pastel flower arrangement',
      tags: ['aesthetic', 'pastel', 'flowers']
    },
    {
      id: 'aesthetic-5',
      url: 'https://images.unsplash.com/photo-1557672174-298e090bd0f1',
      title: 'Aesthetic Room',
      description: 'Cozy aesthetic room design',
      tags: ['aesthetic', 'room', 'cozy']
    }
  ]
}; 