import { data } from "../data";

const INITIAL_STATE = {
  bookList: data,
  cart: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEPETE_EKLE":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "SEPETTEN_CIKAR":
      return {
        ...state,
        cart: [...state.cart.filter((ct) => ct.id !== action.payload)],
      };
    default:
      return state;
  }
};
