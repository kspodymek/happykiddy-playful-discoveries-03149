import { ExternalLink, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground/5 py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-primary mb-2">
            HappyKiddy
          </h3>
          <p className="text-lg text-foreground/80 font-medium">
            Zamiast nudy – HappyKiddy!
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Tu nauka i zabawa idą łapką w łapkę 🐾
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href="https://allegro.pl/uzytkownik/happykiddy_pl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            Kup na Allegro
          </a>
          
          <span className="text-muted-foreground">|</span>
          
          <a
            href="mailto:sklephappykiddy@gmail.com"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
          >
            <Mail className="h-4 w-4" />
            Kontakt
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HappyKiddy.pl - Wszystkie prawa zastrzeżone
          </p>
        </div>
      </div>
    </footer>
  );
}
