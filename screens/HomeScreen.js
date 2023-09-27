import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import NavBar from '../components/NavBar';
import CarouselImage from '../components/CarouselImage';
import TextHeader from '../components/TextHeader';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor="#000" />
      <NavBar authName="Good Morning Eben" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextHeader textLeft="Around You" textRight="View all" />
        <ScrollView
          contentContainerStyle={{
            marginHorizontal: 10,
          }}
          horizontal={true}
          pagingEnabled={true}>
          {[...Array(10)].map(i => (
            <CarouselImage key={i} />
          ))}
        </ScrollView>
        <ScrollView style={{marginTop: '4%'}}>
          <TextHeader
            textLeft="Order for Instant Delivery"
            textRight="View all"
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#000',
    fontFamily: 'Roboto_400Regular',
  },
  Text: {
    color: colors.secondaryText,
  },
});
