import React from 'react';
import Wrapper from '../components/Wrapper';
import PayWithCash from '../components/PayWithCash';

export default function HomeScreen() {
  return (
    <Wrapper>
      <PayWithCash />
    </Wrapper>
  );
}
// import React from 'react';
// import Wrapper from '../components/Wrapper';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import OrderProcess from '../components/OrderProcess';
//
// export default function HomeScreen() {
//   return (
//     <Wrapper removePadding show>
//       <GestureHandlerRootView>
//         <OrderProcess />
//       </GestureHandlerRootView>
//     </Wrapper>
//   );
// }
