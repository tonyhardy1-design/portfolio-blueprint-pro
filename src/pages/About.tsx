import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import aboutPhoto from "@/assets/about-photographer.jpg";

const About = () => {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-sm tracking-[0.35em] uppercase text-primary mb-4">About</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">The Photographer</h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={aboutPhoto}
                alt="Elena Voss with camera during golden hour"
                className="w-full object-cover aspect-[3/4]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl text-foreground">
                I believe in real moments over perfect poses
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Based in Portland, Oregon, I've spent the last 12 years documenting weddings 
                and elopements across the world. My approach is simple: be invisible, be ready, 
                and let your story unfold naturally.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                I fell in love with photography through photojournalism, and that editorial eye 
                is woven into everything I create. I look for the in-between moments — the nervous 
                laugh before the walk down the aisle, the tear your dad tried to hide, the dance 
                floor chaos at midnight.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                When I'm not behind the camera, you'll find me hiking with my dog Luna, 
                developing film in my home darkroom, or planning my next adventure.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <p className="font-display text-3xl text-primary">350+</p>
                  <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">Weddings</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-primary">12</p>
                  <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">Years</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-primary">4</p>
                  <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">Continents</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default About;
