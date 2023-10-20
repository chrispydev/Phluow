import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

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
          {fontWeight: fontWeight ? fontWeight : '500'},
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
    textTransform: 'capitalize',
  },
});
