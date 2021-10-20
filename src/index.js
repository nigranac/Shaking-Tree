import React from "react";
import ReactDOM from "react-dom";
import Route from "./Route";
import { Provider } from "react-redux";
import { store } from "./state/store/configureStore";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Route />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
