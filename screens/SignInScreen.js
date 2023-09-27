import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import Wrapper from '../components/Wrapper';
import {colors} from '../styles/colors';

export default function SigninScreen({navigation}) {
  const [secure, setSecure] = useState(true);

  return (
    <Wrapper show navigation={navigation}>
      <StatusBar backgroundColor="#000" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.welcomesigninTextContainer}>
          <Image
            style={styles.image}
            source={require('../assets/signin.png')}
          />
          <Text style={styles.text}>Hello There</Text>
          <View style={{gap: 5}}>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.welcomeText}>Please sign in!</Text>
          </View>
        </View>
        <View style={{gap: 12, marginTop: 40}}>
          <FormInput
            keyboardType="phone-pad"
            placeHolderText="Phone Number"
            secureText={false}
            iconLeft={require('../assets/calladd.png')}
          />

          <Text style={styles.label}>Login With Your Email Instead</Text>
        </View>
        <View style={{gap: 12, marginVertical: 12}}>
          <FormInput
            placeHolderText="Password"
            secureText={secure}
            iconLeft={require('../assets/key.png')}>
            <TouchableOpacity
              style={{marginRight: 10}}
              onPress={() => setSecure(!secure)}>
              {secure ? (
                <Icon name="eye" size={35} color={colors.secondaryText} />
              ) : (
                <Icon name="eye-off" size={35} color={colors.secondaryText} />
              )}
            </TouchableOpacity>
          </FormInput>
          <TouchableOpacity
            onPress={() => navigation.navigate('password-reset')}>
            <Text style={styles.label}>Forget Your Password</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          bgColor={colors.secondary}
          buttonText="Sign in"
          buttonAction={() => navigation.navigate('confirm-email')}
        />
        <View style={{marginTop: 12}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 15,
            }}>
            <View
              style={{
                height: 1,
                backgroundColor: colors.secondaryText,
                width: '100%',
              }}
            />
            <Text
              style={{
                fontSize: 20,
                paddingHorizontal: 10,
                color: colors.secondaryText,
              }}>
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
            buttonText="Sign In With Google"
            bgColor={colors.boxColor}
            pHorizontal={29}>
            <Image
              style={{width: 20, height: 20, marginRight: 7}}
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
          }}>
          <Text style={{color: colors.secondaryText, fontSize: 20}}>
            Don't Have An Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
            <Text
              style={{
                color: colors.secondary,
                fontWeight: '500',
                textAlign: 'center',
                textTransform: 'capitalize',
                fontSize: 20,
                marginLeft: 10,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Wrapper>
  );
}

export const styles = StyleSheet.create({
  welcomesigninTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 29,
  },
  text: {
    color: colors.secondaryText,
    fontSize: 45,
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: 0.24,
    fontFamily: 'Roboto_400Regular',
  },
  welcomeText: {
    color: colors.secondaryText,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '400',
    lineHeight: 30,
  },
  label: {
    color: colors.secondaryText,
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 30,
    textTransform: 'capitalize',
  },
});
