import { View, Text } from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';

export default function Services({ navigation }) {
  return (
    <Wrapper headerTitle='Schedule Pickups' show navigation={navigation}>
      <Text>this is the Service Screen</Text>
    </Wrapper>
  );
}
