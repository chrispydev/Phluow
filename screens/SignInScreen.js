import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { colors } from "../styles/colors";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";

/* eslint-disable*/
export default function SignInScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.SignUpContainer}>
      <StatusBar backgroundColor="#fff" />
      <TouchableOpacity style={styles.backButton}>
        <Image source={require("../assets/signin_back.png")} />
      </TouchableOpacity>
      <View style={styles.welcomeSignInTextContainer}>
        <Image style={styles.image} source={require("../assets/signin.png")} />
        <Text style={styles.text}>Hello There</Text>
        <View style={{ gap: 5 }}>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.welcomeText}>Please sign in!</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{ gap: 12, marginTop: 40 }}>
          <View
            style={{
              backgroundColor: colors.boxColor,
              paddingVertical: 16,
              paddingVertical: 8,
              borderRadius: 16,
              borderColor: colors.boxColor,
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Image
              style={{ marginRight: 30, marginLeft: 20 }}
              source={require("../assets/calladd.png")}
            />
            <TextInput
              style={{ color: colors.lableText }}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
          </View>
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 20,
              textTransform: "capitalize",
            }}
          >
            Login With Your Email Instead
          </Text>
        </View>
      </ScrollView>
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
    // paddingVertical: 19,
    fontWeight: "600",
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
  },
});
