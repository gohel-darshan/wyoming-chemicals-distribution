import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl">ANKIT</span>
                <span className="block text-xs text-primary tracking-widest uppercase">Silicate</span>
              </div>
            </div>
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
              {["Home", "About Us", "Products", "Services", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-xl mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                "Sodium Silicate Liquid",
                "Sodium Silicate Powder",
                "Metasilicate Pentahydrate",
                "Metasilicate Nonahydrate",
                "Sodium Orthosilicate",
              ].map((product) => (
                <li key={product}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors">
                    {product}
                  </a>
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
                <span className="text-background/70">+91 98252 18329</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-background/70">export@ankitsilicate.com</span>
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
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-primary text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
