import React from 'react';
import {
  // SafeAreaView,
  View,
  // ScrollView,
  // StatusBar,
  StyleSheet,
  // Text,
} from 'react-native';
import {colors} from '../styles/colors';
// import NavBar from '../components/NavBar';
// import CarouselImage from '../components/CarouselImage';
// import TextHeader from '../components/TextHeader';
// import HomeCompanyCard from '../components/HomeCompanyCard';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiY2hyaXN0aWFub3d1c3UiLCJhIjoiY2xuOTdtaTQxMDR0MzJrbDN3Yjh5bTAwbCJ9.H1HDrWCE0Nn97YOr_NGTOQ',
);
MapboxGL.setConnected(true);
MapboxGL.setTelemetryEnabled(false);
MapboxGL.setWellKnownTileServer('Mapbox');

export function MapViewComponent() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          localizeLabels={true}
          styleURL="mapbox://styles/mapbox/navigation-night-v1"
          // styleURL="mapbox://styles/christianowusu/cln97ttdm03hb01r49x5l2bgc"
          pitchEnabled={true}
          rotateEnabled={true}>
          <MapboxGL.Camera
            zoomLevel={15}
            centerCoordinate={[10.181667, 36.806389]}
            animationMode={'flyTo'}
          />
          <MapboxGL.PointAnnotation
            id="marker"
            coordinate={[10.181667, 36.806389]}>
            <View />
          </MapboxGL.PointAnnotation>
        </MapboxGL.MapView>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <>
      <MapViewComponent />
    </>
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
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
});
