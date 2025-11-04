import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past first screen
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isClosed) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-full shadow-2xl animate-pulse">
        <Button
          size="lg"
          asChild
          className="rounded-full font-bold text-base md:text-lg px-6 md:px-8 bg-background hover:bg-background/90 text-foreground shadow-lg"
        >
          <a
            href="https://allegro.pl/uzytkownik/happykiddy_pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden md:inline">Zobacz sklep</span>
            <span className="md:hidden">Sklep</span>
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </Button>
        
        <button
          onClick={() => setIsClosed(true)}
          className="absolute -top-2 -right-2 bg-foreground/80 hover:bg-foreground text-background rounded-full p-1 shadow-md transition-colors"
          aria-label="Zamknij"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
