import React from 'react';
import {Image, Text} from 'react-native';
import PopupConfirmation from './PopupConfirmation';
import {colors} from '../styles/colors';
import CustomButton from './CustomButton';

export default function CancelOder() {
  return (
    <PopupConfirmation
      boxColor={colors.primaryDark}
      bRadius={40}
      pVertical={'1%'}
      gap={30}>
      <Image source={require('../assets/order.png')} />
      <Text
        style={{
          color: colors.secondaryText,
          fontWeight: '500',
          fontSize: 29,
          letterSpacing: 1,
        }}>
        Order Canelled
      </Text>
      <CustomButton
        buttonText="Okay"
        bgColor={colors.secondary}
        width="90%"
        height="16%"
      />
    </PopupConfirmation>
  );
}
