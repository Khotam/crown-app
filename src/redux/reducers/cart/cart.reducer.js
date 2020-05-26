import { cartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const initialState = {
  cartIsOpen: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART:
      return { ...state, cartIsOpen: !state.cartIsOpen };
    case cartActionTypes.CLOSE_CART:
      return { ...state, cartIsOpen: false };
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(action.payload, state.cartItems),
      };
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload
        ),
      };
    case cartActionTypes.REDUCE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          return cartItem.id === action.payload
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
