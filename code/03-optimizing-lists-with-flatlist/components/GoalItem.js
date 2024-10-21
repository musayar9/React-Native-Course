import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",

        alignItems: "center",
        borderBottomColor: "#5e0acc",
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
        margin: 10,
      }}
    >
      <Text
        style={{
          fontWeight: "600",
          fontSize: 18,
          fontStyle: "italic",
        }}
      >
        {item.item.text} - {item.item.id}
      </Text>

      <Pressable
        onPress={() => onDeleteItem(item.item.id)}
        style={{
          backgroundColor: "red",
          borderRadius: 8,
          paddingVertical: 5,
          paddingHorizontal: 10,
          color: "white",
        }}
      >
        <Text>Sil</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({});
