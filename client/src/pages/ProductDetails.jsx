import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../api/productsApi";
import { useCart } from "../context/CartContext";
import AddToCartForm from "../components/AddToCartForm";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <h2 style={{ 
      padding: 40, 
      textAlign: 'center',
      color: '#888',
      fontSize: '2rem'
    }}>Loading product...</h2>
  );

  if (error || !product) return (
    <h2 style={{ 
      padding: 40, 
      textAlign: 'center',
      color: '#e74c3c',
      fontSize: '2rem'
    }}>{error || "Product Not Found"}</h2>
  );

  return (
    <div style={{ 
      padding: 40,
      background: `linear-gradient(135deg, ${product.color}15, ${product.color}05)`,
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        gap: 40,
        background: '#fff',
        padding: 40,
        borderRadius: 20,
        boxShadow: `0 10px 40px ${product.color}30`,
        border: `3px solid ${product.color}`
      }}>
        <div style={{ flex: 1 }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              width: '100%',
              borderRadius: 15,
              boxShadow: `0 8px 25px ${product.color}40`,
              border: `2px solid ${product.color}`
            }} 
          />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h1 style={{ 
            color: product.color,
            fontSize: '2.5rem',
            margin: 0,
            fontWeight: 'bold'
          }}>{product.name}</h1>

          <AddToCartForm onSubmit={qty => addToCart({ ...product, qty })} />

          <div style={{
            background: `linear-gradient(135deg, ${product.color}20, ${product.color}10)`,
            padding: 20,
            borderRadius: 12,
            border: `2px solid ${product.color}50`
          }}>
            <h3 style={{ 
              color: '#2c3e50',
              fontSize: '2rem',
              margin: 0,
              fontWeight: 'bold'
            }}>${product.price}</h3>
          </div>
          
          <div style={{
            padding: 15,
            background: '#f8f9fa',
            borderRadius: 10,
            border: '2px solid #e0e0e0'
          }}>
            <p style={{ 
              fontSize: '1.1rem',
              color: '#555',
              margin: 0
            }}>
              <strong style={{ color: product.color }}>Category:</strong> {product.category}
            </p>
          </div>
          
          <button 
            onClick={() => addToCart(product)} 
            style={{ 
              padding: '18px 40px',
              marginTop: 20,
              background: `linear-gradient(135deg, ${product.color}, ${product.color}dd)`,
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontSize: '1.3rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: `0 6px 20px ${product.color}50`,
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
            onMouseOver={e => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = `0 10px 30px ${product.color}60`;
            }}
            onMouseOut={e => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = `0 6px 20px ${product.color}50`;
            }}
          >🛒 Add to Cart</button>
          
          <div style={{
            marginTop: 20,
            padding: 20,
            background: `linear-gradient(135deg, ${product.color}10, transparent)`,
            borderRadius: 12,
            borderLeft: `4px solid ${product.color}`
          }}>
            <h4 style={{ color: product.color, marginTop: 0 }}>Product Features</h4>
            <ul style={{ color: '#666', lineHeight: '1.8' }}>
              <li>Premium Quality</li>
              <li>Fast Shipping Available</li>
              <li>30-Day Money Back Guarantee</li>
              <li>Secure Checkout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
