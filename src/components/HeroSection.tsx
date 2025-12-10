import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    tag: "01 Trusted",
    title: "Global Trust",
    titleAccent: "in Sodium Silicate Excellence",
    description: "Delivering premium silicate solutions trusted by industries worldwide.",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    tag: "02 Reliable",
    title: "Reliable Silicate Supply",
    titleAccent: "That Keeps Industries Moving",
    description: "We ensure uninterrupted silicate supply, supporting industries with consistent quality and timely delivery.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    tag: "03 Global",
    title: "Expanding Horizons",
    titleAccent: "with Global Reach",
    description: "Delivering trusted silicate solutions across continents, empowering industries with quality and reliability.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-[90vh] bg-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Content */}
          <div className="relative z-10">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8 absolute top-0 left-0"
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[2px] bg-primary" />
                  <span className="text-muted-foreground text-sm uppercase tracking-wider">
                    {slide.tag}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-4">
                  {slide.title}
                  <span className="block text-primary">{slide.titleAccent}</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  {slide.description}
                </p>
                <Link to="/about">
                  <Button className="btn-primary group">
                    Discover More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse" />
              <div className="absolute inset-8 border-2 border-primary/10 rounded-full" />
              
              {/* Shield/Badge Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center animate-float">
                  <div className="w-56 h-56 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-24 h-24 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating dots */}
              <div className="absolute bottom-1/4 right-0 flex gap-2">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <div className="w-3 h-3 bg-primary/60 rounded-full" />
                <div className="w-3 h-3 bg-primary/30 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-primary/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
