import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import CryptoList from '../components/CryptoList'

const DATA = [
  {
      name: 'Bitcoin',
      shortname: 'BTC',
      price: '60000',
  },
  {
      name: 'Ethereum',
      shortname: 'ETH',
      price: '1720',
  },
  {
      name: 'Binance Coin',
      shortname: 'BNB',
      price: '280',
  },
  {
      name: 'Tether',
      shortname: 'USDT',
      price: '1',
  },
];

export default class App extends React.Component {

  refresh() {
    // console.log("refresing");
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.top}>
          <CryptoList data={DATA}/>
        </View>

        <View style={styles.bottom}>
          <Button
            id="btn-refresh"
            title="Refresh"
            style={styles.button}
            onPress={this.refresh}
            icon={
              <Icon
                name='refresh'
                type='ionicon'
                color='#ffffff'
              />
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'red'
  },
  bottom: {
    width: '50%',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  top: {
    flex: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
