import React, {useRef, useCallback, useState} from 'react';
import RNBSheetWrapper from '../RNBSheetWrapper';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles/colors';
import PurchaseDetails from '../PurchaseDetails';
import CustomButton from '../CustomButton';

export default function WaterPurchase() {
  const bottomSheetModalRef = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.close();
  }, []);

  return (
    <RNBSheetWrapper
      minH="70%"
      maxH="100%"
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
          }}>
          <PurchaseDetails />
        </View>
        <View
          style={{
            backgroundColor: colors.boxColor,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: '94%',
            borderRadius: 20,
            paddingHorizontal: '5%',
            marginRight: '2%',
            marginLeft: '2%',
          }}>
          <Switch
            trackColor={{
              false: colors.scheduleButtonColor,
              true: colors.complete,
            }}
            thumbColor={isEnabled ? colors.secondaryText : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
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
