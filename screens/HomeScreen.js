import React from 'react';
import {Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';

export default function HomeScreen({navigation}) {
  return (
    <Wrapper headerTitle="Schedule Pickupss" navigation={navigation}>
      <Text>this is the home screen</Text>
    </Wrapper>
  );
}
