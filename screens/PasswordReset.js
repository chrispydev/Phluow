import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Wrapper from "../components/Wrapper";
import { colors } from "../styles/colors";
import FormInput from "../components/FormInput";

export default function PasswordReset() {
  return (
    <Wrapper
      title="Reset Password"
      paragraph="Enter your email address and tap send to start the process"
    >
      <View style={{ marginTop: 30 }}>
        <Text
          styles={{
            color: colors.primaryText,
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 20,
            textTransform: "capitalize",
          }}
        >
          Email Address
        </Text>
        <FormInput
          placeHolderText="Email Address"
          secureText={false}
          iconLeft={require("../assets/calladd.png")}
        />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({});
