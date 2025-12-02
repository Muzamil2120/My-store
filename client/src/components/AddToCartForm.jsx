import { useState } from "react";
import Button from "./Button";

export default function AddToCartForm({ onSubmit }) {
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (qty < 1) {
      setError("Quantity must be at least 1");
      return;
    }
    setError("");
    onSubmit(qty);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
      <label style={{ fontWeight: 500, marginRight: 10 }}>
        Quantity:
        <input
          type="number"
          min={1}
          value={qty}
          onChange={e => setQty(Number(e.target.value))}
          style={{ marginLeft: 8, width: 60, padding: 4, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </label>
      <Button type="submit" style={{ marginLeft: 10, background: '#28a745' }}>
        Add to Cart
      </Button>
      {error && <div style={{ color: '#e74c3c', marginTop: 8 }}>{error}</div>}
    </form>
  );
}
