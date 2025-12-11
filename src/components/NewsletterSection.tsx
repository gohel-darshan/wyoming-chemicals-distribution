import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    }
  };

  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Logo */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-display font-bold text-2xl">A</span>
              </div>
              <div>
                <span className="font-display font-bold text-3xl text-white">ANKIT</span>
                <span className="block text-sm text-white/80 tracking-widest uppercase">Silicate</span>
              </div>
            </div>
          </div>

          {/* Newsletter Content */}
          <div className="lg:col-span-9">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="lg:flex-1">
                <p className="text-xl text-white/90 font-medium">
                  Subscribe for the latest news. Stay updated on the latest trends.
                </p>
              </div>
              <div className="lg:flex-shrink-0">
                <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-white text-primary hover:bg-white/90 px-8 font-semibold"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;