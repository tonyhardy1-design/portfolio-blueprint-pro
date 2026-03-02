import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutPhoto from "@/assets/about-tony.jpg";
import MagneticWrap from "./MagneticWrap";

const snappy = [0.76, 0, 0.24, 1] as const;

const AboutTeaser = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: snappy as unknown as number[] }}
          className="overflow-hidden"
        >
          <img
            src={aboutPhoto}
            alt="Tony Hardy, black and white photographer"
            className="w-full max-w-md mx-auto object-cover aspect-[3/4]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: snappy as unknown as number[] }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4">The Photographer</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6 leading-[0.9]">
            Tony<br /><span className="italic text-muted-foreground">Hardy</span>
          </h2>
          <p className="font-body text-secondary-foreground leading-relaxed mb-4">
            I shoot exclusively in black and white. No colour, no distractions —
            just light, shadow, and the raw essence of a moment.
          </p>
          <p className="font-body text-secondary-foreground leading-relaxed mb-10">
            From the geometry of city streets to the intimacy of a portrait session,
            every frame is a study in contrast and emotion.
          </p>
          <MagneticWrap strength={0.2} className="inline-block">
            <Link
              to="/about"
              className="inline-block text-foreground font-body text-sm tracking-widest uppercase border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-all duration-300"
            >
              More About Me
            </Link>
          </MagneticWrap>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeaser;
