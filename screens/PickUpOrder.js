import { View, Text } from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';
import { colors } from '../styles/colors';
import TopBarNav from '../components/TopBarNav';
import Status from './Custom/Status';

export default function PickUpOrder({ navigation }) {
  return (
    <Wrapper
      headerTitle='Schedule Pickups'
      show
      removePadding
      navigation={navigation}
    >
      <Status />
    </Wrapper>
  );
}
