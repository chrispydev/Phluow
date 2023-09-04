import React from 'react';
import PickCard from '../../components/PickCard';
import { colors } from '../../styles/colors';

export default function Complete() {
  return (
    <>
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
        cardColor={colors.complete}
        cImage={require('../../assets/im9.png')}
        cName='Company Name'
        cLocation='Location'
        cDate='12 July, 1998'
        cPrice='GH₵20'
        cStatus='Oder Complete'
        cTime='12:29pm'
      />
      <PickCard
        cardColor={colors.complete}
        cImage={require('../../assets/im7.png')}
        cName='Company Name'
        cLocation='Location'
        cDate='12 July, 1998'
        cPrice='GH₵20'
        cStatus='Oder Complete'
        cTime='12:29pm'
      />
    </>
  );
}
