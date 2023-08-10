import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function ImageGrid() {
  return (
    <View style={styles.imageContainer}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/envelope_left.png")}
        />
        <Image
          style={styles.image}
          source={require("../assets/cup_left.png")}
        />
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/marker_left.png")}
        />
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/clock_left.png")}
        />
        <Image
          style={styles.image}
          source={require("../assets/wallet_front.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 335.867,
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 60,
    paddingBottom: 10,
  },
});
