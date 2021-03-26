import 'react-native';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect'

import { data } from '../../../config/jest/mockData';

// NOTE: test renderer must be required after react-native.
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import CryptoItem, { styles } from '../CryptoItem';
import { View, Text } from 'react-native'

it('render a CryptoItem 1', function() {
const { name, shortname, price } = data[0];
  const wrapper = shallow(
    <CryptoItem
        name={name}
        shortname={shortname}
        price={price}
    />
  );

  expect(wrapper.exists()).toBe(true);

  expect(wrapper.contains(
    <View style={styles.item}>
      <Text style={styles.name}>
        BTC
      </Text>
      <Text style={styles.shortname}>
        Bitcoin
      </Text>
      <Text style={styles.price}>
        60000
      </Text>
    </View>
  ))
});

it('render a CryptoItem 2', function() {
  const { name, shortname, price } = data[1];
    const wrapper = shallow(
      <CryptoItem
          name={name}
          shortname={shortname}
          price={price}
      />
    );

    expect(wrapper.exists()).toBe(true);

    expect(wrapper.contains(
      <View style={styles.item}>
        <Text style={styles.name}>
          ETH
        </Text>
        <Text style={styles.shortname}>
          Ethereum
        </Text>
        <Text style={styles.price}>
          1720
        </Text>
      </View>
    ))
  });
