import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from '../reducer/reducer.js';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
