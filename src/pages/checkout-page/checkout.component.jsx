import React from "react";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/reducers/cart/cart.selectors";
import CustomButton from "../../components/custom-button/custom-button.component";
import { useHistory } from "react-router-dom";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  const history = useHistory();

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <div className="empty">
          <span className="empty-message">No items yet</span>
          <CustomButton type="button" onClick={() => history.push("/shop")}>
            SHOP NOW
          </CustomButton>
        </div>
      )}
      <div className="total">Total: ${totalPrice}</div>
      <div className="test-warning">
        **Please use the following card number to test 4242 4242 4242 4242 - Exp
        date: any future date - CVC code: any 3 digits
      </div>
      <StripeCheckoutButton price={totalPrice} />
    </div>
  );
};

export default Checkout;
