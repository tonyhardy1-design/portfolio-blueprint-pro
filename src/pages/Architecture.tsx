import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import GalleryGrid from "@/components/GalleryGrid";
import colonnade from "@/assets/1-DSCF1193.jpg";
import eye from "@/assets/2-DSC02159.jpg";
import passage from "@/assets/9-DSCF7477.jpg";
import barbican from "@/assets/10-DSC06528.jpg";
import cathedral from "@/assets/11-DSC06524.jpg";
import fortress from "@/assets/12-DSCF5230.jpg";

const images = [
  { src: colonnade, alt: "Figure walking through a colonnaded arcade",           title: "Colonnade" },
  { src: eye,       alt: "Top of the London Eye rising into a clear sky",         title: "Eye"       },
  { src: passage,   alt: "Dock cranes silhouetted with a plane overhead",         title: "Passage"   },
  { src: barbican,  alt: "Barbican tower at dusk framed by trees",                title: "Barbican"  },
  { src: cathedral, alt: "St Paul's Cathedral dome at golden hour",               title: "Cathedral" },
  { src: fortress,  alt: "Stone fortress on a cliff seen through a window frame", title: "Fortress"  },
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

          <GalleryGrid images={images} />
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Architecture;
