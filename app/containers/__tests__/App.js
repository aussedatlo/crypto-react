import 'react-native';
import React from 'react';
import App from '../App.tsx';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect'

// NOTE: test renderer must be required after react-native.
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

it('render App', function() {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

it('click button refresh', function() {
  let refresh = jest.spyOn(App.prototype, "refresh");
  const wrapper = shallow(<App />);
  const button = wrapper.find('#btn-refresh');

  expect(button).toHaveLength(1);
  expect(refresh).not.toHaveBeenCalled();
  button.simulate("press");
  expect(refresh).toHaveBeenCalled();
});
