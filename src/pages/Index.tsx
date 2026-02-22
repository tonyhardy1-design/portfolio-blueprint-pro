import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import AboutTeaser from "@/components/AboutTeaser";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PortfolioGrid />
      <AboutTeaser />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default Index;
