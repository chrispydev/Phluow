import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen';
import SigninScreen from './screens/SignInScreen';
import PasswordReset from './screens/PasswordReset';
import ConfirmEmailOtp from './screens/ConfirmEmailOtp';
import HomeScreen from './screens/HomeScreen';
import PickUpOrder from './screens/PickUpOrder';
import Services from './screens/Services';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from './styles/colors';
import {Image} from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let imageTab;
    if (route.name === 'Home') {
      imageTab = focused
        ? require('./assets/home-active.png')
        : require('./assets/home.png');
    } else if (route.name === 'Services') {
      imageTab = focused
        ? require('./assets/service.png')
        : require('./assets/service.png');
    } else if (route.name === 'Schedule Pickups') {
      imageTab = focused
        ? require('./assets/pickup-active.png')
        : require('./assets/pickup.png');
    }

    return <Image source={imageTab} width={100} height={100} />;
  },
  tabBarActiveTintColor: colors.secondary,
  tabBarInactiveTintColor: colors.secondaryText,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: colors.primaryDarker,
    textTransform: 'uppercase',
    paddingVertical: 10,
    borderTopWidth: 0,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.24,
  },
});

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={Services} />

      <Tab.Screen name="Schedule Pickups" component={PickUpOrder} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home-tab"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="signin" component={SigninScreen} />
        <Stack.Screen name="password-reset" component={PasswordReset} />
        <Stack.Screen name="confirm-email" component={ConfirmEmailOtp} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="home-tab" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
