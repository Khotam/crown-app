import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { directoryReducer } from "./directory/directory.reducer";
import { shopDataReducer } from "./shopData/shopData.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shopData: shopDataReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
