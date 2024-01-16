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
import {globalStyles} from '../styles/global';

export default function SignUpScreen({navigation}) {
  const [secure, setSecure] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleSubmit = () => {
    navigation.navigate('signin');
    setVisible(!visible);
  };

  return (
    <Wrapper show navigation={navigation}>
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
          <Text style={styles.text}>Find, Order With</Text>
          <Text style={styles.text}>Ease</Text>
        </View>
        <Text style={styles.text1}>Let's Create An Account to Continue</Text>
        <View style={{marginTop: 29, gap: 15, marginBottom: 100}}>
          <FormInput
            placeHolderText="Full Name"
            secureText={false}
            iconLeft={require('../assets/profile.png')}
          />
          <FormInput
            keyboardType="email-address"
            placeHolderText="Email Address"
            secureText={false}
            iconLeft={require('../assets/smsnotification.png')}
          />
          <FormInput
            keyboardType="phone-pad"
            placeHolderText="Phone Number"
            secureText={false}
            iconLeft={require('../assets/calladd.png')}
          />
          <FormInput
            placeHolderText="Password"
            secureText={secure}
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
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 20,
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
              pHorizontal={15}
              buttonText="An Individual"
              bgColor={colors.boxColor}>
              <Image
                style={{width: 20, height: 20, marginRight: 7}}
                source={require('../assets/profilecircle.png')}
              />
            </CustomButton>
            <CustomButton
              pHorizontal={15}
              buttonText="A Business"
              bgColor={colors.boxColor}>
              <Image
                style={{width: 20, height: 20, marginRight: 7}}
                source={require('../assets/briefcase.png')}
              />
            </CustomButton>
          </View>

          <CustomButton
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
                fontWeight: '300',
                textTransform: 'capitalize',
                fontSize: 22,
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
    fontSize: 40,
    fontWeight: '700',
    textTransform: 'capitalize',
    fontFamily: 'Roboto_400Regular',
  },
  text1: {
    fontWeight: '300',
    textTransform: 'capitalize',
    lineHeight: 20,
    fontStyle: 'normal',
    textAlign: 'center',
    marginTop: 19,
    fontSize: 19,
    color: colors.secondaryText,
  },
});
