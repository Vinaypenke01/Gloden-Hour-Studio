import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "exit">("logo");

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("exit"), 2200);
    const timer2 = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
      >
        {/* Decorative line top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-16 h-px bg-primary mb-8 origin-center"
        />

        {/* Logo text */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-3"
          >
            Photography & Videography
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl font-medium tracking-wide"
          >
            <span className="text-primary">Aura</span>
            <span className="text-foreground"> Studios</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4"
          >
            Timeless Wedding Stories
          </motion.p>
        </div>

        {/* Decorative line bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-16 h-px bg-primary mt-8 origin-center"
        />

        {/* Loading shimmer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 1.5, delay: 1, repeat: 1, ease: "easeInOut" }}
          className="mt-12 w-8 h-px bg-primary"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
