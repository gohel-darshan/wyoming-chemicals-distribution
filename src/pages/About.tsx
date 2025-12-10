import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { CheckCircle, Users, Target, Award, Factory, Globe, History, Lightbulb, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "2008", label: "Established" },
    { number: "50+", label: "Team Members" },
    { number: "25+", label: "Countries Served" },
    { number: "300+", label: "MT/Day Capacity" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Guided by strong principles in everything we do, maintaining honesty and transparency in all business dealings."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Driven by new ideas and continuous improvement, always seeking better solutions for our customers."
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Delivering consistently dependable products and service that our customers can count on."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to responsible and eco-friendly practices for a better future."
    },
  ];

  const timeline = [
    {
      year: "2008",
      title: "Foundation Laid",
      description: "Ankit Silicate entered the domestic market by supplying inorganic chemicals, building a strong foundation through deep customer understanding and efficient supply networks.",
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

  const certifications = [
    { title: "Commitment to Quality", description: "We follow strict global standards to ensure product purity and reliability." },
    { title: "Advanced Manufacturing", description: "State-of-the-art facilities designed for precision and consistency." },
    { title: "Worldwide Reach", description: "Trusted by clients across multiple global industries." },
    { title: "Technical Expertise", description: "Backed by a highly skilled team ensuring innovation and support." },
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

        {/* Company Overview */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">About Us</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Trusted Manufacturer of Sodium Silicates
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2008, <strong className="text-foreground">Ankit Silicate</strong> has evolved into a trusted global manufacturer of <strong className="text-foreground">Sodium Silicates, Specialty Silicates, and Metasilicates</strong>. Backed by decades of expertise, we serve as a reliable partner to industries worldwide, delivering high-quality chemical raw materials that consistently meet stringent international standards.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Equipped with <strong className="text-foreground">state-of-the-art manufacturing facilities</strong> and guided by a culture of innovation, we cater to a diverse range of industries across the globe. Our unwavering focus on precision, consistency, and customer satisfaction has positioned us at the forefront of the global chemical supply chain.
                </p>
                <ul className="space-y-3">
                  {[
                    "State-of-the-art manufacturing facilities",
                    "Industry-specific formulation expertise",
                    "Serving global industrial markets",
                    "Rigorous quality assurance at every stage",
                    "Flexible packaging and logistics solutions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-secondary rounded-2xl p-8 relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center p-6 bg-background rounded-xl shadow-sm">
                        <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                          {stat.number}
                        </div>
                        <div className="text-muted-foreground text-sm">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Mission Values Tabs */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">What Drives Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Our Vision, Mission & Values
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-background p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a global leader in advanced silicate solutions by establishing new standards in quality, innovation, and sustainability for industries worldwide.
                </p>
              </div>
              <div className="bg-background p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide high-performance silicate solutions through precision, innovation, and sustainability, while maintaining the highest standards of quality and customer satisfaction.
                </p>
              </div>
              <div className="bg-background p-8 rounded-2xl shadow-sm">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Integrity:</strong> Guided by strong principles</li>
                  <li><strong className="text-foreground">Innovation:</strong> Driven by new ideas</li>
                  <li><strong className="text-foreground">Reliability:</strong> Consistently dependable</li>
                  <li><strong className="text-foreground">Sustainability:</strong> Eco-friendly practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our History Timeline */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our History</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Our Journey of Excellence
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />
                
                {timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-start gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 mt-2" />
                    
                    {/* Content */}
                    <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-secondary p-6 rounded-2xl">
                        <div className="inline-block bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full mb-4">
                          {item.year}
                        </div>
                        <h4 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h4>
                        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <li key={i} className={`flex items-center gap-2 text-sm text-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              <span>{highlight}</span>
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

        {/* Core Values Grid */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Core Values</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                What We Stand For
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-background p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certified Quality Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Certified Quality</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Certified Quality. Global Trust.
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We adhere to internationally recognized quality standards and rigorous safety protocols, ensuring every product we deliver meets both local regulations and global benchmarks.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-foreground mb-1">{cert.title}</h4>
                        <p className="text-muted-foreground text-sm">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-primary/10 rounded-2xl aspect-square flex items-center justify-center">
                  <Award className="w-32 h-32 text-primary/50" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Grid */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Your Trusted Partner in Silicate Solutions
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background p-6 rounded-xl">
                <Factory className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-display font-bold text-foreground mb-2">Modern Facility</h4>
                <p className="text-muted-foreground text-sm">State-of-the-art manufacturing plant with advanced equipment</p>
              </div>
              <div className="bg-background p-6 rounded-xl">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-display font-bold text-foreground mb-2">Quality Assured</h4>
                <p className="text-muted-foreground text-sm">Strict quality control at every stage of production</p>
              </div>
              <div className="bg-background p-6 rounded-xl">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-display font-bold text-foreground mb-2">Global Reach</h4>
                <p className="text-muted-foreground text-sm">Exporting to 25+ countries across continents</p>
              </div>
              <div className="bg-background p-6 rounded-xl">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-display font-bold text-foreground mb-2">Expert Team</h4>
                <p className="text-muted-foreground text-sm">Dedicated professionals with years of experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Contact our team to discuss your silicate requirements and discover how we can support your business growth.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
