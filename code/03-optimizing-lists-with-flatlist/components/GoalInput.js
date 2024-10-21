import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const GoalInput = ({ addGoalHandler }) => {
  const [enteredGoalsText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  return (
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
        value={enteredGoalsText}
      />
      <Button
        title="Add Goal"
        onPress={() => {
          addGoalHandler(enteredGoalsText), setEnteredGoalText("");
        }}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  formArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccccc",
  },
});
