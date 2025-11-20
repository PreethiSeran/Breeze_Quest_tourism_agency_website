import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Compass } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-6 h-6" />
              <h3 className="text-xl font-bold">Breeze Quest</h3>
            </div>
            <p className="text-sm opacity-90">
              Your trusted travel companion for unforgettable journeys across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/destinations" className="block text-sm hover:text-accent transition-colors">
                Destinations
              </Link>
              <Link to="/about" className="block text-sm hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/reviews" className="block text-sm hover:text-accent transition-colors">
                Reviews
              </Link>
              <Link to="/recommendations" className="block text-sm hover:text-accent transition-colors">
                Recommendations
              </Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-4">Popular Destinations</h4>
            <div className="space-y-2">
              <Link to="/destination/munnar" className="block text-sm hover:text-accent transition-colors">
                Munnar
              </Link>
              <Link to="/destination/goa" className="block text-sm hover:text-accent transition-colors">
                Goa
              </Link>
              <Link to="/destination/jaipur" className="block text-sm hover:text-accent transition-colors">
                Jaipur
              </Link>
              <Link to="/destination/andaman" className="block text-sm hover:text-accent transition-colors">
                Andaman
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:breezequest.travel@gmail.com" className="hover:text-accent">
                  breezequest.travel@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919876543210" className="hover:text-accent">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Breeze Quest Travel Agency<br />Chennai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Breeze Quest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
