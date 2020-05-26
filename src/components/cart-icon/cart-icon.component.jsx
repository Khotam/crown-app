import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartDropdown } from "../../redux/reducers/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/reducers/cart/cart.selectors";

const CartIcon = () => {
  const cartItemsCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  const handleCartToggle = () => {
    dispatch(toggleCartDropdown());
  };

  return (
    <div className="cart-icon" onClick={handleCartToggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
