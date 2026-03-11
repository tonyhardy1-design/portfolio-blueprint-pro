import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import heroImage from "@/assets/hero-bw.jpg";
import archImg from "@/assets/architecture/2-DSC02159.jpg";
import streetImg from "@/assets/street/3-DSC02082.jpg";
import dailyImg from "@/assets/daily/7-DSCF8997.jpg";
import stPaulsImg from "@/assets/architecture/11-DSC06524.jpg";

const slides = [
  { src: heroImage,   position: "object-bottom" },
  { src: archImg,     position: "object-center" },
  { src: streetImg,   position: "object-center" },
  { src: dailyImg,    position: "object-center" },
  { src: stPaulsImg,  position: "object-bottom" },
];

const HOLD_MS = 7000;
const FADE_MS = 2000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, HOLD_MS);
    return () => clearInterval(timer);
  }, []);

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
            src={slides[current].src}
            alt="Portfolio photograph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
            className={`absolute inset-0 w-full h-full object-cover ${slides[current].position}`}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
