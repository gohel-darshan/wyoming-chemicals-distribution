import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const products = [
  "Sodium Silicate — Liquid",
  "Sodium Silicate — Powder",
  "Sodium Silicate Solid Powder",
  "Sodium Silicate — Glass (Lumps/Cullets)",
  "Sodium Metasilicate Nonahydrate",
  "Sodium Metasilicate Pentahydrate",
  "Sodium Metasilicate Anhydrous",
  "Lithium Silicate — Liquid",
  "Potassium Silicate — Liquid",
  "Potassium Silicate — Powder",
  "Potassium Silicate — Glass",
  "Sodium Orthosilicate",
  "Other (specify in message)",
];

const industries = [
  "Soap and Detergent",
  "Cosmetics",
  "Agriculture",
  "Timber Treatment",
  "Adhesives",
  "Automotive Repair",
  "Food Industry",
  "Water Treatment",
  "Foundries",
  "Petroleum and Oil Drilling",
  "Concrete and General",
  "Chemical Injections",
  "Metals",
  "Ceramics and Refractory",
  "Mining and Mineral Processing",
  "Other",
];

const deliveryTerms = [
  "FOB (Free on Board)",
  "CIF (Cost, Insurance & Freight)",
  "DDP (Delivered Duty Paid)",
];

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    product: "",
    industry: "",
    deliveryTerms: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted successfully! Our team will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      product: "",
      industry: "",
      deliveryTerms: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Request a Quote
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Fill in the form below and our technical sales team will get in touch with a personalized quotation and expert support.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="opacity-80">Opposite CNG Pump, Jetpar Road, Bela Village, Morbi - 363642, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="opacity-80">Domestic: +91 98252 18329</p>
                  <p className="opacity-80">International: +91 97127 96836</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="opacity-80">export@ankitsilicate.com</p>
                  <p className="opacity-80">sales@ankitsilicate.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background text-foreground rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Input
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Country *"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required
                />
                <Select
                  value={formData.product}
                  onValueChange={(value) => setFormData({ ...formData, product: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Product" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Select
                  value={formData.industry}
                  onValueChange={(value) => setFormData({ ...formData, industry: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Application / Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={formData.deliveryTerms}
                  onValueChange={(value) => setFormData({ ...formData, deliveryTerms: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Delivery Terms" />
                  </SelectTrigger>
                  <SelectContent>
                    {deliveryTerms.map((term) => (
                      <SelectItem key={term} value={term}>
                        {term}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <Button type="submit" className="btn-primary w-full">
                Request Quote
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
