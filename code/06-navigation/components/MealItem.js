import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

const MealItem = ({
  id,
  title,
  imageUrl,
  complexity,
  affordability,
  duration,
  onPress,
}) => {
  // 2.yol
  const navigation = useNavigation();
  const selectItemMeal = () => {
    navigation.navigate("MealsDetailScreen", { id: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        // onPress={() => onPress(id)}
        onPress={selectItemMeal}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  buttonPressed: { opacity: 0.5 },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3311dd",
    marginVertical: 10,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItems: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
