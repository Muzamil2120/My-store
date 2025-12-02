// Mock API for cart PUT update (simulate HTTP PUT)
export function updateCartItem(cart, id, newQty) {
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
}
