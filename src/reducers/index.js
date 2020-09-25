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
      const index = state.cart.findIndex((ct) => ct.id === action.payload);
      let newBasket = [...state.cart];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("tekrar deneyiniz.");
      }
      return {
        ...state,
        cart: newBasket,
      };
    /* return {
        ...state,
        cart: [...state.cart.filter((ct) => ct.id !== action.payload)],
      }; */
    default:
      return state;
  }
};
