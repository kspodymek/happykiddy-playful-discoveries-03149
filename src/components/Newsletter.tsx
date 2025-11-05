import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    
    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ 
        email,
        user_id: user?.id || null
      }]);

    setIsLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast({
          variant: "destructive",
          title: "Ten email jest już zapisany",
          description: "Jesteś już na naszej liście mailingowej!",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Błąd",
          description: "Nie udało się zapisać do newslettera.",
        });
      }
    } else {
      toast({
        title: "Dziękujemy!",
        description: "Pomyślnie zapisano do newslettera.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto max-w-4xl text-center">
        <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Dołącz do naszego newslettera
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Otrzymuj najnowsze pomysły na zabawy, porady rodzicielskie i informacje o nowościach w HappyKiddy
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Twój email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Zapisywanie..." : "Zapisz się"}
          </Button>
        </form>
      </div>
    </section>
  );
}
