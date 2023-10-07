import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../styles/colors';
import RNBSheetWrapper from '../components/RNBSheetWrapper';
import CustomButton from '../components/CustomButton';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Wrapper from '../components/Wrapper';
import FloatingContainer from '../components/FloatingContainer';

export default function HomeScreen() {
  return (
    <Wrapper removePadding>
      <View
        style={{
          flex: 1,
          backgroundColor: 'pink',
        }}>
        <Text>This is a text</Text>
      </View>
      <FloatingContainer />
      <GestureHandlerRootView>
        <RNBSheetWrapper />
      </GestureHandlerRootView>
    </Wrapper>
  );
}
