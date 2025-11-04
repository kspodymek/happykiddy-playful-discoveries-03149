import { Shield, Truck, Award, Heart } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Bezpieczne zakupy",
    description: "100% gwarancja zwrotu",
  },
  {
    icon: Truck,
    title: "Szybka dostawa",
    description: "Wysyłka w 24h",
  },
  {
    icon: Award,
    title: "Najwyższa jakość",
    description: "Sprawdzone produkty",
  },
  {
    icon: Heart,
    title: "500+ zadowolonych rodzin",
    description: "5⭐ opinie klientów",
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:scale-105"
            >
              <badge.icon className="h-10 w-10 md:h-12 md:w-12 text-primary mb-3" />
              <h3 className="font-bold text-sm md:text-base text-foreground mb-1">
                {badge.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
