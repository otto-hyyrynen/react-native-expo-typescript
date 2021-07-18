import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { ActivityIndicator, Dimensions, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

import { Text, View } from '../components/Themed';

interface Location {
  coords: {
    accuracy: number | null,
    altitude: number | null,
    altitudeAccuracy: number | null,
    heading: number | null,
    latitude: number,
    longitude: number,
    speed: number | null,
  };
  timestamp: number;
};

export default function MapScreen() {
  const defaultLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [location, setLocation] = useState<Location | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text: string | null = 'Waiting..';

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  if (!location) {
    return <View style={styles.container}>
      <ActivityIndicator />
    </View>
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={location ? {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        } : defaultLocation}
        style={styles.map}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324}} title="Test" />
      </MapView>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  paragraph: {
    fontSize: 12,
  }
});
