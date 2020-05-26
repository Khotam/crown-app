export const addItemToCart = (cartToAdd, cartItems) => {
  const exists = cartItems.find((cartItem) => cartItem.id === cartToAdd.id);
  if (exists) {
    return cartItems.map((cartItem) => {
      return cartItem.id === cartToAdd.id
        ? { ...cartToAdd, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...cartToAdd, quantity: 1 }];
};
