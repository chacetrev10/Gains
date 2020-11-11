// App.js
import React from 'react';
import Main from './app/Main';
import HomeScreen from "./app/Screens/HomeScreen";
import CreateLiftScreen from "./app/Screens/CreateLiftScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
      return (
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen
                      name="Home"
                      component={HomeScreen}
                  />
                  <Stack.Screen
                      name="Create Lift"
                      component={CreateLiftScreen}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      );
  }
}