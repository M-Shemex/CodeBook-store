import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";
import { useLocation } from "react-router-dom";
export const Orders = () => {
  const { state } = useLocation();
  return (
    <main>
      {state.status ? (
        <OrderSuccess user={state ? state.data : {}} />
      ) : (
        <OrderFail />
      )}
    </main>
  );
};
