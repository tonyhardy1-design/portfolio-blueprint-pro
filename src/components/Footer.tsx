import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <Link to="/" className="font-display text-base text-foreground">
          Tony Hardy
        </Link>

        <div className="flex items-center gap-8">
          <a
            href="https://www.instagram.com/tonyrh85"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-opacity duration-300"
          >
            Instagram
          </a>
          <a
            href="mailto:tonyhardy1@hotmail.com"
            className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-opacity duration-300"
          >
            Email
          </a>
        </div>

        <p className="font-body text-[11px] text-muted-foreground/50">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
