import { Award, Factory, Shield } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "ISO Certified Company",
    subtitle: "Certificate No.: TQS QMS/20180422320",
    description: "Trusted for consistent and certified quality always.",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing Facility",
    description: "State-of-the-art plant for accurate silicate output.",
  },
  {
    icon: Shield,
    title: "Strict Quality Control System",
    description: "Multi-stage inspections ensure reliable and high-purity silicates.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-white blur-2xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-white" />
              <span className="text-white/80 text-sm uppercase tracking-wider font-medium">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-12 leading-tight">
              Trusted by Industries for Quality and Reliability
            </h2>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-white mb-1">
                      {reason.title}
                    </h3>
                    {reason.subtitle && (
                      <p className="text-sm text-white/70 mb-2 font-medium">{reason.subtitle}</p>
                    )}
                    <p className="text-white/80 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&auto=format&fit=crop"
                alt="Quality Control"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-white/10 rounded-2xl -z-0" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/20 rounded-full -z-0" />
            
            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-display font-bold">6+</div>
              <div className="text-sm text-primary/70 font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
