import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { CheckCircle, Users, Target, Award, Factory, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { number: "2018", label: "Established" },
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries Served" },
    { number: "100+", label: "Happy Clients" },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver high-quality sodium silicate products that meet global standards while maintaining competitive pricing and exceptional customer service."
    },
    {
      icon: Award,
      title: "Our Vision",
      description: "To become the most trusted and preferred silicate manufacturer globally, recognized for quality, innovation, and sustainable practices."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Our experienced team of chemical engineers and industry experts work tirelessly to ensure product excellence and customer satisfaction."
    },
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
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Who We Are</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Leading Manufacturer of Sodium Silicate Products
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Established in 2018 in Morbi, Gujarat, Ankit Silicate has grown to become a leading manufacturer of high-quality Sodium and Potassium Silicates. Our state-of-the-art manufacturing facility is equipped with modern technology and operated by a team of experienced professionals.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We cater to diverse industries including detergent manufacturing, ceramic production, foundry applications, construction chemicals, and many more. Our commitment to quality and customer satisfaction has made us a trusted partner for businesses across the globe.
                </p>
                <ul className="space-y-3">
                  {[
                    "ISO 9001:2015 Certified Company",
                    "State-of-the-art Manufacturing Facility",
                    "Experienced Technical Team",
                    "Global Export Network",
                    "Customized Product Solutions"
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

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Core Values</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                What Drives Us Forward
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary/5 p-6 rounded-xl">
                    <Factory className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-display font-bold text-foreground mb-2">Modern Facility</h4>
                    <p className="text-muted-foreground text-sm">State-of-the-art manufacturing plant with advanced equipment</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl mt-8">
                    <Award className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-display font-bold text-foreground mb-2">Quality Assured</h4>
                    <p className="text-muted-foreground text-sm">Strict quality control at every stage of production</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl">
                    <Globe className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-display font-bold text-foreground mb-2">Global Reach</h4>
                    <p className="text-muted-foreground text-sm">Exporting to 15+ countries across continents</p>
                  </div>
                  <div className="bg-primary/5 p-6 rounded-xl mt-8">
                    <Users className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-display font-bold text-foreground mb-2">Expert Team</h4>
                    <p className="text-muted-foreground text-sm">Dedicated professionals with years of experience</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Your Trusted Partner in Silicate Solutions
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  At Ankit Silicate, we understand that each industry has unique requirements. That's why we offer customized solutions tailored to meet your specific needs. Our technical team works closely with clients to develop products that deliver optimal performance.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From product development to delivery, we ensure quality at every step. Our ISO certification and rigorous quality control processes guarantee that you receive products that meet the highest international standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
