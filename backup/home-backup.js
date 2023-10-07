import React from 'react';
import {Text, View} from 'react-native';
import RNBSheetWrapper from '../components/RNBSheetWrapper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Wrapper from '../components/Wrapper';
import FloatingContainer from '../components/FloatingContainer';
import {colors} from '../styles/colors';
import CustomButton from '../components/CustomButton';

export default function HomeScreen() {
  return (
    <Wrapper removePadding>
      <View
        style={{
          backgroundColor: colors.denied,
          width: '100%',
        }}>
        <Text style={{color: 'white'}}>This is a text</Text>
      </View>
      {/*<FloatingContainer />*/}
      <GestureHandlerRootView>
        <RNBSheetWrapper>
          <View
            style={{
              paddingVertical: 10,
              gap: 20,
            }}>
            <Text
              style={{
                color: colors.secondaryText,
                fontSize: 20,
                textAlign: 'center',
              }}>
              You are about to place an order. By confirming,you agree to our
              terms and conditions
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
      </GestureHandlerRootView>
    </Wrapper>
  );
}
