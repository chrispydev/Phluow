import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../styles/colors';
import CustomButton from './CustomButton';

export default function FloatingContainer() {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '40%',
        zIndex: 2,
        padding: 20,
        borderRadius: 10,
        marginHorizontal: '10%',
        backgroundColor: colors.boxColor,
        gap: 10,
      }}>
      <View style={{flexDirection: 'row', gap: 5}}>
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 18,
            textAlign: 'center',
          }}>
          Water
        </Text>
        <Text
          style={{
            color: colors.denied,
            fontSize: 18,
            textAlign: 'center',
          }}>
          finished
        </Text>
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 18,
            textAlign: 'center',
          }}>
          , can’t place order
        </Text>
      </View>
      <CustomButton
        buttonText="Schedule Order"
        pVertical={10}
        height={68}
        bgColor={colors.secondary}
        bRadius={30}
      />
    </View>
  );
}
