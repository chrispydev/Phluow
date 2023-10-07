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
          height: height ? height : 75,
          width: width && width,
        },
      ]}
      onPress={buttonAction}>
      {children}
      <Text style={styles.buttonText}>{buttonText}</Text>
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
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
