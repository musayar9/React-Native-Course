import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";
const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  // 1.yol
  // const onPress = (id) => {
  //   navigation.navigate("MealsDetailScreen", { id: id });
  // };

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
