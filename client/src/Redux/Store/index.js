import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware)
);
