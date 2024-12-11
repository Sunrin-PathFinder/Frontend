import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native';

export default function App() {
  useEffect(() => {
    requestPermission()
  })

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: '위치 권한 요청',
            message: '사용자의 위치 정보 수집을 위하여 위치 권한이 필요합니다.',
            buttonNeutral: '나중에',
            buttonNegative: '거부',
            buttonPositive: '허용',
          }
        )
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
