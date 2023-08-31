import React, { Children } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

/* eslint-disable */

export default function CustomButton({
  buttonText,
  buttonAction,
  bgColor,
  pHorizontal,
  children,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        { backgroundColor: bgColor, paddingHorizontal: pHorizontal },
      ]}
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
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  TextColor: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 500,
    textTransform: "capitalize",
  },
});
