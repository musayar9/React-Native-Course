import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStatus}>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4f97ff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStatus: {
    color: "#fff",
    fontSize: 48,
  },
});
