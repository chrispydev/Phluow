import React, {useCallback, useMemo} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

export default function RNBSheetWrapper({
  children,
  minH,
  maxH,
  bgColor,
  mIndex,
  bottomSheetModalRef,
}) {
  //variable
  const snapPoints = useMemo(() => [minH, maxH], [minH, maxH]);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current.present();
  }, [bottomSheetModalRef]);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  //renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Text>This is the map component</Text>
        <Button
          onPress={handlePresentModalPress}
          title="Press Modal"
          color="black"
        />
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
    padding: 24,
    justifyContent: 'flex-start',
    backgroundColor: 'grey',
  },
});
