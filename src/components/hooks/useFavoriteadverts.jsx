import { useEffect, useState } from "react";


export const useFavoriteAdverts = (favoriteMovies) => {
  const [favorite, setFavorite] = useState(favoriteMovies);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const removeFavoriteById = (id) => {
    setFavorite((prevFavorite) =>
      prevFavorite.filter((item) => item.id !== id)
    );
  };

  return { favorite, removeFavoriteById, setFavorite };
};