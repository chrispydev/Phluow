import React from 'react';
import {colors} from '../styles/colors';
import CustomButton from './CustomButton';
import {Text, View} from 'react-native';
import FormInput from './FormInput';

export default function CarrierInfo() {
  return (
    <View style={{marginHorizontal: '6%', gap: 20}}>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 27,
          color: colors.secondaryText,
          textAlign: 'center',
        }}>
        Carrier Info
      </Text>
      <Text
        style={{
          fontWeight: '300',
          fontSize: 24,
          color: colors.secondaryText,
          textAlign: 'center',
        }}>
        Please enter the PIN to complete payments
      </Text>
      <FormInput
        placeHolderText="Enter Pin Code"
        fSize={22}
        bgColor={colors.primaryDark}
        fWeight={'300'}
        bRadius={25}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 20,
        }}>
        <CustomButton
          buttonText="Cancel"
          bgColor={colors.secondary}
          fontWeight={'400'}
          bRadius={40}
          elevation={5}
          pHorizontal={50}
          height={60}
        />
        <CustomButton
          buttonText="send"
          bgColor={colors.secondary}
          fontWeight={'400'}
          bRadius={40}
          elevation={5}
          pHorizontal={50}
          height={60}
        />
      </View>
    </View>
  );
}
