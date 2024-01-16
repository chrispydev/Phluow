import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

/* eslint-disable */

export default function RegisterIcon({ buttonAction, iconText }) {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={buttonAction}>
      <Icon name={iconText} size={20} color="#33B328" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#333",
    justifyContent: "center",
    alignContent: "center",
    marginRight: 20,
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: "center",
    borderColor: "#33B328",
    borderWidth: 1,
  },
  TextColor: {
    color: "#fff",
  },
});
