import {
  ActivityIndicator,
  StyleSheet,
  Text,
  SafeAreaView,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNetInfo} from '@react-native-community/netinfo';

export default function TryAgain({navigation}) {
  const netInfo = useNetInfo();
  const [loading, setLoading] = useState(false);

  const handleTryAgain = () => {
    setLoading(true);
    setTimeout(() => {
      if (netInfo?.isConnected) {
        setLoading(false);
        navigation.goBack();
      }
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.ind} size={'large'} color="red" />
      ) : (
        <Text style={styles.btn_title1}>No Internet Connection</Text>
      )}
      <Text
        onPress={() => {
          handleTryAgain();
        }}
        style={styles.btn_title}>
        Try Again
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '50%',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_title: {
    fontSize: 15,
    color: 'red',
    letterSpacing: 1,
  },
  btn_title1: {
    fontSize: 15,
    color: 'black',
    letterSpacing: 1,
    marginBottom: '5%',
  },
  ind: {marginBottom: '5%'},
});
