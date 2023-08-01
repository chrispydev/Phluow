import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

/* eslint-disable */

export default function SubmitButton({ buttonText, buttonAction }) {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={buttonAction}>
      <Text style={styles.TextColor}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#33B328",
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  TextColor: {
    color: "#fff",
  },
});
