import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/AppSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import OverviewStats from "@/components/dashboard/OverviewStats";
import MatchSelector from "@/components/dashboard/MatchSelector";
import PerformanceCharts from "@/components/dashboard/PerformanceCharts";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UpcomingMatches from "@/components/dashboard/UpcomingMatches";

const Dashboard = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen bg-black text-white flex">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 overflow-y-auto pb-8">
            <div className="max-w-7xl mx-auto w-full px-4 py-6">
              <OverviewStats />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <div className="lg:col-span-2">
                  <PerformanceCharts />
                  <MatchSelector />
                </div>
                <div className="space-y-6">
                  <UpcomingMatches />
                  <RecentActivity />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
