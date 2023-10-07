import React from 'react';
import {Image, Text, View} from 'react-native';
import {colors} from '../styles/colors';
import HorizontalLine from './HorizontalLine';
import FormInput from './FormInput';

export default function PurchaseDetails() {
  return (
    <View
      style={{
        marginVertical: '4%',
        marginLeft: '4%',
        paddingVertical: 20,
        borderRadius: 20,
        backgroundColor: colors.boxColor,
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 50,
            marginBottom: '4%',
            paddingHorizontal: '4%',
            paddingTop: '3%',
          }}>
          <Image
            style={{
              height: 150,
              width: 110,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: colors.primary,
            }}
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
      </View>
      <HorizontalLine />
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '4%',
          }}>
          <View>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 30,
                color: colors.secondaryText,
                letterSpacing: 1,
                textAlign: 'left',
              }}>
              1 sachets of
            </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 30,
                color: colors.secondaryText,
                letterSpacing: 1,
                textAlign: 'left',
              }}>
              water
            </Text>
          </View>
          <View style={{gap: 20}}>
            <Text
              style={{
                color: colors.scheduleButtonColor,
                fontSize: 27,
                fontWeight: '500',
              }}>
              Price:
            </Text>
            <Text
              style={{
                color: colors.secondaryText,
                fontSize: 27,
                fontWeight: '500',
              }}>
              GHC 10.00
            </Text>
          </View>
        </View>
      </View>
      <HorizontalLine />
      <View style={{padding: '4%'}}>
        <FormInput
          bgColor={colors.primary}
          placeHolderText="Enter number of purchase"
          secureText={false}
          fSize={27}
        />
      </View>
    </View>
  );
}
