import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoryScreen = ({ navigation }) => {
  const RenderCategoryItem = ({ title, color }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview");
    };

    return (
      <CategoryGridTitle title={title} color={color} onPress={pressHandler} />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RenderCategoryItem title={item.title} color={item.color} />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
