import { Beaker, Users, Factory } from "lucide-react";

const features = [
  {
    icon: Beaker,
    title: "Precision Chemistry",
    description: "Our formulations are crafted with scientific accuracy to meet global industry standards.",
  },
  {
    icon: Users,
    title: "Expertise You Can Trust",
    description: "Decades of experience drive our ability to deliver reliable and tailored silicate solutions.",
  },
  {
    icon: Factory,
    title: "Cutting-Edge Facilities",
    description: "State-of-the-art machinery built for efficiency, sustainability, and reliable quality.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
