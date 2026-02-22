import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="font-display text-xl text-foreground">
          Elena Voss
        </Link>

        <div className="flex items-center gap-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
            Instagram
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
            Pinterest
          </a>
          <a href="mailto:hello@elenavoss.com" className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors">
            Email
          </a>
        </div>

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Elena Voss Photography
        </p>
      </div>
    </footer>
  );
};

export default Footer;
