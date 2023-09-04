import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import PasswordReset from "./screens/PasswordReset";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import ConfirmEmailOtp from "./screens/ConfirmEmailOtp";
import HomeScreen from "./screens/HomeScreen";

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_700Bold,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="signUp" component={SignUpScreen} />
          <Stack.Screen name="signin" component={SignInScreen} />
          <Stack.Screen name="password-reset" component={PasswordReset} />
          <Stack.Screen name="confirm-email" component={ConfirmEmailOtp} />
          <Stack.Screen name="home-tab" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
