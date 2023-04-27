import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { UIContextProvider } from "./store-context/uiContext";
import store from "./store-redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UIContextProvider>
          <App />
        </UIContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
