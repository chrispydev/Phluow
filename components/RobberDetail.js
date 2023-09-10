import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../styles/colors";
import HorizontalLine from "./HorizontalLine";
import CustomButton from "./CustomButton";

export default function RobberDetail() {
  return (
    <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
      <View style={styles.roberDetail}>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        >
          <Image
            style={{ width: 47, height: 59, flexShrink: 0, borderRadius: 5 }}
            source={require("../assets/rober.png")}
          />
          <View style={{ gap: 7 }}>
            <Text style={[styles.robberText, { color: colors.textLightColor }]}>
              Sachets Water
            </Text>
            <Text style={{ color: colors.secondaryText }}>500ml</Text>
          </View>
        </View>
        <HorizontalLine />
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: -0.24,
              flexWrap: "wrap",
            }}
          >
            1 sachets of water
          </Text>
          <View style={{ alignItems: "flex-start", gap: 7 }}>
            <Text
              style={{
                color: colors.textLightColor,
                fontWeight: 600,
                letterSpacing: -0.24,
              }}
            >
              Price:
            </Text>
            <Text
              style={{
                color: colors.secondaryText,
                fontWeight: 600,
                letterSpacing: -0.24,
              }}
            >
              Ghc 10.00
            </Text>
          </View>
        </View>
        <HorizontalLine />
        <View
          style={{
            padding: 30,
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#292B2F",
              gap: 5,
              maxWidth: 154,
              maxHeight: 70,
              borderRadius: 10,
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: 600,
                lineHeight: 20,
                color: colors.secondaryText,
                textAlign: "center",
              }}
            >
              Number of purchase
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                lineHeight: 20,
                color: colors.secondaryText,
                textAlign: "center",
              }}
            >
              2
            </Text>
          </View>
          <CustomButton
            pVertical={16}
            pHorizontal={8}
            buttonText="Return sachet rubber"
            bgColor={colors.textLightColor}
          />
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
        >
          <Text
            style={{ color: colors.complete, fontWeight: 600, fontSize: 14 }}
          >
            Delivery Status:{" "}
          </Text>
          <Text
            style={{
              color: colors.secondaryText,
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Time / Date
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            backgroundColor: "#292B2F",
            borderRadius: 16,
            paddingVertical: 22,
            paddingHorizontal: 18,
          }}
        >
          <Text style={{ color: "#515356", fontWeight: 400, fontSize: 14 }}>
            Additional Information from Company shows up here
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  roberDetail: {
    backgroundColor: "#40444B",
    borderRadius: 10,
  },
  robberText: {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: -0.24,
    lineHeight: 20,
  },
});
