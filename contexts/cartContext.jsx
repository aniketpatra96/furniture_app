// import { cartReducer } from "../Reducers/cart.reducer";
// import { createContext, useReducer, useState } from "react";
// export const initialCartState = [];
// export const cartContext = createContext({
//   cart: initialCartState,
// });
// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, {
//     cart: initialCartState,
//   });
//   return (
//     <cartContext.Provider value={{ cart, dispatch }}>
//       {children}
//     </cartContext.Provider>
//   );
// };

import React, { createContext, useContext, useReducer, useState } from "react";
import { CART_ACTIONS } from "../Reducers/cart.reducer";
import { Alert } from "react-native";
export const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

const initialState = {
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART:
      const existingItem = state.cart.find(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem._id === action.payload._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };
      }
    case CART_ACTIONS.REMOVE_FROM_CART:
      const itemToRemove = state.cart.find(
        (cartItem) => cartItem._id === action.payload
      );
      if (itemToRemove.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((cartItem) =>
            cartItem._id === action.payload
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter(
            (cartItem) => cartItem._id !== action.payload
          ),
        };
      }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [count, setCount] = useState(1);
  const addToCart = (cart, item, itemCount) => {
    const existingItem = cart.find((cartItem) => cartItem._id === item._id);
    if (existingItem) {
      dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: existingItem });
      alert(`${item.name} is already in your cart!`);
    } else {
      dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: item });
      Alert.alert(
        "Added Successfully",
        `${item.name} has been added to your cart!`
      );
    }
    // dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: item });
  };

  const removeFromCart = (cart, item, itemId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: itemId });
    Alert.alert(
      "Removed from CART Successfully",
      `${item.name} has been removed from your cart!`
    );
  };

  return (
    <cartContext.Provider
      value={{ cart: state.cart, addToCart, removeFromCart, count, setCount }}
    >
      {children}
    </cartContext.Provider>
  );
};
