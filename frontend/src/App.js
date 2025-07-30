import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;