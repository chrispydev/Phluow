import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";

/* eslint-disable*/
export default function SignUpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.SignUpContainer}>
      <StatusBar backgroundColor="#fff" />
      <View>
        <Image
          style={styles.image}
          source={require("../assets/envelope_left.png")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SignUpContainer: {
    backgroundColor: "#292B2F",
    fontFamily: "Roboto_400Regular",
  },
});
