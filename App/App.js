import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import {
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export default function App() {
  const imageSource = require('./assets/images.png');
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.customStatusBar}>
        <Text style={styles.statusBarText}>Login App</Text>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  customStatusBar: {
    width: '100%',
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  statusBarText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
