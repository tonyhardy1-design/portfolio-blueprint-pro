import { Link } from "react-router-dom";
import aboutPhoto from "@/assets/about-tony.jpg";

const AboutTeaser = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <img
            src={aboutPhoto}
            alt="Tony Hardy"
            className="w-full max-w-sm object-cover aspect-[3/4]"
          />
        </div>

        <div className="md:pt-12">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-3">About</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-[1.2]">
            I photograph what most people walk past
          </h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            I work exclusively in black and white. Removing colour strips a scene to its essence — composition, light, texture, and the quiet stories that unfold on everyday streets.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
            From the geometry of city architecture to candid moments in cafés, every frame is a study in contrast and stillness.
          </p>
          <Link
            to="/about"
            className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground border-b border-muted-foreground/30 pb-1 hover:text-foreground hover:border-foreground transition-all duration-300"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
