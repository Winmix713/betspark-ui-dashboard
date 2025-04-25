
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import MatchSelector from "@/components/home/MatchSelector";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <MatchSelector />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Index;
