import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* This Is Redux Provider */}
    <Provider store={store}>
      {/* This Is Main Home Component */}
      <Home />
    </Provider>
  </React.StrictMode>
);
