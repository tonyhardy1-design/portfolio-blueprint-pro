import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useScrollVelocitySkew } from "@/hooks/useScrollVelocity";
import bwPortrait1 from "@/assets/bw-portrait-1.jpg";
import bwStreet1 from "@/assets/bw-street-1.jpg";
import bwArch1 from "@/assets/bw-arch-1.jpg";
import bwCandid1 from "@/assets/bw-candid-1.jpg";
import bwUrban1 from "@/assets/bw-urban-1.jpg";
import bwStreet2 from "@/assets/bw-street-2.jpg";
import MagneticWrap from "./MagneticWrap";

const galleries = [
  { src: bwPortrait1, title: "Faces of Time", category: "Portrait" },
  { src: bwStreet1, title: "Crossings", category: "Street" },
  { src: bwArch1, title: "Ascent", category: "Architecture" },
  { src: bwCandid1, title: "Café Noir", category: "Street Portrait" },
  { src: bwUrban1, title: "Dawn Bridge", category: "Urban" },
  { src: bwStreet2, title: "Innocence", category: "Street" },
];

const ease = [0.76, 0, 0.24, 1] as [number, number, number, number];

const CursorTooltip = ({ title, category }: { title: string; category: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 25 });
  const springY = useSpring(y, { stiffness: 300, damping: 25 });
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left + 16);
    y.set(e.clientY - rect.top + 16);
  };

  return (
    <div
      ref={containerRef}
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

const PortfolioGrid = () => {
  const skew = useScrollVelocitySkew(2);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <p className="font-body text-sm tracking-[0.35em] uppercase text-muted-foreground mb-4">Selected Work</p>
          <h2 className="font-display text-6xl md:text-8xl lg:text-[9rem] text-foreground leading-[0.85] -ml-1 md:-ml-3">
            Recent<br />
            <span className="italic text-muted-foreground">Work</span>
          </h2>
        </motion.div>

        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {galleries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
              style={{ skewY: skew }}
              className="break-inside-avoid relative overflow-hidden cursor-pointer group"
            >
              <img
                src={item.src}
                alt={`${item.title} — ${item.category} black and white photography by Tony Hardy`}
                className="w-full object-cover transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-110"
                loading="lazy"
              />
              <CursorTooltip title={item.title} category={item.category} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <MagneticWrap strength={0.2}>
            <Link
              to="/portfolio"
              className="inline-block border border-border text-muted-foreground px-10 py-4 font-body text-sm tracking-widest uppercase hover:border-foreground hover:text-foreground transition-all duration-500"
            >
              View All Work
            </Link>
          </MagneticWrap>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
