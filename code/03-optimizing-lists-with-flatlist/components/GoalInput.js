import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import React, {useState} from "react";

const GoalInput = ({addGoalHandler, visible, closeModal}) => {
    const [enteredGoalsText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    return (
        <Modal visible={visible} animationType="slide">

            <View style={styles.formArea}>
                <Image style={styles.image} source={require("../assets/images/goalss.png")}/>

                <TextInput
                    style={{
                        width: "70%",
                        borderWidth: 2,
                        // borderColor: "#e2e8f0",
                        borderColor: "#e4d0ff",
                        backgroundColor: "#e4d0ff",
                        color: "#120438",

                        borderRadius: 8,
                        paddingHorizontal: 12,
                        paddingVertical: 5,
                    }}
                    placeholder="Your course goal"
                    onChangeText={goalInputHandler}
                    value={enteredGoalsText}
                />


                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button title={"Cancel"} onPress={closeModal} color={"#f31282"}/>
                    </View>
                    <View style={styles.button}>
                        <Button
                            color={"#5e0acc"}
                            title="Add Goal"
                            onPress={() => {
                                addGoalHandler(enteredGoalsText), setEnteredGoalText("");
                            }}
                        />
                    </View>

                </View>

            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    formArea: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 24,
        // borderBottomWidth: 1,
        // borderBottomColor: "#ccccccc",
        backgroundColor: "#1e085a",
        // borderTopLeftRadius: 24,
        // borderTopRightRadius: 24
    },
    image: {
        width: 120,
        height: 120,
        margin: 20,
        borderRadius: 60

    },

    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button: {
        width: "30%",
        marginHorizontal: 8,

    }
});
