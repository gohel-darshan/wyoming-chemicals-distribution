import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PartnersSection from "@/components/PartnersSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ProductsSection />
        <WhyChooseSection />
        <PartnersSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
