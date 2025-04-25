
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/10 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              BetSpark
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white/80 hover:text-white">
              Matches
            </Button>
            <Button variant="ghost" className="text-white/80 hover:text-white">
              Live
            </Button>
            <Button variant="ghost" className="text-white/80 hover:text-white">
              Stats
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button
              variant="ghost"
              className="w-full text-left text-white/80 hover:text-white"
            >
              Matches
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-white/80 hover:text-white"
            >
              Live
            </Button>
            <Button
              variant="ghost"
              className="w-full text-left text-white/80 hover:text-white"
            >
              Stats
            </Button>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
