import { View, Text } from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';

export default function PickUpOrder({ navigation }) {
  return (
    <Wrapper headerTitle='Schedule Pickups' show navigation={navigation}>
      <Text>this is the pick up screen</Text>
    </Wrapper>
  );
}
