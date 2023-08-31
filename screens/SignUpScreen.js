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
import CustomButton from "../components/CustomButton";

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
            fontSize: 16,
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
          <Text
            style={{
              color: colors.primaryText,
              textTransform: "capitalize",
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 20,
            }}
          >
            Register As:
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomButton
              pHorizontal={15}
              buttonText="An Individual"
              bgColor={colors.boxColor}
            >
              <Image
                style={{ width: 20, height: 20, marginRight: 7 }}
                source={require("../assets/profilecircle.png")}
              />
            </CustomButton>
            <CustomButton
              pHorizontal={15}
              buttonText="A Business"
              bgColor={colors.boxColor}
            >
              <Image
                style={{ width: 20, height: 20, marginRight: 7 }}
                source={require("../assets/briefcase.png")}
              />
            </CustomButton>
          </View>

          <CustomButton
            bgColor={colors.primary}
            buttonText="Create Account"
            buttonAction={() => navigation.navigate("SignUp")}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: 500,
                textTransform: "capitalize",
                fontSize: 14,
                color: colors.primaryText,
              }}
            >
              Already Have An Account
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Log in")}>
              <Text
                style={{
                  color: colors.primary,
                  textAlign: "center",
                  fontWeight: 500,
                  textTransform: "capitalize",
                  fontSize: 14,
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
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
