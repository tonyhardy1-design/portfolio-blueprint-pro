import heroImage from "@/assets/hero-bw.jpg";

const HeroSection = () => {
  return (
    <section className="pt-24">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] max-w-2xl mb-6">
          Quiet observations<br />
          <span className="italic text-muted-foreground">in passing light</span>
        </h1>
        <p className="font-body text-sm text-muted-foreground max-w-md leading-relaxed">
          Street photography by Tony Hardy. A collection of studies of urban life, architecture, and the moments between moments.
        </p>
      </div>

      <div className="w-full">
        <img
          src={heroImage}
          alt="Street scene in black and white"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
