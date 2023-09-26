import React, {useState} from 'react';
import {View} from 'react-native';
import Wrapper from '../components/Wrapper';
import {colors} from '../styles/colors';
import Status from './Custom/Status';
import Ongoing from './Custom/Ongoing';
import Complete from './Custom/Complete';
import CustomButton from '../components/CustomButton';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RNBottonSheet from '../components/RNBottomSheet';

export default function PickUpOrder({navigation}) {
  const [page, setPage] = useState('status');

  const [index, setIndex] = useState(-1);

  const moveToStatus = () => {
    setPage('status');
  };

  const moveOnGoing = () => {
    setPage('ongoing');
  };

  const moveToComplete = () => {
    setPage('complete');
  };

  const completeEvent = () => {
    if (index === -1) {
      setIndex(1);
    }
  };

  const closeSheet = () => {
    setIndex(-1);
  };

  const currentPage = (
    <>
      {page === 'status' && (
        <>
          <View
            style={{
              backgroundColor: colors.primaryDark,
              paddingVertical: 10,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomButton
              buttonAction={() => moveToStatus()}
              bgColor={colors.secondary}
              buttonText="Status"
              pVertical={10}
              pHorizontal={10}
              bRadius={10}
            />
            <CustomButton
              buttonAction={() => moveOnGoing()}
              bgColor={colors.primaryDark}
              buttonText="Ongoing"
              pVertical={10}
              pHorizontal={10}
            />
            <CustomButton
              buttonAction={() => moveToComplete()}
              bgColor={colors.primaryDark}
              buttonText="Complete"
              pVertical={10}
              pHorizontal={10}
            />
          </View>
          <Status />
        </>
      )}
      {page === 'ongoing' && (
        <>
          <View
            style={{
              backgroundColor: colors.primaryDark,
              paddingVertical: 10,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomButton
              buttonAction={() => moveToStatus()}
              bgColor={colors.primaryDark}
              buttonText="Status"
              pVertical={10}
              pHorizontal={10}
              bRadius={10}
            />
            <CustomButton
              buttonAction={() => moveOnGoing()}
              bgColor={colors.secondary}
              buttonText="Ongoing"
              pVertical={10}
              pHorizontal={10}
            />
            <CustomButton
              buttonAction={() => moveToComplete()}
              bgColor={colors.primaryDark}
              buttonText="Complete"
              pVertical={10}
              pHorizontal={10}
            />
          </View>
          <Ongoing />
        </>
      )}
      {page === 'complete' && (
        <>
          <View
            style={{
              backgroundColor: colors.primaryDark,
              paddingVertical: 10,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <CustomButton
              buttonAction={() => moveToStatus()}
              bgColor={colors.primaryDark}
              buttonText="Status"
              pVertical={10}
              pHorizontal={10}
              bRadius={10}
            />
            <CustomButton
              buttonAction={() => moveOnGoing()}
              bgColor={colors.primaryDark}
              buttonText="Ongoing"
              pVertical={10}
              pHorizontal={10}
            />
            <CustomButton
              buttonAction={() => moveToComplete()}
              bgColor={colors.secondary}
              buttonText="Complete"
              pVertical={10}
              pHorizontal={10}
            />
          </View>
          <Complete completeEvent={completeEvent} />
        </>
      )}
    </>
  );
  return (
    <Wrapper
      headerTitle="Schedule Pickups"
      show
      removePadding
      navigation={navigation}>
      <GestureHandlerRootView>
        {index === -1 ? (
          <>{currentPage}</>
        ) : (
          <RNBottonSheet index={index} closeSheet={closeSheet} />
        )}
      </GestureHandlerRootView>
    </Wrapper>
  );
}
