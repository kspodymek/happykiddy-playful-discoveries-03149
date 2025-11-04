import { Button } from "@/components/ui/button";
import { Heart, Brain, Rainbow, ExternalLink } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Wspólny czas",
    description: "Bo chwile z dzieckiem są bezcenne.",
    color: "text-accent",
  },
  {
    icon: Brain,
    title: "Rozwój przez zabawę",
    description: "Nauka bez presji, za to z uśmiechem.",
    color: "text-primary",
  },
  {
    icon: Rainbow,
    title: "Pomysły z sercem",
    description: "Każdy produkt testowany przez małych ekspertów.",
    color: "text-secondary",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-foreground">
          Dlaczego rodzice wybierają HappyKiddy?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <feature.icon className={`h-16 w-16 mx-auto mb-6 ${feature.color}`} />
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="secondary"
            asChild
          >
            <a 
              href="https://allegro.pl/uzytkownik/happykiddy_pl" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              💛 Zobacz nasz sklep na Allegro
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
