import React from 'react';
import {View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {colors} from '../styles/colors';

export default function DynamicHeader({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/imag1.png')}
      imageStyle={{objectFit: 'cover'}}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: 240,
      }}>
      <TouchableOpacity
        style={{
          marginLeft: '3%',
          marginTop: '3%',
        }}
        onPress={() => navigation.goBack()}>
        <Image
          style={{width: 30, height: 30}}
          source={require('../assets/signin_back.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: colors.primaryDark,
          paddingVertical: '2%',
          paddingHorizontal: '4.5%',
          borderRadius: 140,
          marginRight: '3%',
          marginTop: '2%',
        }}>
        {[...new Array(3)].map((_, index) => (
          <View
            key={index}
            style={{
              width: '1%',
              height: '1%',
              borderWidth: 1,
              borderColor: colors.secondaryText,
              padding: 4,
              margin: 2,
              borderRadius: 109,
            }}
          />
        ))}
      </TouchableOpacity>
    </ImageBackground>
  );
}
