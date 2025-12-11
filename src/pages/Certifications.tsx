import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { CheckCircle } from "lucide-react";

const Certifications = () => {
  const certificates = [
    {
      id: 1,
      title: "CE MARK",
      image: "/certificates/ce-mark.jpg"
    },
    {
      id: 2,
      title: "ISO CERTIFIED",
      image: "/certificates/iso-certified.jpg"
    },
    {
      id: 3,
      title: "REACH CERTIFIED",
      image: "/certificates/reach-certified.jpg"
    }
  ];

  const achievements = [
    "ISO 9001:2015 Certified for Quality Management",
    "CE Mark Compliance for Product Safety",
    "EU REACH Environmental Compliance Certificate",
    "15+ Years of Trusted Service"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Certifications" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Certifications" }
          ]} 
        />

        {/* Certificate Introduction Section */}
        <section 
          className="py-16 md:py-24 relative"
          style={{
            backgroundImage: 'url("/background-image.png")',
            backgroundSize: "300px 300px",
            backgroundRepeat: "repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="row g-12 mb-16">
              <div className="col-12">
                <div className="text-center max-w-4xl mx-auto">
                  <span className="text-primary font-medium uppercase tracking-wider text-sm flex items-center justify-center gap-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                      <path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#AD3335"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#AD3335"/>
                    </svg>
                    Company Certificate
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Certificate
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Ankit Silicate is committed to delivering products that meet global quality and safety standards. Our operations follow strict international guidelines, backed by recognized certifications that ensure consistency, reliability, and environmental responsibility. Through continuous improvement and compliance with global norms, we provide customers with products they can trust across diverse markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Grid Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Certificates Grid */}
              <div className="lg:col-span-12">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {certificates.map((certificate) => (
                    <div key={certificate.id} className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={certificate.image} 
                          alt={certificate.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="text-center">
                          <h5 className="font-display text-xl font-bold text-foreground">
                            {certificate.title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description and Achievements */}
                <div className="bg-background p-8 rounded-2xl shadow-lg">
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    Ankit Silicate has been built on a foundation of dedication, consistency, and quality. We have earned the trust of domestic and international clients through our certified excellence in manufacturing and service.
                  </p>

                  {/* Achievements List */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;