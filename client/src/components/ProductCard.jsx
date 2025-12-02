import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFav, setIsFav] = useState(false);

  // Event handler for card click
  const handleCardClick = () => {
    alert(`You clicked on ${product.name}`);
  };

  const cardStyle = {
    background: '#fff',
    padding: '25px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: isHovered 
      ? `0 20px 40px ${product.color}40, 0 0 0 3px ${product.color}` 
      : '0 8px 20px rgba(0,0,0,0.15)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,0.08)'
  };

  const imageContainerStyle = {
    position: 'relative',
    marginBottom: '20px',
    overflow: 'hidden',
    borderRadius: '12px',
    background: `linear-gradient(135deg, ${product.color}10, ${product.color}05)`
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '12px',
    transition: 'transform 0.4s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
  };

  const categoryBadgeStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: product.color || '#667eea',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  };

  const nameStyle = {
    color: '#2c3e50',
    fontWeight: '700',
    fontSize: '1.4rem',
    margin: '15px 0',
    lineHeight: '1.3'
  };

  const priceStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: product.color || '#667eea',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px'
  };

  const buttonStyle = {
    display: 'inline-block',
    width: '100%',
    padding: '14px 28px',
    background: `linear-gradient(135deg, ${product.color || '#667eea'}, ${product.color || '#764ba2'})`,
    color: '#fff',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    boxShadow: `0 6px 15px ${product.color}40`,
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    border: 'none'
  };

  return (
    <>
      <style>
        {`
          .product-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px ${product.color}60;
          }
        `}
      </style>
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        tabIndex={0}
        role="button"
        aria-label={`View details for ${product.name}`}
        onKeyPress={e => { if (e.key === 'Enter') handleCardClick(); }}
      >
        <div style={imageContainerStyle}>
          <span style={categoryBadgeStyle}>{product.category || 'Product'}</span>
          <img src={product.image} alt={product.name} style={imageStyle} />
        </div>
        
        <h3 style={nameStyle}>{product.name}</h3>
        
        <div style={priceStyle}>
          <span style={{ fontSize: '1.2rem', opacity: 0.8 }}>💲</span>
          <span>{product.price}</span>
        </div>
        
        <Link to={`/product/${product.id}`} style={buttonStyle} className="product-btn">
          View Details →
        </Link>
      </div>
    </>
  );
}
