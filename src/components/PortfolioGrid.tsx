import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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

const PortfolioGrid = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.35em] uppercase text-muted-foreground mb-4">Selected Work</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Recent Work</h2>
        </motion.div>

        <div className="columns-1 md:columns-2 gap-4 space-y-4">
          {galleries.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
            >
              <img
                src={item.src}
                alt={`${item.title} — ${item.category} black and white photography by Tony Hardy`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-center translate-y-4 group-hover:translate-y-0">
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">{item.category}</p>
                  <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            to="/portfolio"
            className="inline-block border border-border text-muted-foreground px-10 py-4 font-body text-sm tracking-widest uppercase hover:border-foreground hover:text-foreground transition-all duration-500"
          >
            View All Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
