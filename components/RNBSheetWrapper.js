import React, {useCallback, useMemo, useRef} from 'react';
import {ScrollView, View} from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';
import {colors} from '../styles/colors';

export default function RNBSheetWrapper({index, closeSheet, children}) {
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['100%', '100%'], []);

  const handleSheetChanges = useCallback(i => {
    console.log('handleSheetChanges', i);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        marginTop: '100%',
        paddingBottom: '100%',
        opacity: 0.9,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
      }}>
      <BottomSheet
        handleIndicatorStyle={{backgroundColor: 'white', width: '45%'}}
        enablePanDownToClose={true}
        onClose={closeSheet}
        backgroundStyle={{
          padding: 10,
          backgroundColor: colors.boxColor,
          borderRadius: 30,
        }}
        ref={bottomSheetRef}
        index={index}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <ScrollView
          style={{
            paddingHorizontal: '10%',
            paddingVertical: '4%',
          }}>
          {children}
        </ScrollView>
      </BottomSheet>
    </View>
  );
}
