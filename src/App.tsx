import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FramesCollectionSection } from './components/FramesCollectionSection';
import { StatsBannerSection } from './components/StatsBannerSection';
import { ArtisanSpotlightSection } from './components/ArtisanSpotlightSection';
import { CatalogSection } from './components/CatalogSection';
import { GlobalExportSection } from './components/GlobalExportSection';
import { ProductModal } from './components/ProductModal';
import { InquiryDrawer } from './components/InquiryDrawer';
import { Footer } from './components/Footer';
import { CATALOG_ITEMS } from './data/catalog';
import type { HandicraftItem } from './data/catalog';

export function App() {
  const [inquiryItems, setInquiryItems] = useState<HandicraftItem[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [quickViewItem, setQuickViewItem] = useState<HandicraftItem | null>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false);

  const handleAddToInquiry = (item: HandicraftItem) => {
    if (!inquiryItems.some(i => i.id === item.id)) {
      setInquiryItems([...inquiryItems, item]);
    } else {
      setInquiryItems(inquiryItems.filter(i => i.id !== item.id));
    }
  };

  const handleRemoveInquiryItem = (id: string) => {
    setInquiryItems(inquiryItems.filter(i => i.id !== id));
  };

  const handleToggleWishlist = (id: string) => {
    if (wishlistIds.includes(id)) {
      setWishlistIds(wishlistIds.filter(wId => wId !== id));
    } else {
      setWishlistIds([...wishlistIds, id]);
    }
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearch = (term: string) => {
    if (!term) return;
    const matchedCategory = CATALOG_ITEMS.find(item =>
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      item.category.toLowerCase().includes(term.toLowerCase())
    );
    if (matchedCategory) {
      setSelectedCategory(matchedCategory.category);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1C1917] flex flex-col font-['Plus_Jakarta_Sans']">
      
      {/* Top Header Navigation */}
      <Header
        inquiryCount={inquiryItems.length}
        wishlistCount={wishlistIds.length}
        onOpenInquiry={() => setIsInquiryOpen(true)}
        onSearch={handleSearch}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExplore={() => handleNavigate('catalog')}
        />

        {/* Frames Collection Showcase (Matching Reference Image Section 2) */}
        <FramesCollectionSection
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            handleNavigate('catalog');
          }}
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* Terracotta Counter Metrics Banner (Matching Reference Image Section 3) */}
        <StatsBannerSection />

        {/* Artisan Spotlight (Matching Reference Image Section 4) */}
        <ArtisanSpotlightSection
          onOpenInquiry={() => setIsInquiryOpen(true)}
        />

        {/* Hand Picked Catalog Grid (Matching Reference Image Section 5) */}
        <CatalogSection
          items={CATALOG_ITEMS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onQuickView={(item) => setQuickViewItem(item)}
          onAddToInquiry={handleAddToInquiry}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
          inquiryItemIds={inquiryItems.map(i => i.id)}
        />

        {/* B2B Global Export & Custom Commissions Section */}
        <GlobalExportSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Quick View Product Lightbox Modal */}
      <ProductModal
        item={quickViewItem}
        onClose={() => setQuickViewItem(null)}
        onAddToInquiry={handleAddToInquiry}
        isInInquiry={quickViewItem ? inquiryItems.some(i => i.id === quickViewItem.id) : false}
      />

      {/* Slide-out RFQ Inquiry Drawer */}
      <InquiryDrawer
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        items={inquiryItems}
        onRemoveItem={handleRemoveInquiryItem}
        onClearAll={() => setInquiryItems([])}
      />
    </div>
  );
}

export default App;
