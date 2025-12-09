import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Factory, Gauge, Shield, Cog, Zap, Droplets } from "lucide-react";

const Infrastructure = () => {
  const facilities = [
    {
      icon: Factory,
      title: "Manufacturing Plant",
      description: "Our state-of-the-art manufacturing facility spans over 25,000 sq. ft. and is equipped with the latest machinery for silicate production."
    },
    {
      icon: Gauge,
      title: "Quality Control Lab",
      description: "Fully equipped in-house laboratory for rigorous testing of raw materials and finished products to ensure consistent quality."
    },
    {
      icon: Droplets,
      title: "Liquid Silicate Unit",
      description: "Dedicated production line for manufacturing high-quality sodium silicate liquid in various grades and ratios."
    },
    {
      icon: Cog,
      title: "Powder Processing",
      description: "Advanced drying and processing equipment for producing sodium silicate powder and metasilicate products."
    },
    {
      icon: Shield,
      title: "Storage Facilities",
      description: "Modern storage warehouses with proper handling systems for safe storage of raw materials and finished goods."
    },
    {
      icon: Zap,
      title: "Utilities & Support",
      description: "Reliable power supply, water treatment systems, and effluent treatment plant for sustainable operations."
    },
  ];

  const capabilities = [
    { label: "Production Capacity", value: "500+ MT/Month" },
    { label: "Product Variants", value: "7+ Types" },
    { label: "Quality Tests", value: "20+ Parameters" },
    { label: "Export Countries", value: "15+" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Infrastructure" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Company", href: "/about" },
            { label: "Infrastructure" }
          ]} 
        />

        {/* Overview */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Facilities</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  World-Class Manufacturing Infrastructure
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ankit Silicate operates from a modern, well-equipped manufacturing facility located in Morbi, Gujarat - the industrial hub of India. Our infrastructure is designed to support large-scale production while maintaining the highest quality standards.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  The facility incorporates the latest technology in silicate manufacturing, with automated systems for precise control over production parameters. Our infrastructure allows us to offer a wide range of products and meet diverse customer requirements efficiently.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {capabilities.map((item, index) => (
                    <div key={index} className="bg-secondary p-4 rounded-xl text-center">
                      <div className="font-display text-2xl font-bold text-primary">{item.value}</div>
                      <div className="text-muted-foreground text-sm">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-primary/10 rounded-2xl aspect-square flex items-center justify-center">
                  <Factory className="w-32 h-32 text-primary/50" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Key Facilities</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Equipped for Excellence
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <facility.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">{facility.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Process */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Production Process</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                From Raw Materials to Quality Products
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: 1, title: "Raw Material Selection", description: "High-purity silica sand and soda ash are sourced from trusted suppliers and undergo quality checks." },
                  { step: 2, title: "Melting & Fusion", description: "Raw materials are heated in furnaces at high temperatures to form sodium silicate glass." },
                  { step: 3, title: "Dissolution", description: "The silicate glass is dissolved in water under controlled conditions to produce liquid sodium silicate." },
                  { step: 4, title: "Processing & Refinement", description: "Products are processed to achieve specific ratios, concentrations, and grades as per requirements." },
                  { step: 5, title: "Quality Testing", description: "Rigorous quality tests ensure products meet specified parameters before packaging." },
                  { step: 6, title: "Packaging & Dispatch", description: "Products are packed in suitable containers and dispatched with proper documentation." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="font-display font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
