import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Wrapper from '../components/Wrapper';
import {colors} from '../styles/colors';
import FormInput from '../components/FormInput';
import CustomButton from '../components/CustomButton';
import {globalStyles} from '../styles/global';
import useCustomDimensions from '../hooks/useCustomDimension';

export default function PasswordReset({navigation}) {
  const {widthPercentage: borderWP, heightPercentage: borderHP} =
    useCustomDimensions('5%', '10%');

  const {widthPercentage: customButtonWP, heightPercentage: customButtonHP} =
    useCustomDimensions('85%', '8.5%');

  return (
    <Wrapper show navigation={navigation}>
      <View style={globalStyles.welcomesigninTextContainer}>
        <Image source={require('../assets/signin.png')} />
        <Text style={globalStyles.text}>Reset Password</Text>
        <View style={{gap: 5}}>
          <Text style={globalStyles.welcomeText}>
            Enter your email address and tap send to start the process
          </Text>
        </View>
      </View>
      <View style={{marginTop: 30, gap: 20}}>
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 20,
            textTransform: 'capitalize',
          }}>
          Email Address
        </Text>
        <FormInput
          keyboardType="email-address"
          placeHolderText="Email Address"
          secureText={false}
          width={customButtonWP}
          height={customButtonHP}
          bRadius={borderWP}
          iconLeft={require('../assets/smsnotification.png')}
        />
        <CustomButton
          bgColor={colors.secondary}
          width={customButtonWP}
          height={customButtonHP}
          bRadius={borderWP}
          buttonText="Reset Email Address"
        />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({});
