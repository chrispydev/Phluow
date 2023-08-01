import React from "react";
import { View, Text, StyleSheet } from "react-native";

/* eslint-disable */
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.textColor}>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
  },
  textColor: { color: "#fff", fontSize: 30 },
});
