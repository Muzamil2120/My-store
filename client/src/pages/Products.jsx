
import { useState } from "react";
import { useFavorite } from "../context/FavoriteContext";
import { useProducts } from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ProductSkeleton from "../components/ProductSkeleton";

export default function Products() {
  const [search, setSearch] = useState("");
  const { products, loading, error } = useProducts();
  const { addFavorite } = useFavorite();

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));


  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 30 }}>
      <div style={{ marginBottom: 30 }}>
        <input
          type="text"
          placeholder="🔍 Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '15px 25px',
            width: 'calc(100% - 50px)',
            border: 'none',
            fontSize: '1.1rem',
            borderRadius: 50,
            outline: 'none',
            background: 'transparent'
          }}
        />
      </div>

      {loading ? (
        <div style={{
          display: "grid",
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 30,
          marginTop: 40
        }}>
          {Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)}
        </div>
      ) : error ? (
        <div style={{ color: '#e74c3c', textAlign: 'center', fontSize: '1.2rem', marginTop: 40 }}>{error}</div>
      ) : (
        <>
          <div style={{
            display: "grid",
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 30
          }}>
            {filtered.map(p => <ProductCard key={p.id} product={p} onFavorite={addFavorite} />)}
          </div>
          {filtered.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: 60,
              background: '#fff',
              borderRadius: 15,
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ color: '#999', fontSize: '1.5rem' }}>No products found</h2>
              <p style={{ color: '#bbb' }}>Try adjusting your search</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
