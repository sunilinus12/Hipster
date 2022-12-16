import {
  Alert,
  Dimensions,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function CardItem({item, screen}) {
  const navigation = useNavigation();
  const hanldeLink = async url => {
    const validUrl = await Linking.canOpenURL(url);

    if (validUrl) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Link not supported');
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        navigation.navigate(screen);
      }}
      style={[
        styles.container,
        {height: 0.2 * Dimensions.get('screen').height},
      ]}>
      <Text style={styles.text}>API: {item.API}</Text>
      <Text style={styles.text} numberOfLines={1}>
        Description: {item.Description}
      </Text>
      <Text style={styles.text}>Auth: {item.Auth}</Text>
      <Text style={styles.text}>HTTPS: {item.HTTPS ? 'true' : 'false'}</Text>
      <Text style={styles.text}>Cors: {item.Cors}</Text>
      <Text
        style={[styles.text, {color: '#0A8CAA'}]}
        onPress={() => {
          hanldeLink(item.Link);
        }}
        numberOfLines={1}>
        Link: {item.Link}
      </Text>
      <Text style={styles.text}>Category: {item.Category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'whitesmoke',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
});
