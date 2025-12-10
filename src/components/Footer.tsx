import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const companyLinks = [
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Quality", href: "/quality" },
  ];

  const productLinks = [
    { name: "Sodium Silicate Liquid", href: "/products" },
    { name: "Sodium Silicate Powder", href: "/products" },
    { name: "Metasilicate Pentahydrate", href: "/products" },
    { name: "Metasilicate Nonahydrate", href: "/products" },
    { name: "Sodium Orthosilicate", href: "/products" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl">ANKIT</span>
                <span className="block text-xs text-primary tracking-widest uppercase">Silicate</span>
              </div>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6">
              Established in 2018 in Morbi, Gujarat, Ankit Silicate manufactures high-quality Sodium and Potassium Silicates for industries like detergent, ceramic, foundry, and construction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-xl mb-6">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product.name}>
                  <Link to={product.href} className="text-background/70 hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-xl mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-background/70">
                  Opposite CNG Pump, Jetpar Road, Bela Village, Morbi - 363642, Gujarat, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+919825218329" className="text-background/70 hover:text-primary transition-colors">
                  +91 98252 18329
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:export@ankitsilicate.com" className="text-background/70 hover:text-primary transition-colors">
                  export@ankitsilicate.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
                <Button className="btn-primary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © 2024 Ankit Silicate. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/about" className="text-background/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-background/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;