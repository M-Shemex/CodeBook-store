import { getUserOrders } from "../../services";
import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
export const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await getUserOrders();

        if (!response.ok) {
          throw new Error("a");
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <main>
      {orders.length > 0 &&
        orders.map((p) => <DashboardCard key={p.id} order={p} />)}
    </main>
  );
};
