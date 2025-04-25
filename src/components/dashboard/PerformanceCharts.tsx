
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Tab, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const weeklyData = [
  { name: "Mon", wins: 4, losses: 2 },
  { name: "Tue", wins: 7, losses: 3 },
  { name: "Wed", wins: 5, losses: 4 },
  { name: "Thu", wins: 6, losses: 1 },
  { name: "Fri", wins: 8, losses: 3 },
  { name: "Sat", wins: 9, losses: 4 },
  { name: "Sun", wins: 6, losses: 2 },
];

const monthlyProfitData = [
  { name: "Week 1", profit: 240 },
  { name: "Week 2", profit: 320 },
  { name: "Week 3", profit: 180 },
  { name: "Week 4", profit: 430 },
];

const sportDistributionData = [
  { name: "Football", value: 65 },
  { name: "Basketball", value: 20 },
  { name: "Tennis", value: 10 },
  { name: "Other", value: 5 },
];

const COLORS = ["#3b82f6", "#6366f1", "#8b5cf6", "#a855f7"];

const PerformanceCharts = () => {
  return (
    <div className="w-full mb-8">
      <Tabs defaultValue="weekly" className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-xl font-bold text-white">Performance Analytics</h2>
          <TabsList className="bg-black/40 border border-white/10 mt-2 sm:mt-0">
            <TabsTrigger value="weekly" className="data-[state=active]:bg-blue-600 text-white">Weekly</TabsTrigger>
            <TabsTrigger value="monthly" className="data-[state=active]:bg-blue-600 text-white">Monthly</TabsTrigger>
            <TabsTrigger value="sports" className="data-[state=active]:bg-blue-600 text-white">Sports</TabsTrigger>
          </TabsList>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-black/40 backdrop-blur-xl border border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-white">Win/Loss Ratio</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
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
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-xl border border-white/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-white">Monthly Profit</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyProfitData}>
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
                    <Line 
                      type="monotone" 
                      dataKey="profit" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      dot={{ r: 4, fill: "#3B82F6", stroke: "#3B82F6", strokeWidth: 1 }}
                      activeDot={{ r: 6, fill: "#2563EB", stroke: "#fff", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  );
};

export default PerformanceCharts;
