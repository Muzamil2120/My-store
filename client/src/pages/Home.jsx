import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Home() {
  const featured = products.slice(0, 3);
  
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };

  const heroStyle = {
    textAlign: 'center',
    padding: '80px 20px',
    color: '#fff',
    background: 'linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1))',
    marginBottom: '60px'
  };

  const titleStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '3px 3px 10px rgba(0,0,0,0.3)',
    animation: 'fadeIn 0.8s ease-out'
  };

  const subtitleStyle = {
    fontSize: '1.5rem',
    marginBottom: '30px',
    opacity: 0.95,
    maxWidth: '800px',
    margin: '0 auto 30px',
    lineHeight: '1.6',
    animation: 'fadeIn 1s ease-out'
  };

  const ctaButtonStyle = {
    display: 'inline-block',
    padding: '16px 40px',
    background: 'linear-gradient(135deg, #ff416c, #ff4b2b)',
    color: '#fff',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    boxShadow: '0 8px 25px rgba(255,65,108,0.4)',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const sectionStyle = {
    padding: '40px 20px 80px',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const sectionTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '50px',
    textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px'
  };

  const featuresStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const featureCardStyle = {
    background: 'rgba(255,255,255,0.95)',
    padding: '30px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease'
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(255,65,108,0.6);
          }
          .feature-card:hover {
            transform: translateY(-8px);
          }
        `}
      </style>
      <div style={containerStyle}>
        <div style={heroStyle}>
          <h1 style={titleStyle}>🛍️ Welcome to MyStore!</h1>
          <p style={subtitleStyle}>
            Discover amazing products at unbeatable prices. Your one-stop shop for quality and style.
          </p>
          <Link to="/products" style={ctaButtonStyle} className="cta-btn">
            Shop Now →
          </Link>
        </div>

        <div style={featuresStyle}>
          <div style={featureCardStyle} className="feature-card">
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🚚</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Free Shipping</h3>
            <p style={{ color: '#7f8c8d', fontSize: '0.95rem' }}>On orders over $50</p>
          </div>
          <div style={featureCardStyle} className="feature-card">
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>💯</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Quality Guaranteed</h3>
            <p style={{ color: '#7f8c8d', fontSize: '0.95rem' }}>100% authentic products</p>
          </div>
          <div style={featureCardStyle} className="feature-card">
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔒</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>Secure Payment</h3>
            <p style={{ color: '#7f8c8d', fontSize: '0.95rem' }}>Your data is protected</p>
          </div>
        </div>

        <div style={sectionStyle}>
          <h2 style={sectionTitleStyle}>✨ Featured Products</h2>
          <div style={gridStyle}>
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </div>
    </>
  );
}
