import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import photographerImg from "@/assets/photographer-portrait.jpg";
import weddingCeremony from "@/assets/wedding-ceremony.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const timeline = [
  { year: "2015", title: "The Beginning", desc: "Started as a passionate solo photographer capturing intimate weddings in Chennai." },
  { year: "2017", title: "First Cinematic Film", desc: "Expanded into cinematic videography, blending storytelling with traditional wedding rituals." },
  { year: "2019", title: "Studio Founded", desc: "Aura Studios was born — a full-service wedding photography and videography brand." },
  { year: "2021", title: "500+ Weddings", desc: "Crossed 500 weddings documented across Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh." },
  { year: "2024", title: "Award-Winning", desc: "Recognized as one of the top wedding studios in South India by leading wedding platforms." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-foreground mb-8"
          >
            Rooted in Tradition, <br />
            <span className="italic">Inspired by Love</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <img
                src={weddingCeremony}
                alt="South Indian wedding ceremony"
                className="w-full rounded-sm"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h2 variants={fadeUp} custom={0} className="font-serif text-3xl text-foreground">
                Born from the Beauty of South Indian Weddings
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="font-sans font-light text-foreground/70 leading-relaxed">
                Growing up surrounded by the vibrant rituals of Tamil weddings — the sacred fire of the homa, the fragrant jasmine garlands, the rhythmic nadaswaram — we understood that every ceremony carries a story deeper than words.
              </motion.p>
              <motion.p variants={fadeUp} custom={2} className="font-sans font-light text-foreground/70 leading-relaxed">
                Aura Studios was founded to preserve these moments with the reverence they deserve, through a lens that honours tradition while embracing modern cinematic artistry.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photographer Profile */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 mb-8"
            >
              <img src={photographerImg} alt="Lead photographer" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            <motion.h3 variants={fadeUp} custom={1} className="font-serif text-2xl text-foreground mb-1">
              Vikram Sundaram
            </motion.h3>
            <motion.p variants={fadeUp} custom={2} className="font-sans text-sm text-primary tracking-widest uppercase mb-6">
              Founder & Lead Photographer
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="font-sans font-light text-foreground/70 max-w-xl leading-relaxed">
              With over a decade of experience and an innate understanding of South Indian cultural nuances, Vikram brings a quiet artistry to every frame — capturing the unseen emotions that make weddings truly memorable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-3">
              Our Journey
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl md:text-4xl text-foreground">
              A Decade of Stories
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className={`relative flex items-start mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-16 md:pl-0`}>
                  <span className="font-serif text-primary text-2xl font-semibold">{item.year}</span>
                  <h3 className="font-serif text-lg text-foreground mt-1">{item.title}</h3>
                  <p className="font-sans font-light text-sm text-foreground/70 mt-2">{item.desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background mt-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
