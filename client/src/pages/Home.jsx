import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <style>
        {`
        .home-container {
          width: 100%;
          min-height: 90vh;
          padding: 60px 8%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          animation: fadeIn 0.6s ease;
        }

        .home-title {
          font-size: 3rem;
          font-weight: 800;
          color: #2c2c54;
          line-height: 1.2;
          max-width: 700px;
        }

        .home-title span {
          background: linear-gradient(135deg, #a4508b, #5f0a87);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .home-sub {
          font-size: 1.25rem;
          color: #555;
          margin-top: 18px;
          max-width: 650px;
        }

        .home-btn {
          margin-top: 35px;
          padding: 15px 35px;
          background: linear-gradient(135deg, #a4508b, #5f0a87);
          color: white;
          font-size: 1.1rem;
          font-weight: bold;
          border: none;
          border-radius: 14px;
          text-decoration: none;
          transition: 0.3s ease;
          display: inline-block;
          letter-spacing: 1px;
          box-shadow: 0 12px 30px rgba(120,50,150,0.35);
        }

        .home-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0px 18px 40px rgba(120,50,150,0.45);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 600px) {
          .home-title {
            font-size: 2.2rem;
          }
          .home-sub {
            font-size: 1.05rem;
          }
        }
        `}
      </style>

      <div className="home-container">
        <h1 className="home-title">
          Discover the Best <span>Modern Products</span> for Your Lifestyle
        </h1>

        <p className="home-sub">
          Explore a wide range of premium quality items with modern designs,
          smooth UI, and unforgettable shopping experience.
        </p>

        <Link to="/products" className="home-btn">
          Explore Products →
        </Link>
      </div>
    </>
  );
}
