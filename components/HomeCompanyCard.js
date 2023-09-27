import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../styles/colors';

export default function HomeCompanyCard({image, cName, status, carDetail}) {
  return (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image style={styles.cardImage} source={image} />
        <View>
          <Text style={[styles.cardText, {fontSize: 18}]}>{cName}</Text>
          <Text style={[styles.cardText, {color: colors.complete}]}>
            {status}
          </Text>
          <Text style={styles.cardText}>{carDetail}</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Icon
          name="map"
          size={25}
          color={colors.secondaryText}
          style={styles.cardText}
        />
        <Text style={[styles.cardText, {fontSize: 13}]}>Order Now</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.boxColor,
    padding: 10,
    marginBottom: 1,
  },
  cardText: {
    color: colors.secondaryText,
    marginBottom: 5,
  },
  cardImage: {
    height: 80,
    width: 75,
    borderRadius: 15,
    marginRight: 20,
  },
});
