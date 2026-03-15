import { Link } from "react-router-dom";
import RevealOnScroll from "@/components/RevealOnScroll";

const AboutTeaser = () => {
  return (
    <section className="py-24 md:py-36 px-6 border-t border-border">
      <div className="container mx-auto">
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-10">
              About
            </p>

            <blockquote
              className="quote-text text-foreground leading-[1.22] mb-10"
              style={{
                fontFamily: "'EB Garamond', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              "To record things as they are, before they disappear or pass unnoticed."
            </blockquote>

            <p className="font-body text-sm text-muted-foreground leading-[1.85] max-w-md mb-10">
              I am Tony Hardy. I photograph the built environment and the people moving through it.
              Ordinary scenes, quiet details, and the brief intersections between place, light, and daily life.
            </p>

            <Link
              to="/about"
              className="font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground pb-px border-b border-muted-foreground/25 hover:text-accent hover:border-accent transition-all duration-300"
            >
              More about Tony →
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default AboutTeaser;
