
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CheckCircle, XCircle } from "lucide-react";

interface ActivityItem {
  id: number;
  type: "bet" | "win" | "loss" | "system";
  message: string;
  time: string;
  amount?: string;
}

const recentActivities: ActivityItem[] = [
  {
    id: 1,
    type: "win",
    message: "Bayern Munich vs Dortmund bet won",
    time: "2h ago",
    amount: "+€120.00"
  },
  {
    id: 2,
    type: "system",
    message: "New VIP prediction available",
    time: "5h ago"
  },
  {
    id: 3,
    type: "loss",
    message: "Real Madrid vs Barcelona bet lost",
    time: "Yesterday",
    amount: "-€50.00"
  },
  {
    id: 4,
    type: "bet",
    message: "Placed bet on Liverpool vs Chelsea",
    time: "Yesterday",
    amount: "€75.00"
  }
];

const getActivityIcon = (type: string) => {
  switch (type) {
    case "win":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "loss":
      return <XCircle className="h-4 w-4 text-red-500" />;
    case "bet":
      return <Activity className="h-4 w-4 text-blue-500" />;
    default:
      return <Activity className="h-4 w-4 text-gray-500" />;
  }
};

const getActivityColor = (type: string) => {
  switch (type) {
    case "win":
      return "text-green-500";
    case "loss":
      return "text-red-500";
    case "bet":
      return "text-blue-500";
    default:
      return "text-gray-400";
  }
};

const RecentActivity = () => {
  return (
    <Card className="bg-black/40 backdrop-blur-xl border border-white/10">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Recent Activity
          </CardTitle>
          <span className="text-xs text-blue-400 font-medium cursor-pointer">View All</span>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div 
              key={activity.id} 
              className="flex items-center gap-3 py-2"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1">
                <p className="text-sm">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
              {activity.amount && (
                <div className={`text-sm font-medium ${activity.type === "win" ? "text-green-500" : activity.type === "loss" ? "text-red-500" : "text-blue-400"}`}>
                  {activity.amount}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
