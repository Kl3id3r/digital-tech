// @Vendors
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// @Styles
import "./index.css";

// @Componets
import App from "./App";

// @Redux
import { store } from "./store";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
