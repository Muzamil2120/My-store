// src/context/FavoriteContext.jsx
import React, { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Check if a product is in favorites
  const isFavorite = (id) => {
    return favorites.some(item => item.id === id);
  };

  // Toggle favorite status
  const toggleFavorite = (product) => {
    setFavorites(prev => {
      const isAlreadyFavorite = prev.some(item => item.id === product.id);
      if (isAlreadyFavorite) {
        // Remove from favorites
        return prev.filter(item => item.id !== product.id);
      } else {
        // Add to favorites
        return [...prev, product];
      }
    });
  };

  // Get favorite count
  const favoriteCount = favorites.length;

  const value = {
    favorites,
    favoriteCount,
    isFavorite,
    toggleFavorite
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}