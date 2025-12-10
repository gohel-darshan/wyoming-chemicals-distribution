import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Box, Sparkles, FlaskConical, Atom, Shield } from "lucide-react";
import { products } from "@/data/products";

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  "sodium-silicate-liquid": Droplets,
  "sodium-silicate-powder": Box,
  "sodium-silicate-glass": Sparkles,
  "metasilicate-pentahydrate": FlaskConical,
  "metasilicate-nonahydrate": Atom,
  "metasilicate-anhydrous": FlaskConical,
  "sodium-orthosilicate": Shield,
};

const Products = () => {
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
              {products.map((product) => {
                const IconComponent = iconMap[product.id] || Droplets;
                return (
                  <div key={product.id} className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                    <div className="aspect-video bg-primary/5 relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.shortTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">{product.shortTitle}</h3>
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
                );
              })}
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
