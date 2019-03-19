import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import list from "./store/reducers/list";
import wList from "./store/reducers/wList";
import App from "./App";

const rootReducer = combineReducers({
  rootList: list,
  rootWList: wList //watched list
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
