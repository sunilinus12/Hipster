import {
  ActivityIndicator,
  Alert,
  Dimensions,
  FlatList,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoadingComponent from '../components/LoadingComponent';
import CardItem from '../components/CardItem';

export default function FourthScreen() {
  const [data, setData] = useState([]);
  const handleData = async () => {
    try {
      let res = await axios.get('https://api.publicapis.org/entries');
      if (res.status) {
        setData(res.data?.entries);
      }
    } catch (error) {}
  };
  useEffect(() => {
    handleData();
  }, []);

  if (data.length === 0) {
    return <LoadingComponent />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <CardItem screen={'third'} item={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});
