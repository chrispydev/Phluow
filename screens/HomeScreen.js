import React from 'react';
import Wrapper from '../components/Wrapper';
import CancelOder from '../components/CancelOrder';
import DriverRating from '../components/DriverRating';

export default function HomeScreen() {
  return (
    <Wrapper>
      <DriverRating />
    </Wrapper>
  );
}
// import React from 'react';
// import Wrapper from '../components/Wrapper';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import WaterPurchaseWrapper from '../components/home/WaterPurchaseWrapper';
// import PayOnDelivery from '../components/PayOnDelivery';
// import EndTrip from '../components/EndTrip';
//
// export default function HomeScreen() {
//   return (
//     <Wrapper removePadding show>
//       <GestureHandlerRootView>
//         <EndTrip />
//       </GestureHandlerRootView>
//     </Wrapper>
//   );
// }
