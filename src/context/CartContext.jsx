import { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
const initialContextValue = {
  cartList: [],
  totalPrice: 0,
};

const CartContext = createContext(initialContextValue);

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialContextValue);
  function addToCart(product) {
    const updatedList = state.cartList.concat(product);
    const updatedTotal = +state.totalPrice + +product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: { products: updatedList, totalPrice: updatedTotal.toFixed(2) },
    });
  }
  function removeFromCart(product) {
    const updatedList = state.cartList.filter((item) => item.id !== product.id);
    const updatedTotal = +state.totalPrice - +product.price;

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { products: updatedList, totalPrice: updatedTotal.toFixed(2) },
    });
  }
  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  }
  const value = {
    cartList: state.cartList,
    total: state.totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };
  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
