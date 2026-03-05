import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
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
              className="w-full max-w-md object-cover aspect-[3/4]"
            />
          </div>

          <div className="max-w-xl space-y-6">
            <p className="font-body text-sm text-foreground leading-[1.8]">
              I'm Tony Hardy — a photographer who works exclusively in black and white. I believe that removing colour strips a scene down to its essence: composition, light, texture, and emotion become everything.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-[1.8]">
              My work spans street photography, portraiture, architecture, and urban landscapes. I'm drawn to the tension between stillness and movement, the play of hard shadows and soft light, and the quiet stories that unfold on everyday streets.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-[1.8]">
              Whether I'm shooting candid moments on a rainy city corner or a carefully lit portrait in the studio, the goal is always the same: to create images with permanence — photographs that feel as relevant in fifty years as they do today.
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
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default About;
