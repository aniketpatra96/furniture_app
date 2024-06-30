import { cartReducer } from "../Reducers/cart.reducer";
import { createContext, useReducer, useState } from "react";
export const initialCartState = [];
export const cartContext = createContext({
  cart: initialCartState,
});
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    cart: initialCartState,
  });
  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};
