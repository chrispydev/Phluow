import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../styles/colors';

export default function NavBar({authName}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.primary,
        alignItems: 'center',
        padding: 18,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}>
      <Text
        style={{
          flex: 1,
          color: colors.lableText,
          fontWeight: '400',
          lineHeight: 20,
          marginLeft: '5%',
          letterSpacing: -0.24,
          fontSize: 20,
        }}>
        {authName}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: colors.boxColor,
          padding: 5,
          borderRadius: 25,
        }}>
        <Icon name="menu" size={30} color={colors.secondaryText} />
      </TouchableOpacity>
    </View>
  );
}
