import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import RegisterIcon from "../components/RegisterIcon";

/* eslint-disable*/
export default function SignUpScreen({ navigation }) {
  const [_, setName] = useState("");

  const submit = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.ButtonText}>Sign up</Text>
        </View>
        <FormInput
          propState={setName}
          formLable="Name"
          placeHolderText="Full Name"
        />
        <FormInput
          propState={setName}
          formLable="Email"
          placeHolderText="Email Address"
          keyboardType="email-address"
        />
        <FormInput
          stateProps={setName}
          formLable="Password"
          placeHolderText="Pick a strong password"
          secureText={true}
        />
        <Text
          style={{ color: "#fff", marginVertical: 20, textAlign: "center" }}
        >
          Or
        </Text>
        <View style={styles.socialRegister}>
          <RegisterIcon iconText="facebook" buttonAction={submit} />
          <RegisterIcon iconText="google" buttonAction={submit} />
          <RegisterIcon iconText="instagram" buttonAction={submit} />
        </View>
      </ScrollView>
      <SubmitButton buttonText="Create account" buttonAction={submit} />
      <View
        style={{
          marginVertical: 10,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", marginRight: 10 }}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ color: "#33b328" }}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
    justifyContent: "flex-end",
  },

  header: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  TextColor: {
    color: "#fff",
  },
  socialRegister: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: { marginTop: 20 },

  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },

  ButtonText: {
    color: "#fff",
    fontSize: 20,
  },
});
