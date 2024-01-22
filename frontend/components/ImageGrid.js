import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import useCustomDimensions from '../hooks/useCustomDimension';

export default function ImageGrid() {
  const {widthPercentage, heightPercentage} = useCustomDimensions('20%', '20%');
  const {heightPercentage: hip} = useCustomDimensions('0%', '40%');
  const {heightPercentage: mp} = useCustomDimensions('0%', '4%');

  return (
    <View style={[styles.imageContainer, {height: hip, marginTop: mp}]}>
      <View>
        <Image
          style={[
            styles.image,
            {width: widthPercentage, height: heightPercentage},
          ]}
          source={require('../assets/envelope_left.png')}
        />
        <Image
          style={[
            styles.image,
            {width: widthPercentage, height: heightPercentage},
          ]}
          source={require('../assets/cup_left.png')}
        />
      </View>
      <View>
        <Image
          style={[
            styles.image,
            {width: widthPercentage, height: heightPercentage},
          ]}
          source={require('../assets/marker_left.png')}
        />
      </View>
      <View>
        <Image
          style={[
            styles.image,
            {width: widthPercentage, height: heightPercentage},
          ]}
          source={require('../assets/clock_left.png')}
        />
        <Image
          style={[
            styles.image,
            {width: widthPercentage, height: heightPercentage},
          ]}
          source={require('../assets/wallet_front.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    marginBottom: '100%',
    paddingBottom: 10,
    resizeMode: 'contain',
  },
});
