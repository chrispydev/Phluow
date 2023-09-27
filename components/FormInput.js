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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Image style={{width: '10%', padding: '9%'}} source={iconLeft} />
        <TextInput
          placeholderTextColor={colors.lableText}
          style={{fontSize: 20}}
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
    backgroundColor: colors.boxColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderRadius: 30,
    elevation: 2,
  },
});
