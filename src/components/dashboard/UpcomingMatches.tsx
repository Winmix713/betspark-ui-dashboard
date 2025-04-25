
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeCode: string;
  awayCode: string;
  time: string;
  league: string;
  prediction: string;
  confidence: number;
}

const upcomingMatches: Match[] = [
  {
    id: 1,
    homeTeam: "Manchester United",
    awayTeam: "Arsenal",
    homeCode: "MUN",
    awayCode: "ARS",
    time: "Today, 20:45",
    league: "Premier League",
    prediction: "Home Win",
    confidence: 85,
  },
  {
    id: 2,
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    homeCode: "BAR",
    awayCode: "RMA",
    time: "Tomorrow, 21:00",
    league: "La Liga",
    prediction: "Away Win",
    confidence: 65,
  },
  {
    id: 3,
    homeTeam: "Bayern Munich",
    awayTeam: "Dortmund",
    homeCode: "BAY",
    awayCode: "DOR",
    time: "Wed, 19:30",
    league: "Bundesliga",
    prediction: "Draw",
    confidence: 55,
  }
];

const getConfidenceColor = (confidence: number) => {
  if (confidence >= 80) return "text-green-400";
  if (confidence >= 60) return "text-yellow-400";
  return "text-red-400";
};

const UpcomingMatches = () => {
  return (
    <Card className="bg-black/40 backdrop-blur-xl border border-white/10">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Upcoming Matches
          </CardTitle>
          <span className="text-xs text-blue-400 font-medium cursor-pointer">View All</span>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {upcomingMatches.map((match) => (
            <div 
              key={match.id} 
              className="p-3 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium text-blue-400">{match.league}</span>
                <span className="text-xs text-gray-500">{match.time}</span>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-xs font-bold">
                    {match.homeCode}
                  </div>
                  <span className="text-sm font-medium truncate max-w-[100px]">{match.homeTeam}</span>
                </div>
                <div className="text-xs font-medium bg-white/5 px-2 py-1 rounded">VS</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium truncate max-w-[100px] text-right">{match.awayTeam}</span>
                  <div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-xs font-bold">
                    {match.awayCode}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/5">
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-400">Prediction:</span>
                  <span className="text-xs font-medium">{match.prediction}</span>
                </div>
                <div className={`text-xs font-medium ${getConfidenceColor(match.confidence)}`}>
                  {match.confidence}% Confidence
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingMatches;
