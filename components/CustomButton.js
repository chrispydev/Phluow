import React, { Children } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

/* eslint-disable */

export default function CustomButton({
  buttonText,
  buttonAction,
  bgColor,
  children,
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, { backgroundColor: bgColor }]}
      onPress={buttonAction}
    >
      {children}
      <Text style={styles.TextColor}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 12,
    paddingHorizontal: 29,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    //width: 340,
  },
  TextColor: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    textTransform: "capitalize",
  },
});
