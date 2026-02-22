import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
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

const Portfolio = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-sm tracking-[0.35em] uppercase text-muted-foreground mb-4">Portfolio</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">The Work</h1>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="break-inside-avoid group relative overflow-hidden cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={`${item.title} — ${item.category} black and white photography`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-500 flex items-end">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">{item.category}</p>
                    <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                  </div>
                </div>
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
