import React, { createContext, useContext, useReducer } from "react";
import { CART_ACTIONS, cartReducer } from "../Reducers/cart.reducer";
import Toast from "react-native-toast-message"; // Import the Toast module

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
      Toast.show({
        type: 'info',
        text1: 'Product already in cart!',
        text2: `${item.name} is already in your cart!`,
        visibilityTime: 1500,
        autoHide: true,
      });
    } else {
      dispatch({
        type: CART_ACTIONS.ADD_TO_CART,
        payload: { ...item, quantity },
      });
      Toast.show({
        type: 'success',
        text1: 'Added Successfully',
        text2: `${item.name} has been added to your cart!`,
        visibilityTime: 1500,
        autoHide: true,
      });
    }
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: itemId });
    Toast.show({
      type: 'success',
      text1: 'Removed Successfully',
      text2: 'Item has been removed from your cart!',
      visibilityTime: 1500,
      autoHide: true,
    });
  };

  const removeAllFromCart = () => {
    dispatch({ type: CART_ACTIONS.REMOVE_ALL });
    Toast.show({
      type: 'success',
      text1: 'All items removed',
      text2: 'All items have been removed from your cart!',
      visibilityTime: 1500,
      autoHide: true,
    });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: CART_ACTIONS.UPDATE_QUANTITY, payload: { id, quantity } });
  };

  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        removeAllFromCart,
      }}
    >
      {children}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </cartContext.Provider>
  );
};
