import { useEffect, useState } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-screen">
      <div className="splash-logo">🛍️</div>
      <h1 className="splash-title">ShopEase</h1>
      <div className="splash-loader"></div>
    </div>
  );
}
