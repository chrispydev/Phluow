import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function PickCard({ cardColor, cImage }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 20,
        paddingBottom: 15,
        paddingTop: 15,
      }}
    >
      <View>
        <Image
          style={{
            width: 123.774,
            height: 88,
            flexShrink: 0,
            borderRadius: 10.9,
          }}
          source={cImage}
        />
      </View>
      <View>
        <Text style={styles.companyTitle}>Company Name</Text>
        <Text style={styles.location}>Location</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Text style={styles.date}>12:30pm</Text>
          <Text style={styles.date}>July 20, 2023</Text>
        </View>
      </View>
      <View>
        <Text style={styles.price}>GH₵20</Text>
        <Text style={[styles.status, { color: cardColor }]}>Pending</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  companyTitle: {
    color: colors.secondaryText,
    fontWeight: 500,
    lineHeight: 27.346,
    letterSpacing: -0.32,
    fontSize: 16,
  },
  location: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 27.346,
    letterSpacing: -0.328,
    textAlign: 'left',
    color: colors.secondaryText,
  },
  date: {
    color: colors.secondaryText,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '400',
    letterSpacing: 0.32,
  },
  price: {
    color: colors.secondaryText,
    fontWeight: 700,
    lineHeight: 27.346,
    letterSpacing: -0.32,
    fontSize: 18,
  },
  status: {
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 27.346,
    letterSpacing: -0.328,
  },
});
