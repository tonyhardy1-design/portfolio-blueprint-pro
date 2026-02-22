import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const galleries = [
  { src: portfolio1, title: "Sarah & James", location: "Tuscany, Italy", aspect: "tall" },
  { src: portfolio2, title: "Maya & Leo", location: "Brooklyn, NY", aspect: "wide" },
  { src: portfolio3, title: "Clara & Noah", location: "Blue Ridge Mountains", aspect: "tall" },
  { src: portfolio4, title: "Amara & David", location: "Savannah, GA", aspect: "wide" },
  { src: portfolio5, title: "Lily & Ben", location: "Austin, TX", aspect: "tall" },
  { src: portfolio6, title: "Emma & Ryan", location: "Big Sur, CA", aspect: "wide" },
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
          <p className="font-body text-sm tracking-[0.35em] uppercase text-primary mb-4">Selected Work</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">Recent Stories</h2>
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
                alt={`${item.title} wedding photography in ${item.location}`}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-display text-2xl text-foreground mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground tracking-widest uppercase">{item.location}</p>
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
            className="inline-block border border-border text-muted-foreground px-10 py-4 font-body text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-500"
          >
            View All Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
