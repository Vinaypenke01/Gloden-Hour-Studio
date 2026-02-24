import { motion } from "framer-motion";
import { Instagram, Youtube, Send, Loader2, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
};

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured. Please add credentials to .env file.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          from_phone: data.phone,
          message: data.message,
          to_email: "ngbeam706@gmail.com",
        },
        publicKey
      );

      toast.success("Thank you for reaching out! We'll get back to you soon.");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section with Background */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/src/assets/hero-wedding.jpg')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background/90" />

        <div className="container relative z-10 mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-sm tracking-[0.4em] uppercase text-gold mb-4"
          >
            Connect With Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-white mb-6"
          >
            Let's Capture Your <br /> <span className="text-gold italic">Timeless Moments</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative -mt-20 pb-24 px-6 z-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">

            {/* Form Side - Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-3/5 bg-card/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl"
            >
              <h2 className="font-serif text-3xl mb-8 text-gold">Send an Enquiry</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                    <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Full Name</label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Vikram Singh"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all disabled:opacity-50"
                    />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                  </motion.div>

                  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                    <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Email Address</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="hello@example.com"
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all disabled:opacity-50"
                    />
                    {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                  <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Phone Number</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+91 98765 43210"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all disabled:opacity-50"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}>
                  <label className="block font-sans text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us about your dream wedding..."
                    rows={5}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg font-sans text-sm focus:border-gold focus:ring-1 focus:ring-gold/50 outline-none transition-all resize-none disabled:opacity-50"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
                </motion.div>

                <motion.button
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-white font-sans text-sm font-bold tracking-[0.2em] uppercase rounded-lg hover:bg-gold-dark hover:shadow-lg hover:shadow-gold/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-2/5 space-y-8"
            >
              <div className="bg-card/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl space-y-8">
                <h3 className="font-serif text-2xl text-gold pb-4 border-b border-white/5">Studio Details</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/10 rounded-lg text-gold"><Mail size={20} /></div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                      <p className="font-sans text-sm">hello@aurastudios.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/10 rounded-lg text-gold"><Phone size={20} /></div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                      <p className="font-sans text-sm">+91 999 000 7777</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/10 rounded-lg text-gold"><MapPin size={20} /></div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                      <p className="font-sans text-sm">Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <h4 className="font-serif text-lg text-gold mb-4">Social Presence</h4>
                  <div className="flex gap-4">
                    <a href="#" className="p-3 bg-white/5 hover:bg-gold hover:text-white rounded-full transition-all text-muted-foreground">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white/5 hover:bg-gold hover:text-white rounded-full transition-all text-muted-foreground">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Fragment */}
              <div className="h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.0684380563607!3d13.04798294575498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="opacity-70"
                  title="Aura Studios Location"
                />
              </div>
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


