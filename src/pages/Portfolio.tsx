import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import preWedding from "@/assets/pre-wedding.jpg";
import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import eventCoverage from "@/assets/event-coverage.jpg";
import galleryEvent from "@/assets/gallery-event.jpg";
import galleryReel from "@/assets/gallery-reel.jpg";
import droneShoot from "@/assets/drone-shoots.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import videography from "@/assets/videography.jpg";

type Category = "All" | "Weddings" | "Events" | "Portraits" | "Reels";

const categories: Category[] = ["All", "Weddings", "Events", "Portraits", "Reels"];

const galleryItems = [
  { img: heroWedding, category: "Weddings" as const, title: "Bridal Elegance", aspect: "tall" },
  { img: weddingCeremony, category: "Weddings" as const, title: "Sacred Ceremony", aspect: "normal" },
  { img: portrait1, category: "Portraits" as const, title: "Bridal Portrait", aspect: "tall" },
  { img: eventCoverage, category: "Events" as const, title: "Grand Reception", aspect: "tall" },
  { img: preWedding, category: "Weddings" as const, title: "Golden Hour", aspect: "tall" },
  { img: galleryEvent, category: "Events" as const, title: "Haldi Celebration", aspect: "normal" },
  { img: portrait2, category: "Portraits" as const, title: "Couple Portrait", aspect: "normal" },
  { img: galleryReel, category: "Reels" as const, title: "Behind the Lens", aspect: "tall" },
  { img: droneShoot, category: "Events" as const, title: "Aerial View", aspect: "normal" },
  { img: videography, category: "Reels" as const, title: "Cinematic Setup", aspect: "normal" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-foreground mb-8"
          >
            Portfolio
          </motion.h1>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-sm tracking-widest uppercase px-4 py-2 rounded-sm transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid group cursor-pointer overflow-hidden rounded-sm"
                  onClick={() => setLightboxImg(item.img)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 flex items-end p-4">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/70">
                          {item.category}
                        </p>
                        <p className="font-serif text-lg text-primary-foreground">{item.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] shadow-2xl rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImg} alt="Gallery preview" className="w-full h-full object-contain" />
              <button
                onClick={() => setLightboxImg(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Close lightbox"
              >
                <X size={18} className="text-foreground" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;
