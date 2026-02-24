import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CardUser from './components/CardUser';
import React from 'react';

export default function App() {
  return (
        <View style={styles.container}>
          <Header />
          <StatusBar style="auto" />
          <CardUser />
          <CardUser />
          <CardUser />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7a7a7',
    alignItems: 'center'
  }
});
