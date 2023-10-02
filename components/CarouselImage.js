import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {colors} from '../styles/colors';

export default function CarouselImage({cImageTop, cImageOverLay}) {
  return (
    <View style={styles.TopNav}>
      <Image style={styles.TopImageNav} source={cImageTop} />
      <View
        style={{
          backgroundColor: colors.boxColor,
          paddingVertical: 20,
          paddingLeft: 18,
        }}>
        <View
          style={{
            zIndex: 10,
            position: 'absolute',
            top: -25,
            left: 5,
            borderRadius: 8,
            backgroundColor: colors.boxColor,
          }}>
          <Image
            style={{
              height: 60,
              width: 55,
              margin: 4,
              borderRadius: 8,
            }}
            source={cImageOverLay}
          />
        </View>
        <Text style={styles.Text}>Name of Company</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: colors.secondaryText,
    marginTop: 20,
    fontSize: 20,
  },
  TopNav: {
    width: 260,
    maxHeight: 260,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden',
    marginRight: 20,
  },
  TopImageNav: {
    objectFit: 'fill',
    height: '70%',
    width: '100%',
  },
});
