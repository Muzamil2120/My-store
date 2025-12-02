// client/src/api/productsApi.js
import { products } from "../data/products";

// Export as getProducts (to match your import)
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

// Also export as fetchProducts if you want both
export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const fetchProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id == id);
      if (product) resolve(product);
      else reject(new Error("Product not found"));
    }, 500);
  });
};

// Mock API for cart PUT update (simulate HTTP PUT)
export const updateCartItem = (cart, id, newQty) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (newQty < 1) {
        reject(new Error("Quantity must be at least 1"));
      } else {
        const updatedCart = cart.map(item =>
          item.id === id ? { ...item, qty: newQty } : item
        );
        resolve(updatedCart);
      }
    }, 400);
  });
};