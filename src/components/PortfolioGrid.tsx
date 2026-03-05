import { Link } from "react-router-dom";
import bwPortrait1 from "@/assets/bw-portrait-1.jpg";
import bwStreet1 from "@/assets/bw-street-1.jpg";
import bwArch1 from "@/assets/bw-arch-1.jpg";
import bwCandid1 from "@/assets/bw-candid-1.jpg";
import bwUrban1 from "@/assets/bw-urban-1.jpg";
import bwStreet2 from "@/assets/bw-street-2.jpg";

const images = [
  { src: bwPortrait1, alt: "Portrait study in natural light" },
  { src: bwStreet1, alt: "Pedestrian crossing in rain" },
  { src: bwArch1, alt: "Architectural lines and shadow" },
  { src: bwCandid1, alt: "Café scene, candid moment" },
  { src: bwUrban1, alt: "Bridge at dawn, urban landscape" },
  { src: bwStreet2, alt: "Child on a quiet street" },
];

const PortfolioGrid = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="container mx-auto">
        <div className="mb-16">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-3">Selected work</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground">Recent photographs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {images.map((item, i) => (
            <div key={i} className="group">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link
            to="/portfolio"
            className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground border-b border-muted-foreground/30 pb-1 hover:text-foreground hover:border-foreground transition-all duration-300"
          >
            View all work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
