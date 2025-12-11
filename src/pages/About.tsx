import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { CheckCircle, Users, Target, Award, Factory, Globe, Eye, Gem, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const About = () => {
  const timeline = [
    {
      year: "2008",
      title: "Foundation Laid",
      description: "Wyoming Chemicals entered the domestic market by supplying inorganic chemicals, building a strong foundation through deep customer understanding and efficient supply networks.",
      highlights: ["Established a strong presence in inorganic chemical supply", "Built long-term client relationships"]
    },
    {
      year: "2014",
      title: "Manufacturing Growth",
      description: "Commissioned the first manufacturing unit with a 50 MT per day capacity, marking the beginning of in-house production and self-reliance.",
      highlights: ["Focused on consistent quality output", "Ensured prompt and reliable customer delivery"]
    },
    {
      year: "2017",
      title: "Scaling Up with Global Presence",
      description: "Expanded production capacity to 150 MT per day, reinforcing reliability and strengthening global industry trust.",
      highlights: ["Upgraded infrastructure to meet international standards", "Expanded global market presence in silicate solutions"]
    },
    {
      year: "2021",
      title: "Product Expansion & Capacity Growth",
      description: "Introduced Sodium Silicate Powder and Metasilicate products with advanced manufacturing facilities, achieving a total capacity of 300 MT per day.",
      highlights: ["Added a complete range of Sodium Silicate Powders", "Strengthened the product portfolio for diverse industrial applications"]
    },
    {
      year: "2024",
      title: "Global Expansion & Partnerships",
      description: "Strengthened international reach through a robust distribution network and long-term global collaborations, reinforcing trust across 25+ countries.",
      highlights: ["Expanded international distribution network", "Built strong and lasting global partnerships"]
    },
  ];

  const features = [
    { icon: CheckCircle, title: "Commitment to Quality", description: "We follow strict global standards to ensure product purity and reliability." },
    { icon: Factory, title: "Advanced Manufacturing", description: "State-of-the-art facilities designed for precision and consistency." },
    { icon: Globe, title: "Worldwide Reach", description: "Trusted by clients across multiple global industries." },
    { icon: Users, title: "Technical Expertise", description: "Backed by a highly skilled team ensuring innovation and support." },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="About Us" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" }
          ]} 
        />

        {/* Hero Section with Background Image */}
        <section
          className="py-16 md:py-24 relative text-white"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/background-image.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="section-subtitle-with-icon text-white/80">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 mb-6">
                Trusted Manufacturer of Sodium Silicates
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                We're here to help you with premium chemical solutions for your industrial needs.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - About Content */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2008, <strong className="text-foreground">Wyoming Chemicals</strong> has evolved into a trusted global manufacturer of 
                  <strong className="text-foreground"> Sodium Silicates, Specialty Silicates, and Metasilicates</strong>. Backed by decades of expertise, 
                  we serve as a reliable partner to industries worldwide, delivering high-quality chemical raw materials 
                  that consistently meet stringent international standards.
                </p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Equipped with <strong className="text-foreground">state-of-the-art manufacturing facilities</strong> and guided by a culture of innovation, 
                  we cater to a diverse range of industries across the globe. Our unwavering focus on precision, consistency, 
                  and customer satisfaction has positioned us at the forefront of the global chemical supply chain.
                </p>
              </div>

              {/* Right Column - Vision, Mission, Values */}
              <div>
                <Tabs defaultValue="vision" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="vision" className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Vision</span>
                    </TabsTrigger>
                    <TabsTrigger value="mission" className="flex items-center gap-2">
                      <Target className="w-4 h-4" />
                      <span>Mission</span>
                    </TabsTrigger>
                    <TabsTrigger value="values" className="flex items-center gap-2">
                      <Gem className="w-4 h-4" />
                      <span>Values</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="vision" className="mt-6">
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#efebe7' }}>
                      <p className="leading-relaxed" style={{ color: '#4a5568' }}>
                        To become a global leader in advanced silicate solutions by establishing new standards in quality, innovation, and sustainability for industries worldwide.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="mission" className="mt-6">
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#efebe7' }}>
                      <p className="leading-relaxed" style={{ color: '#4a5568' }}>
                        To provide high-performance silicate solutions through precision, innovation, and sustainability.
                      </p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="values" className="mt-6">
                    <div className="p-6 rounded-xl" style={{ backgroundColor: '#efebe7' }}>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span style={{ color: '#4a5568' }}><strong style={{ color: '#2d3748' }}>Integrity:</strong> Guided by strong principles</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span style={{ color: '#4a5568' }}><strong style={{ color: '#2d3748' }}>Innovation:</strong> Driven by new ideas</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span style={{ color: '#4a5568' }}><strong style={{ color: '#2d3748' }}>Reliability:</strong> Delivering consistently dependable products and service</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span style={{ color: '#4a5568' }}><strong style={{ color: '#2d3748' }}>Sustainability:</strong> Committed to responsible and eco-friendly practices</span>
                        </li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Our History Timeline */}
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
              <span className="section-subtitle-with-icon">Our History</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Our Journey of Excellence
              </h2>
            </div>
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="2008" className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-8 bg-background border border-border">
                  <TabsTrigger value="2008" className="tabs-trigger-custom data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    In 2008
                  </TabsTrigger>
                  <TabsTrigger value="2014" className="tabs-trigger-custom data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    In 2014
                  </TabsTrigger>
                  <TabsTrigger value="2017" className="tabs-trigger-custom data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    In 2017
                  </TabsTrigger>
                  <TabsTrigger value="2021" className="tabs-trigger-custom data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    In 2021
                  </TabsTrigger>
                  <TabsTrigger value="2024" className="tabs-trigger-custom data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    In 2024
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="2008" className="animate-fade-in-up">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-background p-6 rounded-2xl shadow-sm">
                      <img 
                        src="/placeholder.svg" 
                        alt="Foundation Laid" 
                        className="w-full h-64 object-cover rounded-xl mb-4"
                      />
                    </div>
                    <div>
                      <h5 className="font-display text-2xl font-bold text-foreground mb-4">Foundation Laid</h5>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Wyoming Chemicals entered the domestic market by supplying inorganic chemicals, building a strong foundation through deep customer understanding and efficient supply networks.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">Established a strong presence in inorganic chemical supply</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">Built long-term client relationships</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="2014" className="animate-fade-in-up">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-background p-6 rounded-2xl shadow-sm">
                      <img 
                        src="/placeholder.svg" 
                        alt="Manufacturing Growth" 
                        className="w-full h-64 object-cover rounded-xl mb-4"
                      />
                    </div>
                    <div>
                      <h5 className="font-display text-2xl font-bold text-foreground mb-4">Manufacturing Growth</h5>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Commissioned the first manufacturing unit with a 50 MT per day capacity, marking the beginning of in-house production and self-reliance.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">Focused on consistent quality output</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">Ensured prompt and reliable customer delivery</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="2017" className="animate-fade-in-up">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-background p-6 rounded-2xl shadow-sm">
                      <img 
                        src="/placeholder.svg" 
                        alt="Scaling Up" 
                        className="w-full h-64 object-cover rounded-xl mb-4"
                      />
                    </div>
                    <div>
                      <h5 className="font-display text-2xl font-bold text-foreground mb-4">Scaling Up with Global Presence</h5>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Expanded production capacity to 150 MT per day, reinforcing reliability and strengthening global industry trust.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">Upgraded infrastructure to meet international standards</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">Expanded global market presence in silicate solutions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="2021" className="animate-fade-in-up">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-background p-6 rounded-2xl shadow-sm">
                      <img 
                        src="/placeholder.svg" 
                        alt="Product Expansion" 
                        className="w-full h-64 object-cover rounded-xl mb-4"
                      />
                    </div>
                    <div>
                      <h5 className="font-display text-2xl font-bold text-foreground mb-4">Product Expansion & Capacity Growth</h5>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Introduced Sodium Silicate Powder and Metasilicate products with advanced manufacturing facilities, achieving a total capacity of 300 MT per day.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">Added a complete range of Sodium Silicate Powders</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">Strengthened the product portfolio for diverse industrial applications</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="2024" className="animate-fade-in-up">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="bg-background p-6 rounded-2xl shadow-sm">
                      <img 
                        src="/placeholder.svg" 
                        alt="Global Expansion" 
                        className="w-full h-64 object-cover rounded-xl mb-4"
                      />
                    </div>
                    <div>
                      <h5 className="font-display text-2xl font-bold text-foreground mb-4">Global Expansion & Partnerships</h5>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        Strengthened international reach through a robust distribution network and long-term global collaborations, reinforcing trust across 25+ countries.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">Expanded international distribution network</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">Built strong and lasting global partnerships</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Certified Quality. <br/>Global Trust.
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We adhere to internationally recognized quality standards and rigorous safety protocols, ensuring every product we deliver meets both local regulations and global benchmarks.
                </p>
                <div className="relative">
                  <div className="bg-background rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt="Quality Certification" 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4 mb-6">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Request a Quote
              </h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
                Fill in the form below and our technical sales team will get in touch with a personalized quotation and expert support.
              </p>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="inline-flex items-center gap-2">
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;