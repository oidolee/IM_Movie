import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom"; // 수정
import CheckoutPage from "./pages/Checkout";
import { RouterProvider } from "react-router-dom"; // 수정

const router = (
  <Router>
    <Route path="/payment" element={<CheckoutPage />} />
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* 수정 */}
  </React.StrictMode>,
  document.getElementById("root")
);
