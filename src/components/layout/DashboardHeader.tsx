
import { Bell, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const DashboardHeader = () => {
  const { toast } = useToast();

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have no new notifications",
    });
  };

  return (
    <header className="h-16 border-b border-white/10 px-4 flex items-center justify-between sticky top-0 z-30 bg-black/80 backdrop-blur-lg">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          BetSpark
        </div>
      </div>

      <div className="hidden md:flex items-center max-w-md w-full relative">
        <Search className="absolute left-3 h-4 w-4 text-gray-400" />
        <Input
          className="bg-white/5 border-white/10 pl-10 text-sm text-white placeholder:text-gray-400"
          placeholder="Search matches, teams..."
        />
      </div>

      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white/80 hover:text-white"
          onClick={handleNotificationClick}
        >
          <Bell className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white/80 hover:text-white"
        >
          <User className="h-5 w-5" />
        </Button>
        <Button
          className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white"
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
