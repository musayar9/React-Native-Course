import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
// import FlexLayout from "./FlexLayout";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const addGoalHandler = (enteredGoalsText) => {
    if (enteredGoalsText === "") {
      Alert.alert("Input Error", "Input area mustn't be empty");
      return;
    }
    console.log(enteredGoalsText);
    // setCourseGoals([...courseGoals, enteredGoalsText]);
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalsText, id: Math.random().toFixed(2).toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    // const data = courseGoals.filter((item) => item.id !== id);
    // setCourseGoals(data);
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={() => setModalVisible(true)}
      />
      {modalVisible && <GoalInput addGoalHandler={addGoalHandler}  visible={modalVisible}/>}
      <View style={styles.listContainer}>
        <FlatList
          alwaysBounceVertical={true}
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={(item) => (
            <GoalItem item={item} onDeleteItem={deleteGoalHandler} />
          )}
          ListHeaderComponent={
            courseGoals.length > 0 ? ( // Eğer courseGoals dizisi boş değilse
              <View>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                  Todo List
                </Text>
              </View>
            ) : null // Boşsa hiçbir şey döndürme
          }
          ListEmptyComponent={
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Kayıtlı herhangi bir veri bulunamadı</Text>
            </View>
          }
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
