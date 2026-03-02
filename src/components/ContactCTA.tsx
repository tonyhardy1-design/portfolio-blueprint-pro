import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MagneticWrap from "./MagneticWrap";

const snappy = [0.76, 0, 0.24, 1] as const;

const ContactCTA = () => {
  return (
    <section className="py-32 md:py-40 px-6 bg-secondary relative overflow-hidden">
      <div className="container mx-auto text-center max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: snappy as unknown as number[] }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">Commissions & Prints</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4 leading-[0.9]">
            Let's work
            <span className="italic block text-muted-foreground">together</span>
          </h2>
          <p className="font-body text-secondary-foreground leading-relaxed mt-6 mb-12 max-w-md mx-auto">
            Portrait sessions, fine art prints, or a commissioned project — I'd love to hear from you.
          </p>
          <MagneticWrap strength={0.25}>
            <Link
              to="/contact"
              className="inline-block bg-foreground text-background px-14 py-5 font-body text-sm tracking-widest uppercase hover:bg-muted-foreground transition-all duration-300"
            >
              Get in Touch
            </Link>
          </MagneticWrap>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
