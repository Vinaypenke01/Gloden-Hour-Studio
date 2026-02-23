import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Star, ArrowRight } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import heroImg from "@/assets/hero-wedding.jpg";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";
import preWedding from "@/assets/pre-wedding.jpg";
import portrait1 from "@/assets/portrait-1.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const featuredMoments = [
  { img: weddingCeremony, title: "Sacred Vows", subtitle: "Traditional Ceremony" },
  { img: preWedding, title: "Golden Hour", subtitle: "Pre-Wedding Magic" },
  { img: portrait1, title: "Bridal Grace", subtitle: "Portrait Series" },
];

const testimonials = [
  {
    name: "Priya & Karthik",
    location: "Chennai",
    text: "Aura Studios captured every emotion of our wedding so beautifully. The cinematic video still makes us cry happy tears.",
    rating: 5,
  },
  {
    name: "Meera & Arvind",
    location: "Coimbatore",
    text: "Absolutely stunning work. They understood the essence of our South Indian traditions and made every moment look like a dream.",
    rating: 5,
  },
  {
    name: "Lakshmi & Ravi",
    location: "Madurai",
    text: "Professional, creative, and incredibly warm. The team felt like family throughout our wedding celebrations.",
    rating: 5,
  },
];

const videos = [
  { id: "dQw4w9WgXcQ", title: "A Traditional Love Story — Priya & Karthik" },
  { id: "dQw4w9WgXcQ", title: "Candlelit Vows — Meera & Arvind" },
];

const Index = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="South Indian wedding photography" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4"
          >
            Photography & Videography Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-medium leading-tight mb-6"
          >
            Where Traditions <br />
            <span className="italic text-gold-light">Meet Timeless Art</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans font-light text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto"
          >
            Crafting cinematic wedding stories rooted in South Indian elegance and love.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-sm hover:bg-gold-dark transition-colors"
            >
              Explore Stories <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Moments */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
              Featured Work
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-5xl text-foreground">
              Wedding Moments
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMoments.map((moment, i) => (
              <motion.div
                key={moment.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-sm aspect-[3/4]"
              >
                <img
                  src={moment.img}
                  alt={moment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/70 mb-1">
                    {moment.subtitle}
                  </p>
                  <h3 className="font-serif text-xl text-primary-foreground">{moment.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-24 px-6 bg-secondary">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
              Cinematic Films
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-5xl text-foreground">
              Video Showcase
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="relative aspect-video rounded-sm overflow-hidden bg-foreground/5"
              >
                {playingVideo === i ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0`}
                    title={video.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                      <button
                        onClick={() => setPlayingVideo(i)}
                        className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                        aria-label="Play video"
                      >
                        <Play size={24} className="text-primary-foreground ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <p className="font-serif text-sm text-primary-foreground">{video.title}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
              Love Notes
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-5xl text-foreground">
              What Couples Say
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="bg-card p-8 rounded-sm border border-border"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-sans font-light text-foreground/80 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-serif text-sm text-foreground">{t.name}</p>
                  <p className="font-sans text-xs text-muted-foreground">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-secondary text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto max-w-2xl"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Let's Create Your Story
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="font-sans font-light text-muted-foreground mb-10">
            Every love story is unique. Let us weave yours into a timeless visual narrative.
          </motion.p>
          <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-sm hover:bg-gold-dark transition-colors"
            >
              Explore Stories
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-foreground/20 text-foreground font-sans text-sm tracking-widest uppercase rounded-sm hover:bg-foreground/5 transition-colors"
            >
              Book Consultation
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
