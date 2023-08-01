import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";

/* eslint-disable*/
export default function SignUpScreen({ navigation }) {
  const [_, setName] = useState("");

  const submit = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
    justifyContent: "flex-end",
  },

  header: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  TextColor: {
    color: "#fff",
  },
  socialRegister: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: { marginTop: 20 },

  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },

  ButtonText: {
    color: "#fff",
    fontSize: 20,
  },
});
