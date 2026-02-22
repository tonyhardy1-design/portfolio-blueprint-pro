import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutPhoto from "@/assets/about-photographer.jpg";

const AboutTeaser = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          <img
            src={aboutPhoto}
            alt="Elena Voss, documentary wedding photographer"
            className="w-full max-w-md mx-auto object-cover aspect-[3/4]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-body text-sm tracking-[0.35em] uppercase text-primary mb-4">The Photographer</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Hello, I'm Elena
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            I'm a documentary wedding photographer based in the Pacific Northwest. 
            I believe the most powerful images are the ones you didn't plan — the stolen glances, 
            the happy tears, the unguarded laughter.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            With over a decade of experience, I've had the honor of documenting love stories 
            across four continents and countless stunning venues.
          </p>
          <Link
            to="/about"
            className="inline-block text-primary font-body text-sm tracking-widest uppercase border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-all duration-300"
          >
            More About Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeaser;
