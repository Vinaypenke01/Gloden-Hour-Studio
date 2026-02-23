import { motion } from "framer-motion";
import { useState } from "react";
import { Instagram, Youtube, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

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
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl md:text-6xl text-foreground mb-6"
          >
            Let's Talk
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-sans font-light text-muted-foreground max-w-xl mx-auto"
          >
            Ready to create something beautiful? Send us a message and we'll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Form */}
            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "you@email.com" },
                { name: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
              ].map((field, i) => (
                <motion.div key={field.name} variants={fadeUp} custom={i}>
                  <label className="block font-sans text-sm text-foreground/70 mb-2 tracking-wide">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm font-sans font-light text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </motion.div>
              ))}
              <motion.div variants={fadeUp} custom={3}>
                <label className="block font-sans text-sm text-foreground/70 mb-2 tracking-wide">Message</label>
                <textarea
                  placeholder="Tell us about your event..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm font-sans font-light text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </motion.div>
              <motion.button
                variants={fadeUp}
                custom={4}
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase rounded-sm hover:bg-gold-dark transition-colors"
              >
                Send Message <Send size={16} />
              </motion.button>
            </motion.form>

            {/* Map & Socials */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} custom={0} className="aspect-[4/3] rounded-sm overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.0684380563607!3d13.04798294575498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aura Studios Location"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={1}>
                <h3 className="font-serif text-lg text-foreground mb-4">Follow Our Work</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-primary transition-colors font-sans text-sm"
                  >
                    <Instagram size={18} /> Instagram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm text-muted-foreground hover:text-foreground hover:border-primary transition-colors font-sans text-sm"
                  >
                    <Youtube size={18} /> YouTube
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
