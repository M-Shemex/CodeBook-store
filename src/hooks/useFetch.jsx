import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const data = await fetch(
          "https://dummyjson.com/products?limit=194&skip=0&select=title,price,description,images,rating"
        );
        if (!data.ok) {
          throw new Error("couldn't fetch data");
        }
        const fetchedData = await data.json();

        setProducts(fetchedData.products);
      } catch (err) {
        setError("Error: " + err.message + "...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return { products, isLoading, error };
}
