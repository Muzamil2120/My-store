export default function Footer() {
  const footerStyle = {
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    color: '#fff',
    textAlign: 'center',
    marginTop: 'auto',
    boxShadow: '0 -4px 20px rgba(0,0,0,0.2)'
  };

  const contentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const linksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '15px'
  };

  const linkStyle = {
    color: '#fff',
    fontSize: '1rem',
    opacity: 0.9,
    transition: 'opacity 0.3s ease'
  };

  const socialStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    fontSize: '1.5rem',
    marginBottom: '15px'
  };

  const iconStyle = {
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    opacity: 0.9
  };

  return (
    <>
      <style>
        {`
          .footer-link:hover {
            opacity: 1 !important;
            text-decoration: underline;
          }
          .social-icon:hover {
            transform: scale(1.2);
            opacity: 1 !important;
          }
        `}
      </style>
      <footer style={footerStyle}>
        <div style={contentStyle}>
          <div style={linksStyle}>
            <a href="#" style={linkStyle} className="footer-link">About Us</a>
            <a href="#" style={linkStyle} className="footer-link">Contact</a>
            <a href="#" style={linkStyle} className="footer-link">Privacy Policy</a>
            <a href="#" style={linkStyle} className="footer-link">Terms of Service</a>
          </div>
          
          <div style={socialStyle}>
            <span style={iconStyle} className="social-icon" title="Facebook">📘</span>
            <span style={iconStyle} className="social-icon" title="Twitter">🐦</span>
            <span style={iconStyle} className="social-icon" title="Instagram">📸</span>
            <span style={iconStyle} className="social-icon" title="LinkedIn">💼</span>
          </div>
          
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '20px',
            fontSize: '0.95rem',
            opacity: 0.9
          }}>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} MyStore. All rights reserved.</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '0.85rem', opacity: 0.8 }}>Made with ❤️ for amazing customers</p>
          </div>
        </div>
      </footer>
    </>
  );
}
