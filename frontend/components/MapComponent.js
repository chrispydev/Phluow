import React from 'react';
import {StyleSheet, View} from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken(process.env.MAPBOX_ACCESS_TOKEN);
Mapbox.setTelemetryEnabled(false);
Mapbox.setConnected(true);
Mapbox.setWellKnownTileServer('Mapbox');

export default function MapComponent() {
  return (
    <View style={styles.page}>
      <Mapbox.MapView
        scrollEnabled={true}
        zoomEnabled={true}
        logoEnabled={true}
        style={styles.map}
        styleURL="mapbox://styles/mapbox/navigation-night-v1"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
});
