import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorite } from '../context/FavoriteContext';

export default function Navbar() {
  const { cart } = useCart();
  const { favoriteCount } = useFavorite();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const [showCart, setShowCart] = useState(true);

  const navStyle = {
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    color: '#fff',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    backdropFilter: 'blur(10px)'
  };

  const logoStyle = {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease'
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '30px',
    alignItems: 'center'
  };

  const linkStyle = {
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: '500',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    position: 'relative'
  };

  const badgeStyle = {
    position: 'absolute',
    top: -8,
    right: -8,
    background: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
    borderRadius: '50%',
    padding: '4px 8px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    minWidth: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(255,65,108,0.5)',
    animation: 'pulse 2s infinite'
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .nav-link:hover {
            background: rgba(255,255,255,0.2);
            transform: translateY(-2px);
          }
          .nav-logo:hover {
            transform: scale(1.05);
          }
        `}
      </style>
      <nav style={navStyle}>
        <Link to="/" style={logoStyle} className="nav-logo">
          <span>🛍️</span>
          <span>MyStore</span>
        </Link>
        <div style={linkContainerStyle}>
          <Link to="/" style={linkStyle} className="nav-link">🏠 Home</Link>
          <Link to="/products" style={linkStyle} className="nav-link">📦 Products</Link>
          {showCart && (
            <Link to="/cart" style={{ ...linkStyle, position: 'relative' }} className="nav-link">
              🛒 Cart
              {totalItems > 0 && (
                <span style={badgeStyle}>{totalItems}</span>
              )}
            </Link>
          )}
          <span style={{ ...linkStyle, background: 'rgba(255, 215, 0, 0.15)', color: '#f7971e', fontWeight: 700 }}>
            Favorites: {favoriteCount}
          </span>
          <button
            onClick={() => setShowCart(v => !v)}
            style={{
              marginLeft: 10,
              padding: '6px 14px',
              borderRadius: 8,
              border: 'none',
              background: '#fff',
              color: '#2a5298',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.95rem',
              boxShadow: '0 2px 8px rgba(30,60,114,0.08)'
            }}
          >{showCart ? 'Hide Cart' : 'Show Cart'}</button>
        </div>
      </nav>
    </>
  );
}
