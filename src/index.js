import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import "./index.css";
import App from "./App";
import { UIContextProvider } from "./store-context/uiContext";
import store, { persistor } from "./store-redux/store";
import Preloader from "./components/ui/Preloader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={Preloader} persistor={persistor}>
          <UIContextProvider>
            <App />
          </UIContextProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
