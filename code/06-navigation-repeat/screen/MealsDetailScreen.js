import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MealsDetailScreen = ({ route, navigation }) => {
  const dataId = route.params.id;

  const data = MEALS.find((meal) => meal.id === dataId);

  const handleButtonPressHandler = () => {
    console.log("pressed me");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={handleButtonPressHandler}
            icon="star"
            color="white"
          />
        );
      },
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: data.imageUrl }} />
      <Text style={styles.title}>{data.title}</Text>
      <View>
        <MealDetail
          duration={data.duration}
          complexity={data.complexity}
          affordability={data.affordability}
          textStyle={styles.detailText}
        />

        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={data.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={data.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 50 },
  image: { width: "100%", height: 250 },
  title: {
    fontWeight: "500",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
