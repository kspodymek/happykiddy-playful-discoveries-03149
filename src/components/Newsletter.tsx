import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { z } from "zod";

const emailSchema = z.string().trim().email("Nieprawidłowy adres email").max(255, "Email może mieć maksymalnie 255 znaków");

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    try {
      emailSchema.parse(email);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          variant: "destructive",
          title: "Błąd walidacji",
          description: error.errors[0].message,
        });
      }
      return;
    }
    
    setIsLoading(true);

    // Simulate submission without database
    setTimeout(() => {
      toast({
        title: "Dziękujemy!",
        description: "Zapisano do newslettera. Wkrótce się odezwiemy!",
      });
      setEmail("");
      setIsLoading(false);
    }, 500);
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
