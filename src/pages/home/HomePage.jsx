import { useTitle } from "../../hooks";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { FeaturedProducts } from "./components/FeaturedProducts";

export const HomePage = () => {
  useTitle("access latest e-books");
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
