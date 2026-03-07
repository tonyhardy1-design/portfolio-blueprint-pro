import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import GalleryGrid from "@/components/GalleryGrid";
import southbank from "@/assets/bw-portrait-1.jpg";
import piccadilly from "@/assets/bw-arch-1.jpg";
import transit from "@/assets/3-DSC02082.jpg";
import lisbon from "@/assets/4-DSC00283.jpg";
import frequency from "@/assets/13-DSC02594.jpg";
import theCity from "@/assets/14-DSC00891.jpg";

const images = [
  { src: southbank,  alt: "Skateboarder at the Southbank undercroft",        title: "Southbank"  },
  { src: piccadilly, alt: "Crowd moving past red phone boxes, Piccadilly",    title: "Piccadilly" },
  { src: transit,    alt: "Figures seen through a passing train window",       title: "Transit"    },
  { src: lisbon,     alt: "Man in yellow jacket, building reflected in a van", title: "Reflection" },
  { src: frequency,  alt: "Woman with headphones facing a large billboard",    title: "Frequency"  },
  { src: theCity,    alt: "Man walking through the City of London, reflected in glass panels", title: "The City" },
];

const StreetPhotography = () => {
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
              Street Photography
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-md">
              People, movement, and the unexpected moments cities offer.
            </p>
          </div>

          <GalleryGrid images={images} />
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default StreetPhotography;
