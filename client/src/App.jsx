import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CartProvider from "./context/CartContext";
import { ReactQueryProvider } from "./context/ReactQueryProvider";
import PageTransition from "./components/PageTransition";
import FavoriteProvider from "./context/FavoriteContext";
import SplashScreen from "./components/SplashScreen";

import { useState } from "react";

export default function App() {

  const [showSplash, setShowSplash] = useState(true);
  return (
    <ReactQueryProvider>
      <FavoriteProvider>
        <CartProvider>
          {showSplash ? (
            <SplashScreen onFinish={() => setShowSplash(false)} />
          ) : (
            <BrowserRouter>
              <Navbar />
              <PageTransition>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </PageTransition>
              <Footer />
            </BrowserRouter>
          )}
        </CartProvider>
      </FavoriteProvider>
    </ReactQueryProvider>
  );
}
