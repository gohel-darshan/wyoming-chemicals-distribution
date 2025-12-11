import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Factory, Gauge, Shield, Cog, Zap, Droplets, FlaskConical, Truck, Recycle, CheckCircle, Award, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Infrastructure = () => {
  const facilities = [
    {
      icon: Factory,
      title: "Manufacturing Plant",
      description: "Our state-of-the-art manufacturing facility spans over 25,000 sq. ft. and is equipped with the latest machinery for silicate production. The plant is designed for efficient operations with optimized workflow."
    },
    {
      icon: Gauge,
      title: "Quality Control Lab",
      description: "Fully equipped in-house laboratory for rigorous testing of raw materials and finished products to ensure consistent quality. Advanced analytical instruments ensure accuracy in all testing parameters."
    },
    {
      icon: Droplets,
      title: "Liquid Silicate Unit",
      description: "Dedicated production line for manufacturing high-quality sodium silicate liquid in various grades and ratios. Equipped with dissolution tanks, filtration systems, and storage facilities."
    },
    {
      icon: Cog,
      title: "Powder Processing Unit",
      description: "Advanced drying and processing equipment for producing sodium silicate powder and metasilicate products. Spray drying technology ensures uniform particle size and quality."
    },
    {
      icon: FlaskConical,
      title: "Glass Furnace",
      description: "High-temperature furnaces for melting raw materials to produce sodium silicate glass. Precise temperature control ensures consistent product quality."
    },
    {
      icon: Shield,
      title: "Storage Facilities",
      description: "Modern storage warehouses with proper handling systems for safe storage of raw materials and finished goods. Climate-controlled areas for sensitive products."
    },
    {
      icon: Truck,
      title: "Logistics & Dispatch",
      description: "Efficient logistics infrastructure with loading/unloading facilities for seamless product dispatch. Proper documentation and tracking systems."
    },
    {
      icon: Recycle,
      title: "Effluent Treatment",
      description: "State-of-the-art effluent treatment plant for responsible waste management. Ensures compliance with environmental regulations."
    },
    {
      icon: Zap,
      title: "Utilities & Power",
      description: "Reliable power supply with backup systems, water treatment facilities, and steam generation units for uninterrupted operations."
    },
  ];

  const capabilities = [
    { label: "Production Capacity", value: "300+ MT/Day" },
    { label: "Product Variants", value: "7+ Types" },
    { label: "Quality Tests", value: "20+ Parameters" },
    { label: "Export Countries", value: "25+" },
  ];

  const processSteps = [
    { 
      step: 1, 
      title: "Raw Material Selection", 
      description: "High-purity silica sand and soda ash are sourced from trusted suppliers and undergo quality checks.",
      details: ["Vendor qualification process", "Incoming inspection", "Certificate of Analysis verification"]
    },
    { 
      step: 2, 
      title: "Melting & Fusion", 
      description: "Raw materials are heated in furnaces at high temperatures (1400-1500°C) to form sodium silicate glass.",
      details: ["Precise temperature control", "Continuous monitoring", "Quality batch management"]
    },
    { 
      step: 3, 
      title: "Dissolution", 
      description: "The silicate glass is dissolved in water under controlled conditions to produce liquid sodium silicate.",
      details: ["Pressure dissolution process", "Ratio adjustment", "Concentration control"]
    },
    { 
      step: 4, 
      title: "Processing & Refinement", 
      description: "Products are processed to achieve specific ratios, concentrations, and grades as per requirements.",
      details: ["Filtration & clarification", "Grade-specific processing", "Quality parameter adjustment"]
    },
    { 
      step: 5, 
      title: "Quality Testing", 
      description: "Rigorous quality tests ensure products meet specified parameters before packaging.",
      details: ["20+ quality parameters", "Laboratory certification", "Batch approval process"]
    },
    { 
      step: 6, 
      title: "Packaging & Dispatch", 
      description: "Products are packed in suitable containers and dispatched with proper documentation.",
      details: ["Multiple packaging options", "Proper labeling", "Shipment tracking"]
    },
  ];

  const equipmentList = [
    "High-Temperature Melting Furnaces",
    "Pressure Dissolution Vessels",
    "Spray Drying Systems",
    "Filtration & Clarification Units",
    "Automatic Packaging Lines",
    "Quality Testing Laboratory",
    "Effluent Treatment Plant",
    "Steam Generation Boilers",
    "Material Handling Equipment",
    "Storage Tanks & Silos"
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
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Facilities</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  World-Class Manufacturing Infrastructure
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong className="text-foreground">Ankit Silicate</strong> operates from a modern, well-equipped manufacturing facility located in Morbi, Gujarat - the industrial hub of India. Our infrastructure is designed to support large-scale production while maintaining the highest quality standards.
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
                  <Building2 className="w-32 h-32 text-primary/50" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Key Facilities</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Equipped for Excellence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Our comprehensive infrastructure includes all essential units required for complete silicate manufacturing, from raw material processing to finished product dispatch.
              </p>
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
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Production Process</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                From Raw Materials to Quality Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Our production process is designed for efficiency, quality, and consistency at every stage.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {processSteps.map((item, index) => (
                  <div key={index} className="bg-secondary p-6 rounded-2xl">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.details.map((detail, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Equipment List */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Equipment</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Advanced Manufacturing Equipment
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our facility is equipped with modern, high-capacity equipment sourced from reputable manufacturers. Regular maintenance and upgrades ensure optimal performance and reliability.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {equipmentList.map((equipment, index) => (
                    <div key={index} className="flex items-center gap-3 bg-background p-4 rounded-xl">
                      <Cog className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{equipment}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-primary/10 rounded-2xl aspect-square flex items-center justify-center">
                  <Factory className="w-32 h-32 text-primary/50" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Quality Commitment */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Commitment to Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our infrastructure represents our commitment to excellence in manufacturing. Every aspect of our facility is designed to ensure product quality, operational efficiency, and environmental responsibility. We continuously invest in upgrading our infrastructure to meet evolving industry demands and customer expectations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/quality">
                  <Button size="lg">
                    Learn About Our Quality
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Schedule a Visit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Want to See Our Facility?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              We welcome customers and partners to visit our manufacturing facility. Contact us to schedule a tour and see our operations firsthand.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Infrastructure;
