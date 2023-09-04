import React from 'react';
import PickCard from '../../components/PickCard';
import { colors } from '../../styles/colors';

export default function Ongoing() {
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
        cardColor={colors.pending}
        cImage={require('../../assets/im9.png')}
        cName='Company Name'
        cLocation='Location'
        cDate='12 July, 1998'
        cPrice='GH₵20'
        cStatus='pending'
        cTime='10:29pm'
      />
    </>
  );
}
