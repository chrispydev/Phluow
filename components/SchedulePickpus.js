import React, {useCallback, useMemo, useRef} from 'react';
import {ScrollView} from 'react-native';
import RobberDetail from '../components/RobberDetail';
import {colors} from '../styles/colors';
import BottomSheet from '@gorhom/bottom-sheet';

export default function SchedulePickups() {
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 15}}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        {' '}
        <RobberDetail
          robberText="Sachets water"
          robberVolume="500ml"
          robberTTest="1 sachets of  water"
          robberPrice="GHC 10.00"
          robberTColor={colors.secondary}
          robberBText="Return sachet rubber"
        />
        <RobberDetail
          robberText="Dispenser Bottle"
          robberVolume="20L"
          robberTTest="1 Dispenser Bottle"
          robberPrice="GHC 12.00"
          robberTColor={colors.secondary}
          robberBText="Return dispenser bottle"
        />
        <RobberDetail
          robberText="Sachets water"
          robberVolume="500ml"
          robberTTest="1 sachets of  water"
          robberPrice="GHC 10.00"
          robberTColor={colors.scheduleButtonColor}
          robberBText="Return sachet rubber"
        />
        <RobberDetail
          robberText="Dispenser Bottle"
          robberVolume="20L"
          robberTTest="1 Dispenser Bottle"
          robberPrice="GHC 12.00"
          robberTColor={colors.scheduleButtonColor}
          robberBText="Return dispenser bottle"
        />
        <RobberDetail
          robberText="Sachets water"
          robberVolume="500ml"
          robberTTest="1 sachets of  water"
          robberPrice="GHC 10.00"
          robberTColor={colors.complete}
          show_1={true}
          show_2={true}
          robberBText="Return accepted"
        />
        <RobberDetail
          robberText="Dispenser Bottle"
          robberVolume="500ml"
          robberTTest="1 Dispenser bottle"
          robberPrice="GHC 12.00"
          robberTColor={colors.complete}
          show_1={true}
          robberBText="Return accepted"
        />
      </BottomSheet>
    </ScrollView>
  );
}
