import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryGridTitle = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.itemText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: { flex: 1, cursor:"pointer" },
  buttonPressed: { opacity: 0.5 },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  itemText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
