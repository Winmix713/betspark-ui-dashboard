
import { useNavigate } from "react-router-dom";
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
import { Home, Calendar, Settings, User, Layout, List, Star, LineChart, Zap } from "lucide-react";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard", active: true },
  { icon: Layout, label: "Matches", path: "/matches" },
  { icon: List, label: "My Bets", path: "/my-bets" },
  { icon: LineChart, label: "Statistics", path: "/statistics" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

const leagues = [
  { name: "Premier League", count: 24, active: true },
  { name: "La Liga", count: 18 },
  { name: "Bundesliga", count: 16 },
  { name: "Serie A", count: 20 },
  { name: "Ligue 1", count: 14 },
];

const AppSidebar = () => {
  const navigate = useNavigate();

  return (
    <Sidebar variant="sidebar" className="border-r border-white/10">
      <SidebarHeader className="border-b border-white/10">
        <div className="p-2 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
            WinMix
          </span>
          <div className="bg-blue-900/30 rounded-md px-2 py-1">
            <span className="text-xs font-medium text-blue-400">PRO</span>
          </div>
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
                    onClick={() => navigate(item.path)}
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
                    <span className={`${league.active ? 'bg-blue-600' : 'bg-blue-900/50'} text-xs px-2 py-0.5 rounded-full`}>
                      {league.count}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Premium Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="VIP Predictions">
                  <Star className="w-4 h-4 text-amber-500" />
                  <span>VIP Predictions</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="AI Analytics">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span>AI Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-white/10 p-4">
        <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-lg p-3">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center">
              <User className="h-4 w-4 text-blue-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-blue-300">Premium Member</p>
            </div>
          </div>
          <div className="bg-black/20 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full w-3/4 rounded-full"></div>
          </div>
          <p className="text-xs text-gray-400 mt-2">75% profile complete</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
