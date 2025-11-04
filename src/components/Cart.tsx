import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Trash2, ShoppingCart } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  link: string;
  image?: string;
  price?: string;
}

export function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const goToAllegro = () => {
    window.open("https://allegro.pl/uzytkownik/happykiddy_pl", "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl font-semibold mb-2">Twój koszyk jest pusty</h3>
        <p className="text-muted-foreground mb-6">
          Dodaj produkty z naszej oferty na Allegro!
        </p>
        <Button onClick={goToAllegro}>
          Przejdź do sklepu <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id}>
          <CardContent className="p-4 flex items-center gap-4">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
            )}
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              {item.price && <p className="text-primary font-bold">{item.price}</p>}
            </div>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeItem(item.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
      <div className="flex justify-end gap-4 pt-4">
        <Button variant="outline" onClick={() => setItems([])}>
          Wyczyść koszyk
        </Button>
        <Button onClick={goToAllegro}>
          Przejdź do Allegro <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
