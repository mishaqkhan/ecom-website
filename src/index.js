import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SingleProductPage from "./pages/SingleProductPage";
import AllProductsPage from "./pages/AllProductsPage";
import CartPage from "./pages/CartPage";
import Layout from "./components/Layout";
import { ContextProvider as CartContextProvider } from "./context/cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
          <Route path="/allProducts" element={<AllProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Layout>
    </CartContextProvider>
  </BrowserRouter>
);
