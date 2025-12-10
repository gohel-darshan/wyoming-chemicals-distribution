export interface Product {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  image: string;
  applications: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  industries: string[];
}

export const products: Product[] = [
  {
    id: "sodium-silicate-liquid",
    title: "Sodium Silicate Liquid for Industrial Applications",
    shortTitle: "Sodium Silicate Liquid",
    description: "A high-performance bonding and sealing solution ideal for use in detergents, cement, paper, and more. Our liquid silicates ensure superior adhesion, stability, and durability across demanding industrial processes.",
    fullDescription: "Sodium Silicate Liquid, commonly known as water glass, is one of our flagship products. This versatile chemical compound is formed by fusing high-purity silica sand and soda ash at high temperatures, followed by dissolution in water. Our liquid silicate is available in various ratios and concentrations to meet specific industry requirements. The product offers excellent bonding, sealing, and binding properties, making it indispensable across multiple industrial applications.",
    image: "https://www.ankitsilicate.com/assets/images/home/product-home-1.png",
    applications: [
      "Adhesive & Binder Applications",
      "Water Treatment & Soil Stabilization",
      "Cleaning & Detergent Manufacturing",
      "Paper & Pulp Industry",
      "Cement & Concrete Applications",
      "Textile Processing"
    ],
    specifications: [
      { label: "Physical Form", value: "Clear to slightly hazy liquid" },
      { label: "Silica Content (SiO2)", value: "25-30%" },
      { label: "Sodium Oxide (Na2O)", value: "8-14%" },
      { label: "Ratio (SiO2:Na2O)", value: "1.8 to 3.3" },
      { label: "Specific Gravity", value: "1.30 - 1.55 g/cm³" },
      { label: "pH Value", value: "11 - 13" }
    ],
    features: [
      "High bonding strength",
      "Excellent thermal stability",
      "Good film-forming properties",
      "Non-toxic and eco-friendly",
      "Customizable ratios available",
      "Consistent quality and purity"
    ],
    industries: ["Detergent", "Ceramic", "Foundry", "Construction", "Paper", "Textile"]
  },
  {
    id: "sodium-silicate-powder",
    title: "Sodium Silicate Powder for Dry Formulations",
    shortTitle: "Sodium Silicate Powder",
    description: "Engineered for dry chemical applications, our Sodium Silicate Powder offers excellent stability, long shelf life, and easy integration into solid blends. It's ideal for industries that demand precision and performance in powdered form.",
    fullDescription: "Sodium Silicate Powder is produced through a controlled spray-drying process of liquid sodium silicate. This dry form retains all the beneficial properties of liquid silicate while offering advantages of easier handling, storage, and transportation. The powder dissolves readily in water and is perfect for applications where dry mixing is preferred.",
    image: "https://www.ankitsilicate.com/assets/images/home/product-home-2.png",
    applications: [
      "Dry Detergent Formulations",
      "Concrete & Construction Additives",
      "Ceramic & Refractory Production",
      "Welding Electrode Coating",
      "Tile Adhesives",
      "Drilling Mud Additives"
    ],
    specifications: [
      { label: "Physical Form", value: "Free-flowing white powder" },
      { label: "Silica Content (SiO2)", value: "65-75%" },
      { label: "Sodium Oxide (Na2O)", value: "20-30%" },
      { label: "Ratio (SiO2:Na2O)", value: "2.0 to 3.3" },
      { label: "Bulk Density", value: "0.5 - 0.8 g/cm³" },
      { label: "Moisture Content", value: "< 5%" }
    ],
    features: [
      "Easy to handle and store",
      "Long shelf life",
      "Quick dissolution in water",
      "Precise dosing capability",
      "No special storage requirements",
      "Cost-effective transportation"
    ],
    industries: ["Detergent", "Construction", "Ceramic", "Welding", "Oil & Gas"]
  },
  {
    id: "sodium-silicate-glass",
    title: "High-Purity Sodium Silicate Glass",
    shortTitle: "Sodium Silicate Glass",
    description: "A foundational material for liquid silicate production, our Sodium Silicate Glass delivers exceptional purity, stability, and consistency for advanced industrial use.",
    fullDescription: "Sodium Silicate Glass, also known as cullet, is the solid form of sodium silicate produced by fusing silica sand and soda ash in high-temperature furnaces. This glass-like material serves as the primary raw material for producing liquid sodium silicate and other silicate derivatives. Our silicate glass is manufactured under strict quality controls to ensure consistent chemical composition and purity.",
    image: "https://www.ankitsilicate.com/assets/images/home/product-home-2.png",
    applications: [
      "Raw Material for Liquid Silicates",
      "Glass & Ceramics Manufacturing",
      "Industrial Adhesive Formulations",
      "Refractory Production",
      "Foundry Binders",
      "Chemical Manufacturing"
    ],
    specifications: [
      { label: "Physical Form", value: "Solid glass lumps/granules" },
      { label: "Silica Content (SiO2)", value: "65-75%" },
      { label: "Sodium Oxide (Na2O)", value: "20-30%" },
      { label: "Ratio (SiO2:Na2O)", value: "2.0 to 3.3" },
      { label: "Appearance", value: "Transparent to translucent" },
      { label: "Particle Size", value: "As per requirement" }
    ],
    features: [
      "High purity levels",
      "Consistent chemical composition",
      "Easy to dissolve",
      "Long-term storage stability",
      "Versatile raw material",
      "Available in various ratios"
    ],
    industries: ["Chemical", "Glass", "Ceramic", "Foundry", "Construction"]
  },
  {
    id: "metasilicate-pentahydrate",
    title: "Metasilicate Pentahydrate for Versatile Cleaning",
    shortTitle: "Sodium Metasilicate Pentahydrate",
    description: "An effective cleaning and degreasing agent, Metasilicate Pentahydrate offers high alkalinity with controlled reactivity-ideal for demanding industrial and household cleaning applications.",
    fullDescription: "Sodium Metasilicate Pentahydrate (Na2SiO3·5H2O) is a crystalline compound with five molecules of water of crystallization. It offers a balance of alkalinity and silica content, making it effective for cleaning and degreasing applications. This grade provides controlled reactivity and is gentler compared to anhydrous forms while still delivering excellent performance.",
    image: "https://www.ankitsilicate.com/assets/images/home/product-home-4.png",
    applications: [
      "Industrial & Household Cleaners",
      "Metal Surface Treatment",
      "Textile and Leather Processing",
      "Laundry Detergents",
      "Degreasing Formulations",
      "Dishwashing Compounds"
    ],
    specifications: [
      { label: "Physical Form", value: "White crystalline granules" },
      { label: "Silica Content (SiO2)", value: "28-30%" },
      { label: "Sodium Oxide (Na2O)", value: "28-30%" },
      { label: "Water of Crystallization", value: "5 molecules (42-45%)" },
      { label: "pH (1% Solution)", value: "12.5 - 13.0" },
      { label: "Bulk Density", value: "0.9 - 1.1 g/cm³" }
    ],
    features: [
      "Excellent cleaning properties",
      "Good buffering capacity",
      "Moderate alkalinity",
      "Easy to dissolve",
      "Safe for various surfaces",
      "Effective degreasing agent"
    ],
    industries: ["Cleaning", "Textile", "Leather", "Metal Processing", "Household"]
  },
  {
    id: "metasilicate-nonahydrate",
    title: "Metasilicate Nonahydrate for Safer Cleaning Solutions",
    shortTitle: "Sodium Metasilicate Nonahydrate",
    description: "Highly soluble and gentle on surfaces, this grade is widely used in non-corrosive cleaning products, fireproofing, and water softening systems.",
    fullDescription: "Sodium Metasilicate Nonahydrate (Na2SiO3·9H2O) contains nine molecules of water of crystallization, making it the mildest form of sodium metasilicate. Its high water content provides excellent solubility and gentle cleaning action. This grade is ideal for applications where lower alkalinity and surface-safe cleaning are required.",
    image: "https://www.ankitsilicate.com/assets/images/home/product-home-5.png",
    applications: [
      "Gentle Cleaning Formulations",
      "Fireproofing Materials",
      "Water Softening Applications",
      "Household Cleaners",
      "Food Industry Cleaning",
      "Dairy Equipment Cleaning"
    ],
    specifications: [
      { label: "Physical Form", value: "White crystalline powder/granules" },
      { label: "Silica Content (SiO2)", value: "21-23%" },
      { label: "Sodium Oxide (Na2O)", value: "21-23%" },
      { label: "Water of Crystallization", value: "9 molecules (55-58%)" },
      { label: "pH (1% Solution)", value: "12.0 - 12.5" },
      { label: "Bulk Density", value: "0.8 - 1.0 g/cm³" }
    ],
    features: [
      "High solubility",
      "Gentle on surfaces",
      "Lower alkalinity",
      "Non-corrosive",
      "Excellent for sensitive applications",
      "Safe for food industry use"
    ],
    industries: ["Food Processing", "Dairy", "Household", "Fire Safety", "Water Treatment"]
  },
  {
    id: "metasilicate-anhydrous",
    title: "Metasilicate Anhydrous for Industrial-Grade Performance",
    shortTitle: "Sodium Metasilicate Anhydrous",
    description: "High-purity and fast-dissolving, Sodium Metasilicate Anhydrous delivers exceptional cleaning, corrosion inhibition, and alkalinity control. Ideal for heavy-duty detergents, metal treatment, ceramics, and construction chemicals.",
    fullDescription: "Sodium Metasilicate Anhydrous (Na2SiO3) is the water-free form of sodium metasilicate, offering the highest concentration of active ingredients. This powerful compound provides superior alkalinity and cleaning performance, making it ideal for heavy-duty industrial applications where maximum efficacy is required.",
    image: "https://www.ankitsilicate.com/assets/images/home/product-home-6.png",
    applications: [
      "Heavy-Duty Detergent Formulations",
      "Metal Surface Treatment & Corrosion Inhibition",
      "Ceramics, Adhesives & Construction Chemicals",
      "Industrial Degreasers",
      "Boiler Compounds",
      "Textile Processing"
    ],
    specifications: [
      { label: "Physical Form", value: "White powder" },
      { label: "Silica Content (SiO2)", value: "48-52%" },
      { label: "Sodium Oxide (Na2O)", value: "48-52%" },
      { label: "Water Content", value: "< 1%" },
      { label: "pH (1% Solution)", value: "13.0 - 13.5" },
      { label: "Bulk Density", value: "0.7 - 0.9 g/cm³" }
    ],
    features: [
      "Highest active content",
      "Powerful cleaning action",
      "Excellent corrosion inhibition",
      "Strong buffering capacity",
      "Cost-effective formulation",
      "Long shelf life"
    ],
    industries: ["Industrial Cleaning", "Metal Processing", "Ceramic", "Construction", "Textile"]
  },
  {
    id: "sodium-orthosilicate",
    title: "Sodium Orthosilicate for Advanced Surface Protection",
    shortTitle: "Sodium Orthosilicate",
    description: "A high-alkalinity compound providing excellent corrosion inhibition and metal passivation. Ideal for industrial cleaning, coatings, and water treatment formulations requiring stable, eco-friendly performance.",
    fullDescription: "Sodium Orthosilicate (Na4SiO4) is a highly alkaline sodium silicate compound with a low silica-to-soda ratio. It offers exceptional corrosion inhibition properties and is particularly effective in metal protection applications. This specialty chemical is used where high alkalinity and superior corrosion protection are required.",
    image: "https://www.ankitsilicate.com/assets/images/home/product-home-7.png",
    applications: [
      "Corrosion & Metal Protection",
      "Industrial Cleaning Agents",
      "Water Treatment Chemicals",
      "Protective Coatings",
      "Metal Passivation",
      "Rust Prevention"
    ],
    specifications: [
      { label: "Physical Form", value: "White powder/granules" },
      { label: "Silica Content (SiO2)", value: "30-35%" },
      { label: "Sodium Oxide (Na2O)", value: "60-65%" },
      { label: "Ratio (SiO2:Na2O)", value: "0.5 - 1.0" },
      { label: "pH (1% Solution)", value: "13.5 - 14.0" },
      { label: "Bulk Density", value: "0.8 - 1.0 g/cm³" }
    ],
    features: [
      "Highest alkalinity",
      "Superior corrosion protection",
      "Excellent metal passivation",
      "Effective in hard water",
      "Eco-friendly formulation",
      "Stable in storage"
    ],
    industries: ["Metal Processing", "Water Treatment", "Coatings", "Industrial Cleaning"]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
