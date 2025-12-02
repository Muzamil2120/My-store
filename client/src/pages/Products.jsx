// Products.jsx
import React, { useEffect, useState, useMemo } from "react";
import { getProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [searchProd, setSearchProd] = useState("");

  // Fetch products once
  useEffect(() => {
    let mounted = true;
    getProducts().then((data) => {
      if (mounted) setProduct(data);
    }).catch(err => {
      console.error("Failed to fetch products:", err);
    });
    return () => { mounted = false; };
  }, []);

  // Derive filtered results with useMemo (no setState in effect)
  const filteredProd = useMemo(() => {
    if (!searchProd) return product;
    const q = searchProd.toLowerCase();
    return product.filter((item) =>
      item.name.toLowerCase().includes(q)
    );
  }, [product, searchProd]);

  return (
    <>
      <style>
        {`
        .products-container {
          padding: 50px 8%;
          animation: fadeIn 0.5s ease;
        }

        .search-bar {
          width: 100%;
          max-width: 450px;
          padding: 14px 18px;
          border-radius: 14px;
          border: 2px solid #a4508b44;
          outline: none;
          font-size: 1rem;
          margin-bottom: 40px;
          background: #ffffff;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          transition: 0.3s ease;
        }

        .search-bar:focus {
          border-color: #a4508b;
          box-shadow: 0 10px 25px rgba(164, 80, 139, 0.3);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 35px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
          }
        }
        `}
      </style>

      <div className="products-container">
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={searchProd}
          onChange={(e) => setSearchProd(e.target.value)}
        />

        <div className="products-grid">
          {filteredProd.length > 0 ? (
            filteredProd.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          ) : (
            <p style={{ fontSize: "1.2rem", color: "#555" }}>No product found.</p>
          )}
        </div>
      </div>
    </>
  );
}
