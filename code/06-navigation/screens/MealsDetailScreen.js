import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorites-context";

const MealsDetailScreen = ({ route, navigation }) => {
  const dataId = route.params.id;
  const favoriteCtx = useContext(FavoriteContext);
  const data = MEALS.find((meal) => meal.id === dataId);

  const isMeal = favoriteCtx.ids.includes(dataId);
  const changeFavoriteStatus = () => {
    if (isMeal) {
      favoriteCtx.removeFavorite(dataId);
    } else {
      favoriteCtx.addFavorite(dataId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatus}
            icon={isMeal ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatus]);
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
