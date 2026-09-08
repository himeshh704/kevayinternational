export interface HandicraftItem {
  id: string;
  title: string;
  category: 'Dining Chairs' | 'Dining Tables' | 'Sideboards & Consoles' | 'Coffee & Occasional' | 'Custom Furniture';
  dimensions: string;
  weight: string;
  material: string;
  origin: string;
  image: string;
  tag?: 'NEW' | 'BESTSELLER' | 'HERITAGE' | 'EXCLUSIVE';
  description: string;
  moq: string;
}

export const CATEGORIES = [
  'All',
  'Dining Chairs',
  'Dining Tables',
  'Sideboards & Consoles',
  'Coffee & Occasional',
  'Custom Furniture'
] as const;

export const CONTACT_INFO = {
  company: 'KEVAY INTERNATIONAL',
  tagline: 'Premium Furniture Manufacturing & Product Development Partner',
  slogan: 'Crafted for Brands. Designed for Living.',
  promise: 'Your Design. Our Craftsmanship. One Strong Partnership.',
  phone: '+91 99833 50705',
  email: 'mananj@kevayinternational.com',
  address: 'Tanawara, Jodhpur, Rajasthan, India',
  founder: 'Mr. Manan Jangid (Founder & Director)',
  heritageLead: 'Mr. Rajesh Kumar Jangid (Leadership & Craft Heritage)'
};

export const CATALOG_ITEMS: HandicraftItem[] = [
  {
    id: 'item-1',
    title: 'Solid Sheesham Carved Pattern Dining Chair Set',
    category: 'Dining Chairs',
    dimensions: '20" x 22" x 38"',
    weight: '7.8 kg',
    material: 'Solid Sheesham Wood & Premium Upholstery',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/real_carved_dining_set.jpg',
    tag: 'BESTSELLER',
    description: 'Precision-carved geometric motif backrest with comfortable upholstered seat cushion. Built to client specifications for furniture brands & dining collections.',
    moq: '10 units'
  },
  {
    id: 'item-2',
    title: 'Contemporary Low Accent Lounge Chairs & Marble Coffee Table',
    category: 'Coffee & Occasional',
    dimensions: '28" x 30" x 32" (Chairs), 36" Dia (Table)',
    weight: '22.5 kg Set',
    material: 'Solid Oak/Sheesham, Natural Marble & Olive Upholstery',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/real_lounge_coffee_table.jpg',
    tag: 'NEW',
    description: 'Minimalist lounge seating pairing solid wood curved backrests with a solid cylindrical marble coffee table. Crafted for high-end boutique living spaces.',
    moq: '4 sets'
  },
  {
    id: 'item-3',
    title: 'Natural Marble Top Dining Table with Slatted Chairs',
    category: 'Dining Tables',
    dimensions: '72" x 36" x 30" (Table)',
    weight: '65.0 kg',
    material: 'Italian/Indian Marble Top, Solid Sheesham & Olive Cushioning',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/real_marble_dining_table_green.jpg',
    tag: 'EXCLUSIVE',
    description: '6-seater luxury dining ensemble featuring a polished natural stone top and slatted solid wood dining chairs. Precision-joined for residential retail ranges.',
    moq: '2 sets'
  },
  {
    id: 'item-4',
    title: 'Vertical Slatted Solid Wood Dining Table Set',
    category: 'Dining Tables',
    dimensions: '78" x 40" x 30"',
    weight: '70.0 kg',
    material: 'Solid Walnut/Sheesham Wood & Natural Marble Top',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/real_marble_dining_table_slats.jpg',
    tag: 'HERITAGE',
    description: 'Architectural dining table featuring vertical slatted backrest chairs and robust solid wood trestle base. Fully customizable wood finishes & upholstery.',
    moq: '2 sets'
  },
  {
    id: 'item-5',
    title: 'Solid Mango Lathe-Turned Bar Stool',
    category: 'Coffee & Occasional',
    dimensions: '16" x 16" x 30"',
    weight: '6.8 kg',
    material: 'Solid Mango Wood & Brushed Brass Ring',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/carved_bar_stool.png',
    tag: 'EXCLUSIVE',
    description: 'Hand-turned solid mango wood bar stool with a brushed brass footrest and antique walnut finish. Kiln-dried to 8% moisture for international export.',
    moq: '12 units'
  },
  {
    id: 'item-6',
    title: 'Pietra Dura Marble & Wood Credenza Console',
    category: 'Sideboards & Consoles',
    dimensions: '60" x 18" x 32"',
    weight: '42.0 kg',
    material: 'Solid Wood, Natural Veneer & Marble Inlay',
    origin: 'Tanawara, Jodhpur',
    image: '/assets/marble_inlay_box.png',
    tag: 'HERITAGE',
    description: 'Mixed-material sideboard combining seasoned solid wood frame, natural stone inlay doors, and sleek brass legs. Tailored for furniture brands & retailers.',
    moq: '3 units'
  }
];

export const WHY_CHOOSE_US_PILLARS = [
  {
    id: '1',
    title: 'Design-to-Production Expertise',
    desc: 'We support our clients throughout the complete product development journey—from an initial concept, sketch, or reference image to sampling and final bulk production.'
  },
  {
    id: '2',
    title: 'Customized Manufacturing',
    desc: 'Every brand has its own identity. We offer flexibility in dimensions, materials, finishes, upholstery, stone, metal detailing, and product specifications to develop furniture according to your requirements.'
  },
  {
    id: '3',
    title: 'Skilled Jodhpur Craftsmanship',
    desc: 'Based in Jodhpur, we have access to skilled craftsmen and a strong furniture manufacturing ecosystem, allowing us to combine traditional woodworking expertise with contemporary production techniques.'
  },
  {
    id: '4',
    title: 'Premium Material Combinations',
    desc: 'We create distinctive furniture using a wide range of materials, including Solid Wood, Natural Veneers, Marble & Natural Stone, Upholstery, Metal Detailing, and Custom Finishes.'
  },
  {
    id: '5',
    title: 'Focus on Quality',
    desc: 'Quality is an essential part of every stage of our manufacturing process. From material selection and construction to finishing and final inspection, we focus on delivering furniture that meets our clients expectations.'
  },
  {
    id: '6',
    title: 'Flexible for Brands and Projects',
    desc: 'Whether you require a customized collection, product development support, or regular production for an established furniture range, we work flexibly according to your requirements.'
  },
  {
    id: '7',
    title: 'Reliable Manufacturing Partnership',
    desc: 'We aim to build long-term relationships with our clients by offering transparent communication, dependable production, consistent quality, and professional service.'
  }
];
