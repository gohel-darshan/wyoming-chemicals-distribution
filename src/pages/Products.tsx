import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Box, Sparkles, FlaskConical, Atom, Shield } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "sodium-silicate-liquid",
      icon: Droplets,
      title: "Sodium Silicate Liquid",
      description: "A high-performance bonding and sealing solution ideal for use in detergents, cement, paper, and more. Our liquid silicates ensure superior adhesion, stability, and durability across demanding industrial processes.",
      applications: ["Adhesive & Binder Applications", "Water Treatment & Soil Stabilization", "Cleaning & Detergent Manufacturing"],
      image: "https://www.ankitsilicate.com/assets/images/home/product-home-1.png"
    },
    {
      id: "sodium-silicate-powder",
      icon: Box,
      title: "Sodium Silicate Powder",
      description: "Engineered for dry chemical applications, our Sodium Silicate Powder offers excellent stability, long shelf life, and easy integration into solid blends. It's ideal for industries that demand precision and performance in powdered form.",
      applications: ["Dry Detergent Formulations", "Concrete & Construction Additives", "Ceramic & Refractory Production"],
      image: "https://www.ankitsilicate.com/assets/images/home/product-home-2.png"
    },
    {
      id: "sodium-silicate-glass",
      icon: Sparkles,
      title: "Sodium Silicate Glass",
      description: "A foundational material for liquid silicate production, our Sodium Silicate Glass delivers exceptional purity, stability, and consistency for advanced industrial use.",
      applications: ["Raw Material for Liquid Silicates", "Glass & Ceramics Manufacturing", "Industrial Adhesive Formulations"],
      image: "https://www.ankitsilicate.com/assets/images/home/product-home-2.png"
    },
    {
      id: "metasilicate-pentahydrate",
      icon: FlaskConical,
      title: "Metasilicate Pentahydrate",
      description: "An effective cleaning and degreasing agent, Metasilicate Pentahydrate offers high alkalinity with controlled reactivity-ideal for demanding industrial and household cleaning applications.",
      applications: ["Industrial & Household Cleaners", "Metal Surface Treatment", "Textile and Leather Processing"],
      image: "https://www.ankitsilicate.com/assets/images/home/product-home-4.png"
    },
    {
      id: "metasilicate-nonahydrate",
      icon: Atom,
      title: "Metasilicate Nonahydrate",
      description: "Highly soluble and gentle on surfaces, this grade is widely used in non-corrosive cleaning products, fireproofing, and water softening systems.",
      applications: ["Gentle Cleaning Formulations", "Fireproofing Materials", "Water Softening Applications"],
      image: "https://www.ankitsilicate.com/assets/images/home/product-home-5.png"
    },
    {
      id: "metasilicate-anhydrous",
      icon: FlaskConical,
      title: "Metasilicate Anhydrous",
      description: "High-purity and fast-dissolving, Sodium Metasilicate Anhydrous delivers exceptional cleaning, corrosion inhibition, and alkalinity control. Ideal for heavy-duty detergents, metal treatment, ceramics, and construction chemicals.",
      applications: ["Heavy-Duty Detergent Formulations", "Metal Surface Treatment & Corrosion Inhibition", "Ceramics, Adhesives & Construction Chemicals"],
      image: "https://www.ankitsilicate.com/assets/images/home/product-home-6.png"
    },
    {
      id: "sodium-orthosilicate",
      icon: Shield,
      title: "Sodium Orthosilicate",
      description: "A high-alkalinity compound providing excellent corrosion inhibition and metal passivation. Ideal for industrial cleaning, coatings, and water treatment formulations requiring stable, eco-friendly performance.",
      applications: ["Corrosion & Metal Protection", "Industrial Cleaning Agents", "Water Treatment Chemicals"],
      image: "https://www.ankitsilicate.com/assets/images/home/product-home-7.png"
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title="Our Products" 
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products" }
          ]} 
        />

        {/* Products Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Products</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Delivering Purity and Performance in Every Product
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We manufacture a comprehensive range of sodium silicate products designed to meet the diverse needs of various industries. Each product is crafted with precision and undergoes rigorous quality testing to ensure optimal performance.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                  <div className="aspect-video bg-primary/5 relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">{product.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{product.description}</p>
                    <div className="space-y-2 mb-6">
                      {product.applications.slice(0, 3).map((app, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                    <Link to={`/products/${product.id}`}>
                      <Button variant="outline" className="w-full group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Custom Specifications?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              We can customize our products to meet your specific requirements. Contact our technical team to discuss your needs.
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
