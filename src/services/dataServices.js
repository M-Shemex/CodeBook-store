const userId = JSON.parse(sessionStorage.getItem("userId"));
const userToken = JSON.parse(sessionStorage.getItem("token"));
export async function getUser() {
  const response = await fetch(
    `${import.meta.env.REACT_APP_HOST}/600/users/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
  return response;
}
export async function getUserOrders() {
  const response = await fetch(
    `${import.meta.env.VITE_REACT_APP_HOST}/660/orders?user.id=${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    }
  );
  return response;
}
export async function createOrder(user, cartList, total) {
  const orderData = {
    cartList: cartList.length > 0 ? cartList : [],
    total,
    user: {
      name: user.name,
      id: user.id,
      email: user.email,
    },
  };
  const response = await fetch(
    `${process.env.VITE_REACT_APP_HOST}/660/orders`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(orderData),
    }
  );
  return response;
}
