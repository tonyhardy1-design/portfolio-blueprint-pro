import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import bwPortrait1 from "@/assets/bw-portrait-1.jpg";
import bwStreet1 from "@/assets/bw-street-1.jpg";
import bwArch1 from "@/assets/bw-arch-1.jpg";
import bwCandid1 from "@/assets/bw-candid-1.jpg";
import bwUrban1 from "@/assets/bw-urban-1.jpg";
import bwStreet2 from "@/assets/bw-street-2.jpg";
import streetLondonEye from "@/assets/street-london-eye.jpg";

const images = [
  { src: bwPortrait1, alt: "Portrait study in natural light", title: "Faces of Time" },
  { src: streetLondonEye, alt: "London Eye against a clear sky", title: "Observation" },
  { src: bwStreet1, alt: "Pedestrian crossing in rain", title: "Crossings" },
  { src: bwArch1, alt: "Architectural lines and shadow", title: "Ascent" },
  { src: bwCandid1, alt: "Café scene, candid moment", title: "Café Noir" },
  { src: bwUrban1, alt: "Bridge at dawn", title: "Dawn Bridge" },
  { src: bwStreet2, alt: "Child on a quiet street", title: "Innocence" },
];

const Portfolio = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="py-16 md:py-24 mb-8">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">The work</h1>
            <p className="font-body text-sm text-muted-foreground max-w-md">
              A collection of street photography, architecture, and daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {images.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:-translate-y-2"
                    loading="lazy"
                  />
                </div>
                <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-3">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Portfolio;
