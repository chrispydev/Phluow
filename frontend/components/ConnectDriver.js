import React, {useRef} from 'react';
import RNBSheetWrapper from './RNBSheetWrapper';
import {colors} from '../styles/colors';
import {Text, View} from 'react-native';

export default function ConnectDriver() {
  const bottomSheetModalRef = useRef();
  return (
    <RNBSheetWrapper
      minH="55%"
      maxH="60%"
      bgColor={colors.modalSheetColor}
      bottomSheetModalRef={bottomSheetModalRef}>
      <View
        style={{
          marginVertical: '7%',
          marginHorizontal: '4%',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}>
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 23,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          Connecting you to the [Company Name]
        </Text>
        <Text
          style={{
            color: colors.secondaryText,
            fontSize: 20,
            lineHeight: 30,
            textAlign: 'center',
            letterSpacing: 1,
            paddingHorizontal: '8%',
          }}>
          [Company name] will locate you and deliver your order as soon as they
          confirm
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          {/*first div*/}
          <View
            style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
            <View
              style={{
                backgroundColor: colors.textLightColor,
                height: 130,
                width: 130,
                borderRadius: 130,
              }}
            />
            <Text style={{color: colors.secondaryText, fontSize: 24}}>
              Name of Driver
            </Text>
          </View>

          {/*second div*/}
          <View
            style={{
              alignItems: 'flex-start',
              backgroundColor: colors.secondaryText,
              height: 15,
              width: 150,
              borderRadius: 15,
            }}>
            <View
              style={{
                backgroundColor: colors.complete,
                width: '20%',
                height: '100%',
                borderRadius: 15,
              }}
            />
          </View>
          {/*thrid div*/}
          <View
            style={{justifyContent: 'center', alignItems: 'center', gap: 10}}>
            <View
              style={{
                backgroundColor: colors.textLightColor,
                height: 130,
                width: 130,
                borderRadius: 130,
              }}
            />
            <Text style={{color: colors.secondaryText, fontSize: 24}}>
              Canel Order
            </Text>
          </View>
        </View>
      </View>
    </RNBSheetWrapper>
  );
}
