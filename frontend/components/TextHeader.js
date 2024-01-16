import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

export default function TextHeader({textLeft, textRight}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '10%',
        paddingVertical: '3%',
      }}>
      <TouchableOpacity>
        <Text style={styles.Text}>{textLeft}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.Text}>{textRight}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: colors.secondaryText,
    fontSize: 20,
  },
});
