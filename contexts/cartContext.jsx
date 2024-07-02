import React, { createContext, useContext, useReducer, useState } from "react";
import { CART_ACTIONS, cartReducer } from "../Reducers/cart.reducer";
import { Alert } from "react-native";

export const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

const initialState = {
  cart: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item, quantity = 1) => {
    const existingItem = state.cart.find(
      (cartItem) => cartItem._id === item._id
    );
    if (existingItem) {
      Alert.alert(
        "Product already in cart!",
        `${item.name} is already in your cart!`
      );
    } else {
      dispatch({
        type: CART_ACTIONS.ADD_TO_CART,
        payload: { ...item, quantity },
      });
      Alert.alert(
        "Added Successfully",
        `${item.name} has been added to your cart!`
      );
    }
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: itemId });
    Alert.alert(
      "Removed Successfully",
      `Item has been removed from your cart!`
    );
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id, quantity } });
  };

  return (
    <cartContext.Provider
      value={{ cart: state.cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </cartContext.Provider>
  );
};
