// Campaign Content Configuration
// Replace this file with different club/uniform data for rapid campaign deployment

export interface CampaignConfig {
  club: {
    name: string;
    logo: string;
    shortName: string;
  };
  season: string;
  campaign: {
    theme: string;
    concept: string;
    tagline: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
    gradientStart: string;
    gradientEnd: string;
  };
  hero: {
    title: string;
    subtitle: string;
    images: string[];
    sponsorLogos: string[];
  };
  concept: {
    heading: string;
    description: string;
    backgroundImage?: string;
  };
  video: {
    title: string;
    youtubeId: string;
    thumbnail: string;
  };
  uniforms: Uniform[];
  sizeChart: {
    adults: SizeRow[];
    junior: SizeRow[];
    measurementDiagram: string;
  };
  nameAndNumber: {
    title: string;
    description: string;
    fontSample: string;
    playerExamples: {
      name: string;
      number: string;
      image: string;
    }[];
  };
  purchaseSchedule: PurchasePhase[];
  retailLocations: RetailLocation[];
  partners: Partner[];
  shopLinks: {
    online: string;
    mobile: string;
  };
  socialLinks: {
    youtube?: string;
    twitter?: string;
    instagram?: string;
    tiktok?: string;
    line?: string;
    facebook?: string;
  };
}

export interface Uniform {
  id: string;
  label: string;
  title: string;
  category: 'home' | 'away' | 'goalkeeper';
  description: string;
  conceptDescription: string;
  price: string;
  colors: string[];
  heroImages: string[];
  galleryImages: string[];
  designPoints: DesignPoint[];
  variants: ProductVariant[];
  buyUrl: string;
  buttonText: string;
}

export interface DesignPoint {
  id: string;
  title: string;
  description: string;
  image: string;
  detailImages?: string[];
}

export interface ProductVariant {
  id: string;
  label: string;
  type: string;
  price: string;
  url: string;
}

export interface SizeRow {
  label: string;
  measurements: string[];
}

export interface PurchasePhase {
  phase: string;
  heading: string;
  reception: string;
  deliveryDate: string;
  pickupDate: string;
  notes?: string;
}

export interface RetailLocation {
  name: string;
  url?: string;
  type?: string;
}

export interface Partner {
  name: string;
  logo: string;
  url: string;
}

// Default content: FC Tokyo 2026/27 Reference Implementation
export const defaultCampaign: CampaignConfig = {
  club: {
    name: 'FC Tokyo',
    logo: '/logos/fc-tokyo.svg',
    shortName: 'Tokyo',
  },
  season: '2026/27',
  campaign: {
    theme: 'Akebono',
    concept: 'We view the season transition as the start of a new chapter and designed it with the theme "Akebono" (dawn). The 2nd uniform is inspired by the pre-dawn sky and the stars remaining there.',
    tagline: '100% 2026/27',
  },
  colors: {
    primary: '#D32F2F',
    secondary: '#1B3A8A',
    accent: '#FFA500',
    text: '#FFFFFF',
    background: '#000000',
    gradientStart: '#D32F2F',
    gradientEnd: '#CCCCCC',
  },
  hero: {
    title: 'FC TOKYO',
    subtitle: '2026/27 UNIFORM',
    images: [
      '/images/hero-player-1.jpg',
      '/images/hero-player-2.jpg',
      '/images/hero-player-3.jpg',
    ],
    sponsorLogos: [
      '/logos/new-balance.svg',
      '/logos/fc-tokyo-crest.svg',
    ],
  },
  concept: {
    heading: 'CONCEPT',
    description: 'A gradient inspired by traditional Japanese kimono dawn dyeing and ukiyo-e is used to express COLOR+ and Akebono.',
    backgroundImage: '/images/concept-bg.jpg',
  },
  video: {
    title: 'FC Tokyo 2026-27 Uniform Movie',
    youtubeId: '',
    thumbnail: '/images/video-thumbnail.jpg',
  },
  uniforms: [
    {
      id: 'first-uniform',
      label: '1st',
      title: '1st UNIFORM',
      category: 'home',
      description: 'The new home uniform features a gradient inspired by dawn.',
      conceptDescription: 'A gradient inspired by traditional Japanese kimono dawn dyeing and ukiyo-e is used to express COLOR+ and Akebono (dawn).',
      price: '¥12,980〜',
      colors: ['#D32F2F', '#1B3A8A'],
      heroImages: [
        '/images/1st-uniform-hero.jpg',
      ],
      galleryImages: [
        '/images/1st-uniform-front.jpg',
        '/images/1st-uniform-side.jpg',
        '/images/1st-uniform-back.jpg',
      ],
      designPoints: [
        {
          id: 'design-1',
          title: 'Emblem',
          description: 'The club emblem is represented as a rubber patch.',
          image: '/images/detail-emblem.jpg',
        },
        {
          id: 'design-2',
          title: 'Design',
          description: 'The design was created with the theme of dawn.',
          image: '/images/detail-design.jpg',
        },
        {
          id: 'design-3',
          title: 'Material & Function',
          description: 'The authentic model expresses a dynamic pattern.',
          image: '/images/detail-material.jpg',
        },
      ],
      variants: [
        {
          id: 'var-1',
          label: '1st',
          type: 'Authentic Uniform Short Sleeve',
          price: '¥22,990〜',
          url: 'https://store.jleague.jp/club/ftokyo/item/P0000109895',
        },
        {
          id: 'var-2',
          label: '1st',
          type: 'Authentic Uniform Long Sleeve',
          price: '¥24,970〜',
          url: 'https://store.jleague.jp/club/ftokyo/item/P0000109897',
        },
        {
          id: 'var-3',
          label: '1st',
          type: 'Replica Uniform Short Sleeve',
          price: 'From ¥13,970',
          url: 'https://store.jleague.jp/club/ftokyo/item/P0000109901',
        },
      ],
      buyUrl: 'https://store.jleague.jp/club/ftokyo/search/-/-/2026%EF%BC%8F27%201st%20%E3%83%A6%E3%83%8B%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0/?sort=2',
      buttonText: 'BUY NOW',
    },
    {
      id: 'second-uniform',
      label: '2nd',
      title: '2nd UNIFORM',
      category: 'away',
      description: 'The away uniform inspired by the pre-dawn sky.',
      conceptDescription: 'Inspired by the pre-dawn sky and the stars remaining there, using the Akebono gradient.',
      price: '¥12,980〜',
      colors: ['#001A66', '#FFA500'],
      heroImages: [
        '/images/2nd-uniform-hero.jpg',
      ],
      galleryImages: [
        '/images/2nd-uniform-front.jpg',
        '/images/2nd-uniform-side.jpg',
        '/images/2nd-uniform-back.jpg',
      ],
      designPoints: [
        {
          id: 'design-2-1',
          title: 'Design',
          description: 'The design is inspired by the dawn grass.',
          image: '/images/detail-2nd-design.jpg',
        },
      ],
      variants: [
        {
          id: 'var-2-1',
          label: '2nd',
          type: 'Authentic Uniform Short Sleeve',
          price: '¥22,990〜',
          url: 'https://store.jleague.jp/club/ftokyo/item/P0000109896',
        },
      ],
      buyUrl: 'https://store.jleague.jp/club/ftokyo/search/-/-/2026%EF%BC%8F27%202nd%20%E3%83%A6%E3%83%8B%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0/?sort=2',
      buttonText: 'BUY NOW',
    },
    {
      id: 'gk-uniform',
      label: 'GK',
      title: 'GK UNIFORM',
      category: 'goalkeeper',
      description: 'The goalkeeper uniform with tonal color scheme.',
      conceptDescription: 'Following the design of the 1st uniform with a tonal color scheme for a unified finish.',
      price: '¥12,980〜',
      colors: ['#FFD700', '#00BFFF'],
      heroImages: [
        '/images/gk-uniform-hero.jpg',
      ],
      galleryImages: [
        '/images/gk-uniform-yellow.jpg',
        '/images/gk-uniform-blue.jpg',
      ],
      designPoints: [
        {
          id: 'design-gk-1',
          title: 'Design',
          description: 'Tonal color scheme for unified finish.',
          image: '/images/detail-gk-design.jpg',
        },
      ],
      variants: [
        {
          id: 'var-gk-1',
          label: 'Authentic Uniform Short Sleeve Yellow',
          type: 'Yellow',
          price: '¥22,990〜',
          url: 'https://store.jleague.jp/club/ftokyo/item/P0000109899',
        },
        {
          id: 'var-gk-2',
          label: 'Authentic Uniform Short Sleeve Sax Blue',
          type: 'Sax Blue',
          price: '¥22,990〜',
          url: 'https://store.jleague.jp/club/ftokyo/item/P0000109900',
        },
      ],
      buyUrl: 'https://store.jleague.jp/club/ftokyo/search/-/-/2026%EF%BC%8F27%20GK%20%E3%83%A6%E3%83%8B%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0/?sort=2',
      buttonText: 'BUY NOW',
    },
  ],
  sizeChart: {
    adults: [
      { label: 'Body Length', measurements: ['68.0', '71.0', '74.0', '77.0', '80.0', '80.5', '81.0'] },
      { label: 'Chest', measurements: ['46.0', '49.0', '52.0', '55.0', '58.0', '61.5', '65.0'] },
      { label: 'Sleeve Length (Short)', measurements: ['22.0', '23.0', '24.0', '25.0', '26.0', '27.0', '28.0'] },
    ],
    junior: [
      { label: 'Body Length', measurements: ['50.0', '54.0', '58.0', '62.0', '66.0'] },
      { label: 'Chest', measurements: ['38.0', '39.0', '42.0', '45.0', '48.0'] },
      { label: 'Sleeve Length', measurements: ['16.0', '16.5', '18.0', '19.5', '21.0'] },
    ],
    measurementDiagram: '/images/measurement-diagram.jpg',
  },
  nameAndNumber: {
    title: 'NAME & NUMBER',
    description: '2026/27 Season Jersey Number',
    fontSample: '/images/number-font-sample.jpg',
    playerExamples: [
      {
        name: 'MUROYA',
        number: '2',
        image: '/images/player-muroya.jpg',
      },
      {
        name: 'SATO',
        number: '23',
        image: '/images/player-sato.jpg',
      },
      {
        name: 'TANAKA',
        number: '1',
        image: '/images/player-tanaka.jpg',
      },
    ],
  },
  purchaseSchedule: [
    {
      phase: 'PHASE 01',
      heading: 'Delivery by International Friendly Match vs Borussia Dortmund',
      reception: 'July 3 (Fri) 5:30 p.m. – July 5 (Sun) 11:59 p.m.',
      deliveryDate: 'Scheduled to be shipped by July 31 (Fri)',
      pickupDate: 'From July 30 (Thu) onward',
    },
    {
      phase: 'PHASE 02',
      heading: 'Delivery Before League Kickoff',
      reception: 'Jul 7 (Tue) 5:00 p.m. – Jul 12 (Sun) 11:59 p.m.',
      deliveryDate: 'Scheduled to ship by Aug 7 (Fri)',
      pickupDate: 'From July 30 (Thu) onward',
    },
    {
      phase: 'PHASE 03',
      heading: 'General Sale',
      reception: 'July 30 (Thu) 5:00 p.m.~',
      deliveryDate: 'Immediate',
      pickupDate: 'In-store available',
    },
  ],
  retailLocations: [
    {
      name: 'FC Tokyo Official Online Shop',
      type: 'online',
      url: 'https://store.jleague.jp/club/ftokyo/search/lcd-05/?l-id=ftokyo_top_category_lcd-05',
    },
    {
      name: 'Ajinomoto Stadium Store',
      type: 'physical',
      url: 'https://euro-sports.jp/',
    },
    {
      name: 'Soccer Shop KAMO Shibuya',
      type: 'physical',
      url: 'https://www.sskamo.co.jp/',
    },
  ],
  partners: [
    {
      name: 'Tokyo Gas',
      logo: '/logos/partner-tokyo-gas.svg',
      url: 'https://www.tokyo-gas.co.jp/',
    },
    {
      name: 'MIXI',
      logo: '/logos/partner-mixi.svg',
      url: 'https://mixi.co.jp/',
    },
    {
      name: 'New Balance',
      logo: '/logos/new-balance.svg',
      url: 'https://shop.newbalance.jp/',
    },
  ],
  shopLinks: {
    online: 'https://store.jleague.jp/club/ftokyo/search/lcd-05/?l-id=ftokyo_top_category_lcd-05',
    mobile: 'https://store.jleague.jp/club/ftokyo/search/lcd-05/?l-id=ftokyo_top_category_lcd-05',
  },
  socialLinks: {
    youtube: 'https://www.youtube.com/user/fctokyochannel',
    twitter: 'https://x.com/fctokyoofficial',
    instagram: 'https://www.instagram.com/fctokyoofficial/',
    tiktok: 'https://www.tiktok.com/@tokyodorompa',
    line: 'https://page.line.me/fctokyo?openQrModal=true',
    facebook: 'https://www.facebook.com/fctokyo',
  },
};
