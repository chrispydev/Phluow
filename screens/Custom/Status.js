import React from 'react';
import { colors } from '../../styles/colors';
import PickCard from '../../components/PickCard';

export default function Status() {
  return (
    <>
      <PickCard
        cardColor={colors.pending}
        cImage={require('../../assets/im7.png')}
        cName='Company Name'
        cLocation='Location'
        cDate='12 July, 1998'
        cPrice='GH₵20'
        cStatus='pending'
        cTime='10:29pm'
      />
      <PickCard
        cardColor={colors.complete}
        cImage={require('../../assets/im8.png')}
        cName='Company Name'
        cLocation='Location'
        cDate='12 July, 1998'
        cPrice='GH₵20'
        cStatus='Oder Complete'
        cTime='12:29pm'
      />
      <PickCard
        cardColor={colors.denied}
        cImage={require('../../assets/im9.png')}
        cName='Company Name'
        cLocation='Location'
        cDate='12 July, 1998'
        cPrice='GH₵20'
        cStatus='Oder denied'
        cTime='12:29pm'
      />
    </>
  );
}
