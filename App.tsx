import { Text, View, StyleSheet } from 'react-native';
import { getCurrentGpsData } from './src/util/gps';

export default function App() {
  const { location, errorMsg } = getCurrentGpsData();

  return (
    <View>
    </View>
  );
}