import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

const GoalItem = ({item, onDeleteItem}) => {

    console.log("test çalışması")
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
                    color: "white"
                }}
            >
                {item.item.text} - {item.item.id}
            </Text>

            <Pressable
                // android_ripple={{ color: "orange" }}
                // onPress={() => onDeleteItem(item.item.id)}
                onPress={onDeleteItem.bind(this, item.item.id)}
                style={({pressed}) => [
                    {opacity: pressed ? 0.5 : 1},
                    {
                        backgroundColor: "red",
                        borderRadius: 8,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                    },
                ]}
            >
                <Text style={{color: "white"}}>Delete</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({});
