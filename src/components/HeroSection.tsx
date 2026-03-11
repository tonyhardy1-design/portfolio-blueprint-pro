import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const heroModules = import.meta.glob('../assets/hero/*.{jpg,jpeg,png,webp}', { eager: true });
const heroSrcs: string[] = Object.values(heroModules).map(
  (mod) => (mod as { default: string }).default
);

const HOLD_MS = 7000;
const FADE_MS = 2000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (heroSrcs.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % heroSrcs.length);
    }, HOLD_MS);
    return () => clearInterval(timer);
  }, []);

  if (heroSrcs.length === 0) return null;

  return (
    <section className="pt-24">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] max-w-2xl mb-6">
          Quiet observations<br />
          <span className="italic text-muted-foreground">in passing light</span>
        </h1>
        <p className="font-body text-sm text-muted-foreground max-w-md leading-relaxed">
          A collection by Tony Hardy, including street, architecture, daily life and the moments between moments.
        </p>
      </div>

      <div className="w-full relative h-[60vh] md:h-[75vh] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={current}
            src={heroSrcs[current]}
            alt="Portfolio photograph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
