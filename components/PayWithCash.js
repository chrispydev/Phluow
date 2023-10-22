import React from 'react';
import PopupConfirmation from './PopupConfirmation';
import {colors} from '../styles/colors';
import {Image, Text} from 'react-native';
import CustomButton from './CustomButton';

export default function PayWithCash() {
  return (
    <PopupConfirmation
      boxColor={colors.primaryDark}
      bRadius={40}
      pVertical={'1%'}
      gap={20}>
      <Image source={require('../assets/Frame279.png')} />
      <Text
        style={{
          color: colors.secondaryText,
          fontWeight: '400',
          fontSize: 25,
          letterSpacing: 1,
        }}>
        Paying With Cash...
      </Text>
      <Text
        style={{
          color: colors.secondaryText,
          fontSize: 18,
          textAlign: 'center',
          letterSpacing: 1,
          lineHeight: 25,
        }}>
        Please make sure you submit payment to the driver.
      </Text>
      <Text style={{color: colors.secondaryText, fontSize: 20}}>Thank You</Text>
      <CustomButton
        buttonText="Done"
        bgColor={colors.secondary}
        width="95%"
        height="13%"
        pVertical={5}
        fontWeight="400"
      />
    </PopupConfirmation>
  );
}
