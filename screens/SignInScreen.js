import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../styles/colors';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';

/* eslint-disable*/
export default function SignInScreen({ navigation }) {
  const [secure, setSecure] = useState(true);
  return (
    <SafeAreaView style={styles.SignUpContainer}>
      <StatusBar backgroundColor='#fff' />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image source={require('../assets/signin_back.png')} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeSignInTextContainer}>
          <Image
            style={styles.image}
            source={require('../assets/signin.png')}
          />
          <Text style={styles.text}>Hello There</Text>
          <View style={{ gap: 5 }}>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.welcomeText}>Please sign in!</Text>
          </View>
        </View>
        <View style={{ gap: 12, marginTop: 40 }}>
          <FormInput
            keyboardType='phone-pad'
            placeHolderText='Phone Number'
            secureText={false}
            iconLeft={require('../assets/calladd.png')}
          />

          <Text style={styles.label}>Login With Your Email Instead</Text>
        </View>
        <View style={{ gap: 12, marginVertical: 12 }}>
          <FormInput
            placeHolderText='Password'
            secureText={secure}
            iconLeft={require('../assets/key.png')}
          >
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              {secure ? (
                <Icon name='eye' size={25} color={colors.secondaryText} />
              ) : (
                <Icon name='eye-off' size={25} color={colors.secondaryText} />
              )}
            </TouchableOpacity>
          </FormInput>
          <TouchableOpacity
            onPress={() => navigation.navigate('password-reset')}
          >
            <Text style={styles.label}>Forget Your Password</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          bgColor={colors.secondary}
          buttonText='Sign in'
          buttonAction={() => navigation.navigate('SignUp')}
        />
        <View style={{ marginTop: 12 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <View
              style={{
                height: 1,
                backgroundColor: colors.secondaryText,
                width: '100%',
              }}
            />
            <Text
              style={{ paddingHorizontal: 10, color: colors.secondaryText }}
            >
              Or, Sign in With
            </Text>
            <View
              style={{
                height: 1,
                backgroundColor: colors.secondaryText,
                width: '100%',
              }}
            />
          </View>
          <CustomButton
            buttonText='Sign In With Google'
            bgColor={colors.boxColor}
            pHorizontal={29}
          >
            <Image
              style={{ width: 20, height: 20, marginRight: 7 }}
              source={require('../assets/Group1434.png')}
            />
          </CustomButton>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: colors.secondaryText }}>
            Don't Have An Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                color: colors.secondary,
                fontWeight: 500,
                textAlign: 'center',
                textTransform: 'capitalize',
                fontSize: 14,
                marginLeft: 10,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SignUpContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    fontFamily: 'Roboto_400Regular',
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  backButton: {
    padding: 10,
    marginLeft: -20,
    maxWidth: 20,
  },
  welcomeSignInTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 29,
  },
  text: {
    color: colors.secondaryText,
    fontSize: 24,
    fontWeight: '600',
    textTransform: 'capitalize',
    letterSpacing: 0.24,
    fontFamily: 'Roboto_400Regular',
  },
  welcomeText: {
    color: colors.secondaryText,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
  label: {
    color: colors.secondaryText,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 20,
    textTransform: 'capitalize',
  },
});
