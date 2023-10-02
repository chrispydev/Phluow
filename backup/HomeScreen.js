import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {colors} from '../styles/colors';
import NavBar from '../components/NavBar';
import CarouselImage from '../components/CarouselImage';
import TextHeader from '../components/TextHeader';
import HomeCompanyCard from '../components/HomeCompanyCard';
import MapboxGL from '@rnmapbox/maps';
MapboxGL.setAccessToken(
  'pk.eyJ1IjoiY2hyaXNweWRldiIsImEiOiJjbDZrdWdzNWkwM3J1M2JwczBlbWRlbndxIn0.0qR5xClx4sHDx-aoMx4mDw',
);
MapboxGL.setConnected(true);

export function MapViewComponent() {
  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
}

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
          <View>
            <HomeCompanyCard
              cName="Company Name"
              status="available"
              carDetail="3 cars available"
              image={require('../assets/im8.png')}
            />

            <HomeCompanyCard
              cName="Company Name"
              status="available"
              carDetail="3 cars available"
              image={require('../assets/image6.png')}
            />
            <HomeCompanyCard
              cName="Company Name"
              status="available"
              carDetail="3 cars available"
              image={require('../assets/im8.png')}
            />
            <HomeCompanyCard
              cName="Company Name"
              status="available"
              carDetail="3 cars available"
              image={require('../assets/image6.png')}
            />
          </View>
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
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});
