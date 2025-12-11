import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Leaf, Award, Users, Lightbulb, Heart, Shield } from "lucide-react";

const Sustainability = () => {
  const pillars = [
    {
      icon: Users,
      title: "People Culture",
      description: "Fostering a people-first workplace culture that drives innovation through collaboration, prioritizes employee well-being, and empowers continuous professional growth."
    },
    {
      icon: Lightbulb,
      title: "Innovative Environment",
      description: "Creating an Innovation-driven environment that integrates sustainable practices, accelerates scientific discovery, and transforms ideas into successful commercial solutions."
    },
    {
      icon: Heart,
      title: "Community Contribution",
      description: "Build stronger communities through active contribution, social responsibility, and sustainable growth where we live and work."
    },
    {
      icon: Shield,
      title: "Transparency & Integrity",
      description: "Upholding transparency and integrity by embedding ethics, accountability, and compliance across our entire value chain to ensure responsible and sustainable growth."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Sustainability" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Sustainability" }
          ]} 
        />

        {/* Sustainability Section */}
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
              <div className="relative">
                <img 
                  src="/sustainability/sustainability.png" 
                  alt="Sustainability" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#AD3335"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#AD3335"/>
                  </svg>
                  SUSTAINABILITY
                </span>
                <p className="text-muted-foreground mb-6 leading-relaxed mt-4">
                  In addition to our existing system for the treatment of effluents from various plants we have formulated additional schemes for the collection and pumping of effluents from the various units, as part of our environmental management programmes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A green environment is what we strive for at Ankit Silicate for we know that giving back to Nature is our duty. A healthy environment is of crucial importance for sustained development. Naturally, our procedures are environment friendly. A centralised effluent neutralisation plant takes care of liquid effluents generated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#AD3335"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#AD3335"/>
                  </svg>
                  QUALITY ASSURANCE
                </span>
                <p className="text-muted-foreground mb-6 leading-relaxed mt-4">
                  Ankit Silicate believes in never compromising on quality and being ahead in today's race of technology advancement. We have a cutting edge laboratory with highly skilled chemists who check and maintain quality of all the products on each parameter. Every batch/lot of product is matched with standards for shades and strength as per the customer requirements and records are maintained for future tradability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We use state-of art machinery & equipments in the manufacturing process with a firm commitment and focus on to always produce Best Quality Products to enhance Customer Satisfaction.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="/sustainability/quality-assurance.png" 
                  alt="Quality Assurance" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Four Guiding Pillars */}
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
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Four Guiding Pillars of Sustainability
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {pillars.slice(0, 2).map((pillar, index) => (
                <div key={index} className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
                  <div className="absolute top-4 right-4 opacity-10">
                    <img src="/shape/about-shape-06.png" alt="" className="w-16 h-16" />
                  </div>
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <pillar.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h6 className="font-display text-xl font-bold text-foreground mb-4">{pillar.title}</h6>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8" style={{ marginTop: "100px" }}>
              {pillars.slice(2, 4).map((pillar, index) => (
                <div key={index + 2} className="bg-background p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow relative">
                  <div className="absolute top-4 right-4 opacity-10">
                    <img src="/shape/about-shape-07.png" alt="" className="w-16 h-16" />
                  </div>
                  <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <pillar.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h6 className="font-display text-xl font-bold text-foreground mb-4">{pillar.title}</h6>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;