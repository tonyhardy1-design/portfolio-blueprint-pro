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
          <p className="font-body text-sm tracking-[0.35em] uppercase text-primary mb-4">Let's Create Together</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Ready to tell your story?
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-10">
            I'd love to hear about your vision. Whether it's an intimate elopement or 
            a grand celebration, every love story deserves to be told beautifully.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground px-12 py-4 font-body text-sm tracking-widest uppercase hover:bg-primary/90 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
