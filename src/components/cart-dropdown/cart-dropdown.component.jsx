import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/reducers/cart/cart.selectors";
import { useHistory } from "react-router-dom";
import { closeCartDropdown } from "../../redux/reducers/cart/cart.actions";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    history.push("/checkout");
    dispatch(closeCartDropdown());
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems &&
          cartItems.map(({ id, ...otherProps }) => {
            return <CartItem key={id} {...otherProps} />;
          })
        ) : (
          <span className="empty-message">No items yet</span>
        )}
      </div>
      <CustomButton
        disabled={!cartItems.length ? true : false}
        type="button"
        onClick={handleClick}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
