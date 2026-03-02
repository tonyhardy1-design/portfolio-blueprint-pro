import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { useScrollVelocitySkew } from "@/hooks/useScrollVelocity";
import bwPortrait1 from "@/assets/bw-portrait-1.jpg";
import bwStreet1 from "@/assets/bw-street-1.jpg";
import bwArch1 from "@/assets/bw-arch-1.jpg";
import bwCandid1 from "@/assets/bw-candid-1.jpg";
import bwUrban1 from "@/assets/bw-urban-1.jpg";
import bwStreet2 from "@/assets/bw-street-2.jpg";

const galleries = [
  { src: bwPortrait1, title: "Faces of Time", category: "Portrait" },
  { src: bwStreet1, title: "Crossings", category: "Street" },
  { src: bwArch1, title: "Ascent", category: "Architecture" },
  { src: bwCandid1, title: "Café Noir", category: "Street Portrait" },
  { src: bwUrban1, title: "Dawn Bridge", category: "Urban" },
  { src: bwStreet2, title: "Innocence", category: "Street" },
];

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const CursorLabel = ({ title, category }: { title: string; category: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 25 });
  const springY = useSpring(y, { stiffness: 300, damping: 25 });
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left + 16);
    y.set(e.clientY - rect.top + 16);
  };

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-10"
      onMouseMove={handleMove}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <motion.div
          className="absolute pointer-events-none px-3 py-1.5 bg-foreground text-background font-body text-xs tracking-widest uppercase whitespace-nowrap"
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {category} · {title}
        </motion.div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const skew = useScrollVelocitySkew(2);

  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-20"
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">Portfolio</p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] text-foreground leading-[0.85] -ml-1 md:-ml-3">
              The<br />
              <span className="italic text-muted-foreground">Work</span>
            </h1>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease }}
                style={{ skewY: skew }}
                className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={`${item.title} — ${item.category} black and white photography`}
                  className="w-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
                  loading="lazy"
                />
                <CursorLabel title={item.title} category={item.category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Portfolio;
