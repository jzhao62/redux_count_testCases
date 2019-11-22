import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Component from './Component';
import { addCount } from './actions';
import reducer from './reducer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Component /> unit test', () => {
  const getWrapper = (mockStore = createStore(reducer, { count: 0 })) => mount(
    <Provider store={mockStore}>
      <Component/>
    </Provider>
  );

  it('should add to count and display the correct # of counts', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('h3').text()).toEqual('Count: 0');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('h3').text()).toEqual('Count: 1');
  });

  it('should dispatch the correct action on button click', () => {
    const mockStore = createStore(reducer, { count: 0 });
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    wrapper.find('button').simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(addCount());
  });
});
