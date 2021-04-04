import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  } from 'react-native-navigation';

import Loginscreen from './components/login';
import Registerscreen from './components/register';


export default class App extends React.Component {
  render() {
    return (//<AppContainer />,
      <Loginscreen/>
      );
  }
}
//hello


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});