
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Tab, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

interface Match {
  id: number;
  team1: string;
  team2: string;
  odds1: number;
  odds2: number;
  drawOdds: number;
  time: string;
  league: string;
  prediction: string;
  confidenceLevel: number;
  teamLogo1?: string;
  teamLogo2?: string;
}

const SAMPLE_MATCHES: Match[] = [
  {
    id: 1,
    team1: "Arsenal",
    team2: "Chelsea",
    odds1: 2.1,
    odds2: 3.4,
    drawOdds: 3.2,
    time: "Today, 20:00",
    league: "Premier League",
    prediction: "Home Win",
    confidenceLevel: 85,
  },
  {
    id: 2,
    team1: "Liverpool",
    team2: "Man City",
    odds1: 2.5,
    odds2: 2.8,
    drawOdds: 3.0,
    time: "Today, 22:00",
    league: "Premier League",
    prediction: "Draw",
    confidenceLevel: 65,
  },
  {
    id: 3,
    team1: "Real Madrid",
    team2: "Barcelona",
    odds1: 1.9,
    odds2: 3.2,
    drawOdds: 3.5,
    time: "Tomorrow, 21:00",
    league: "La Liga",
    prediction: "Away Win",
    confidenceLevel: 70,
  },
  {
    id: 4,
    team1: "Bayern Munich",
    team2: "Dortmund",
    odds1: 1.8,
    odds2: 3.6,
    drawOdds: 3.4,
    time: "Tomorrow, 19:30",
    league: "Bundesliga",
    prediction: "Home Win",
    confidenceLevel: 90,
  },
];

const matchFilterOptions = ["All", "Today", "Tomorrow", "Featured", "Top Picks"];

const MatchSelector = () => {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const { toast } = useToast();

  const handleBet = (matchId: number, team: string, odds: number) => {
    setSelectedMatch(matchId);
    toast({
      title: "Bet Placed!",
      description: `You selected ${team} with odds ${odds}`,
    });
  };

  const getConfidenceBadgeColor = (level: number) => {
    if (level >= 80) return "bg-green-500/30 text-green-300";
    if (level >= 60) return "bg-yellow-500/30 text-yellow-300";
    return "bg-red-500/30 text-red-300";
  };

  return (
    <div className="w-full mb-8">
      <Card className="bg-black/40 backdrop-blur-xl border border-white/10">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <CardTitle className="text-lg font-medium text-white">
              Top Predictions
            </CardTitle>
            
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
              <Tabs defaultValue="All" className="w-full">
                <TabsList className="bg-black/40 border border-white/10">
                  {matchFilterOptions.map((option) => (
                    <TabsTrigger 
                      key={option} 
                      value={option} 
                      className="data-[state=active]:bg-blue-600 text-white"
                      onClick={() => setActiveFilter(option)}
                    >
                      {option}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SAMPLE_MATCHES.map((match) => (
              <div
                key={match.id}
                className={`bg-white/5 border ${
                  selectedMatch === match.id ? "border-blue-500" : "border-white/5"
                } rounded-lg p-4 hover:border-blue-500/50 transition-all duration-300 cursor-pointer`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-blue-300 font-medium bg-blue-500/20 px-2 py-1 rounded">
                    {match.league}
                  </span>
                  <span className="text-xs text-gray-400">{match.time}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-sm font-bold">
                      {match.team1.substring(0, 3).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium">{match.team1}</span>
                  </div>
                  <div className="text-xs font-medium bg-white/5 px-2 py-1 rounded text-gray-300">VS</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{match.team2}</span>
                    <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-sm font-bold">
                      {match.team2.substring(0, 3).toUpperCase()}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap gap-2 justify-between items-center">
                    <div className="flex gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded ${getConfidenceBadgeColor(match.confidenceLevel)}`}>
                        {match.confidenceLevel}% Confidence
                      </span>
                      <span className="text-xs text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded">
                        {match.prediction}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400">
                      <span className="text-gray-500">AI Analysis</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <Button
                      onClick={() => handleBet(match.id, match.team1, match.odds1)}
                      className={`${
                        match.prediction === "Home Win" 
                          ? "bg-blue-600 hover:bg-blue-700" 
                          : "bg-blue-900/40 hover:bg-blue-900/60"
                      }`}
                      size="sm"
                    >
                      <div>
                        <div className="text-xs mb-0.5 opacity-80">1</div>
                        <div className="font-medium">{match.odds1}</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleBet(match.id, "Draw", match.drawOdds)}
                      className={`${
                        match.prediction === "Draw" 
                          ? "bg-blue-600 hover:bg-blue-700" 
                          : "bg-blue-900/40 hover:bg-blue-900/60"
                      }`}
                      size="sm"
                    >
                      <div>
                        <div className="text-xs mb-0.5 opacity-80">X</div>
                        <div className="font-medium">{match.drawOdds}</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleBet(match.id, match.team2, match.odds2)}
                      className={`${
                        match.prediction === "Away Win" 
                          ? "bg-blue-600 hover:bg-blue-700" 
                          : "bg-blue-900/40 hover:bg-blue-900/60"
                      }`}
                      size="sm"
                    >
                      <div>
                        <div className="text-xs mb-0.5 opacity-80">2</div>
                        <div className="font-medium">{match.odds2}</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            >
              View All Predictions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchSelector;
