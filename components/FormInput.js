import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

export default function FormInput({
  placeHolderText,
  secureText,
  keyboardType,
  iconLeft,
  elevation,
  bgColor,
  fSize,
  children,
}) {
  return (
    <View
      style={[
        styles.input,
        {
          backgroundColor: bgColor ? bgColor : colors.boxColor,
          elevation: elevation ? elevation : 2,
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
            <Image style={{width: '10%', padding: '9%'}} source={iconLeft} />
          </>
        )}
        <TextInput
          placeholderTextColor={colors.lableText}
          style={{fontSize: fSize ? fSize : 20, color: colors.secondaryText}}
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
