import { Navigation } from "@/components/Navigation";
import { Wishlist } from "@/components/Wishlist";
import { Footer } from "@/components/Footer";

const WishlistPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-8 text-center">Moja lista życzeń</h1>
        <Wishlist />
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
