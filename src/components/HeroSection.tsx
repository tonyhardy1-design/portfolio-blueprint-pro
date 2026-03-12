import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const heroModules = import.meta.glob(
  '../assets/hero/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);
const heroSrcs: string[] = Object.values(heroModules).map(
  (mod) => (mod as { default: string }).default
);

const HOLD_MS = 7000;
const FADE_MS = 1800;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(performance.now());
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (heroSrcs.length === 0) return;
    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      setProgress(Math.min(elapsed / HOLD_MS, 1));
      if (elapsed >= HOLD_MS) {
        setCurrent((i) => (i + 1) % heroSrcs.length);
        startRef.current = now;
      }
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  if (heroSrcs.length === 0) return null;

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh" }}>
      {/* Crossfading images */}
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

      {/* Gradient scrim — anchors text without obscuring the image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.16) 40%, transparent 68%)",
        }}
      />

      {/* Text — bottom left, editorial weight */}
      <div className="absolute bottom-0 left-0 right-0 pb-14 md:pb-20">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white leading-[1.04]"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(2.8rem, 7.5vw, 7.5rem)",
            }}
          >
            Quiet observations
            <br />
            <em style={{ fontStyle: "italic", opacity: 0.75 }}>in passing light</em>
          </motion.h1>
        </div>
      </div>

      {/* Slide counter — top right, below nav */}
      <div className="absolute top-0 right-0 pt-20 pr-8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-body text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          {String(current + 1).padStart(2, "0")}&thinsp;/&thinsp;{String(heroSrcs.length).padStart(2, "0")}
        </motion.span>
      </div>

      {/* Progress bar — 1px, bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.12)" }}>
        <div
          className="h-full"
          style={{
            width: `${progress * 100}%`,
            background: "rgba(255,255,255,0.5)",
            transition: "none",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
