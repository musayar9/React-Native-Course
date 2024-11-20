import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351404",
    textAlign: "center",
  },
});
