import React, {useRef} from 'react';
import {View} from 'react-native';
import CustomButton from './CustomButton';
import {colors} from '../styles/colors';
import RNBSheetWrapper from './RNBSheetWrapper';

export default function PaywithOption() {
  const bottomSheetModalRef = useRef(null);
  return (
    <RNBSheetWrapper
      minH="30%"
      maxH="50%"
      bgColor={colors.modalSheetColor}
      bottomSheetModalRef={bottomSheetModalRef}>
      <View style={{margin: '6%', gap: 20}}>
        <CustomButton
          buttonText="Pay with mobile money"
          fontWeight={400}
          bgColor={colors.secondary}
        />
        <CustomButton
          fontWeight={400}
          buttonText="Pay with cash"
          bgColor={colors.secondary}
        />
      </View>
    </RNBSheetWrapper>
  );
}
