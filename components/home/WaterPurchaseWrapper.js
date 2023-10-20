import React, {useRef, useCallback, useState} from 'react';
import RNBSheetWrapper from '../RNBSheetWrapper';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles/colors';

import CustomButton from '../CustomButton';
import WaterPurchaseDetail from './WaterPurchaseDetail';
import {ScrollView} from 'react-native-gesture-handler';

export default function WaterPurchase() {
  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.close();
  }, []);

  return (
    <RNBSheetWrapper
      minH="90%"
      maxH="95%"
      bgColor={colors.primary}
      bottomSheetModalRef={bottomSheetModalRef}>
      <View style={{alignItems: 'flex-end', marginBottom: '3%'}}>
        <TouchableOpacity
          onPress={() => handlePresentModalPress()}
          style={{
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '5%',
            borderWidth: 2,
            borderColor: colors.secondaryText,
            borderRadius: 50 / 2,
          }}>
          <Icon name="close" size={30} color={colors.secondaryText} />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: colors.boxColor,
            paddingVertical: '5%',
            paddingHorizontal: '5%',
            width: '80%',
            borderRadius: 20,
            gap: 10,
          }}>
          <Text
            style={{
              color: colors.scheduleButtonColor,
              fontSize: 25,
              fontWeight: '600',
            }}>
            Total Price counter:
          </Text>
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: 25,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            GHC 10.00
          </Text>
        </View>
      </View>
      <ScrollView>
        <WaterPurchaseDetail
          name={'Sachets water'}
          price={'GHc 10.00'}
          volume={'500ml'}
          image={require('../../assets/rober.png')}
        />
        <WaterPurchaseDetail
          name={'Bottle water'}
          price={'GHc 20.00'}
          volume={'500ml'}
          image={require('../../assets/image-.png')}
        />
        <WaterPurchaseDetail
          name={'Bottle water'}
          price={'GHc 40.00'}
          volume={'750ml'}
          image={require('../../assets/image10.png')}
        />
      </ScrollView>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <CustomButton
          buttonText="Continue"
          bgColor={colors.secondary}
          width={'70%'}
        />
      </View>
    </RNBSheetWrapper>
  );
}
