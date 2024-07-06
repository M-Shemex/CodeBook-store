import useFetch from "../hooks/useFetch";
import { Rating } from "../components";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks";
import { useCart } from "../context";
export const ProductDetail = () => {
  const { addToCart } = useCart();
  const { products, isLoading, error } = useFetch();
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  useTitle(product ? product.title : "Loading...");
  if (isLoading) {
    return (
      <main className="text-slate-900 dark:text-slate-50 text-2xl text-center">
        Loading...
      </main>
    );
  }

  if (error) {
    return (
      <main className="text-slate-900 dark:text-slate-50 text-2xl text-center">
        Error: {error}
      </main>
    );
  }
  if (!product) {
    return (
      <main className="text-slate-900 dark:text-slate-50 text-2xl text-center">
        Product not found.
      </main>
    );
  }

  return (
    <main className="p-20">
      <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
        {product.title}
      </h1>
      <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quod
        magnam, et repellat non debitis.
      </p>
      <div className="flex flex-wrap justify-around">
        <div className="max-w-96 my-3">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <div className="max-w-xl my-3">
          <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
            <span className="mr-1">$</span>
            <span className="">{product.price}</span>
          </p>
          <div className="my-3">
            <span>
              <Rating rating={product.rating} />
            </span>
          </div>
          <p className="my-4 select-none">
            {
              <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                BEST SELLER
              </span>
            }
            {
              <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                INSTOCK
              </span>
            }
          </p>
          <p className="my-3">
            {
              <button
                onClick={() => addToCart(product)}
                className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 `}
              >
                Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
              </button>
            }
          </p>
          <p className="text-lg text-gray-900 dark:text-slate-200">
            {product.description}
          </p>
        </div>
      </div>
    </main>
  );
};
