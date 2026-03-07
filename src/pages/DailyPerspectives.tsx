import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import GalleryGrid from "@/components/GalleryGrid";
import sunday from "@/assets/5-DSCF9081.jpg";
import franks from "@/assets/6-DSCF9079.jpg";
import patience from "@/assets/7-DSCF8997.jpg";
import firstLight from "@/assets/15-DSCF2527.jpg";
import pier from "@/assets/16-DSCF1567.jpg";

const images = [
  { src: sunday,     alt: "Candy floss stall on the Southbank on a summer evening", title: "Sunday"      },
  { src: franks,     alt: "Families eating at Frank's Hot Dogs diner",               title: "Frank's"     },
  { src: patience,   alt: "An older man's hands clasped behind his back",            title: "Patience"    },
  { src: firstLight, alt: "Newborn baby sleeping with a small bow",                  title: "First Light" },
  { src: pier,       alt: "Two people relaxing in deckchairs on Brighton Pier",      title: "Pier"        },
];

const DailyPerspectives = () => {
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
              Daily Perspectives
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-md">
              Quiet observations from ordinary life.
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

export default DailyPerspectives;
