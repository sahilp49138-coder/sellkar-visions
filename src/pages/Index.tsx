import { useState } from "react";

// Homepage Supporting Sections (1-3)
import homepageGrowth1 from "@/assets/homepage-growth-1.jpg";
import homepageTrust2 from "@/assets/homepage-trust-2.jpg";
import homepageReliability3 from "@/assets/homepage-reliability-3.jpg";

// About Us Section (4-6)
import aboutCredibility4 from "@/assets/about-credibility-4.jpg";
import aboutJourney5 from "@/assets/about-journey-5.jpg";
import aboutStructure6 from "@/assets/about-structure-6.jpg";

// Services Section (7-9)
import servicesDevices7 from "@/assets/services-devices-7.jpg";
import servicesIcons8 from "@/assets/services-icons-8.jpg";
import servicesProcess9 from "@/assets/services-process-9.jpg";

// Why Choose Us / Features (10-12)
import featuresTrust10 from "@/assets/features-trust-10.jpg";
import featuresSecurity11 from "@/assets/features-security-11.jpg";
import featuresQuality12 from "@/assets/features-quality-12.jpg";

// Contact / Support Section (13)
import contactSupport13 from "@/assets/contact-support-13.jpg";

// Extra Supporting Visuals (14-15)
import supportingVisual14 from "@/assets/supporting-visual-14.jpg";
import supportingVisual15 from "@/assets/supporting-visual-15.jpg";

interface ImageItem {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const images: ImageItem[] = [
  {
    id: 1,
    src: homepageGrowth1,
    title: "Homepage Growth Visual",
    category: "Homepage",
    description: "Abstract growth and momentum visual with flowing blue ribbons and golden particles"
  },
  {
    id: 2,
    src: homepageTrust2,
    title: "Homepage Trust Network",
    category: "Homepage",
    description: "Connected network visualization representing platform trust and 2026 celebration"
  },
  {
    id: 3,
    src: homepageReliability3,
    title: "Homepage Reliability",
    category: "Homepage",
    description: "Floating geometric shapes representing platform reliability and innovation"
  },
  {
    id: 4,
    src: aboutCredibility4,
    title: "About Us - Credibility",
    category: "About Us",
    description: "Professional journey visual with upward growth arrows and 2026 milestone markers"
  },
  {
    id: 5,
    src: aboutJourney5,
    title: "About Us - Journey",
    category: "About Us",
    description: "Elegant flowing ribbon timeline with golden milestone points"
  },
  {
    id: 6,
    src: aboutStructure6,
    title: "About Us - Structure",
    category: "About Us",
    description: "Company structure visualization with premium layered panels"
  },
  {
    id: 7,
    src: servicesDevices7,
    title: "Services - Devices",
    category: "Services",
    description: "Premium device showcase featuring smartphone and laptop silhouettes"
  },
  {
    id: 8,
    src: servicesIcons8,
    title: "Services - Features Icons",
    category: "Services",
    description: "Service icons showing Instant Payment, Doorstep Pickup, and Best Price"
  },
  {
    id: 9,
    src: servicesProcess9,
    title: "Services - Process Flow",
    category: "Services",
    description: "Three-step process visualization with connected circular nodes"
  },
  {
    id: 10,
    src: featuresTrust10,
    title: "Features - Trust Shield",
    category: "Features",
    description: "Security shield with network patterns and 2026 celebration elements"
  },
  {
    id: 11,
    src: featuresSecurity11,
    title: "Features - Security",
    category: "Features",
    description: "Dynamic security visual with speed lines and transaction efficiency"
  },
  {
    id: 12,
    src: featuresQuality12,
    title: "Features - Quality Assurance",
    category: "Features",
    description: "Floating checkmarks representing quality and verification"
  },
  {
    id: 13,
    src: contactSupport13,
    title: "Contact & Support",
    category: "Contact",
    description: "24/7 support visualization with connected speech bubbles"
  },
  {
    id: 14,
    src: supportingVisual14,
    title: "Supporting Visual - Waves",
    category: "Supporting",
    description: "Elegant flowing waves with golden edges - versatile background"
  },
  {
    id: 15,
    src: supportingVisual15,
    title: "Supporting Visual - Network",
    category: "Supporting",
    description: "Community network circle with connected people icons"
  }
];

const categories = ["All", "Homepage", "About Us", "Services", "Features", "Contact", "Supporting"];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            SELLKAR INDIA
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Premium Image Gallery - 15 Responsive Visuals
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
            <span className="text-accent-foreground font-medium">✨ New Year 2026 Edition</span>
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <nav className="sticky top-0 z-10 bg-card border-b border-border py-4 px-4 shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Image Grid */}
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <article
              key={image.id}
              className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {image.category}
                </span>
                <h3 className="text-lg font-semibold text-card-foreground mt-1 mb-2">
                  #{image.id} - {image.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {image.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl w-full bg-card rounded-xl overflow-hidden shadow-2xl border border-border">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain bg-muted"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 text-foreground flex items-center justify-center hover:bg-background transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Image #{selectedImage.id} • {selectedImage.category}
              </span>
              <h2 className="text-2xl font-bold text-card-foreground mt-2 mb-3">
                {selectedImage.title}
              </h2>
              <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="bg-secondary px-3 py-1 rounded-full">1920×1080</span>
                <span className="bg-secondary px-3 py-1 rounded-full">16:9 Aspect Ratio</span>
                <span className="bg-secondary px-3 py-1 rounded-full">Responsive Ready</span>
                <span className="bg-secondary px-3 py-1 rounded-full">Light Mode</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">
            Premium responsive images for Sellkar India website • New Year 2026 Edition
          </p>
          <p className="text-xs opacity-60 mt-2">
            All images optimized for mobile, tablet & desktop displays
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
