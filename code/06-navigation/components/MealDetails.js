import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItems, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItems, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItems, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
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
