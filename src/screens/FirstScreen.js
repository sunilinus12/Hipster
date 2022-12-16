import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LoadingComponent from '../components/LoadingComponent';
import CardItem from '../components/CardItem';

export default function FirstScreen() {
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return <CardItem screen={'second'} item={item} />;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});
