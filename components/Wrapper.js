import React from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from "react-native";
import { colors } from "../styles/colors";

/* eslint-disable*/
export default function Wrapper({ children, title, paragraph }) {
  return (
    <SafeAreaView style={styles.SignUpContainer}>
      <StatusBar backgroundColor="#fff" />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../assets/signin_back.png")} />
      </TouchableOpacity>

      <View style={styles.welcomeSignInTextContainer}>
        <Image style={styles.image} source={require("../assets/signin.png")} />
        <Text style={styles.text}>{title}</Text>
        <View style={{ gap: 5 }}>
          <Text style={styles.welcomeText}>{paragraph}</Text>
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SignUpContainer: {
    flex: 1,
    backgroundColor: "#292B2F",
    fontFamily: "Roboto_400Regular",
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  backButton: {
    padding: 10,
    marginLeft: -20,
    maxWidth: 20,
  },
  welcomeSignInTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 29,
  },
  text: {
    color: colors.primaryText,
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 0.24,
    fontFamily: "Roboto_400Regular",
  },
  welcomeText: {
    color: colors.primaryText,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 20,
    flexWrap: "wrap",
  },
});
