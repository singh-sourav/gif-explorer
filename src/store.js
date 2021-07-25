import { createStore, applyMiddleware } from "redux";
import giphy from "./reducers/giphy";
import logger from "redux-logger";
import thunk from "redux-thunk";

const storeCreator = () => {
  return createStore(giphy, applyMiddleware(logger, thunk));
};

export default storeCreator;
