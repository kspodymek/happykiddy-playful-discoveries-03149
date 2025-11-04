import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import activityImage from "@/assets/activity-fun-vibrant.jpg";

const activities = [
  "Teatrzyk z pluszakami – nowe przedstawienie co 10 minut! 🧸",
  "Wyścigi łyżek z piłeczką pingpongową 🥄",
  "Polowanie na skarby po całym domu (ukryj małe zabawki) 🗺️",
  "Koncert na garnkach i patelniach 🥁",
  "Budowa najwyższej wieży z klocków lub książek 🏗️",
  "Pokaz mody z ubrań z szafy 👗",
  "Malowanie wodą na chodniku 🎨",
  "Piknik w salonie z kocem i przekąskami 🧺",
  "Tworzenie masek z papieru i kolorowanie ich 🎭",
  "Rzucanie woreczkami do pudełek – własne kręgle! 🎯",
  "Tor przeszkód z poduszek i kocy 🏃",
  "Domowe kino z bajką i popcornem 🍿",
  "Pieczenie prostych ciasteczek razem 🍪",
  "Zabawa w sklep – sprzedawanie zabawek 🛒",
  "Robienie baniek mydlanych 🫧",
  "Taniec do ulubionych piosenek 💃",
  "Czytanie książeczki z różnymi głosami postaci 📚",
  "Układanie puzzli razem 🧩",
  "Rysowanie krzyku – kto głośniej namaluje! 🖍️",
  "Zabawa w naśladowanie zwierząt 🦁",
];

export function ActivityGenerator() {
  const [currentActivity, setCurrentActivity] = useState(
    "Kliknij przycisk i pozwól nam wymyślić coś za Ciebie! 🎉"
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const generateActivity = () => {
    setIsAnimating(true);
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    setTimeout(() => {
      setCurrentActivity(randomActivity);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="activity" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
          Nie wiesz, w co się dziś pobawić?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={activityImage}
              alt="Dzieci bawiące się razem"
              loading="lazy"
              className="w-full h-auto rounded-3xl shadow-xl"
            />
          </div>

          <div className="order-1 md:order-2 text-center">
            <div 
              className={`mb-8 p-8 bg-card rounded-2xl shadow-lg border-2 border-primary/20 transition-all duration-300 ${
                isAnimating ? "scale-95 opacity-50" : "scale-100 opacity-100"
              }`}
            >
              <p className="text-xl md:text-2xl text-foreground font-medium min-h-[4rem] flex items-center justify-center">
                {currentActivity}
              </p>
            </div>

            <Button 
              onClick={generateActivity}
              size="lg"
              variant="playful"
              className="animate-bounce-gentle hover:animate-none text-lg font-bold"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Losuj pomysł!
            </Button>

            <p className="mt-6 text-sm text-muted-foreground italic">
              Nie odpowiadamy za niekontrolowane wybuchy śmiechu i konfetti w dywanie 😉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
