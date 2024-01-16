import React from 'react';
import {View} from 'react-native';
import {colors} from '../styles/colors';

export default function HorizontalLine() {
  return (
    <View
      style={{
        backgroundColor: colors.secondaryText,
        height: 1,
        width: '100%',
      }}
    />
  );
}
