import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const productCategories = [
  "Sodium Silicate Liquid",
  "Sodium Silicate Powder",
  "Sodium Silicate Solid Powder",
  "Metasilicate Pentahydrate",
  "Metasilicate Nonahydrate",
  "Metasilicate Anhydrous",
  "Sodium Orthosilicate",
];

const products = [
  {
    id: 1,
    category: "Sodium Silicate Liquid",
    title: "Sodium Silicate Liquid for Industrial Applications",
    description: "A high-performance bonding and sealing solution ideal for use in detergents, cement, paper, and more. Our liquid silicates ensure superior adhesion, stability, and durability across demanding industrial processes.",
    features: ["Adhesive & Binder Applications", "Water Treatment & Soil Stabilization", "Cleaning & Detergent Manufacturing"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Sodium Silicate Powder",
    title: "Sodium Silicate Powder for Dry Formulations",
    description: "Engineered for dry chemical applications, our Sodium Silicate Powder offers excellent stability, long shelf life, and easy integration into solid blends. It's ideal for industries that demand precision and performance in powdered form.",
    features: ["Dry Detergent Formulations", "Concrete & Construction Additives", "Ceramic & Refractory Production"],
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Sodium Silicate Solid Powder",
    title: "High-Purity Sodium Silicate Glass",
    description: "A foundational material for liquid silicate production, our Sodium Silicate Glass delivers exceptional purity, stability, and consistency for advanced industrial use.",
    features: ["Raw Material for Liquid Silicates", "Glass & Ceramics Manufacturing", "Industrial Adhesive Formulations"],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Metasilicate Pentahydrate",
    title: "Metasilicate Pentahydrate for Versatile Cleaning",
    description: "An effective cleaning and degreasing agent, Metasilicate Pentahydrate offers high alkalinity with controlled reactivity-ideal for demanding industrial and household cleaning applications.",
    features: ["Industrial & Household Cleaners", "Metal Surface Treatment", "Textile and Leather Processing"],
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Metasilicate Nonahydrate",
    title: "Metasilicate Nonahydrate for Safer Cleaning Solutions",
    description: "Highly soluble and gentle on surfaces, this grade is widely used in non-corrosive cleaning products, fireproofing, and water softening systems.",
    features: ["Gentle Cleaning Formulations", "Fireproofing Materials", "Water Softening Applications"],
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Metasilicate Anhydrous",
    title: "Metasilicate Anhydrous for Industrial-Grade Performance",
    description: "High-purity and fast-dissolving, Sodium Metasilicate Anhydrous delivers exceptional cleaning, corrosion inhibition, and alkalinity control. Ideal for heavy-duty detergents, metal treatment, ceramics, and construction chemicals.",
    features: ["Heavy-Duty Detergent Formulations", "Metal Surface Treatment & Corrosion Inhibition", "Ceramics, Adhesives & Construction Chemicals"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    category: "Sodium Orthosilicate",
    title: "Sodium Orthosilicate for Advanced Surface Protection",
    description: "A high-alkalinity compound providing excellent corrosion inhibition and metal passivation. Ideal for industrial cleaning, coatings, and water treatment formulations requiring stable, eco-friendly performance.",
    features: ["Corrosion & Metal Protection", "Industrial Cleaning Agents", "Water Treatment Chemicals"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop",
  },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Sodium Silicate Liquid");
  const activeProduct = products.find(p => p.category === activeCategory) || products[0];

  return (
    <section 
      id="products" 
      className="section-padding relative"
      style={{
        backgroundImage: 'url("/background-image.png")',
        backgroundSize: "300px 300px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="lg:max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="section-subtitle">Products</span>
            </div>
            <h2 className="section-title">
              Delivering Purity and Performance in Every Product
            </h2>
          </div>
          <Link to="/products">
            <Button className="btn-outline bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-3">
            <div className="space-y-2">
              {productCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 flex items-center justify-between group ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-foreground hover:bg-background border border-border hover:border-primary/30"
                  }`}
                >
                  <span className="font-medium">{category}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    activeCategory === category ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Product Detail */}
          <div className="lg:col-span-9">
            <div className="bg-background rounded-2xl border border-border overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-square lg:aspect-auto relative overflow-hidden">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-display font-semibold text-foreground mb-4 leading-tight">
                    {activeProduct.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {activeProduct.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {activeProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/products">
                    <Button className="btn-primary group">
                      Read More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
