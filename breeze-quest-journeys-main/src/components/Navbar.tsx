import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "About Us", path: "/about" },
    { name: "Reviews", path: "/reviews" },
    { name: "Recommendations", path: "/recommendations" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-primary-foreground">
            <Compass className="w-8 h-8" />
            <span className="text-2xl font-bold">Breeze Quest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-primary-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="secondary" asChild>
              <Link to="/contact">Plan Your Trip</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block py-2 text-primary-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="secondary" className="w-full mt-2" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Plan Your Trip
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
