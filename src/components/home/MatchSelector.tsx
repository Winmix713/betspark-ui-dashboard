
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface Match {
  id: number;
  team1: string;
  team2: string;
  odds1: number;
  odds2: number;
  time: string;
}

const SAMPLE_MATCHES: Match[] = [
  {
    id: 1,
    team1: "Arsenal",
    team2: "Chelsea",
    odds1: 2.1,
    odds2: 3.4,
    time: "Today, 20:00",
  },
  {
    id: 2,
    team1: "Liverpool",
    team2: "Man City",
    odds1: 2.5,
    odds2: 2.8,
    time: "Today, 22:00",
  },
  {
    id: 3,
    team1: "Real Madrid",
    team2: "Barcelona",
    odds1: 1.9,
    odds2: 3.2,
    time: "Tomorrow, 21:00",
  },
];

const MatchSelector = () => {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const { toast } = useToast();

  const handleBet = (matchId: number, team: string, odds: number) => {
    setSelectedMatch(matchId);
    toast({
      title: "Bet Placed!",
      description: `You selected ${team} with odds ${odds}`,
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-900/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          Today's Top Matches
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Select a match and place your bet with the best odds
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_MATCHES.map((match) => (
            <Card
              key={match.id}
              className={`bg-black/40 backdrop-blur-xl border-white/10 hover:border-blue-500/50 transition-all duration-300 ${
                selectedMatch === match.id ? "border-blue-500" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-white">{match.team1} vs {match.team2}</CardTitle>
                <CardDescription className="text-gray-400">
                  {match.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between gap-4">
                  <Button
                    onClick={() => handleBet(match.id, match.team1, match.odds1)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    {match.team1}
                    <span className="ml-2 text-sm opacity-90">{match.odds1}</span>
                  </Button>
                  <Button
                    onClick={() => handleBet(match.id, match.team2, match.odds2)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                  >
                    {match.team2}
                    <span className="ml-2 text-sm opacity-90">{match.odds2}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MatchSelector;
