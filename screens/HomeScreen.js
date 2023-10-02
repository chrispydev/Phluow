import React, {useEffect, useState} from 'react';
import {View, StyleSheet, PermissionsAndroid, Platform} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Geolocation from 'react-native-geolocation-service';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiY2hyaXN0aWFub3d1c3UiLCJhIjoiY2xuOTdtaTQxMDR0MzJrbDN3Yjh5bTAwbCJ9.H1HDrWCE0Nn97YOr_NGTOQ',
);

export function MapViewComponent() {
  const car1Coordinates = [5.181667, 5.806389];
  const car2Coordinates = [5.1058, -1.2466];
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'This app needs access to your location.',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            Geolocation.getCurrentPosition(
              position => {
                setUserLocation(position.coords);
              },
              error => {
                console.log(error);
              },
              {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
            );
          }
        } else if (Platform.OS === 'ios') {
          Geolocation.requestAuthorization();
          Geolocation.getCurrentPosition(
            position => {
              setUserLocation(position.coords);
            },
            error => {
              console.log(error);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();

    return () => {
      Geolocation.stopObserving();
    };
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          styleURL={MapboxGL.StyleURL.Dark}
          customMapStyleURL="mapbox://styles/mapbox/dark-v10"
          localization={{
            language: 'en',
          }}
          style={styles.map}
          pitchEnabled={true}
          pitch={70}
          rotateEnabled={true}>
          {userLocation && (
            <MapboxGL.ShapeSource
              id="userLocationSource"
              shape={getUserLocationShape(userLocation)}>
              <MapboxGL.SymbolLayer
                id="userLocationIcon"
                style={styles.userLocationIcon}
              />
            </MapboxGL.ShapeSource>
          )}

          <MapboxGL.Camera
            zoomLevel={10}
            centerCoordinate={car1Coordinates}
            animationDuration={6000}
            animationMode={'flyTo'}
          />

          <MapboxGL.PointAnnotation id="car1" coordinate={car1Coordinates}>
            <View style={[styles.car, styles.car1]} />
          </MapboxGL.PointAnnotation>

          <MapboxGL.PointAnnotation id="car2" coordinate={car2Coordinates}>
            <View style={[styles.car, styles.car2]} />
          </MapboxGL.PointAnnotation>

          <MapboxGL.ShapeSource
            id="routeSource"
            shape={getRouteShape(car1Coordinates, car2Coordinates)}>
            <MapboxGL.LineLayer id="routeLayer" style={styles.route} />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
      </View>
    </View>
  );
}

function getUserLocationShape(coordinates) {
  return {
    type: 'Point',
    coordinates: [coordinates.longitude, coordinates.latitude],
  };
}

function getRouteShape(startCoordinates, endCoordinates) {
  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [startCoordinates, endCoordinates],
        },
      },
    ],
  };
}

export default function HomeScreen() {
  return (
    <>
      <MapViewComponent />
    </>
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
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
  car: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  car1: {
    backgroundColor: 'blue',
  },
  car2: {
    backgroundColor: 'green',
  },
  route: {
    lineColor: 'red',
    lineWidth: 3,
  },
  userLocationIcon: {
    iconImage: require('../assets/home.png'),
    iconAllowOverlap: true,
    iconSize: 0.5,
  },
});
