import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CustomButton from "../components/CustomButton";

/* eslint-disable */
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Image style={styles.image} source={require("../assets/Saly.png")} />
      <View>
        <Text style={[styles.text, styles.text1]}>Order With Ease</Text>
        <Text style={[styles.text, styles.text2]}>
          Find, order, and track the delivery of water from reliable and
          certified suppliers.
        </Text>
      </View>
      <View style={styles.carouselContainer}>
        <View style={styles.carouselBar} />
        <View style={[styles.carouselBar, styles.bar2]} />
      </View>
      <View>
        <CustomButton buttonText="Create An Account" />
      </View>
      <Text>Sign in</Text>
      <Text>
        By continuing you agree to our Terms of service & Privacy Policy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#292B2F",
    padding: 10,
    fontFamily: "Roboto",
  },
  image: {
    height: 260,
    width: 200,
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    textTransform: "capitalize",
    fontStyle: "normal",
    textAlign: "center",
  },
  text1: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 10,
  },
  text2: {
    fontSize: 15,
    fontWeight: "100",
  },
  carouselContainer: {
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
    backgroundColor: "#f2f2f2",
  },
});
