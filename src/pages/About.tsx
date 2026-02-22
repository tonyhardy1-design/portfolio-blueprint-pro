import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import aboutPhoto from "@/assets/about-tony.jpg";

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
            <p className="font-body text-sm tracking-[0.35em] uppercase text-muted-foreground mb-4">About</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">Tony Hardy</h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={aboutPhoto}
                alt="Tony Hardy with camera, black and white portrait"
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
                The world looks different without colour
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                I'm Tony Hardy — a photographer who works exclusively in black and white. 
                I believe that removing colour strips a scene down to its essence: composition, 
                light, texture, and emotion become everything.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                My work spans street photography, portraiture, architecture, and urban 
                landscapes. I'm drawn to the tension between stillness and movement, 
                the play of hard shadows and soft light, and the quiet stories 
                that unfold on everyday streets.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Whether I'm shooting candid moments on a rainy city corner or a carefully 
                lit portrait in the studio, the goal is always the same: to create images 
                with permanence — photographs that feel as relevant in fifty years as they do today.
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <p className="font-display text-3xl text-foreground">Street</p>
                  <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">Documentary</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-foreground">Portrait</p>
                  <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">Studio & Natural</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-foreground">Urban</p>
                  <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mt-1">Architecture</p>
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
