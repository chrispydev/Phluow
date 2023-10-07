import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import HorizontalLine from './HorizontalLine';
import CustomButton from './CustomButton';

export default function RobberDetail({
  show_1,
  show_2,
  robberText,
  robberBText,
  robberVolume,
  robberTTest,
  robberPrice,
  robberTColor,
}) {
  return (
    <View style={{marginHorizontal: '15%', marginVertical: 5}}>
      <View style={styles.roberDetail}>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}>
          <Image
            style={{width: 47, height: 59, flexShrink: 0, borderRadius: 5}}
            source={require('../assets/rober.png')}
          />
          <View style={{gap: 7}}>
            <Text style={[styles.robberText, {color: colors.textLightColor}]}>
              {robberText}
            </Text>
            <Text style={{color: colors.secondaryText, fontSize: 18}}>
              {robberVolume}
            </Text>
          </View>
        </View>
        <HorizontalLine />
        <View
          style={{
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: 18,
              fontWeight: '500',
              letterSpacing: -0.24,
              flexWrap: 'wrap',
            }}>
            {robberTTest}
          </Text>
          <View style={{alignItems: 'flex-start', gap: 7}}>
            <Text
              style={{
                color: colors.textLightColor,
                fontWeight: '600',
                letterSpacing: -0.24,
                fontSize: 18,
              }}>
              Price:
            </Text>
            <Text
              style={{
                color: colors.secondaryText,
                fontWeight: '600',
                letterSpacing: -0.24,
                fontSize: 18,
              }}>
              {robberPrice}
            </Text>
          </View>
        </View>
        <HorizontalLine />
        <View
          style={{
            padding: 20,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <View
            style={{
              backgroundColor: '#292B2F',
              gap: 5,
              maxWidth: 204,
              maxHeight: 100,
              borderRadius: 10,
              paddingVertical: 20,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                lineHeight: 20,
                color: colors.secondaryText,
                textAlign: 'center',
              }}>
              Number of purchase
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                lineHeight: 20,
                color: colors.secondaryText,
                textAlign: 'center',
              }}>
              2
            </Text>
          </View>
          <CustomButton
            pVertical={16}
            bRadius={50}
            pHorizontal={20}
            buttonText={robberBText}
            bgColor={robberTColor}
          />
        </View>
        {show_1 && (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 10,
              }}>
              <Text
                style={{
                  color: colors.complete,
                  fontWeight: '600',
                  fontSize: 14,
                }}>
                Delivery Status:
              </Text>
              <Text
                style={{
                  color: colors.secondaryText,
                  fontWeight: '600',
                  fontSize: 14,
                }}>
                Time / Date
              </Text>
            </View>
          </>
        )}
        {show_2 && (
          <>
            <View
              style={{
                margin: 10,
                backgroundColor: '#292B2F',
                borderRadius: 16,
                paddingVertical: 22,
                paddingHorizontal: 18,
              }}>
              <Text style={{color: '#515356', fontWeight: '400', fontSize: 14}}>
                Additional Information from Company shows up here
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  roberDetail: {
    backgroundColor: '#40444B',
    borderRadius: 10,
  },
  robberText: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: -0.24,
    lineHeight: 20,
  },
});
