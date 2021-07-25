import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import storeCreator from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "./contexts/ThemeProvider";

const store = storeCreator();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
