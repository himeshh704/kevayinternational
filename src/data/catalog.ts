export interface HandicraftItem {
  id: string;
  title: string;
  category: 'Wood Carvings' | 'Brass & Metalwork' | 'Filigree Frames' | 'Stone & Ceramics' | 'Hand-painted Tapestry';
  price: string;
  dimensions: string;
  weight: string;
  material: string;
  origin: string;
  image: string;
  frameType?: 'wood' | 'gold' | 'minimal';
  tag?: 'NEW' | 'BESTSELLER' | 'HERITAGE' | 'EXCLUSIVE';
  description: string;
  moq: string; // Minimum Order Quantity for export
}

export const CATEGORIES = [
  'All',
  'Wood Carvings',
  'Brass & Metalwork',
  'Filigree Frames',
  'Stone & Ceramics',
  'Hand-painted Tapestry'
] as const;

export const CATALOG_ITEMS: HandicraftItem[] = [
  {
    id: 'item-1',
    title: 'Teakwood Royal Heritage Carved Frame',
    category: 'Wood Carvings',
    price: '$450',
    dimensions: '24" x 36" x 2"',
    weight: '4.8 kg',
    material: 'Solid Teak Wood & Natural Polish',
    origin: 'Saharanpur, India',
    image: '/assets/wood_carved_frame.png',
    frameType: 'wood',
    tag: 'HERITAGE',
    description: 'Masterfully carved teak wood frame featuring intricate floral arabesque reliefs, housing a classic coastal landscape artwork. Perfect for luxury hotel lobbies and upscale residences.',
    moq: '5 units'
  },
  {
    id: 'item-2',
    title: 'Victorian Gold Filigree Oil Canvas Frame',
    category: 'Filigree Frames',
    price: '$680',
    dimensions: '30" x 40" x 2.5"',
    weight: '6.2 kg',
    material: 'Hand-cast Brass Filigree & 24K Gold Leafing',
    origin: 'Moradabad, India',
    image: '/assets/gold_filigree_frame.png',
    frameType: 'gold',
    tag: 'BESTSELLER',
    description: 'Opulent gold filigree border frame showcasing a vibrant modern abstract oil painting. Each curve is hand-chiseled by generational brass artisans.',
    moq: '3 units'
  },
  {
    id: 'item-3',
    title: 'Mahogany Oriental Gold-Ink Artwork Frame',
    category: 'Filigree Frames',
    price: '$520',
    dimensions: '20" x 28" x 1.5"',
    weight: '3.5 kg',
    material: 'Seasoned Mahogany & Real Gold Foil',
    origin: 'Jaipur, India',
    image: '/assets/minimal_modern_frame.png',
    frameType: 'minimal',
    tag: 'NEW',
    description: 'Sleek dark mahogany frame surrounding hand-rendered oriental gold ink artwork on handmade parchment paper with archival silk matting.',
    moq: '5 units'
  },
  {
    id: 'item-4',
    title: 'Royal Enamel Royal Peacock Brass Statue',
    category: 'Brass & Metalwork',
    price: '$890',
    dimensions: '18" x 12" x 22"',
    weight: '8.5 kg',
    material: 'Solid Brass with Meenakari Enamel Inlay',
    origin: 'Moradabad, India',
    image: '/assets/brass_peacock_sculpture.png',
    tag: 'EXCLUSIVE',
    description: 'Regal brass peacock sculpture embellished with vivid cobalt blue and emerald green Meenakari enamel work on a solid black marble plinth.',
    moq: '2 units'
  },
  {
    id: 'item-5',
    title: 'Hand-Painted Rajasthani Terracotta Vase Trio',
    category: 'Stone & Ceramics',
    price: '$340',
    dimensions: 'Set of 3 (12", 16", 20" Height)',
    weight: '5.2 kg (Set)',
    material: 'Baked Terracotta Clay & Mineral Pigments',
    origin: 'Khavda, Gujarat',
    image: '/assets/terracotta_pottery_set.png',
    tag: 'NEW',
    description: 'Earthy terracotta vessels adorned with traditional tribal motifs and metallic gold detailing, baked in traditional wood-fired kilns.',
    moq: '10 sets'
  },
  {
    id: 'item-6',
    title: 'Pietra Dura White Marble Inlay Treasure Box',
    category: 'Stone & Ceramics',
    price: '$750',
    dimensions: '12" x 8" x 4"',
    weight: '4.1 kg',
    material: 'Makrana White Marble & Lapis Lazuli Inlay',
    origin: 'Agra, India',
    image: '/assets/marble_inlay_box.png',
    tag: 'HERITAGE',
    description: 'Handcrafted using Taj Mahal Pietra Dura technique, embedding semiprecious lapis lazuli, jasper, and turquoise into flawless white marble.',
    moq: '5 units'
  }
];

export const STATS = [
  { label: 'Digital & Brass Handicrafts', count: '1,200 +' },
  { label: 'Abstract & Wood Carvings', count: '4,560 +' },
  { label: '3D Art & Metalwork', count: '1,250 +' },
  { label: 'Heritage Sculptures', count: '4,255 +' }
];
