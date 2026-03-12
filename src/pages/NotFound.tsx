import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-24 px-6">
        <div className="container mx-auto flex flex-col items-center justify-center py-32 md:py-48 text-center">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground mb-6">
            404
          </p>
          <h1
            className="text-foreground leading-[1.06] mb-6"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
            }}
          >
            Page not found
          </h1>
          <p className="font-body text-sm text-muted-foreground mb-10">
            The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="font-body text-[11px] tracking-[0.18em] uppercase text-muted-foreground pb-px border-b border-muted-foreground/25 hover:text-accent hover:border-accent transition-all duration-300"
          >
            Return home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default NotFound;
