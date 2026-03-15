import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import { reflectionsImages } from "@/data/reflections";

const Reflections = () => {
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
              Reflections
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-md">
              Surfaces, glass, and the doubled world they reveal.
            </p>
          </div>

          <GalleryGrid images={reflectionsImages} />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Reflections;
