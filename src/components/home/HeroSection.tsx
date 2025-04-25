
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const rotatingTexts = [
  "Expert Predictions",
  "Live Odds",
  "AI Analysis",
  "Win Consistently"
];

const stats = [
  { value: "98%", label: "Accuracy" },
  { value: "2.7x", label: "Avg. Return" },
  { value: "1500+", label: "Daily Picks" },
  { value: "24/7", label: "Support" }
];

interface HeroSectionProps {
  onDashboardClick?: () => void;
}

const HeroSection = ({ onDashboardClick }: HeroSectionProps) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[90px] animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Bet Smarter With{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                AI-Powered
              </span>{" "}
              <span className="block relative min-h-[1.2em]">
                <span className="absolute opacity-0 animate-fade-in">
                  {rotatingTexts[textIndex]}
                </span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl">
              Our expert analytics combine machine learning with professional insights
              to give you the edge in sports betting predictions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={onDashboardClick}
              >
                Go to Dashboard
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                View Today's Predictions
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:block">
            <Card className="bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-b border-white/10">
                  <h3 className="text-lg font-medium text-white">Today's Featured Match</h3>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-900/50 rounded-full mb-2 mx-auto flex items-center justify-center text-xl font-bold">ARS</div>
                      <div className="text-sm font-semibold">Arsenal</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-400">VS</div>
                      <div className="text-xs text-gray-500 mt-1">20:00 Today</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-900/50 rounded-full mb-2 mx-auto flex items-center justify-center text-xl font-bold">CHE</div>
                      <div className="text-sm font-semibold">Chelsea</div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-300">AI Prediction</span>
                      <span className="text-xs bg-blue-500/30 text-blue-300 px-2 py-0.5 rounded-full">85% Confidence</span>
                    </div>
                    <div className="text-lg font-bold text-white">Home Win (Arsenal)</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <div>
                        <div className="text-xs opacity-80">1</div>
                        <div>2.10</div>
                      </div>
                    </Button>
                    <Button className="bg-blue-900/50 hover:bg-blue-900/70">
                      <div>
                        <div className="text-xs opacity-80">X</div>
                        <div>3.20</div>
                      </div>
                    </Button>
                    <Button className="bg-blue-900/50 hover:bg-blue-900/70">
                      <div>
                        <div className="text-xs opacity-80">2</div>
                        <div>3.40</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
