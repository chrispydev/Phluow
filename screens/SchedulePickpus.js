import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Wrapper from '../components/Wrapper';
import RobberDetail from '../components/RobberDetail';
import { colors } from '../styles/colors';

export default function SchedulePickups() {
  return (
    <Wrapper headerTitle='Schedule Pickups'>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 15 }}
      >
        <RobberDetail
          robberText='Sachets water'
          robberVolume='500ml'
          robberTTest='1 sachets of  water'
          robberPrice='GHC 10.00'
          robberTColor={colors.secondary}
          robberBText='Return sachet rubber'
        />
        <RobberDetail
          robberText='Dispenser Bottle'
          robberVolume='20L'
          robberTTest='1 Dispenser Bottle'
          robberPrice='GHC 12.00'
          robberTColor={colors.secondary}
          robberBText='Return dispenser bottle'
        />
        <RobberDetail
          robberText='Sachets water'
          robberVolume='500ml'
          robberTTest='1 sachets of  water'
          robberPrice='GHC 10.00'
          robberTColor={colors.scheduleButtonColor}
          robberBText='Return sachet rubber'
        />
        <RobberDetail
          robberText='Dispenser Bottle'
          robberVolume='20L'
          robberTTest='1 Dispenser Bottle'
          robberPrice='GHC 12.00'
          robberTColor={colors.scheduleButtonColor}
          robberBText='Return dispenser bottle'
        />
        <RobberDetail
          robberText='Sachets water'
          robberVolume='500ml'
          robberTTest='1 sachets of  water'
          robberPrice='GHC 10.00'
          robberTColor={colors.complete}
          show_1={true}
          show_2={true}
          robberBText='Return accepted'
        />
        <RobberDetail
          robberText='Dispenser Bottle'
          robberVolume='500ml'
          robberTTest='1 Dispenser bottle'
          robberPrice='GHC 12.00'
          robberTColor={colors.complete}
          show_1={true}
          robberBText='Return accepted'
        />
      </ScrollView>
    </Wrapper>
  );
}
