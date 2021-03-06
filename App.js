import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Loginsreen from './components/login';
import Registerscreen from './components/register';
import Homescreen from "./components/home";
import * as firebase from 'firebase'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      headerMode={
        false
      }
       >
        <Stack.Screen name="Login" component={Loginsreen} />
        <Stack.Screen name="Signup" component={Registerscreen} />
        <Stack.Screen name="Home" component={Homescreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
