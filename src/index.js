import React from "react";
import ReactDOM from "react-dom";
import Root from "./Router";

import { Provider } from "react-redux";
import "./assets/scss/main.scss";

import createStore from "./store";
import initialState from "./store/initialState";
const store = createStore(initialState);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById("root")
  );
};

render(Root);
