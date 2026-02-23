import { Link } from "react-router-dom";
import { Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">
              <span className="text-primary">Aura</span> Studios
            </h3>
            <p className="font-sans font-light text-primary-foreground/70 leading-relaxed text-sm">
              Crafting timeless wedding stories through the lens of South Indian tradition and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-sans font-light text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 text-sm font-sans font-light text-primary-foreground/70">
              <p className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 98765 43210</p>
              <p className="flex items-center gap-2"><Mail size={14} className="text-primary" /> hello@aurastudios.in</p>
              <p className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Chennai, Tamil Nadu</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-sans font-light text-xs text-primary-foreground/50">
            © 2026 Aura Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
