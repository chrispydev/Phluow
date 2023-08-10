import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import PagerView from "react-native-pager-view";
import ImageGrid from "../components/ImageGrid";

/* eslint-disable */
export default function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <StatusBar style={"light"} />
      <PagerView style={{ flex: 1 }} initialPage={0}>
        <View key="1">
          <Image style={styles.image} source={require("../assets/Saly.png")} />
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.text1]}>Order With Ease</Text>
            <Text style={[styles.text, styles.text2]}>
              Find, order, and track the delivery of water from reliable and
              certified suppliers.
            </Text>
            <View style={styles.carouselBars}>
              <View style={styles.carouselBar} />
              <View style={[styles.carouselBar, styles.bar2]} />
            </View>
          </View>
        </View>
        <View key="2">
          <ImageGrid />
          <View style={styles.textContainer}>
            <Text style={[styles.text, styles.text1]}>We made it simple</Text>
            <Text style={[styles.text, styles.text2]}>
              phluow for customers is the best way to meet your water needs.{" "}
            </Text>
            <View style={styles.carouselBars}>
              <View style={[styles.carouselBar, styles.bar2]} />
              <View style={styles.carouselBar} />
            </View>
          </View>
        </View>
      </PagerView>
      <View style={styles.buttonContainer}>
        <CustomButton buttonText="Create An Account" />
        <Text style={styles.buttonText1}>Sign in</Text>
        <Text style={styles.buttonText2}>
          By continuing you agree to our Terms of service & Privacy Policy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    // justifyContent: "space-between",
    // alignItems: "center",
    backgroundColor: "#292B2F",
    padding: 10,
    fontFamily: "Roboto_400Regular",
  },
  textContainer: {
    marginTop: -20,
  },
  image: {
    height: 335.867,
    width: 335.875,
  },
  text: {
    color: "#fff",
    textTransform: "capitalize",
    fontStyle: "normal",
    textAlign: "center",
    lineHeight: 30,
  },
  text1: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 10,
  },
  text2: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 20,
  },
  carouselBars: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselBar: {
    height: 4,
    width: 20,
    backgroundColor: "#007ACC",
    borderRadius: 10,
  },
  bar2: {
    width: 5,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: "#555",
  },
  buttonContainer: {
    justifyContent: "space-between",
  },
  buttonText1: {
    textAlign: "center",
    color: "#007ACC",
    marginTop: 20,
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 20,
  },
  buttonText2: {
    textAlign: "center",
    color: "#fff",
    marginTop: 20,
    fontSize: 14,
    fontWeight: 400,
    textTransform: "capitalize",
  },
});
