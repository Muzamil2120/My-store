import { createContext, useContext, useState } from "react";
import { updateCartItem } from "../api/cartApi";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Simulate HTTP PUT for updating cart item quantity
  const updateCartItemQty = (id, newQty) => {
    return updateCartItem(cart, id, newQty)
      .then((updatedCart) => {
        setCart(updatedCart);
        return true;
      })
      .catch((err) => {
        // Optionally handle error (e.g., show toast)
        return false;
      });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, totalPrice, updateCartItemQty }}
    >
      {children}
    </CartContext.Provider>
  );
}
