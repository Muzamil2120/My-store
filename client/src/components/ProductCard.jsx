// ProductCard.jsx
import { Link } from "react-router-dom";
import { useFavorite } from "../context/FavoriteContext";

export default function ProductCard({ product }) {
  const { toggleFavorite, isFavorite } = useFavorite(); // 💖 new
  const fav = isFavorite(product.id);

  return (
    <>
      <style>
        {`
          .card {
            background: #fff;
            padding: 25px;
            border-radius: 18px;
            text-align: center;
            transition: 0.4s ease;
            cursor: pointer;
            border: 1px solid rgba(0,0,0,0.08);
            box-shadow: 0 8px 25px rgba(0,0,0,0.12);
            position: relative;
            overflow: hidden;
          }

          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(120, 50, 150, 0.3);
          }

          .image-box {
            position: relative;
            overflow: hidden;
            border-radius: 14px;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #a4508b22, #5f0a8722);
          }

          .image-box img {
            width: 100%;
            height: 240px;
            object-fit: cover;
            border-radius: 14px;
            transition: 0.4s ease;
          }

          .card:hover img {
            transform: scale(1.12);
          }

          .category-tag {
            position: absolute;
            top: 14px;
            left: 14px;
            background: linear-gradient(135deg, #a4508b, #5f0a87);
            padding: 6px 12px;
            border-radius: 20px;
            color: #fff;
            font-size: 0.75rem;
            font-weight: bold;
          }

          .fav-btn {
            position: absolute;
            top: 14px;
            right: 14px;
            background: #fff;
            border-radius: 50%;
            width: 42px;
            height: 42px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.3rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: 0.3s ease;
            border: none;
          }

          .fav-btn:hover {
            transform: scale(1.12);
            box-shadow: 0 6px 16px rgba(0,0,0,0.25);
          }

          .fav-filled {
            color: #ff1e7a;
            text-shadow: 0 0 10px rgba(255,30,122,0.6);
          }

          .btn {
            display: inline-block;
            padding: 14px 28px;
            background: linear-gradient(135deg, #a4508b, #5f0a87);
            border-radius: 12px;
            color: #fff;
            font-weight: bold;
            text-decoration: none;
            margin-top: 15px;
            letter-spacing: 1px;
            transition: 0.3s ease;
          }

          .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(120,50,150,0.4);
          }
        `}
      </style>

      <div className="card" role="article" aria-label={`Product ${product.name}`}>
        {/* ❤️ Favorite Button */}
        <button
          className="fav-btn"
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click if you later add one
            toggleFavorite(product);
          }}
          aria-pressed={fav}
          aria-label={fav ? "Remove from favorites" : "Add to favorites"}
        >
          {fav ? <span className="fav-filled">❤️</span> : "🤍"}
        </button>

        <div className="image-box">
          <span className="category-tag">{product.category}</span>
          <img src={product.image} alt={product.name} />
        </div>

        <h3 style={{ fontSize: "1.4rem", color: "#2c3e50", fontWeight: "700" }}>
          {product.name}
        </h3>

        <h2 style={{
          fontSize: "1.9rem",
          color: "#a4508b",
          fontWeight: "bold",
          marginTop: 10
        }}>
          ${product.price}
        </h2>

        <Link to={`/product/${product.id}`} className="btn" aria-label={`View details for ${product.name}`}>
          View Details →
        </Link>
      </div>
    </>
  );
}
