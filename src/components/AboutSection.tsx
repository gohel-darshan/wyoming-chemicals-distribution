import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "State-of-the-art manufacturing facilities",
  "Industry-specific formulation expertise",
  "Serving global industrial markets",
  "Rigorous quality assurance at every stage",
  "Flexible packaging and logistics solutions",
];

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="section-padding relative"
      style={{
        backgroundImage: 'url("/background-image.png")',
        backgroundSize: "300px 300px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=600&auto=format&fit=crop"
                alt="Manufacturing Facility"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-2xl -z-0" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full -z-0" />
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="section-subtitle">About Us</span>
              <h2 className="section-title">
                Trusted Manufacturer of Sodium Silicates
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">Ankit Silicate</strong> specializes in manufacturing a comprehensive range of{" "}
              <strong className="text-foreground">Sodium Silicates</strong>,{" "}
              <strong className="text-foreground">Specialty Silicates</strong>, and{" "}
              <strong className="text-foreground">Metasilicates</strong>.
              Built on a strong foundation in India with an expanding global presence, we
              deliver high-performance chemical solutions trusted across industries worldwide.
            </p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/about">
              <Button className="btn-primary group">
                Discover More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
