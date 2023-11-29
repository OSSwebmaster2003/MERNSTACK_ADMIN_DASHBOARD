import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "state";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

// store
export const store = configureStore({
  reducer: {
    global: globalSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
