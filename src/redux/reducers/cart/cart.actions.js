import { cartActionTypes } from "./cart.types";

export const toggleCartDropdown = () => {
  return {
    type: cartActionTypes.TOGGLE_CART,
  };
};

export const closeCartDropdown = () => {
  return {
    type: cartActionTypes.CLOSE_CART,
  };
};

export const addToCart = (item) => {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: item,
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: id,
  };
};

export const reduceCartItemQuantity = (id) => {
  return {
    type: cartActionTypes.REDUCE_CART_ITEM_QUANTITY,
    payload: id,
  };
};
