import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {colors} from '../styles/colors';

export default function RNBSheetWrapper({children}) {
  //ref
  const bottomSheetModalRef = useRef(null);

  //variable
  const snapPoints = useMemo(() => ['15%', '30%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    console.log('This button was pressed');
    bottomSheetModalRef.current.present();
  }, []);

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
            backgroundColor: colors.boxColor,
            borderRadius: 20,
            justifyContent: 'center',
          }}
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          {children}
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
