export default function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: action.payload.products,
        totalPrice: action.payload.totalPrice,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartList: action.payload.products,
        totalPrice: action.payload.totalPrice,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartList: action.payload.products,
        total: action.payload.total,
      };
  }
}
