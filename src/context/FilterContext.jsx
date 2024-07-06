import { createContext, useReducer } from "react";
import { filterReducer } from "../reducers";
import { useContext } from "react";
const initialValue = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  ratings: null,
};
const FilterContext = createContext(initialValue);

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialValue);
  function initialProductList(products) {
    dispatch({
      type: "PRODUCT_LIST",
      payload: {
        products: products,
      },
    });
  }
  function rating(products) {
    switch (state.ratings) {
      case "4STARSABOVE":
        return products.filter((p) => p.rating >= 4);
      case "3STARSABOVE":
        return products.filter((p) => p.rating >= 3);
      case "2STARSABOVE":
        return products.filter((p) => p.rating >= 2);
      case "1STARSABOVE":
        return products.filter((p) => p.rating >= 1);
      default:
        return products;
    }
  }
  function inStock(products) {
    return state.onlyInStock ? products.filter((p) => p.stock > 10) : products;
  }
  function sortBy(products) {
    if (state.sortBy === "lowToHigh") {
      return products.sort((p1, p2) => +p1.price - +p2.price);
    } else if (state.sortBy === "highToLow") {
      return products.sort((p1, p2) => +p2.price - +p1.price);
    } else {
      return products;
    }
  }
  const filteredProducts = inStock(sortBy(rating(state.productList)));
  const value = {
    state,
    products: filteredProducts,
    initialProductList,
    rating,
    dispatch,
    // initialValue
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
