import { Navigation } from "@/components/Navigation";
import { Cart } from "@/components/Cart";
import { Footer } from "@/components/Footer";

const CartPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Koszyk</h1>
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
