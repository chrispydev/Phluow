import { View } from 'react-native';
import React from 'react';
import CustomButton from './CustomButton';
import { colors } from '../styles/colors';

export default function TopBarNav({ disabled, lColor, cColor, rColor }) {
  return (
    <View
      style={{
        backgroundColor: colors.primaryDark,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CustomButton
        disabled={true}
        bgColor={lColor}
        buttonText='status'
        pVertical={10}
        pHorizontal={10}
        bRadius={10}
      />
      <CustomButton
        disabled={true}
        bgColor={cColor}
        buttonText='Ongoing'
        pVertical={10}
        pHorizontal={10}
      />
      <CustomButton
        disabled={true}
        bgColor={rColor}
        buttonText='Complete'
        pVertical={10}
        pHorizontal={10}
      />
    </View>
  );
}
