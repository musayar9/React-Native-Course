import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";
import FlexLayout from "./FlexLayout";
import { useState } from "react";

export default function App() {
  const [enteredGoalsText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoalsText);
    // setCourseGoals([...courseGoals, enteredGoalsText]);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalsText,
    ]);
  };

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
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <ScrollView alwaysBounceVertical={true}>
          {courseGoals.map((item, index) => (
            <View
              key={index}
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
                style={{ fontWeight: "600", fontSize: 18, fontStyle: "italic" }}
              >
                {item}
              </Text>

              <Text
                style={{
                  backgroundColor: "red",
                  borderRadius: 8,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  color: "white",
                }}
              >
                Sil
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* <View style={{flex:6}}>
      <FlexLayout/>

</View> */}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccccc",
  },
  listContainer: {
    flex: 5,
  },
});
