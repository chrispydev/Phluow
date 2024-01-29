import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  StatusBar,
  Alert,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../styles/colors';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import PopupConfirmation from '../components/PopupConfirmation';
import Wrapper from '../components/Wrapper';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import useCustomDimensions from '../hooks/useCustomDimension';

export default function SignUpScreen({navigation}) {
  const {widthPercentage: helloWP, heightPercentage: helloHP} =
    useCustomDimensions('9%', '6%');

  const {widthPercentage: welcomeWP, heightPercentage: welcomeHP} =
    useCustomDimensions('4.5%', '2.6%');

  const {widthPercentage: inputTextWP, heightPercentage: inputTextHP} =
    useCustomDimensions('85%', '8.5%');

  const {widthPercentage: borderWP, heightPercentage: borderHP} =
    useCustomDimensions('5%', '10%');

  const {widthPercentage: labelWP, heightPercentage: labelHP} =
    useCustomDimensions('4.4%', '4%');

  const {widthPercentage: buttonWP, heightPercentage: buttonHP} =
    useCustomDimensions('43%', '8.5%');

  const {widthPercentage: buttonFontWP, heightPercentage: buttonFontHP} =
    useCustomDimensions('5%', '3.4%');

  const [secure, setSecure] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    navigation.navigate('signin');
    setVisible(!visible);
  };

  return (
    <Wrapper show navigation={navigation}>
      <OrientationLocker
        orientation={PORTRAIT}
        onChange={orientation => console.log('onChange', orientation)}
        onDeviceChange={orientation =>
          console.log('onDeviceChange', orientation)
        }
      />
      <StatusBar backgroundColor="#000" />
      <PopupConfirmation
        visible={visible}
        onClose={() => {
          Alert.alert('Modal has been closed.');
          setVisible(!visible);
        }}>
        <Image source={require('../assets/ellipse.png')} />
        <View style={{gap: 10}}>
          <Text
            style={{
              color: colors.secondaryText,
              textAlign: 'center',
              fontSize: 25,
            }}>
            Success!
          </Text>
        </View>

        <Text
          style={{
            color: colors.secondaryText,
            textAlign: 'center',
            flexWrap: 'wrap',
            fontSize: 20,
          }}>
          You have Signup successfully!
        </Text>
        <CustomButton
          buttonAction={() => handleSubmit()}
          buttonText="Continue"
          bgColor={colors.secondary}
          pHorizontal={70}
          bRadius={120}
          height={60}
        />
      </PopupConfirmation>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[styles.text, {fontSize: helloWP, lineHeight: helloHP}]}>
            Find, Order With
          </Text>
          <Text style={[styles.text, {fontSize: helloWP, lineHeight: helloHP}]}>
            Ease
          </Text>
        </View>
        <Text
          style={[styles.text1, {fontSize: welcomeWP, lineHeight: welcomeHP}]}>
          Let's Create An Account to Continue
        </Text>
        <View style={{marginTop: 29, gap: 15, marginBottom: 100}}>
          <FormInput
            placeHolderText="Full Name"
            secureText={false}
            width={inputTextWP}
            height={inputTextHP}
            bRadius={borderWP}
            iconLeft={require('../assets/profile.png')}
          />
          <FormInput
            keyboardType="email-address"
            placeHolderText="Email Address"
            secureText={false}
            width={inputTextWP}
            height={inputTextHP}
            bRadius={borderWP}
            iconLeft={require('../assets/smsnotification.png')}
          />
          <FormInput
            keyboardType="phone-pad"
            placeHolderText="Phone Number"
            secureText={false}
            width={inputTextWP}
            height={inputTextHP}
            bRadius={borderWP}
            iconLeft={require('../assets/calladd.png')}
          />
          <FormInput
            placeHolderText="Password"
            secureText={secure}
            width={inputTextWP}
            height={inputTextHP}
            bRadius={borderWP}
            iconLeft={require('../assets/key.png')}>
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              {secure ? (
                <Icon name="eye" size={25} color={colors.secondaryText} />
              ) : (
                <Icon name="eye-off" size={25} color={colors.secondaryText} />
              )}
            </TouchableOpacity>
          </FormInput>
          <Text
            style={{
              color: colors.secondaryText,
              textTransform: 'capitalize',
              fontFamily: 'Inter-Light',
              fontSize: labelWP,
              lineHeight: labelHP,
            }}>
            Register As:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomButton
              pHorizontal={borderWP}
              width={buttonWP}
              height={buttonHP}
              buttonText="An Individual"
              fontSize={buttonFontWP}
              lineHeight={buttonFontHP}
              bgColor={colors.boxColor}>
              <Image
                style={{width: 20, height: 20, marginRight: 7}}
                source={require('../assets/profilecircle.png')}
              />
            </CustomButton>
            <CustomButton
              pHorizontal={borderWP}
              width={buttonWP}
              height={buttonHP}
              fontSize={buttonFontWP}
              lineHeight={buttonFontHP}
              buttonText="A Business"
              bgColor={colors.boxColor}>
              <Image
                style={{width: 20, height: 20, marginRight: 7}}
                source={require('../assets/briefcase.png')}
              />
            </CustomButton>
          </View>

          <CustomButton
            pHorizontal={borderWP}
            height={inputTextHP}
            width={inputTextWP}
            fontSize={buttonFontWP}
            lineHeight={buttonFontHP}
            bgColor={colors.secondary}
            buttonText="Create Account"
            buttonAction={() => setVisible(!visible)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: labelWP,
                lineHeight: labelHP,
                fontFamily: 'Inter-Light',
                textTransform: 'capitalize',
                color: colors.secondaryText,
              }}>
              Already Have An Account
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('signin')}>
              <Text
                style={{
                  color: colors.secondary,
                  textAlign: 'center',
                  fontWeight: '400',
                  textTransform: 'capitalize',
                  fontSize: 22,
                }}>
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
  text: {
    color: colors.secondaryText,
    textTransform: 'capitalize',
    fontFamily: 'Inter-Bold',
  },
  text1: {
    fontFamily: 'Inter-Light',
    textTransform: 'capitalize',
    fontStyle: 'normal',
    textAlign: 'center',
    marginTop: 19,
    color: colors.secondaryText,
  },
});
