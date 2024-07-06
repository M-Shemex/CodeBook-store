import { useState, useEffect } from "react";
import { ProductCard } from "../../../components/elements/ProductCard";
import { getFeaturedProduct } from "../../../services";
export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const data = await getFeaturedProduct();
        if (!data.ok) {
          throw new Error("couldn't fetch data");
        }
        const products = await data.json();
        setProducts(products.products);
      } catch (err) {
        setError("Error: " + err.message + "...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="mt-7">
      <h1 className="text-center text-slate-50 text-2xl underline underline-offset-8 font-bold">
        Featured Products
      </h1>
      {error && <p>{error}</p>}
      {isLoading && <p>loading...</p>}
      <div className="flex flex-wrap lg:flex-row justify-between">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
