import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import RNBSheetWrapper from '../RNBSheetWrapper';
import {colors} from '../../styles/colors';
import CustomButton from '../CustomButton';

export default function OderConfirm() {
  const bottomSheetModalRef = useRef(null);
  return (
    <RNBSheetWrapper
      minH="30%"
      maxH="40%"
      bgColor={colors.modalSheetColor}
      bottomSheetModalRef={bottomSheetModalRef}>
      <View
        style={{
          gap: 20,
          marginTop: '5%',
        }}>
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 22,
            textAlign: 'center',
          }}>
          You are about to place an order. By confirming, you agree to our terms
          and conditions
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <CustomButton
            buttonText="Back"
            bgColor={colors.secondary}
            pHorizontal={50}
            bRadius={50}
          />
          <CustomButton
            buttonText="Confirm"
            bgColor={colors.textLightColor}
            pHorizontal={30}
            bRadius={50}
          />
        </View>
      </View>
    </RNBSheetWrapper>
  );
}
