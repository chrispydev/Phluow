import React, {useRef} from 'react';
import {colors} from '../styles/colors';
import CustomButton from './CustomButton';
import {View, Image} from 'react-native';
import FormInput from './FormInput';
import RNBSheetWrapper from './RNBSheetWrapper';

export default function PayWithMobileMoney() {
  const bottomSheetModalRef = useRef(null);
  return (
    <RNBSheetWrapper
      minH="58%"
      maxH="60%"
      bgColor={colors.modalSheetColor}
      bottomSheetModalRef={bottomSheetModalRef}>
      <View style={{margin: '6%', gap: 20}}>
        <FormInput
          placeHolderText="Choose mobile money network"
          fSize={22}
          bgColor={colors.primaryDark}
          fWeight={'300'}
          bRadius={25}>
          <Image
            style={{padding: '4%'}}
            source={require('../assets/vector.png')}
          />
        </FormInput>
        <FormInput
          placeHolderText="Phone Number"
          fSize={22}
          bgColor={colors.primaryDark}
          fWeight={'300'}
          bRadius={25}
        />
        <FormInput
          placeHolderText="Price"
          fSize={22}
          bgColor={colors.primaryDark}
          fWeight={'300'}
          bRadius={25}
        />
        <CustomButton
          buttonText="Confirm Payment"
          bgColor={colors.secondary}
          fontWeight={'400'}
          bRadius={40}
          elevation={5}
          height={'19%'}
        />
      </View>
    </RNBSheetWrapper>
  );
}
