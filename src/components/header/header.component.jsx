import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";

import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCartIsOpen } from "../../redux/reducers/cart/cart.selectors";

const Header = ({ currentUser }) => {
  const cartIsOpen = useSelector(selectCartIsOpen);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            LOG OUT
          </div>
        ) : (
          <div className="option">
            <Link to="/signin">SIGN IN</Link>
          </div>
        )}
        <CartIcon />
      </div>
      {cartIsOpen ? <CartDropdown /> : null}
    </div>
  );
};

export default Header;
