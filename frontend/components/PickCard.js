import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../styles/colors';

export default function PickCard({
  cardColor,
  cImage,
  cName,
  cLocation,
  cDate,
  cPrice,
  cStatus,
  cTime,
  completeEvent,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 20,
        paddingVertical: 15,
        marginVertical: 1,
        backgroundColor: colors.boxColor,
      }}>
      <View>
        <Image
          style={{
            width: 150,
            height: 120,
            flexShrink: 0,
            borderRadius: 10.9,
          }}
          source={cImage}
        />
      </View>
      <View>
        <Text style={styles.companyTitle}>{cName}</Text>
        <Text style={styles.location}>{cLocation}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text style={styles.date}>{cTime}</Text>
          <Text style={styles.date}>{cDate}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.price}>{cPrice}</Text>
        <TouchableOpacity onPress={completeEvent}>
          <Text style={[styles.status, {color: cardColor}]}>{cStatus}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  companyTitle: {
    color: colors.secondaryText,
    fontWeight: '500',
    lineHeight: 27.346,
    letterSpacing: -0.32,
    fontSize: 22,
  },
  location: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 27.346,
    letterSpacing: -0.328,
    textAlign: 'left',
    color: colors.secondaryText,
  },
  date: {
    color: colors.secondaryText,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.32,
  },
  price: {
    color: colors.secondaryText,
    fontWeight: '700',
    lineHeight: 27.346,
    letterSpacing: -0.32,
    fontSize: 22,
  },
  status: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 27.346,
    letterSpacing: -0.328,
  },
});
