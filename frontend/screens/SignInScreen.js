import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  OrientationLocker,
  PORTRAIT,
  // LANDSCAPE,
} from 'react-native-orientation-locker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import axios from 'axios';

import {useDispatch} from 'react-redux';

import CustomButton from '../components/CustomButton';
import FormInput from '../components/FormInput';
import Wrapper from '../components/Wrapper';
import {colors} from '../styles/colors';
import PopupConfirmation from '../components/PopupConfirmation';
import LoadingIndicator from '../components/LoadingIndicator';

import {setAuthUserData} from '../store/features/auth';
import useCustomDimensions from '../hooks/useCustomDimension';
import {urlEndpoint} from '../utils/utils';

export default function SigninScreen({navigation}) {
  const {widthPercentage: hwImage, heightPercentage: hImage} =
    useCustomDimensions('60%', '8%');

  const {widthPercentage: helloWP, heightPercentage: helloHP} =
    useCustomDimensions('10%', '8%');

  const {widthPercentage: welcomeWP, heightPercentage: welcomeHP} =
    useCustomDimensions('5%', '2.6%');

  const {widthPercentage: borderWP, heightPercentage: borderHP} =
    useCustomDimensions('5%', '10%');

  const {widthPercentage: labelWP, heightPercentage: labelHP} =
    useCustomDimensions('4.4%', '4%');

  const {widthPercentage: customButtonWP, heightPercentage: customButtonHP} =
    useCustomDimensions('85%', '8.5%');

  const {widthPercentage: buttonFontWP, heightPercentage: buttonFontHP} =
    useCustomDimensions('6.5%', '4%');

  const [secure, setSecure] = useState(true);

  const [phone_number, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [loadingState, setLoadingState] = useState(false);

  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    setVisible(!visible);
    navigation.navigate('confirm-email');
  };

  const dispatch = useDispatch();

  const login = async () => {
    try {
      setLoadingState(true);
      // Fetch CSRF token
      const csrfResponse = await axios.get(urlEndpoint + '/user-auth/login/');
      const csrfToken = csrfResponse.data.csrfToken;

      // Make POST request with CSRF token in headers
      const response = await axios.post(
        urlEndpoint + '/user-auth/login/',
        {
          phone_number: phone_number,
          password: password,
        },
        {
          headers: {
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json', // Set Content-Type header to indicate JSON data
          },
        },
      );
      console.log('Response data:', response.data);
      dispatch(setAuthUserData(response.data));
      handleSubmit();
    } catch (error) {
      setLoadingState(false);
      Alert.alert(
        'Authentication Failed',
        'Your username or password is incorrect. Please try again.',
        [
          {
            text: 'OK',
            onPress: () => {}, // Empty onPress handler to close the alert
          },
        ],
        {cancelable: false}, // Prevent dismissing the alert by tapping outside or pressing back button
      );
      console.error('Network request error:', error);
    }
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
              fontFamily: 'Inter',
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
          You have Sign in successfully! Check your email to confirm code sent
          to you.
        </Text>
        <CustomButton
          buttonAction={() => handleSubmit()}
          buttonText="Okay"
          bgColor={colors.secondary}
          pHorizontal={100}
          bRadius={120}
          height={60}
          fontSize={buttonFontWP}
          lineHeight={buttonFontHP}
        />
      </PopupConfirmation>
      {/*loading indicator*/}
      <LoadingIndicator loadingState={loadingState} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.welcomesigninTextContainer}>
          <Image
            style={{width: hwImage, height: hImage}}
            source={require('../assets/signin.png')}
          />
          <Text style={[styles.text, {fontSize: helloWP, lineHeight: helloHP}]}>
            Hello There
          </Text>
          <View style={{gap: 5}}>
            <Text
              style={[
                styles.welcomeText,
                {fontSize: welcomeWP, lineHeight: welcomeHP},
              ]}>
              Welcome Back
            </Text>
            <Text
              style={[
                styles.welcomeText,
                {fontSize: welcomeWP, lineHeight: welcomeHP},
              ]}>
              Please sign in!
            </Text>
          </View>
        </View>
        <View style={{gap: 12, marginTop: 40}}>
          <FormInput
            keyboardType="phone-pad"
            placeHolderText="Phone Number"
            secureText={false}
            iconLeft={require('../assets/calladd.png')}
            bRadius={borderWP}
            width={customButtonWP}
            height={customButtonHP}
            handleInputChange={text => setPhoneNumber(text)}
          />

          <Text
            style={[styles.label, {fontSize: labelWP, lineHeight: labelHP}]}>
            Login With Your Email Instead
          </Text>
        </View>
        <View style={{gap: 12, marginVertical: 12}}>
          <FormInput
            placeHolderText="Password"
            secureText={secure}
            iconLeft={require('../assets/key.png')}
            bRadius={borderWP}
            width={customButtonWP}
            height={customButtonHP}
            handleInputChange={text => setPassword(text)}>
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
            <Text
              style={[styles.label, {fontSize: labelWP, lineHeight: labelHP}]}>
              Forget Your Password
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          bgColor={colors.secondary}
          buttonText="Sign in"
          buttonAction={() => login(!visible)}
          bRadius={borderWP}
          fontSize={buttonFontWP}
          lineHeight={buttonFontHP}
          width={customButtonWP}
          height={customButtonHP}
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
                fontSize: labelWP,
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
            pHorizontal={29}
            width={customButtonWP}
            height={customButtonHP}
            fontSize={buttonFontWP}
            lineHeight={buttonFontHP}
            bRadius={borderWP}>
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
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: labelWP,
              lineHeight: labelHP,
              fontFamily: 'Inter-Light',
            }}>
            Don't Have An Account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
            <Text
              style={{
                color: colors.secondary,
                fontFamily: 'Inter-Light',
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
    fontWeight: '700',
    textTransform: 'capitalize',
    letterSpacing: 0.24,
    fontFamily: 'Inter',
  },
  welcomeText: {
    color: colors.secondaryText,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Inter-Light',
  },
  label: {
    color: colors.secondaryText,
    fontFamily: 'Inter-Light',
    textTransform: 'capitalize',
  },
});
