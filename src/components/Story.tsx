import { Button } from "@/components/ui/button";
import { Heart, ExternalLink } from "lucide-react";

export function Story() {
  return (
    <section id="story" className="py-20 px-4 bg-gradient-to-br from-secondary/20 via-background to-accent/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 mx-auto mb-4 text-accent animate-float" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Jak to się zaczęło?
          </h2>
        </div>

        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-lg">
          <p className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed">
            Pewnego dnia, między wieżą z klocków a trzecią filiżanką kawy, pomyślałam:
            <span className="font-semibold"> „Czemu nie podzielić się tą radością z innymi rodzicami?"</span> ☕🧩
          </p>

          <p className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed">
            Tak powstało <span className="text-primary font-bold">HappyKiddy</span> – miejsce, w którym nauka i zabawa robią wspólny plan dnia.
          </p>

          <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
            Wierzę, że dzieci uczą się najlepiej wtedy, gdy śmieją się najgłośniej.
            Dlatego w naszym sklepie znajdziesz wszystko, co inspiruje do wspólnej zabawy i pomaga odkrywać świat razem z maluchem.
          </p>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="playful"
              asChild
              className="bg-gradient-to-r from-secondary via-accent to-primary hover:opacity-90"
            >
              <a 
                href="https://allegro.pl/uzytkownik/happykiddy_pl" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                💛 Poznaj nasze produkty na Allegro
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
