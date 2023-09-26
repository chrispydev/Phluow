import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RobberDetail from './RobberDetail';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {colors} from '../styles/colors';

const Sheet = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['70%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View
      style={{
        flex: 1,
        paddingTop: '100%',
        paddingBottom: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
      }}>
      <BottomSheet
        backgroundStyle={{
          padding: 10,
          backgroundColor: colors.scheduleButtonColor,
        }}
        ref={bottomSheetRef}
        index={1}
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <ScrollView style={{backgroundColor: colors.scheduleButtonColor}}>
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
  );
};

export default Sheet;
