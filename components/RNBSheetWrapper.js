import React, {useCallback, useMemo} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import MapComponent from './MapComponent';

export default function RNBSheetWrapper({
  children,
  minH,
  maxH,
  bgColor,
  mIndex,
  removepadding,
  bottomSheetModalRef,
}) {
  //variable
  const snapPoints = useMemo(() => [minH, maxH], [minH, maxH]);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, [bottomSheetModalRef]);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  //renders
  return (
    <BottomSheetModalProvider>
      <View style={[styles.container, {padding: 0}]}>
        <Button
          onPress={handlePresentModalPress}
          title="Press Modal"
          color="black"
        />
        {/*
        <MapComponent />
        */}
        <BottomSheetModal
          handleIndicatorStyle={{backgroundColor: 'white', width: '45%'}}
          backgroundStyle={{
            backgroundColor: bgColor,
            borderRadius: 20,
            justifyContent: 'center',
          }}
          ref={bottomSheetModalRef}
          index={mIndex}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <BottomSheetScrollView>{children}</BottomSheetScrollView>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    backgroundColor: 'grey',
  },
});
