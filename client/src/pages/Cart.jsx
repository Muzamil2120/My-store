import { useCart } from "../context/CartContext";
import { useState } from "react";
import Button from "../components/Button";

export default function Cart() {
  const { cart, removeFromCart, clearCart, totalPrice, updateCartItemQty } = useCart();
  const [qtyInputs, setQtyInputs] = useState({});
  const [updatingId, setUpdatingId] = useState(null);

  if (cart.length === 0) {
    return (
      <div style={{ padding: 60, textAlign: 'center' }}>
        <h2 style={{ color: '#888', fontSize: '2rem' }}>Your cart is empty</h2>
        <p style={{ color: '#aaa' }}>Add some products to your cart!</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 60 }}>
      {cart.map(item => (
        <div key={item.id} style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          marginBottom: 20,
          padding: 20,
          background: '#fafbfc',
          borderRadius: 8,
          border: '1px solid #e1e4e8',
          transition: 'box-shadow 0.2s ease'
        }}>
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: 100,
              height: 100,
              objectFit: 'cover',
              borderRadius: 6,
              border: '1px solid #d1d5db'
            }}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{
              color: '#1a202c',
              fontSize: '1.25rem',
              marginBottom: 8,
              fontWeight: '600'
            }}>{item.name}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <label style={{ fontSize: '0.95rem', color: '#6b7280' }}>Quantity:</label>
              <input
                type="number"
                min={1}
                value={qtyInputs[item.id] !== undefined ? qtyInputs[item.id] : item.qty}
                onChange={e => setQtyInputs(q => ({ ...q, [item.id]: e.target.value }))}
                style={{ width: 60, padding: 4, borderRadius: 4, border: '1px solid #ccc' }}
                disabled={updatingId === item.id}
              />
              <button
                onClick={async () => {
                  setUpdatingId(item.id);
                  await updateCartItemQty(item.id, Number(qtyInputs[item.id] || item.qty));
                  setUpdatingId(null);
                }}
                style={{
                  padding: '6px 14px',
                  background: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  opacity: updatingId === item.id ? 0.6 : 1
                }}
                disabled={updatingId === item.id}
              >{updatingId === item.id ? 'Updating...' : 'Update'}</button>
            </div>
            <p style={{
              fontSize: '1.1rem',
              color: '#111827',
              fontWeight: '600',
              margin: '4px 0'
            }}>Price: ${item.price * item.qty}</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            style={{
              padding: '10px 20px',
              background: '#dc3545',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              fontSize: '0.95rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
            onMouseOver={e => e.target.style.background = '#c82333'}
            onMouseOut={e => e.target.style.background = '#dc3545'}
          >Remove</button>
        </div>
      ))}

      <div style={{
        marginTop: 30,
        padding: 25,
        background: '#f8f9fa',
        borderRadius: 8,
        border: '1px solid #dee2e6'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20
        }}>
          <h2 style={{
            color: '#212529',
            fontSize: '1.75rem',
            fontWeight: '600',
            margin: 0
          }}>Total Amount:</h2>
          <h2 style={{
            color: '#28a745',
            fontSize: '1.75rem',
            fontWeight: '700',
            margin: 0
          }}>${totalPrice}</h2>
        </div>

        <Button
          onClick={clearCart}
          style={{ width: '100%', background: '#6c757d' }}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
}
