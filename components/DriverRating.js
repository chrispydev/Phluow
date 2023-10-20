import React from 'react';
import {View, Text, Image} from 'react-native';
import PopupConfirmation from './PopupConfirmation';
import {colors} from '../styles/colors';
import CustomButton from './CustomButton';

export default function DriverRating() {
  return (
    <PopupConfirmation
      pVertical={'8%'}
      width={'90%'}
      boxColor="#40444B"
      bRadius={40}>
      <View style={{alignItems: 'flex-start'}}>
        <Image
          style={{marginLeft: '-2%', marginBottom: '4%'}}
          source={require('../assets/Heart.png')}
        />
        <Text
          style={{
            color: colors.secondaryText,
            fontWeight: '400',
            fontSize: 30,
          }}>
          Rate [ Driver's name ]
        </Text>
        <Text
          style={{
            color: colors.modalTextColor,
            fontWeight: '300',
            paddingBottom: 14,
            fontSize: 20,
            textAlign: 'left',
          }}>
          Rating Driver helps companies track and determine driver’s performance
          to enhance good customer support.
        </Text>
        <View style={{marginTop: '9%'}}>
          <View
            style={{
              backgroundColor: colors.complete,
              paddingVertical: '2%',
              paddingHorizontal: '5%',
              borderRadius: 200,
            }}>
            <Text style={{color: colors.secondaryText, fontSize: 25}}>0</Text>
          </View>
        </View>
      </View>
      <CustomButton
        buttonText="Back"
        bgColor={colors.secondary}
        pHorizontal={'20%'}
        bRadius={50}
        height={54}
        width={'90%'}
        elevation={4}
      />
    </PopupConfirmation>
  );
}
