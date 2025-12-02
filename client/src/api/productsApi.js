// Simple mock API for products using a Promise to simulate HTTP GET
import { products } from "../data/products";

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
}

export function fetchProductById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id == id);
      if (product) resolve(product);
      else reject(new Error("Product not found"));
    }, 500);
  });
}
