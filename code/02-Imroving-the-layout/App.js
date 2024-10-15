import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.formArea}>
        <TextInput
          style={{
            width: "70%",
            borderWidth: 2,
            borderColor: "#e2e8f0",
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 5,
          }}
          placeholder="Your course goal"
        />
        <Button title="Add Goal" />
      </View>
      <View style={styles.listContainer}>
        <Text>List Of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  formArea: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccccc",
  },
  listContainer: {
    flex: 5,
  },
});
