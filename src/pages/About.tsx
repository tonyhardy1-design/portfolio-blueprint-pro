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
              I photograph what most people walk past.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-[1.8]">
              I'm Tony Hardy. My work explores the quiet dialogue between urban architecture and the life that moves through it. I am drawn to the moments that often go unnoticed—the fleeting interactions on a street corner or the way light hits a building's facade just before sunset.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-[1.8]">
              I shoot in both colour and black and white, letting the subject dictate the medium. Whether it is highlighting the stark geometry of a structure in monochrome or capturing the vivid atmosphere of a candid street scene in colour, my goal remains the same: to document the overlooked rhythm of the city.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-[1.8]">
              From the stillness of architectural forms to the spontaneity of street photography, every frame is an attempt to pause time and reveal the stories hiding in plain sight.
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
