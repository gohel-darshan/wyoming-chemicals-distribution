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
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title mb-12">
              Trusted by Industries for Quality and Reliability
            </h2>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    {reason.subtitle && (
                      <p className="text-sm text-primary mb-2">{reason.subtitle}</p>
                    )}
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&auto=format&fit=crop"
              alt="Quality Control"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-display font-bold">25+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
