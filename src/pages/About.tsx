import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutPhoto from "@/assets/about-tony.jpg";

const About = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="py-16 md:py-24">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">About</h1>
          </div>

          <div className="mb-16">
            <img
              src={aboutPhoto}
              alt="Tony Hardy"
              className="w-full max-w-md"
            />
          </div>

          <div className="max-w-xl space-y-6">
            <p className="font-body text-sm text-foreground leading-[1.8]">
              I photograph architecture, portraiture, street scenes and everyday moments.
            </p>
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

          <div className="flex gap-16 mt-16 pt-8 border-t border-border">
            <div>
              <p className="font-display text-lg text-foreground">Street</p>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-1">Documentary</p>
            </div>
            <div>
              <p className="font-display text-lg text-foreground">Portrait</p>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-1">Studio & Natural</p>
            </div>
            <div>
              <p className="font-display text-lg text-foreground">Urban</p>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-1">Architecture</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
