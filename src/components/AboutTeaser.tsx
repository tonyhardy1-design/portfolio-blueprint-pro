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
            I photograph what most people walk past.
          </h2>
          <div className="space-y-4">
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
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
