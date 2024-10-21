import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
// import FlexLayout from "./FlexLayout";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (enteredGoalsText) => {
    console.log(enteredGoalsText);
    // setCourseGoals([...courseGoals, enteredGoalsText]);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text:enteredGoalsText, id:Math.random().toString()},
    ]);
  };

  const deleteGoalHandler = (id) => {
    const data = courseGoals.filter((item) => item.id !== id);
    setCourseGoals(data);
  };
  return (
    <View style={styles.container}>
      <GoalInput addGoalHandler={addGoalHandler} />
      <View style={styles.listContainer}>
        <FlatList
          alwaysBounceVertical={true}
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={(item) => <GoalItem item={item} onDeleteItem = {deleteGoalHandler}/>}
        />
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

  listContainer: {
    flex: 5,
  },
});
