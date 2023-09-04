import { View, Text } from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';
import CustomButton from '../components/CustomButton';
import { colors } from '../styles/colors';

export default function PickUpOrder({ navigation }) {
  return (
    <Wrapper
      headerTitle='Schedule Pickups'
      show
      removePadding
      navigation={navigation}
    >
      <View
        style={{
          backgroundColor: colors.primaryDark,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CustomButton
          bgColor={colors.secondary}
          buttonText='status'
          pVertical={10}
          pHorizontal={10}
        />
        <CustomButton
          bgColor={colors.primaryDark}
          buttonText='Ongoing'
          pVertical={10}
          pHorizontal={10}
        />
        <CustomButton
          bgColor={colors.primaryDark}
          buttonText='Complete'
          pVertical={10}
          pHorizontal={10}
        />
      </View>
    </Wrapper>
  );
}
