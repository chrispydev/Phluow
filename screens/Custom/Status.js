import React from 'react';
import TopBarNav from '../../components/TopBarNav';
import { colors } from '../../styles/colors';
import PickCard from '../../components/PickCard';

export default function Status() {
  return (
    <>
      <TopBarNav lDisabled={true} lColor={colors.secondary} />
      <PickCard
        cardColor={colors.pending}
        cImage={require('../../assets/im7.png')}
      />
      <PickCard
        cardColor={colors.pending}
        cImage={require('../../assets/im7.png')}
      />
      <PickCard
        cardColor={colors.pending}
        cImage={require('../../assets/im7.png')}
      />
    </>
  );
}
