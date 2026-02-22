import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="container mx-auto text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.35em] uppercase text-muted-foreground mb-4">Commissions & Prints</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Let's work together
          </h2>
          <p className="font-body text-secondary-foreground leading-relaxed mb-10">
            Whether you're looking for a portrait session, fine art prints, 
            or a commissioned project — I'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-foreground text-background px-12 py-4 font-body text-sm tracking-widest uppercase hover:bg-muted-foreground transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
