import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import themeStyles from '../../styles/theme.styles';

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
    latitude: 61.470426,
    longitude: 23.933906,
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

  console.log('location', location)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Map</Text>
      </View>
      <MapView
        initialRegion={location ? {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        } : defaultLocation}
        style={styles.map}
      >
        <Marker coordinate={{ latitude: 61.470426, longitude: 23.933906 }} title="Liuttu" />
      </MapView>
      <Text style={styles.paragraph}>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    marginTop: themeStyles.SPACER_BASIC,
    padding: themeStyles.SPACER_MINI,
  },
  header: {
    fontSize: themeStyles.FONT_SIZE_EXTRA_LARGE,
    fontWeight: "600",
    color: themeStyles.FONT_COLOR_WHITE,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  paragraph: {
    fontSize: 12,
  }
});
