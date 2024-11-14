import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const UserScreen = ({ navigation }) => {
  const handleOpenDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>User</Text> screen
      </Text>
      <Button onPress={handleOpenDrawer} title="Open Drawer" />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
