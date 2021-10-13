import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { BucketListContextProvider } from "./context/BucketListContext";

ReactDOM.render(
  <BucketListContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BucketListContextProvider>,
  document.getElementById("root")
);
