import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import FourthScreen from '../screens/FourthScreen';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {Alert} from 'react-native';
import TryAgain from '../screens/TryAgain';

export default function MyStack() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  const netInfo = useNetInfo();
  const handleNetwork = () => {
    if (netInfo.isConnected !== null) {
      if (!netInfo.isConnected) {
        Alert.alert(
          'no internet connection',
          'check your mobile data or wifi is connected or not.',
          [
            {
              text: 'Dismiss',
              onPress: () => {
                navigation.navigate('tryagain');
              },
            },
          ],
        );
      }
    }
  };
  useEffect(() => {
    handleNetwork();
  }, [netInfo?.isConnected]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 15,
          color: 'black',
          fontFamily: 'Roboto',
        },
        
      }}
      initialRouteName={'first'}>
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
      <Stack.Screen
        name="tryagain"
        options={{headerShown: false}}
        component={TryAgain}
      />
    </Stack.Navigator>
  );
}
