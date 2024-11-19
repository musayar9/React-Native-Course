
import React, { useContext } from "react";
import { FavoriteContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const FavoriteScreen = () => {
  const favoriteMealsCtx = useContext(FavoriteContext);

  const favoriteItem = MEALS.filter((mealId) =>
    favoriteMealsCtx.ids.includes(mealId)
  );
  return <MealsList items={favoriteItem} />;
};

export default FavoriteScreen;

// const styles = StyleSheet.create({});
