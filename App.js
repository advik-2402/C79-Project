import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './screens/SignUpScreen';
import { AppNavigator } from './components/appTabNavigator';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}

