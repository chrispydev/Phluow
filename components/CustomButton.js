import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

/* eslint-disable */

export default function CustomButton({ buttonText, buttonAction }) {
  return (
    <TouchableOpacity style={[styles.buttonStyle]} onPress={buttonAction}>
      <Text style={styles.TextColor}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#007ACC",
    paddingVertical: 12,
    paddingHorizontal: 29,
    borderRadius: 10,
    alignItems: "center",
    //width: 340,
  },
  TextColor: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    textTransform: "capitalize",
  },
});
