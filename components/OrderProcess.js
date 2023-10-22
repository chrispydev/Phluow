import React, {useCallback, useRef} from 'react';
import RNBSheetWrapper from './RNBSheetWrapper';
import {colors} from '../styles/colors';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function OrderProcess() {
  const bottomSheetModalRef = useRef();

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.close();
  }, []);
  return (
    <RNBSheetWrapper
      minH="52%"
      maxH="65%"
      bgColor={colors.boxColor}
      bottomSheetModalRef={bottomSheetModalRef}>
      <View style={{alignItems: 'flex-end', marginBottom: '3%'}}>
        <TouchableOpacity
          onPress={() => handlePresentModalPress()}
          style={{
            width: 34,
            height: 34,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '5%',
            borderWidth: 2,
            borderColor: colors.secondaryText,
            borderRadius: 50 / 2,
          }}>
          <Icon name="close" size={25} color={colors.secondaryText} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingHorizontal: '4%',
          gap: 30,
        }}>
        {/* first div*/}
        <View style={{width: 100, position: 'relative'}}>
          <View
            style={{
              backgroundColor: colors.primaryDarker,
              height: 100,
              weight: 100,
              borderRadius: 100,
            }}
          />
          <Icon
            style={{
              position: 'absolute',
              right: '1%',
              top: '3%',
              zIndex: 99999,
            }}
            name="check"
            size={30}
            color={colors.secondaryText}
          />
        </View>
        {/* second div text*/}
        <View style={{gap: 10}}>
          <Text style={{color: colors.secondaryText, fontSize: 20}}>
            Name of Company
          </Text>
          <Text style={{color: colors.secondaryText, fontSize: 18}}>
            Type of Vehicle
          </Text>
        </View>
      </View>
      {/* price div*/}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 30,
        }}>
        <View>
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: 25,
              fontWeight: '500',
            }}>
            GHC 10
          </Text>
          <Text
            style={{
              color: colors.secondaryText,
              fontSize: 20,
              fontWeight: '400',
            }}>
            water price
          </Text>
        </View>
        {/*bar*/}
        <View
          style={{
            width: 7,
            height: 100,
            backgroundColor: colors.primaryDarker,
            borderRadius: 15,
          }}
        />
        <Text style={{color: colors.secondaryText, fontSize: 20}}>10 min</Text>
      </View>
      <View style={{alignItems: 'center', marginTop: '5%'}}>
        <View
          style={{
            backgroundColor: colors.primaryDarker,
            borderRadius: 20,
            width: '90%',
            height: 90,
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: colors.complete,
              width: '44%',
              height: '100%',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              zIndex: 9999,
              color: colors.secondaryText,
              position: 'absolute',
              left: '30%',
            }}>
            Accept Order
          </Text>
        </View>
      </View>
    </RNBSheetWrapper>
  );
}
