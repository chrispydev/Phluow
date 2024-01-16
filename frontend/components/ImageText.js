import React from 'react';
import {View, Text, Image} from 'react-native';
import {colors} from '../styles/colors';

export default function ImageText({image, text}) {
  return (
    <View style={{gap: 20, alignItems: 'center'}}>
      <Image style={{width: 135, height: 135}} source={image} />
      <Text style={{color: colors.secondaryText, fontSize: 25}}>{text}</Text>
    </View>
  );
}
