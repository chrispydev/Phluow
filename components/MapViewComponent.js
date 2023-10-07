import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Icon from 'react-native-vector-icons/FontAwesome';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiY2hyaXN0aWFub3d1c3UiLCJhIjoiY2xuOXBoNXhxMGNieDJpbWRzOHU3bmZwdCJ9.3Zxc69XFJsMZ_ZMVeC_VNQ',
);
MapboxGL.setConnected(true);

export default function MapViewComponent() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [randomLocations, setRandomLocations] = useState([]);
  MapboxGL.setTelemetryEnabled(false);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        // const location = await MapboxGL.LocationManager.getLastKnownLocation();
        const location = await MapboxGL.locationManager.getLastKnownLocation();
        setCurrentLocation(location);
      } catch (error) {
        console.log('Error getting current location:', error);
      }
    };

    getCurrentLocation();
  }, []);

  useEffect(() => {
    const generateRandomLocations = (center, count, range) => {
      const randomLocations = [];

      for (let i = 0; i < count; i++) {
        const lat = center.latitude + (Math.random() - 0.5) * range;
        const lng = center.longitude + (Math.random() - 0.5) * range;

        randomLocations.push({latitude: lat, longitude: lng});
      }

      return randomLocations;
    };

    if (currentLocation) {
      const newRandomLocations = generateRandomLocations(
        currentLocation,
        5,
        0.01,
      );
      setRandomLocations(newRandomLocations);
    }
  }, [currentLocation]);

  const recheckLocation = async () => {
    try {
      const location = await MapboxGL.LocationManager.getLastKnownLocation();
      setCurrentLocation(location);
    } catch (error) {
      console.log('Error rechecking location:', error);
    }
  };

  const selectLocation = () => {
    const randomIndex = Math.floor(Math.random() * randomLocations.length);
    setSelectedLocation(randomLocations[randomIndex]);
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          {currentLocation && (
            <MapboxGL.PointAnnotation
              id="currentLocation"
              coordinate={[
                currentLocation.longitude,
                currentLocation.latitude,
              ]}>
              <Icon name="map-marker" size={30} color="#FF0000" />
            </MapboxGL.PointAnnotation>
          )}

          {randomLocations.map((location, index) => (
            <MapboxGL.PointAnnotation
              key={index}
              id={`randomLocation${index}`}
              coordinate={[location.longitude, location.latitude]}>
              <Icon name="square" size={30} color="#0000FF" />
            </MapboxGL.PointAnnotation>
          ))}

          {selectedLocation && (
            <>
              <MapboxGL.ShapeSource
                id="lineSource"
                shape={{
                  type: 'Feature',
                  geometry: {
                    type: 'LineString',
                    coordinates: [
                      [currentLocation.longitude, currentLocation.latitude],
                      [selectedLocation.longitude, selectedLocation.latitude],
                    ],
                  },
                }}>
                <MapboxGL.LineLayer
                  id="lineLayer"
                  style={{lineColor: 'red', lineWidth: 2}}
                />
              </MapboxGL.ShapeSource>

              <MapboxGL.ShapeSource
                id="circleSource"
                shape={{
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [
                      selectedLocation.longitude,
                      selectedLocation.latitude,
                    ],
                  },
                  properties: {},
                }}>
                <MapboxGL.CircleLayer
                  id="circleLayer"
                  style={{circleColor: 'red', circleRadius: 10}}
                />
              </MapboxGL.ShapeSource>
            </>
          )}
        </MapboxGL.MapView>
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={recheckLocation}>
        <Icon name="refresh" size={20} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.floatingButton} onPress={selectLocation}>
        <Icon name="random" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#000',
  },
  map: {
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
