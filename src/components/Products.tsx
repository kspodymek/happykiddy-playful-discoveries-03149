import { Button } from "@/components/ui/button";
import { BookOpen, Gamepad2, Sparkles, ExternalLink, PencilRuler } from "lucide-react";
import booksImage from "@/assets/products-books-nostalgic.jpg";
import gamesImage from "@/assets/products-games-nostalgic.jpg";
import stickersImage from "@/assets/products-stickers-nostalgic.jpg";
import schoolSuppliesImage from "@/assets/products-supplies-nostalgic.jpg";

const products = [
  {
    icon: BookOpen,
    title: "Książeczki edukacyjne",
    description: "Bo nauka może być przytulna. Małe główki, wielkie odkrycia!",
    emoji: "📚",
    image: booksImage,
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Gamepad2,
    title: "Gry i zabawy",
    description: "Radość na planszy – zero ekranów, 100% śmiechu!",
    emoji: "🎲",
    image: gamesImage,
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Sparkles,
    title: "Naklejki i tatuaże",
    description: "Uwaga: istnieje ryzyko, że tata też skończy z tatuażem jednorożca. 🦄😄",
    emoji: "🌟",
    image: stickersImage,
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: PencilRuler,
    title: "Artykuły szkolne",
    description: "Kolorowe kredki, zeszyty i przybory, z którymi szkoła staje się fajniejsza!",
    emoji: "✏️",
    image: schoolSuppliesImage,
    color: "from-primary/15 to-secondary/10",
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
          Co znajdziesz w HappyKiddy?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${product.color} opacity-40`} />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <product.icon className="h-8 w-8 text-primary" />
                  <span className="text-3xl">{product.emoji}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {product.title}
                </h3>
                
                <p className="text-foreground/80 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            asChild
            className="text-lg font-bold"
          >
            <a 
              href="https://allegro.pl/uzytkownik/happykiddy_pl" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Zobacz wszystko na Allegro
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
