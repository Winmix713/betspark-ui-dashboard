
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, Calendar, Settings, User, Menu } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Calendar, label: "Matches" },
  { icon: Settings, label: "Settings" },
  { icon: User, label: "Profile" },
];

const leagues = [
  { name: "Premier League", count: 24, active: true },
  { name: "La Liga", count: 18 },
  { name: "Bundesliga", count: 16 },
  { name: "Serie A", count: 20 },
  { name: "Ligue 1", count: 14 },
];

const AppSidebar = () => {
  return (
    <Sidebar variant="sidebar" className="border-r border-white/10">
      <SidebarHeader className="border-b border-white/10">
        <div className="p-2 flex items-center justify-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            BetSpark
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    isActive={item.active}
                    tooltip={item.label}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Leagues</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {leagues.map((league) => (
                <SidebarMenuItem key={league.name}>
                  <SidebarMenuButton
                    isActive={league.active}
                    tooltip={league.name}
                  >
                    <span className="flex-1">{league.name}</span>
                    <span className="bg-blue-900/50 text-xs px-2 py-0.5 rounded-full">
                      {league.count}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-white/10 p-4">
        <div className="bg-blue-900/20 rounded-lg p-3 text-center">
          <p className="text-sm text-blue-300 font-medium mb-2">Upgrade to Pro</p>
          <p className="text-xs text-gray-400">Get premium predictions and analytics</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
