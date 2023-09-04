import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../styles/colors';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import PopupConfirmation from '../components/PopupConfirmation';
import Wrapper from '../components/Wrapper';

/* eslint-disable*/
export default function SignUpScreen({ navigation }) {
  const [secure, setSecure] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper show navigation={navigation}>
      <StatusBar backgroundColor='#fff' />
      <PopupConfirmation
        popupText='You have signUp successfully!
Check your email to confirm code sent to you.'
        visible={visible}
        onClose={() => {
          Alert.alert('Modal has been closed.');
          setVisible(!visible);
        }}
      >
        <CustomButton
          buttonAction={() => setVisible(false)}
          buttonText='Okay'
          bgColor={colors.secondary}
          pHorizontal={30}
          pVertical={5}
          bRadius={120}
        />
      </PopupConfirmation>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 24,
              letterSpacing: 0.24,
              textTransform: 'capitalize',
              color: colors.secondaryText,
              fontWeight: '700',
            }}
          >
            Find, Order With{' '}
          </Text>
          <Text
            style={{
              fontSize: 24,
              letterSpacing: 0.24,
              textTransform: 'capitalize',
              color: colors.secondaryText,
              fontWeight: '700',
            }}
          >
            Ease
          </Text>
        </View>
        <Text
          style={{
            fontWeight: '400',
            textTransform: 'capitalize',
            lineHeight: 20,
            fontStyle: 'normal',
            textAlign: 'center',
            marginTop: 19,
            fontSize: 16,
            color: colors.secondaryText,
          }}
        >
          Let's Create An Account to Continue
        </Text>
        <View style={{ marginTop: 29, gap: 15, marginBottom: 100 }}>
          <FormInput
            placeHolderText='Full Name'
            secureText={false}
            iconLeft={require('../assets/profile.png')}
          />
          <FormInput
            keyboardType='email-address'
            placeHolderText='Email Address'
            secureText={false}
            iconLeft={require('../assets/smsnotification.png')}
          />
          <FormInput
            keyboardType='phone-pad'
            placeHolderText='Phone Number'
            secureText={false}
            iconLeft={require('../assets/calladd.png')}
          />
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
          <Text
            style={{
              color: colors.secondaryText,
              textTransform: 'capitalize',
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 20,
            }}
          >
            Register As:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <CustomButton
              pHorizontal={15}
              buttonText='An Individual'
              bgColor={colors.boxColor}
            >
              <Image
                style={{ width: 20, height: 20, marginRight: 7 }}
                source={require('../assets/profilecircle.png')}
              />
            </CustomButton>
            <CustomButton
              pHorizontal={15}
              buttonText='A Business'
              bgColor={colors.boxColor}
            >
              <Image
                style={{ width: 20, height: 20, marginRight: 7 }}
                source={require('../assets/briefcase.png')}
              />
            </CustomButton>
          </View>

          <CustomButton
            bgColor={colors.secondary}
            buttonText='Create Account'
            buttonAction={() => setVisible(!visible)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 500,
                textTransform: 'capitalize',
                fontSize: 14,
                color: colors.secondaryText,
              }}
            >
              Already Have An Account
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('signin')}>
              <Text
                style={{
                  color: colors.secondary,
                  textAlign: 'center',
                  fontWeight: 500,
                  textTransform: 'capitalize',
                  fontSize: 14,
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  signUpContainer: {
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
});
