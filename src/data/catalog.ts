export interface HandicraftItem {
  id: string;
  title: string;
  category: 'Dining Chairs' | 'Lounge Seating' | 'Accent & Carved Chairs' | 'Bar Stools' | 'Carved Frames' | 'Heritage Handicrafts';
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
  'Dining Chairs',
  'Lounge Seating',
  'Accent & Carved Chairs',
  'Bar Stools',
  'Carved Frames',
  'Heritage Handicrafts'
] as const;

export const CATALOG_ITEMS: HandicraftItem[] = [
  {
    id: 'item-1',
    title: 'Tanawara Solid Teak Cane Dining Chair',
    category: 'Dining Chairs',
    price: '$280',
    dimensions: '20" x 22" x 38"',
    weight: '7.2 kg',
    material: 'Solid Teak Wood & Natural Rattan Cane',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/jodhpur_dining_chair.png',
    tag: 'BESTSELLER',
    description: 'Precision-engineered solid teakwood dining chair featuring handcrafted floral reliefs and woven rattan backrest. Built with 15+ years of OEM manufacturing expertise.',
    moq: '10 units'
  },
  {
    id: 'item-2',
    title: 'Cognac Leather Sheesham Lounge Armchair',
    category: 'Lounge Seating',
    price: '$490',
    dimensions: '30" x 32" x 34"',
    weight: '14.5 kg',
    material: 'Seasoned Sheesham Wood & Top-Grain Leather',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/lounge_accent_chair.png',
    tag: 'NEW',
    description: 'Ergonomic mid-century lounge chair with hand-lathed Sheesham wood armrests and plush cognac leather cushioning. Engineered for luxury hotel lounges & master suites.',
    moq: '5 units'
  },
  {
    id: 'item-3',
    title: 'Jodhpur Lathe-Turned Walnut Bar Stool',
    category: 'Bar Stools',
    price: '$210',
    dimensions: '16" x 16" x 30"',
    weight: '6.8 kg',
    material: 'Solid Mango Wood & Brushed Brass Ring',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/carved_bar_stool.png',
    tag: 'EXCLUSIVE',
    description: 'Hand-turned solid mango wood bar stool with a polished brass footrest ring and hand-rubbed antique walnut stain. Kiln-dried to 8% moisture for international climate durability.',
    moq: '12 units'
  },
  {
    id: 'item-4',
    title: 'Teakwood Royal Heritage Carved Frame',
    category: 'Carved Frames',
    price: '$450',
    dimensions: '24" x 36" x 2"',
    weight: '4.8 kg',
    material: 'Solid Teak Wood & Natural Polish',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/wood_carved_frame.png',
    frameType: 'wood',
    tag: 'HERITAGE',
    description: 'Masterfully hand-carved teak wood frame featuring intricate arabesque reliefs. Crafted by generational woodcarvers in our Jodhpur factory units.',
    moq: '5 units'
  },
  {
    id: 'item-5',
    title: 'Victorian Gold Filigree Oil Canvas Frame',
    category: 'Carved Frames',
    price: '$680',
    dimensions: '30" x 40" x 2.5"',
    weight: '6.2 kg',
    material: 'Hand-cast Brass Filigree & 24K Gold Leafing',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/gold_filigree_frame.png',
    frameType: 'gold',
    tag: 'BESTSELLER',
    description: 'Opulent gold filigree border frame showcasing a vibrant modern abstract oil painting. Each curve is hand-chiseled by our master metal artisans.',
    moq: '3 units'
  },
  {
    id: 'item-6',
    title: 'Royal Enamel Royal Peacock Brass Statue',
    category: 'Heritage Handicrafts',
    price: '$890',
    dimensions: '18" x 12" x 22"',
    weight: '8.5 kg',
    material: 'Solid Brass with Meenakari Enamel Inlay',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/brass_peacock_sculpture.png',
    tag: 'EXCLUSIVE',
    description: 'Regal brass peacock sculpture embellished with vivid cobalt blue and emerald green Meenakari enamel work on a solid black marble plinth.',
    moq: '2 units'
  }
];

export const STATS = [
  { label: 'Craft Experience', count: '15+ Yrs' },
  { label: 'Jodhpur Factory Units', count: '4 Units' },
  { label: 'Master Artisans', count: '50+ Team' },
  { label: 'Global B2B Shipments', count: '40+ Countries' }
];
