import React from "react";
import { Text, TextInput, View } from "react-native";
import Wrapper from "../components/Wrapper";
import { colors } from "../styles/colors";
import CustomButton from "../components/CustomButton";

export default function ConfirmEmailOtp() {
  return (
    <Wrapper
      title="Confirm Email"
      paragraph="Enter the code sent to your email and confirm to login"
    >
      <View style={{ marginTop: 20, flexDirection: "row", gap: 14.5 }}>
        {[...new Array(5)].map((_, index) => (
          <TextInput
            key={index}
            keyboardType="decimal-pad"
            maxLength={1}
            style={{
              borderColor: colors.secondaryText,
              backgroundColor: colors.boxColor,
              borderRadius: 4,
              borderWidth: 1,
              width: 50,
              height: 50,
              color: colors.secondaryText,
              fontSize: 18,
              fontWeight: "800",
            }}
          />
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
          marginBottom: 15,
          gap: 10,
        }}
      >
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 14,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Haven&apos;t gotten code yet?
        </Text>
        <Text
          style={{
            color: colors.secondary,
            fontSize: 14,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          30:00 sec
        </Text>
      </View>
      <CustomButton buttonText="Confirm" bgColor={colors.secondary} />
    </Wrapper>
  );
}
