import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Wrapper from '../components/Wrapper';
import FloatingContainer from '../components/FloatingContainer';
import WaterPurchase from '../components/home/WaterPurchase';

export default function HomeScreen() {
  return (
    <Wrapper removePadding>
      {/*
      <FloatingContainer />
      */}
      <GestureHandlerRootView>
        <WaterPurchase />
      </GestureHandlerRootView>
    </Wrapper>
  );
}
