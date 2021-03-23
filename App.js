import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from './components/login';
import Home from './components/home';


export default class App extends React.Component {
  render() {
    return (//<AppContainer />,
      <Login/>
      );
  }
}

/*const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
});''*/

//const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});