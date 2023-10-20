import React from 'react';
import Wrapper from '../components/Wrapper';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import WaterPurchaseWrapper from '../components/home/WaterPurchaseWrapper';

export default function HomeScreen() {
  return (
    <Wrapper removePadding show>
      <GestureHandlerRootView>
        <WaterPurchaseWrapper
          name={'Sachets water'}
          price={'GHc 10.00'}
          volume={'500ml'}
          image={require('../assets/rober.png')}
        />
      </GestureHandlerRootView>
    </Wrapper>
  );
}
