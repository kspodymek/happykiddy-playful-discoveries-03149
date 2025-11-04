import { Mail, Instagram, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
          Masz pytanie, pomysł albo chcesz nam wysłać rysunek swojego malucha?
        </h2>

        <div className="bg-card p-8 md:p-12 rounded-3xl shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className="h-8 w-8 text-primary" />
            <a 
              href="mailto:sklephappykiddy@gmail.com"
              className="text-xl md:text-2xl font-semibold text-primary hover:underline"
            >
              sklephappykiddy@gmail.com
            </a>
          </div>

          <p className="text-lg text-foreground/80 mb-6">
            💬 Wpadnij też do nas na:
          </p>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/happykiddy.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="font-medium">Instagram</span>
            </a>
            
            <span className="text-muted-foreground">|</span>
            
            <a
              href="https://www.facebook.com/happykiddy.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="font-medium">Facebook</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground italic">
            (wkrótce!)
          </p>
        </div>
      </div>
    </section>
  );
}
