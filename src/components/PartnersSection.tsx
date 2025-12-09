const partners = [
  { name: "Partner 1", logo: "P1" },
  { name: "Partner 2", logo: "P2" },
  { name: "Partner 3", logo: "P3" },
  { name: "Partner 4", logo: "P4" },
  { name: "Partner 5", logo: "P5" },
  { name: "Partner 6", logo: "P6" },
  { name: "Partner 7", logo: "P7" },
  { name: "Partner 8", logo: "P8" },
  { name: "Partner 9", logo: "P9" },
  { name: "Partner 10", logo: "P10" },
];

const PartnersSection = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <span className="section-subtitle">Partners</span>
          <h2 className="section-title">Global Partners</h2>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 w-40 h-24 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary/30 transition-colors"
            >
              <span className="text-2xl font-display font-bold text-muted-foreground">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
