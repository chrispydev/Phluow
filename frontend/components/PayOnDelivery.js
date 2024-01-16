import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import CustomButton from './CustomButton';
import {colors} from '../styles/colors';
import RNBSheetWrapper from './RNBSheetWrapper';

export default function PayOnDelivery() {
  const bottomSheetModalRef = useRef(null);
  return (
    <RNBSheetWrapper
      minH="22%"
      maxH="25%"
      bgColor={colors.modalSheetColor}
      bottomSheetModalRef={bottomSheetModalRef}>
      <View
        style={{
          alignItems: 'center',
          gap: 20,
          paddingHorizontal: '3%',
          marginVertical: '2%',
        }}>
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 23,
            fontWeight: '300',
            lineHeight: 25,
          }}>
          You are paying on delivery. By confirming, you agree to our terms and
          conditions.
        </Text>

        <CustomButton
          buttonText="Confirm"
          bgColor={colors.secondary}
          width="80%"
          height="43%"
        />
      </View>
    </RNBSheetWrapper>
  );
}
