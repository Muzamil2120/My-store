// A reusable button component
export default function Button({ children, onClick, style = {}, ...props }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 22px',
        background: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,123,255,0.08)',
        transition: 'background 0.2s',
        ...style
      }}
      {...props}
    >
      {children}
    </button>
  );
}
