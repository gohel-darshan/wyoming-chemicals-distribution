import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    tag: "01 Trusted",
    title: "Global Trust",
    titleAccent: "in Sodium Silicate Excellence",
    description: "Delivering premium silicate solutions trusted by industries worldwide.",
    bgImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "02 Reliable",
    title: "Reliable Silicate Supply",
    titleAccent: "That Keeps Industries Moving",
    description: "We ensure uninterrupted silicate supply, supporting industries with consistent quality and timely delivery.",
    bgImage: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "03 Global",
    title: "Expanding Horizons",
    titleAccent: "with Global Reach",
    description: "Delivering trusted silicate solutions across continents, empowering industries with quality and reliability.",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&auto=format&fit=crop",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Slider Wrapper */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[2px] bg-primary" />
                  <span className="text-white/80 text-sm uppercase tracking-wider font-medium">
                    {slide.tag}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                  {slide.title}{" "}
                  <span className="text-primary">{slide.titleAccent}</span>
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                  {slide.description}
                </p>
                <Link to="/about">
                  <Button className="btn-primary group text-lg px-8 py-4">
                    Discover More
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-primary scale-110" 
                  : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
