import React, {useState} from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

export default function FormInput({
  placeHolderText,
  secureText,
  keyboardType,
  iconLeft,
  children,
}) {
  return (
    <View style={styles.input}>
      <Image style={{marginRight: 20, marginLeft: 10}} source={iconLeft} />
      <TextInput
        placeholderTextColor={colors.lableText}
        style={{
          color: colors.lableText,
          height: '100%',
          flex: 1,
        }}
        placeholder={placeHolderText}
        secureTextEntry={secureText}
        keyboardType={keyboardType}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.boxColor,

    paddingRight: 8,
    borderRadius: 16,
    borderColor: colors.boxColor,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
});
