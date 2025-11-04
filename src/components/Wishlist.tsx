import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Heart, ExternalLink, Trash2 } from "lucide-react";
import { User } from "@supabase/supabase-js";

interface WishlistItem {
  id: string;
  product_name: string;
  product_link: string;
  product_image: string | null;
  product_price: string | null;
}

export function Wishlist() {
  const [items, setItems] = useState<WishlistItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchWishlist();
    } else {
      setItems([]);
    }
  }, [user]);

  const fetchWishlist = async () => {
    const { data, error } = await supabase
      .from("wishlist_items")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setItems(data);
    }
  };

  const removeItem = async (id: string) => {
    const { error } = await supabase
      .from("wishlist_items")
      .delete()
      .eq("id", id);

    if (error) {
      toast({
        variant: "destructive",
        title: "Błąd",
        description: "Nie udało się usunąć produktu.",
      });
    } else {
      toast({
        title: "Usunięto",
        description: "Produkt został usunięty z listy życzeń.",
      });
      fetchWishlist();
    }
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl font-semibold mb-2">Zaloguj się, aby zobaczyć listę życzeń</h3>
        <p className="text-muted-foreground">
          Musisz być zalogowany, aby zarządzać listą życzeń.
        </p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl font-semibold mb-2">Twoja lista życzeń jest pusta</h3>
        <p className="text-muted-foreground">
          Dodaj produkty, które Cię interesują!
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id}>
          <CardContent className="p-4">
            {item.product_image && (
              <img
                src={item.product_image}
                alt={item.product_name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="font-semibold mb-2">{item.product_name}</h3>
            {item.product_price && (
              <p className="text-primary font-bold mb-4">{item.product_price}</p>
            )}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                asChild
              >
                <a href={item.product_link} target="_blank" rel="noopener noreferrer">
                  Zobacz <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
