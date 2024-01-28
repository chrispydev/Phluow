import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import useCustomDimensions from '../hooks/useCustomDimension';

export default function CustomButton({
  buttonText,
  buttonAction,
  bgColor,
  bRadius,
  pHorizontal,
  pVertical,
  children,
  disabled,
  height,
  width,
  elevation,
  fontWeight,
  fontSize,
  lineHeight,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.buttonStyle,
        {
          backgroundColor: bgColor,
          paddingHorizontal: pHorizontal,
          paddingVertical: pVertical ? pVertical : 12,
          borderRadius: bRadius ? bRadius : 30,
          height: height ? height : 60,
          width: width && width,
          elevation: elevation && elevation,
        },
      ]}
      onPress={buttonAction}>
      {children}
      <Text
        style={[
          styles.buttonText,
          {
            fontWeight: fontWeight ? fontWeight : '500',
            fontSize: fontSize,
            lineHeight: lineHeight,
          },
        ]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Inter',
    textTransform: 'capitalize',
  },
});
