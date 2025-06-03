import { Alert } from "react-native";

export const CART_ACTIONS = Object.freeze({
  ADD_TO_CART: 1,
  REMOVE_FROM_CART: 0,
  UPDATE_QUANTITY: 3,
  REMOVE_ALL: 2,
});

export const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const productToAdd = action.payload;
      let { cart } = state;
      const foundIndex = cart.findIndex(
        (item) => item._id === productToAdd._id
      );
      if (foundIndex !== -1) {
        cart[foundIndex].quantity += productToAdd.quantity;
      } else {
        cart.push({ ...productToAdd, quantity: productToAdd.quantity });
      }
      return { ...state, cart };
    }
    case CART_ACTIONS.REMOVE_FROM_CART: {
      const id = action.payload;
      let { cart } = state;
      cart = cart.filter((item) => item._id !== id);
      return { ...state, cart };
    }
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      let { cart } = state;
      const foundIndex = cart.findIndex((item) => item._id === id);
      if (foundIndex !== -1 && quantity > 0) {
        cart[foundIndex].quantity = quantity;
      }
      return { ...state, cart };
    }
    case CART_ACTIONS.REMOVE_ALL: {
      return { ...state, cart: [] };
    }
    default:
      Alert.alert("Invalid action");
      return state;
  }
};
