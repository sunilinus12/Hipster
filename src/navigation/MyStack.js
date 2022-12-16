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
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 15,
            color: 'black',
            fontFamily: 'Roboto',
          },
        }}>
        <Stack.Screen
          name="first"
          options={{title: 'First Screen'}}
          component={FirstScreen}
        />
        <Stack.Screen
          name="second"
          options={{title: 'Second Screen'}}
          component={SecondScreen}
        />
        <Stack.Screen
          name="third"
          options={{title: 'Third Screen'}}
          component={ThirdScreen}
        />
        <Stack.Screen
          name="fourth"
          options={{title: 'Fourth Screen'}}
          component={FourthScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
