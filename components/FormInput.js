import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

/* eslint-disable */

export default function FormInput({
  stateProps,
  formLable,
  placeHolderText,
  secureText,
  keyboardType,
}) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.margin}>
      <Text style={styles.TextColor}>{formLable}</Text>
      <TextInput
        onChangeText={stateProps}
        placeholderTextColor="#fff"
        style={[styles.InputStyle, isFocused && styles.Focused]}
        placeholder={placeHolderText}
        secureTextEntry={secureText}
        keyboardType={keyboardType}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TextColor: {
    color: "#fff",
  },
  margin: { marginTop: 20 },
  InputStyle: {
    borderColor: "#fff",
    backgroundColor: "#333",
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
    color: "#fff",
  },
  Focused: {
    borderColor: "#33B328",
  },
});
