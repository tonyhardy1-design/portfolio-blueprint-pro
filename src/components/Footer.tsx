import { Link } from "react-router-dom";
import MagneticWrap from "./MagneticWrap";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <Link to="/" className="font-display text-xl text-foreground">
          Tony Hardy
        </Link>

        <div className="flex items-center gap-10">
          <MagneticWrap strength={0.3}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              Instagram
            </a>
          </MagneticWrap>
          <MagneticWrap strength={0.3}>
            <a href="mailto:tonyhardy1@hotmail.com" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              Email
            </a>
          </MagneticWrap>
        </div>

        <p className="font-body text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Tony Hardy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
