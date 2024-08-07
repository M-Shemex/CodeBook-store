import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import { ProductCard } from "../../components/elements/ProductCard";
import { useLocation } from "react-router-dom";
import { useFilter } from "../../context";
import { FilterBar } from "./components/FilterBar";
import { getProductList } from "../../services";
export const ProductList = () => {
  const { products, initialProductList } = useFilter();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const url = useLocation().search;
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const data = await getProductList(url);
        if (!data.ok) {
          throw new Error("couldn't fetch data");
        }
        const fetchedProducts = await data.json();
        initialProductList(fetchedProducts.products);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);
  if (isloading) {
    return (
      <main>
        <h2 className="dark:text-slate-50 text-2xl font-bold">Loading...</h2>
      </main>
    );
  }
  if (error) {
    return (
      <main>
        <h2 className="dark:text-slate-50 text-2xl font-bold">{error}</h2>
      </main>
    );
  }

  if (!products || !products.length > 0) {
    return <main>There are no products yet...</main>;
  }
  return (
    <main>
      <section>
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({products.length})
          </span>
          <span>
            <button
              onClick={() => setShow(!show)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>
        {show && <FilterBar setShow={setShow} />}
        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
};
