import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import FourthScreen from '../screens/FourthScreen';

export default function MyStack() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="first" component={FirstScreen} />
        <Stack.Screen name="second" component={SecondScreen} />
        <Stack.Screen name="third" component={ThirdScreen} />
        <Stack.Screen name="fourth" component={FourthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
