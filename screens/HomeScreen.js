import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {colors} from '../styles/colors';
import NavBar from '../components/NavBar';
import CarouselImage from '../components/CarouselImage';
import TextHeader from '../components/TextHeader';
import HomeCompanyCard from '../components/HomeCompanyCard';

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
          <CarouselImage
            cImageTop={require('../assets/image1.png')}
            cImageOverLay={require('../assets/image4.png')}
          />
          <CarouselImage
            cImageTop={require('../assets/image2.png')}
            cImageOverLay={require('../assets/image4(1).png')}
          />
        </ScrollView>
        <ScrollView style={{marginTop: '4%'}}>
          <TextHeader
            textLeft="Order for Instant Delivery"
            textRight="View all"
          />
          {[...Array(2)].map(i => (
            <View>
              <HomeCompanyCard
                key={i}
                cName="Company Name"
                status="available"
                carDetail="3 cars available"
                image={require('../assets/im8.png')}
              />

              <HomeCompanyCard
                key={i}
                cName="Company Name"
                status="available"
                carDetail="3 cars available"
                image={require('../assets/image6.png')}
              />
            </View>
          ))}
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
