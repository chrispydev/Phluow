import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

export default function FormInput({
  placeHolderText,
  secureText,
  keyboardType,
  iconLeft,
  iconRight,
  elevation,
  bgColor,
  fSize,
  fWeight,
  bRadius,
  children,
}) {
  return (
    <View
      style={[
        styles.input,
        {
          backgroundColor: bgColor ? bgColor : colors.boxColor,
          elevation: elevation ? elevation : 2,
          borderRadius: bRadius && bRadius,
        },
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        {iconLeft && (
          <>
            <Image style={{width: '4%', padding: '9%'}} source={iconLeft} />
          </>
        )}
        <TextInput
          placeholderTextColor={colors.lableText}
          style={{
            fontSize: fSize ? fSize : 20,
            color: colors.secondaryText,
            fontWeight: fWeight && fWeight,
          }}
          placeholder={placeHolderText}
          secureTextEntry={secureText}
          keyboardType={keyboardType}
        />
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderRadius: 30,
  },
});
