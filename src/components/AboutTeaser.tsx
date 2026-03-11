import aboutPhoto from "@/assets/about-tony.jpg";

const AboutTeaser = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <img
            src={aboutPhoto}
            alt="Tony Hardy"
            className="w-full max-w-sm"
          />
        </div>

        <div className="md:pt-12">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-3">About</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-[1.2]">
            I photograph architecture, portraiture, street scenes and everyday moments.
          </h2>
          <div className="space-y-4">
            <p className="font-body text-sm text-muted-foreground leading-[1.8]">
              I am Tony Hardy. My work focuses on the built environment and the people moving through it, often in situations that are easily overlooked. I am interested in ordinary scenes, quiet details and the brief intersections between place, light and daily life.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-[1.8]">
              I work in both colour and black and white, choosing whichever best suits the subject. Sometimes that is the clarity and restraint of architectural form. Other times it is the immediacy of a street scene or a portrait caught without performance.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-[1.8]">
              The aim is simple. To record things as they are, before they disappear or pass unnoticed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
