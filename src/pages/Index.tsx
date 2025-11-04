import { Navigation } from "@/components/Navigation";
import { FloatingElements } from "@/components/FloatingElements";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Story } from "@/components/Story";
import { Products } from "@/components/Products";
import { ProductGallery } from "@/components/ProductGallery";
import { ActivityGenerator } from "@/components/ActivityGenerator";
import { Blog } from "@/components/Blog";
import { Newsletter } from "@/components/Newsletter";

import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { ChatWidget } from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      <Navigation />
      <Hero />
      <TrustBadges />
      <div className="scroll-fade-in">
        <Story />
      </div>
      <div className="scroll-fade-in">
        <Products />
      </div>
      <div className="scroll-fade-in">
        <ProductGallery />
      </div>
      <div className="scroll-fade-in">
        <ActivityGenerator />
      </div>
      <div className="scroll-fade-in">
        <WhyUs />
      </div>
      <div className="scroll-fade-in">
        <FAQ />
      </div>
      <div className="scroll-fade-in">
        <Blog />
      </div>
      <Newsletter />
      <Contact />
      <Footer />
      <StickyCTA />
      <ChatWidget />
    </div>
  );
};

export default Index;
