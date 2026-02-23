import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import weddingImg from "@/assets/wedding-ceremony.jpg";
import preWeddingImg from "@/assets/pre-wedding.jpg";
import videographyImg from "@/assets/videography.jpg";
import eventImg from "@/assets/event-coverage.jpg";
import droneImg from "@/assets/drone-shoots.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const services = [
  {
    img: weddingImg,
    title: "Wedding Photography",
    desc: "Capturing every sacred ritual, candid emotion, and joyful celebration of your special day with artistic precision.",
    price: "Starting from ₹75,000",
  },
  {
    img: preWeddingImg,
    title: "Pre-Wedding Shoots",
    desc: "Romantic golden-hour sessions in beautiful South Indian locations — temples, beaches, and heritage palaces.",
    price: "Starting from ₹35,000",
  },
  {
    img: videographyImg,
    title: "Cinematic Videography",
    desc: "Film-quality wedding documentaries with professional editing, colour grading, and emotional storytelling.",
    price: "Starting from ₹1,00,000",
  },
  {
    img: eventImg,
    title: "Event Coverage",
    desc: "Complete coverage of reception, sangeet, haldi, mehendi, and all pre and post wedding ceremonies.",
    price: "Starting from ₹50,000",
  },
  {
    img: droneImg,
    title: "Drone Shoots",
    desc: "Breathtaking aerial perspectives of your wedding venue, procession, and grand celebrations.",
    price: "Starting from ₹25,000",
  },
];

const Services = () => {
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
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-foreground mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-sans font-light text-muted-foreground max-w-xl mx-auto"
          >
            Tailored photography and videography packages designed to honour every moment of your celebration.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group bg-card border border-border rounded-sm overflow-hidden hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3>
                  <p className="font-sans font-light text-sm text-foreground/70 leading-relaxed mb-4">{s.desc}</p>
                  <p className="font-sans text-sm text-primary font-medium tracking-wide">{s.price}</p>
                </div>
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

export default Services;
