import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroImage from "@/assets/hero-bw.jpg";
import MagneticWrap from "./MagneticWrap";

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const fontWeight = useTransform(scrollYProgress, [0, 1], [600, 300]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "hsl(var(--deep-black))" }}
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="Dramatic black and white street scene with lone figure in rain"
          className="h-full w-full object-cover scale-110"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center blend-difference">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease }}
          className="font-body text-xs tracking-[0.5em] uppercase text-primary mb-8"
        >
          Black & White Photography
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease }}
          className="text-primary leading-[0.9] max-w-5xl"
        >
          <motion.span
            className="font-body text-5xl md:text-7xl lg:text-[8rem] font-light block"
            style={{ fontWeight }}
          >
            Seeing in
          </motion.span>
          <span className="font-display italic text-6xl md:text-8xl lg:text-[11rem] -mt-2 block">
            monochrome
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease }}
          className="font-body text-primary/60 text-base md:text-lg mt-8 max-w-lg"
        >
          Street · Portrait · Architecture · Life stripped to light and shadow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease }}
          className="mt-12"
        >
          <MagneticWrap strength={0.25}>
            <Link
              to="/portfolio"
              className="inline-block border border-primary text-primary px-10 py-4 font-body text-sm tracking-widest uppercase hover:bg-primary hover:text-background transition-all duration-500"
            >
              View Portfolio
            </Link>
          </MagneticWrap>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-transparent via-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
