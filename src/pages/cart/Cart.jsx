import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context";
export const Cart = () => {
  const { cartList } = useCart();
  return (
    <main>
      {cartList.length == 0 && <CartEmpty />}
      {cartList.length > 0 && <CartList />}
    </main>
  );
};
