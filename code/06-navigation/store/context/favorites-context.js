import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealsId, setFavoriteMealsID] = useState([]);

  const addFavorite = (id) => {
    setFavoriteMealsID((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id) => {
    setFavoriteMealsID((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealsId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
};

export default FavoriteContextProvider;
