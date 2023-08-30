import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { colors } from "../styles/colors";
import FormInput from "../components/FormInput";

/* eslint-disable*/
export default function SignUpScreen({ navigation }) {
  const [secure, setSecure] = useState(true);
  return (
    <SafeAreaView style={styles.SignUpContainer}>
      <StatusBar backgroundColor="#fff" />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../assets/signin_back.png")} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 24,
              letterSpacing: 0.24,
              textTransform: "capitalize",
              color: colors.primaryText,
              fontWeight: "700",
            }}
          >
            Find, Order With{" "}
          </Text>
          <Text
            style={{
              fontSize: 24,
              letterSpacing: 0.24,
              textTransform: "capitalize",
              color: colors.primaryText,
              fontWeight: "700",
            }}
          >
            Ease
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "400",
            textTransform: "capitalize",
            lineHeight: 20,
            fontStyle: "normal",
            textAlign: "center",
            marginTop: 19,
            color: colors.primaryText,
          }}
        >
          Let's Create An Account to Continue
        </Text>
        <View style={{ marginTop: 29, gap: 15 }}>
          <FormInput
            placeHolderText="Full Name"
            secureText={false}
            iconLeft={require("../assets/profile.png")}
          />
          <FormInput
            placeHolderText="Email Address"
            secureText={false}
            iconLeft={require("../assets/smsnotification.png")}
          />
          <FormInput
            keyboardType="phone-pad"
            placeHolderText="Phone Number"
            secureText={false}
            iconLeft={require("../assets/calladd.png")}
          />
          <FormInput
            placeHolderText="Password"
            secureText={secure}
            iconLeft={require("../assets/key.png")}
          >
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              {secure ? (
                <Icon name="eye" size={25} color={colors.primaryText} />
              ) : (
                <Icon name="eye-off" size={25} color={colors.primaryText} />
              )}
            </TouchableOpacity>
          </FormInput>
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
});
