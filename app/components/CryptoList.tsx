import React from 'react';
import { StyleSheet, FlatList, StatusBar, SafeAreaView } from 'react-native';
import CryptoItem from './CryptoItem';

const CryptoList = ({data}: {data:any}) => {
  const renderItem = ({ item }: {item: any}) => (
    <CryptoItem name={item.name} price={item.price} shortname={item.shortname}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.shortname}
      />
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: '99%',
  },
});

export default CryptoList;
