import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Jak długo trwa dostawa?",
    answer: "Standardowa dostawa trwa 2-4 dni robocze. Wysyłamy produkty kurierem lub Pocztą Polską - wybór należy do Ciebie podczas składania zamówienia na Allegro.",
  },
  {
    question: "Czy mogę zwrócić produkt?",
    answer: "Tak! Masz prawo do zwrotu produktu w ciągu 14 dni od jego otrzymania bez podania przyczyny, zgodnie z obowiązującymi przepisami. Produkt musi być w stanie nienaruszonym.",
  },
  {
    question: "Czy produkty są bezpieczne dla dzieci?",
    answer: "Absolutnie! Wszystkie nasze produkty posiadają odpowiednie certyfikaty bezpieczeństwa i są zgodne z normami UE. Wybieramy tylko sprawdzonych dostawców, którzy dbają o jakość i bezpieczeństwo.",
  },
  {
    question: "Dla jakiego wieku są wasze produkty?",
    answer: "Nasze produkty są przeznaczone głównie dla dzieci w wieku 3-10 lat. Każdy produkt ma określony na opakowaniu zalecany wiek, abyś mogła/mógł wybrać coś idealnego dla swojego dziecka.",
  },
  {
    question: "Czy oferujecie wysyłkę za granicę?",
    answer: "Obecnie wysyłamy produkty wyłącznie na terenie Polski. Pracujemy nad rozszerzeniem naszej oferty o wysyłki międzynarodowe - śledź nasze social media, aby być na bieżąco!",
  },
  {
    question: "Jak mogę skontaktować się z obsługą klienta?",
    answer: "Najszybciej skontaktujesz się z nami przez wiadomość na Allegro lub e-mail. Odpowiadamy na wiadomości w ciągu 24 godzin w dni robocze. Jesteśmy tu, aby pomóc!",
  },
  {
    question: "Czy organizujecie promocje i wyprzedaże?",
    answer: "Tak! Regularnie organizujemy promocje i sezonowe wyprzedaże. Śledź nasz profil na Allegro i zapisz się do ulubionych sprzedawców, aby nie przegapić żadnej okazji!",
  },
  {
    question: "Czy produkty są odpowiednio zapakowane?",
    answer: "Tak, każdy produkt jest starannie pakowany, aby dotarł do Ciebie w idealnym stanie. Dbamy o to, by przesyłka była bezpieczna i estetyczna - gotowa nawet na prezent!",
  },
];

export function FAQ() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
          Najczęściej zadawane pytania
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Masz pytania? Mamy odpowiedzi! 💡
        </p>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center p-6 bg-muted/50 rounded-2xl">
          <p className="text-lg font-medium text-foreground mb-2">
            Nie znalazłeś odpowiedzi na swoje pytanie?
          </p>
          <p className="text-muted-foreground">
            Skontaktuj się z nami przez Allegro - chętnie pomożemy! 😊
          </p>
        </div>
      </div>
    </section>
  );
}
