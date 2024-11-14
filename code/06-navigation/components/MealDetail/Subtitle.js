import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({children}) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}> {children}</Text>
    </View>
  );
}

export default Subtitle

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e2b497",
  },
  subtitleContainer: {
    marginVertical: 6,
    marginHorizontal: 12,
    borderColor: "#e2b497",
    borderBottomWidth: 2,
  },
});