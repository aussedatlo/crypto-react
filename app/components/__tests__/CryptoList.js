import 'react-native';
import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect'

import { data } from '../../../config/jest/mockData';

// NOTE: test renderer must be required after react-native.
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import CryptoList from '../CryptoList';
import CryptoItem from '../CryptoItem';

it('render a CryptoList 1', function() {
  const wrapper = shallow(
    <CryptoList
        data={data}
    />
  );

  expect(wrapper.exists()).toBe(true);
  expect(wrapper.contains(
    <CryptoItem
      name={data[0].name}
      shortname={data[0].shortname}
      price={data[0].price}
    />
  ))
  expect(wrapper.contains(
    <CryptoItem
      name={data[1].name}
      shortname={data[1].shortname}
      price={data[1].price}
    />
  ))
  expect(wrapper.contains(
    <CryptoItem
      name={data[2].name}
      shortname={data[2].shortname}
      price={data[2].price}
    />
  ))
});

it('Test keyExtractor', () => {
  const wrapper = shallow(
    <CryptoList
        data={data}
    />
  );
  const key =
    wrapper.find('FlatList')
      .props()
      .keyExtractor({shortname: data[0].shortname});

  expect(key).toEqual(data[0].shortname)
});


it('Test renderItem', () => {
  const wrapper = shallow(
    <CryptoList
        data={data}
    />
  );
  const flatList = wrapper.find('FlatList');
  const item = flatList.renderProp('renderItem')({ item: data[0] });

  expect(item.equals(
    <CryptoItem
      name={data[0].name}
      shortname={data[0].shortname}
      price={data[0].price}
    />
  )).toBe(true);
});
