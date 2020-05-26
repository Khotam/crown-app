import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/reducers/user/user.actions";
import { selectCurrentUser } from "./redux/reducers/user/user.selectors";
import Checkout from "./pages/checkout-page/checkout.component";

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          const currentUser = {
            id: snapShot.id,
            ...snapShot.data(),
          };
          dispatch(setCurrentUser(currentUser));
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

export default App;
