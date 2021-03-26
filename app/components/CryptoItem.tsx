import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CryptoItem = ({ name, shortname, price }:
    { name: any, shortname: any; price: any}) => (
  <View style={styles.item}>
    <Text style={styles.shortname}>{shortname}</Text>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 1,
    marginHorizontal: 1,
  },
  shortname: {
    flex: 1,
  },
  name: {
    flex: 8,
  },
  price: {
    flex: 1,
    alignItems: 'stretch',
    textAlign: 'right'
  },
});

export default CryptoItem;
