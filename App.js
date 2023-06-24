import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import * as Linking from 'expo-linking';

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 70 }}>
      <Text>Keys: {JSON.stringify(Object.keys(Constants.expoConfig))}</Text>
      <View style={{ marginTop: 20 }} />
      <Text>Values: {JSON.stringify(Constants.expoConfig)}</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
