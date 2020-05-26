import React from "react";

import "./checkout-item.styles.scss";
import { useDispatch } from "react-redux";
import {
  removeItemFromCart,
  reduceCartItemQuantity,
  addToCart,
} from "../../redux/reducers/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const handleReduce = (id) => {
    if (quantity === 1) {
      dispatch(removeItemFromCart(id));
    } else {
      dispatch(reduceCartItemQuantity(id));
    }
  };

  const { id, name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="checkout-item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => handleReduce(id)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => handleAdd(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price * quantity}</span>
      <div className="remove-button" onClick={() => handleRemove(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
