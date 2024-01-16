import React from 'react';
import {Text, Image} from 'react-native';
import PopupConfirmation from './PopupConfirmation';
import {colors} from '../styles/colors';
import CustomButton from './CustomButton';

export default function Done() {
  return (
    <PopupConfirmation
      pVertical={2}
      width={'90%'}
      boxColor={colors.primaryDark}
      bRadius={40}>
      <Image
        style={{
          alignItems: 'flex-start',
          width: '18%',
          height: '14%',
          left: '-46%',
        }}
        source={require('../assets/Heart.png')}
      />
      <Image
        style={{marginTop: '-16%'}}
        source={require('../assets/Frame79.png')}
      />
      <Text
        style={{
          color: colors.secondaryText,
          fontWeight: '400',
          fontSize: 30,
        }}>
        Done
      </Text>
      <Text
        style={{
          color: colors.secondaryText,
          fontWeight: '400',
          paddingBottom: 14,
          fontSize: 23,
          textAlign: 'center',
        }}>
        Rating Success
      </Text>
      <CustomButton
        buttonText="Back"
        bgColor={colors.secondary}
        pHorizontal={'20%'}
        bRadius={50}
        height={54}
        width={'90%'}
        elevation={4}
      />
    </PopupConfirmation>
  );
}
