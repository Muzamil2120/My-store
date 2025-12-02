import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();
export const useFavorite = () => useContext(FavoriteContext);

export default function FavoriteProvider({ children }) {
  const [favoriteCount, setFavoriteCount] = useState(0);
  const addFavorite = () => setFavoriteCount(c => c + 1);
  return (
    <FavoriteContext.Provider value={{ favoriteCount, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
