// Simple Express.js mock backend for products and cart
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Wireless Noise-Canceling Headphones", price: 299, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop", category: "Electronics", color: "#667eea" },
  { id: 2, name: "Premium Leather Backpack", price: 189, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop", category: "Accessories", color: "#f093fb" },
  { id: 3, name: "Minimalist Smartwatch Ultra", price: 449, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop", category: "Electronics", color: "#4facfe" },
  { id: 4, name: "Classic Aviator Sunglasses", price: 159, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop", category: "Accessories", color: "#fa709a" },
  { id: 5, name: "Professional DSLR Camera", price: 1899, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop", category: "Electronics", color: "#30cfd0" },
  { id: 6, name: "Vintage Mechanical Keyboard", price: 179, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&h=500&fit=crop", category: "Electronics", color: "#a8edea" },
  { id: 7, name: "Premium Running Shoes", price: 149, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop", category: "Footwear", color: "#ff6b6b" },
  { id: 8, name: "Designer Ceramic Coffee Mug", price: 29, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=500&fit=crop", category: "Home", color: "#f7971e" }
];

let cart = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ error: 'Product not found' });
});

app.get('/cart', (req, res) => {
  res.json(cart);
});

app.put('/cart/:id', (req, res) => {
  const { qty } = req.body;
  if (qty < 1) return res.status(400).json({ error: 'Quantity must be at least 1' });
  const idx = cart.findIndex(item => item.id == req.params.id);
  if (idx !== -1) {
    cart[idx].qty = qty;
    res.json(cart);
  } else {
    res.status(404).json({ error: 'Cart item not found' });
  }
});

app.post('/cart', (req, res) => {
  const { id, name, price, image, qty } = req.body;
  if (cart.find(item => item.id === id)) {
    return res.status(400).json({ error: 'Item already in cart' });
  }
  cart.push({ id, name, price, image, qty });
  res.json(cart);
});

app.delete('/cart/:id', (req, res) => {
  cart = cart.filter(item => item.id != req.params.id);
  res.json(cart);
});

app.delete('/cart', (req, res) => {
  cart = [];
  res.json(cart);
});

app.listen(PORT, () => {
  console.log(`Mock backend running on http://localhost:${PORT}`);
});
