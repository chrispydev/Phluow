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
    height: 75,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
});
