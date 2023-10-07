import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Wrapper from '../components/Wrapper';
import FloatingContainer from '../components/FloatingContainer';
import WaterPurchase from '../components/home/WaterPurchase';

import StarRating from 'react-native-star-rating';
import {colors} from '../styles/colors';
import {View} from 'react-native';

export default function HomeScreen() {
  const [starCount, setStarCount] = useState(3);
  return (
    <Wrapper removePadding>
      {/*
      <FloatingContainer />
      <GestureHandlerRootView>
        <WaterPurchase />
      </GestureHandlerRootView>
      */}
      <StarRating
        disabled={false}
        maxStars={5}
        rating={starCount}
        selectedStar={rating => setStarCount(rating)}
        fullStarColor={colors.starColor}
      />
    </Wrapper>
  );
}
