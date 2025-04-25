
import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import MatchSelector from "@/components/home/MatchSelector";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/AppSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import StatsSection from "@/components/dashboard/StatsSection";

const Index = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-black text-white flex">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 overflow-y-auto pb-8">
            <div className="relative z-10">
              <HeroSection />
              <StatsSection />
              <MatchSelector />
              <Testimonials />
              <CTASection />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
