import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatWidget() {
  const whatsappNumber = "48123456789"; // Zmień na właściwy numer
  const message = "Cześć! Chciałbym zapytać o produkty HappyKiddy 😊";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-24 left-6 z-50 animate-fade-in">
      <Button
        size="lg"
        asChild
        className="rounded-full h-14 w-14 md:h-16 md:w-16 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white p-0 hover:scale-110 transition-transform"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Czat WhatsApp"
        >
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
        </a>
      </Button>
      
      <div className="absolute -top-2 -right-2 h-4 w-4 bg-red-500 rounded-full animate-pulse" />
    </div>
  );
}
