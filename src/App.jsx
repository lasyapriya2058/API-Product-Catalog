import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Catalog from "./pages/Catalog";
import ProductDetail from "./components/ProductDetail";
import Cart from "./pages/Cart";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  return (
    <Routes>

      <Route path="/" element={
        <Catalog cart={cart} addToCart={addToCart} />
      } />

      <Route path="/product/:id" element={<ProductDetail />} />

      <Route path="/cart" element={
        <Cart cart={cart} removeFromCart={removeFromCart} />
      } />

    </Routes>
  );
}

export default App;