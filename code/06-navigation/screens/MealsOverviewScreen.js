import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
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

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      // onPress: onPress, 
    };

    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      {/* <Text>MealsOverviewScreen - {catId}</Text> */}
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
