import { CART_ACTIONS } from "../Reducers/cart.reducer";
export default function addToCart(dispatch, item) {
  dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: item });
  return;
}

export function removeFromCart(dispatch, id) {
  dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: id });
  return;
}
