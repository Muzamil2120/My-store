import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>
        {`
        .navbar {
          width: 100%;
          padding: 18px 8%;
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .logo {
          font-size: 1.9rem;
          font-weight: 800;
          letter-spacing: 1px;
          background: linear-gradient(135deg, #a4508b, #5f0a87);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 35px;
          font-weight: 600;
          font-size: 1.05rem;
        }

        .nav-item {
          color: #333;
          text-decoration: none;
          position: relative;
          padding-bottom: 4px;
          transition: 0.3s ease;
        }

        .nav-item:hover {
          color: #a4508b;
        }

        .nav-item::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 3px;
          background: linear-gradient(135deg, #a4508b, #5f0a87);
          left: 0;
          bottom: 0;
          transition: width 0.35s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .active-link {
          color: #5f0a87;
        }

        .active-link::after {
          width: 100%;
        }

        @media (max-width: 700px) {
          .nav-links {
            gap: 22px;
          }
          .logo {
            font-size: 1.6rem;
          }
        }
        `}
      </style>

      <nav className="navbar">
        <Link to="/" className="logo">
          MyStore
        </Link>

        <div className="nav-links">
          <Link
            to="/"
            className={`nav-item ${isActive("/") ? "active-link" : ""}`}
          >
            Home
          </Link>

          <Link
            to="/products"
            className={`nav-item ${isActive("/products") ? "active-link" : ""}`}
          >
            Products
          </Link>

          <Link
            to="/favorites"
            className={`nav-item ${isActive("/favorites") ? "active-link" : ""}`}
          >
            Favorites
          </Link>
        </div>
      </nav>
    </>
  );
}
