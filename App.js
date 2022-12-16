import React from 'react';
import 'react-native-gesture-handler';
import MyStack from './src/navigation/MyStack';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
