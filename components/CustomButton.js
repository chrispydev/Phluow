import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

/* eslint-disable */

export default function CustomButton({
  buttonText,
  buttonAction,
  bgColor,
  bRadius,
  pHorizontal,
  pVertical,
  children,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonStyle,
        {
          backgroundColor: bgColor,
          paddingHorizontal: pHorizontal,
          paddingVertical: pVertical ? pVertical : 12,
          borderRadius: bRadius ? bRadius : 15,
        },
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
