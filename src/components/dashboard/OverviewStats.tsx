
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

const statsData = [
  {
    title: "Win Rate",
    value: "68%",
    trend: "+5.2%",
    trendUp: true,
  },
  {
    title: "Monthly Profit",
    value: "€1,284",
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

const timeframes = ["Today", "This Week", "This Month", "This Year"];

const OverviewStats = () => {
  const [activeTimeframe, setActiveTimeframe] = useState("This Month");
  
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400">Welcome back, here's your betting overview</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
          {timeframes.map((timeframe) => (
            <Button
              key={timeframe}
              variant={activeTimeframe === timeframe ? "default" : "outline"}
              onClick={() => setActiveTimeframe(timeframe)}
              className={activeTimeframe === timeframe 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "bg-transparent border-white/10 text-gray-300 hover:bg-white/5"
              }
              size="sm"
            >
              {timeframe}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <Card key={index} className="bg-black/40 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300">
            <CardContent className="p-5">
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <div className="flex justify-between items-end mt-2">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className={`flex items-center ${stat.trendUp ? 'text-green-400' : 'text-red-400'} text-sm`}>
                  {stat.trendUp ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                  <span>{stat.trend}</span>
                </div>
              </div>
              <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${stat.trendUp ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-red-500 to-red-400'}`} 
                  style={{ width: stat.trendUp ? '70%' : '30%' }}
                ></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OverviewStats;
