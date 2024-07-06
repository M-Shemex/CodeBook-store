export const filterReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "PRODUCT_LIST":
      return { ...state, productList: payload.products };
    case "SORT_BY":
      return { ...state, sortBy: payload.sortBy };
    case "RATING":
      return { ...state, ratings: payload.ratings };
    case "IN_STOCK":
      return { ...state, onlyInStock: true };
    case "CLEAR_FILTERS":
      return {
        ...state,
        onlyInStock: false,
        bestSellerOnly: false,
        sortBy: null,
        ratings: null,
      };
    default:
      return { state };
  }
};
