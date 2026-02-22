import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-display text-xl text-foreground">
          Tony Hardy
        </Link>

        <div className="flex items-center gap-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Instagram
          </a>
          <a href="mailto:tonyhardy1@hotmail.com" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Email
          </a>
        </div>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tony Hardy Photography
        </p>
      </div>
    </footer>
  );
};

export default Footer;
