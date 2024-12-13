import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const getCurrentGpsData = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });
        setLocation(location);
      } catch (error: any) {
        setErrorMsg('Error getting location: ' + error.message);
      }
    }

    getCurrentLocation();
  }, []);

  return { location, errorMsg };
};