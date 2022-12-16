import {View, Text} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import MyStack from './src/navigation/MyStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
