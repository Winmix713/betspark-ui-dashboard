
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

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
  {
    id: 5,
    team1: "PSG",
    team2: "Marseille",
    odds1: 1.7,
    odds2: 4.1,
    drawOdds: 3.7,
    time: "Sunday, 20:45",
    league: "Ligue 1",
    prediction: "Home Win",
    confidenceLevel: 80,
  },
  {
    id: 6,
    team1: "Juventus",
    team2: "AC Milan",
    odds1: 2.2,
    odds2: 3.1,
    drawOdds: 3.3,
    time: "Sunday, 18:00",
    league: "Serie A",
    prediction: "Draw",
    confidenceLevel: 60,
  },
];

const matchFilterOptions = ["All Matches", "Today", "Tomorrow", "This Week", "Top Picks"];

const MatchSelector = () => {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All Matches");
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
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Trending Matches
            </h2>
            <p className="text-gray-400 mb-4 md:mb-0">
              Expert predictions with the highest confidence level
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {matchFilterOptions.map((option) => (
              <Button
                key={option}
                variant={activeFilter === option ? "default" : "outline"}
                onClick={() => setActiveFilter(option)}
                className={activeFilter === option 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "border-white/10 text-gray-300 hover:bg-white/5"
                }
                size="sm"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SAMPLE_MATCHES.map((match) => (
            <Card
              key={match.id}
              className={`bg-black/40 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300 ${
                selectedMatch === match.id ? "border-blue-500 ring-1 ring-blue-500/50" : ""
              }`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-blue-300 font-medium bg-blue-500/20 px-2 py-1 rounded">
                    {match.league}
                  </span>
                  <span className="text-xs text-gray-400">{match.time}</span>
                </div>
                <CardTitle className="text-white text-lg">
                  {match.team1} vs {match.team2}
                </CardTitle>
                <div className="mt-1 flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded ${getConfidenceBadgeColor(match.confidenceLevel)}`}>
                    {match.confidenceLevel}% Confidence
                  </span>
                  <span className="text-xs text-blue-300 bg-blue-900/30 px-2 py-0.5 rounded">
                    {match.prediction}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    onClick={() => handleBet(match.id, match.team1, match.odds1)}
                    className={`flex-1 ${
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
                    className={`flex-1 ${
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
                    className={`flex-1 ${
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
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
          >
            View All Predictions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MatchSelector;
