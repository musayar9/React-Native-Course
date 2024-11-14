import { StyleSheet, Text, View, Image, ScrollView,  Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

const MealsDetailScreen = ({ route, navigation }) => {
  const dataId = route.params.id;

  const data = MEALS.find((meal) => meal.id === dataId);
  const handleButtonPressHandler = ()=>{
  console.log("pressed me")
  }
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap Me!" onPress={handleButtonPressHandler}/>;
      },
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: data.imageUrl }} />
      <Text style={styles.title}>{data.title}</Text>
      <View>
        <MealDetails
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
  rootContainer: { marginBottom: 32 },
  image: {
    width: "100%",
    height: 350,
  },

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
