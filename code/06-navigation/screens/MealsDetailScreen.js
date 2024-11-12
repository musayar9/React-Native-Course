import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const MealsDetailScreen = ({ route }) => {
  const dataId = route.params.id;

  const data = MEALS.find((meal) => meal.id === dataId);
  return (
    <View>
      <Image source={{ uri: data.imageUrl }} />
      <Text>{data.title}</Text>
      <View>
        <MealDetails
          duration={data.duration}
          complexity={data.complexity}
          affordability={data.affordability}
        />
        <Text>
          {data.ingredients.map((ingredient) => (
            <Text key={ingredient}>{ingredient}</Text>
          ))}
        </Text>
        <Text>
          {data.steps.map((step) => (
            <Text key={step}>{step}</Text>
          ))}
        </Text>
      </View>
    </View>
  );
};

export default MealsDetailScreen;

const styles = StyleSheet.create({});
