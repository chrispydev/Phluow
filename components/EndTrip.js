import React, {useRef} from 'react';
import RNBSheetWrapper from './RNBSheetWrapper';
import {colors} from '../styles/colors';
import {View} from 'react-native';
import ImageText from './ImageText';

export default function EndTrip() {
  const bottomSheetModalRef = useRef();
  return (
    <RNBSheetWrapper
      minH="30%"
      maxH="34%"
      bgColor={colors.modalSheetColor}
      bottomSheetModalRef={bottomSheetModalRef}>
      <View
        style={{
          margin: '6%',
          gap: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageText image={require('../assets/Frame4.png')} text="Done" />
        <ImageText image={require('../assets/Frame425.png')} text="Call" />
        <ImageText image={require('../assets/Frame426.png')} text="Report" />
      </View>
    </RNBSheetWrapper>
  );
}
