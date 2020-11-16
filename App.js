// App.js
import React from 'react';
import Main from './app/Main';
import HomeScreen from "./app/Screens/HomeScreen";
import CreateLiftScreen from "./app/Screens/CreateLiftScreen";
import EditLiftScreen from "./app/Screens/EditLiftScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import LiftListScreen from "./app/Screens/LiftListScreen";
import LiftCard from "./app/Factory/LiftCard";

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
              <Stack.Screen
                  name="Lift List"
                  component={LiftListScreen}
              />
                  <Stack.Screen
                      name="Lift Card"
                      component={LiftCard}
                  />
                  <Stack.Screen
                      name="Edit Lift"
                      component={EditLiftScreen}
                  />
          </Stack.Navigator>
          </NavigationContainer>
      );
  }
}