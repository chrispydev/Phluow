import React, {useCallback, useMemo, useRef} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import RobberDetail from './RobberDetail';
import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {colors} from '../styles/colors';

const Sheet = ({index}) => {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['100%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    // console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View
      style={{
        paddingBottom: '90%',
        paddingTop: '30%',
        backgroundColor: colors.primaryDarker,
      }}>
      <BottomSheet
        // enablePanDownToClose={true}
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
  );
};

export default Sheet;
