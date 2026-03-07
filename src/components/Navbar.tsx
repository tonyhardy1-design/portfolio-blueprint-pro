import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Work", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-6 px-6">
        <Link to="/" className="font-display text-lg text-foreground leading-[1.15]">
          Tony Hardy
        </Link>

        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`font-body text-[11px] tracking-[0.15em] uppercase transition-opacity duration-300 ${
                  location.pathname === item.path || location.pathname.startsWith(item.path + "/")
                    ? "text-foreground opacity-100"
                    : "text-muted-foreground opacity-60 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
