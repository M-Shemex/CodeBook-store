import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CartContextProvider } from "./context";
import "./index.css";
import { FilterContextProvider } from "./context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </CartContextProvider>
  </React.StrictMode>
);
