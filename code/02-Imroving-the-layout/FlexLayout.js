import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlexLayout = () => {
  return (
    <View style={{padding:50, flexDirection:"row", width:"80%", height:300,
    justifyContent:"space-between", alignItems:"stretch"}} >
      <View style={{flex:1,   justifyContent:"center", alignItems:"center", backgroundColor:"red"}}>
        <Text>1</Text>
      </View>
      <View style={{flex:2, justifyContent:"center", alignItems:"center", backgroundColor:"orange"}}>
        <Text>2</Text>
      </View>
      <View style={{  justifyContent:"center", alignItems:"center", backgroundColor:"blue"}}>
        <Text>3</Text>
      </View>
    </View>
  );
};

export default FlexLayout;

const styles = StyleSheet.create({});
