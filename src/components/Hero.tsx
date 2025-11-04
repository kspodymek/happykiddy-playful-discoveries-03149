import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-nostalgic.jpg";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <img 
        src={heroImage}
        alt="Szczęśliwe dzieci bawiące się zabawkami HappyKiddy"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 via-accent/20 to-background/80" />

      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
        <div className="bg-background/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 inline-block">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-lg">
            Zamiast nudy – <span className="text-primary drop-shadow-md">HappyKiddy!</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-foreground font-semibold max-w-3xl mx-auto drop-shadow-md">
            Gry, książeczki i pomysły, które sprawiają, że każdy dzień z dzieckiem to nowa przygoda.
          </p>

          <Button 
            size="lg" 
            variant="playful"
            asChild
            className="text-lg font-bold shadow-lg hover:shadow-xl bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90"
          >
            <a 
              href="https://allegro.pl/uzytkownik/happykiddy_pl" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Zobacz nasz sklep na Allegro
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <p className="mt-6 text-sm text-foreground font-medium italic drop-shadow">
            Nie bierzemy odpowiedzialności za nadmiar uśmiechów ani bałagan z naklejek 😄
          </p>
        </div>
      </div>
    </section>
  );
}
