import React from 'react';
import {View, Text, Image} from 'react-native';
import {colors} from '../styles/colors';
import HorizontalLine from './HorizontalLine';

export default function PurchaseDetails() {
  return (
    <View
      style={{
        marginTop: '4%',
        backgroundColor: colors.boxColor,
        paddingVertical: '4%',
        paddingHorizontal: '5%',
        marginHorizontal: '5%',
        borderRadius: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 50,
          marginBottom: '4%',
        }}>
        <Image
          style={{height: 150, width: 110, borderRadius: 15}}
          source={require('../assets/rober.png')}
        />
        <View style={{gap: 20}}>
          <Text
            style={{
              color: colors.scheduleButtonColor,
              fontWeight: '600',
              fontSize: 25,
            }}>
            Sachete Water
          </Text>
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: 25,
              fontWeight: '600',
            }}>
            500ml
          </Text>
        </View>
      </View>
      <HorizontalLine />
    </View>
  );
}
