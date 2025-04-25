
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const statsData = [
  {
    title: "Win Rate",
    value: "68%",
    trend: "+5.2%",
    trendUp: true,
  },
  {
    title: "Predictions",
    value: "1,284",
    trend: "+12.3%",
    trendUp: true,
  },
  {
    title: "ROI",
    value: "24.8%",
    trend: "-2.5%",
    trendUp: false,
  },
  {
    title: "Win Streak",
    value: "7",
    trend: "+3",
    trendUp: true,
  },
];

const chartData = [
  { name: "Mon", wins: 4, losses: 2 },
  { name: "Tue", wins: 7, losses: 3 },
  { name: "Wed", wins: 5, losses: 4 },
  { name: "Thu", wins: 6, losses: 1 },
  { name: "Fri", wins: 8, losses: 3 },
  { name: "Sat", wins: 9, losses: 4 },
  { name: "Sun", wins: 6, losses: 2 },
];

const StatsSection = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Performance Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsData.map((stat) => (
            <Card key={stat.title} className="bg-black/40 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardDescription className="text-gray-400">{stat.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className={`text-sm ${stat.trendUp ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                    {stat.trend}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-4 h-80">
          <h3 className="text-lg font-medium text-white mb-4">Weekly Performance</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "rgba(0, 0, 0, 0.8)", 
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "0.5rem",
                  color: "#fff" 
                }} 
              />
              <Bar dataKey="wins" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="losses" fill="#EF4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
