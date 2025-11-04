import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink } from "lucide-react";

const products = [
  {
    name: "Kicia Kocia gotuje",
    price: "9.90 zł",
    image: "https://a.allegroimg.com/original/11cee3/f3c94fad4352bcba61e6a1cd1a2c",
    description: "Dzisiaj Kicia Kocia spędza dzień z babcią w kuchni!",
    link: "https://allegro.pl/oferta/10479364858",
  },
  {
    name: "Kicia Kocia jest chora",
    price: "9.90 zł",
    image: "https://a.allegroimg.com/original/114b40/c204af1e4d4299a5188dd39791b8",
    description: "Jak Kicia Kocia poradziła sobie z chorobą",
    link: "https://allegro.pl/oferta/10479387466",
  },
  {
    name: "Kicia Kocia ma braciszka",
    price: "9.90 zł",
    image: "https://a.allegroimg.com/original/110f9a/9bb50be5494d80a5f0ffe64f27ee",
    description: "Kicia Kocia będzie miała braciszka Nunusia!",
    link: "https://allegro.pl/oferta/10479405791",
  },
  {
    name: "Kicia Kocia mówi NIE!",
    price: "9.90 zł",
    image: "https://a.allegroimg.com/original/11729b/a6bad61c42548abf8319b9d6fdb4",
    description: "Kicia Kocia idzie z mamą na zakupy",
    link: "https://allegro.pl/oferta/10479416177",
  },
  {
    name: "Bajki na dobranoc",
    price: "12.60 zł",
    image: "https://a.allegroimg.com/original/11b8ea/db9e321f4ab0a27a841a5ca0d0f3",
    description: "Opowiadania dla dzieci do snu",
    link: "https://allegro.pl/oferta/10207579765",
  },
  {
    name: "Mój pierwszy elementarz",
    price: "14.17 zł",
    image: "https://a.allegroimg.com/original/1195ff/cd1da2624f6197d9ecd3ba6c2f79",
    description: "Czytamy metodą sylabową",
    link: "https://allegro.pl/oferta/10208534675",
  },
  {
    name: "Ale pary - Pojazdy",
    price: "12.00 zł",
    image: "https://a.allegroimg.com/original/1151d7/42e576ec47ca99ff481ac6ff792f",
    description: "Gra karciana dla całej rodziny",
    link: "https://allegro.pl/oferta/10212632874",
  },
  {
    name: "Już woła szkoła! Szlaczki",
    price: "3.40 zł",
    image: "https://a.allegroimg.com/original/11eb88/a48c08cf48bebb72caa8844d5391",
    description: "Nauka pisania i wzorki",
    link: "https://allegro.pl/oferta/10212806407",
  },
];

export function ProductGallery() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
          Nasze bestsellery
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Najchętniej wybierane produkty przez naszych klientów! 🏆
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-full aspect-square mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {product.description}
                    </p>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {product.price}
                    </p>
                    <Button 
                      asChild
                      className="w-full"
                      variant="default"
                    >
                      <a 
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Zobacz na Allegro
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-8">
          <Button 
            size="lg" 
            variant="outline"
            asChild
          >
            <a 
              href="https://allegro.pl/uzytkownik/happykiddy_pl" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Zobacz wszystkie produkty
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
