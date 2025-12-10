import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";
import { ArrowRight, CheckCircle, Beaker, Settings, Award, ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-6">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Link to="/products">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageBanner 
          title={product.shortTitle}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.shortTitle }
          ]}
        />

        {/* Product Overview */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Product Details</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  {product.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.fullDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.industries.map((industry, index) => (
                    <span 
                      key={index}
                      className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
                <Link to="/contact">
                  <Button size="lg">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-secondary rounded-2xl p-8 relative z-10">
                  <img 
                    src={product.image} 
                    alt={product.shortTitle}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Specifications & Features */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Specifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Beaker className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Technical Specifications</h3>
                </div>
                <div className="bg-background rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-secondary/30" : ""}>
                          <td className="px-6 py-4 font-medium text-foreground">{spec.label}</td>
                          <td className="px-6 py-4 text-muted-foreground">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Features */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">Key Features</h3>
                </div>
                <div className="bg-background rounded-2xl p-6">
                  <ul className="space-y-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Applications</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {product.shortTitle} is used across various industries for multiple applications
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {product.applications.map((application, index) => (
                <div 
                  key={index}
                  className="bg-secondary p-6 rounded-xl flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-foreground font-medium">{application}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Explore More</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">Related Products</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="aspect-video bg-primary/5 relative overflow-hidden">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.shortTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {relatedProduct.shortTitle}
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-2">{relatedProduct.description}</p>
                  </div>
                </Link>
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
                Contact Our Team
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

export default ProductDetail;
