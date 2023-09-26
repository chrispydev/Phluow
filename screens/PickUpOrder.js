import React, {useCallback, useMemo, useRef, useState} from 'react';
import {View} from 'react-native';
import Wrapper from '../components/Wrapper';
import {colors} from '../styles/colors';
import Status from './Custom/Status';
import Ongoing from './Custom/Ongoing';
import Complete from './Custom/Complete';
import CustomButton from '../components/CustomButton';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';

import RobberDetail from '../components/RobberDetail';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';

export default function PickUpOrder({navigation}) {
  const [page, setPage] = useState('status');

  const bottomSheetRef = useRef(null);

  const [index, setIndex] = useState(-1);

  const snapPoints = useMemo(() => ['100%', '100%'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const closeSheet = () => {
    setIndex(-1);
  };

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
    if (index == -1) {
      setIndex(1);
    }
  };

  const RNBottonSheet = ({index}) => (
    <>
      <View
        style={{
          paddingBottom: '90%',
          paddingTop: '30%',
          backgroundColor: colors.primaryDarker,
        }}>
        <BottomSheet
          handleIndicatorStyle={{backgroundColor: 'white', width: '45%'}}
          enablePanDownToClose={true}
          onClose={closeSheet}
          backgroundStyle={{
            padding: 10,
            backgroundColor: colors.primaryDarker,
            borderRadius: 0,
          }}
          ref={bottomSheetRef}
          index={index}
          backdropComponent={props => (
            <BottomSheetBackdrop
              {...props}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
            />
          )}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <ScrollView style={{backgroundColor: colors.primaryDarker}}>
            {[...new Array(10)].map((_, index) => (
              <RobberDetail
                key={index}
                robberText="Sachets water"
                robberVolume="500ml"
                robberTTest="1 sachets of  water"
                robberPrice="GHC 10.00"
                robberTColor={colors.secondary}
                robberBText="Return sachet rubber"
              />
            ))}
          </ScrollView>
        </BottomSheet>
      </View>
    </>
  );

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
        {index == -1 ? <>{currentPage}</> : <RNBottonSheet index={index} />}
      </GestureHandlerRootView>
    </Wrapper>
  );
}
