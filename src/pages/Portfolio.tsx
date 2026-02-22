import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const galleries = [
  { src: portfolio1, title: "Sarah & James", location: "Tuscany, Italy", category: "Elopement" },
  { src: portfolio2, title: "Maya & Leo", location: "Brooklyn, NY", category: "Wedding" },
  { src: portfolio3, title: "Clara & Noah", location: "Blue Ridge Mountains", category: "Elopement" },
  { src: portfolio4, title: "Amara & David", location: "Savannah, GA", category: "Wedding" },
  { src: portfolio5, title: "Lily & Ben", location: "Austin, TX", category: "Wedding" },
  { src: portfolio6, title: "Emma & Ryan", location: "Big Sur, CA", category: "Elopement" },
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
            <p className="font-body text-sm tracking-[0.35em] uppercase text-primary mb-4">Portfolio</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">Love Stories</h1>
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
                  alt={`${item.title} ${item.category.toLowerCase()} photography in ${item.location}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-end">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                    <p className="font-body text-xs tracking-widest uppercase text-primary mb-1">{item.category}</p>
                    <h3 className="font-display text-xl text-foreground">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{item.location}</p>
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
