import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20 md:py-32 px-6 border-t border-border">
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 leading-[1.2]">
          Interested in working together?
        </h2>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
          Portrait sessions, fine art prints, or a commissioned project — I'd love to hear from you.
        </p>
        <Link
          to="/contact"
          className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground border-b border-muted-foreground/30 pb-1 hover:text-foreground hover:border-foreground transition-all duration-300"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;
