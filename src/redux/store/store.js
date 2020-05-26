import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import persistedReducer from "../reducers/rootReducer";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [logger];

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export let persistor = persistStore(store);
