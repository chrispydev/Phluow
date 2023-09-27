import React, {useCallback, useMemo, useRef} from 'react';
import {View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {ScrollView} from 'react-native-gesture-handler';
import {colors} from '../styles/colors';
import RobberDetail from './RobberDetail';

export default function RNBottonSheet({index, closeSheet}) {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['100%', '100%'], []);

  const handleSheetChanges = useCallback(i => {
    // console.log('handleSheetChanges', i);
  }, []);

  return (
    <>
      <View
        style={{
          paddingBottom: '90%',
          paddingTop: '30%',
          backgroundColor: colors.primaryDarker,
          opacity: 0.8,
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
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <ScrollView style={{backgroundColor: colors.primaryDarker}}>
            {[...new Array(10)].map((_, i) => (
              <RobberDetail
                key={i}
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
}
