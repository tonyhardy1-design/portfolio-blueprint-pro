import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import bwArch1 from "@/assets/bw-arch-1.jpg";
import bwUrban1 from "@/assets/bw-urban-1.jpg";

const images = [
  { src: bwArch1, alt: "Architectural lines and shadow", title: "Ascent" },
  { src: bwUrban1, alt: "Bridge at dawn", title: "Dawn Bridge" },
];

const Architecture = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="py-16 md:py-24 mb-8">
            <Link
              to="/portfolio"
              className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground opacity-60 hover:opacity-100 transition-opacity duration-300 inline-block mb-6"
            >
              ← Work
            </Link>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-3">
              Architecture
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-md">
              Form, structure, and the geometry of built space.
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

export default Architecture;
