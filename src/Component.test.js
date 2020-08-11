import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Child from './Child';
import App from "./App";
import { addCount } from './actions';
import reducer from './reducer';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Component /> unit test', () => {
  const getWrapper = (mockStore) => mount(
    <Provider store={mockStore}>
      <App value = {1}/>
    </Provider>
  );

  it('should add to count and display the correct # of counts', () => {
    const mockStore =  createStore(reducer, { count: 0 })
    const wrapper = getWrapper(mockStore);
    console.log(wrapper.debug())
    wrapper.find(`button[data-testid="ADD_1"]`).simulate('click');
    console.log(mockStore.getState())
    wrapper.find(`button[data-testid="ADD"]`).simulate('click');
    console.log(mockStore.getState())

    // wrapper.find(`button[data-testid="DECREASE"]`).simulate('click');
    // console.log(mockStore.getState())
  });

  // it('should dispatch the correct action on button click', () => {
  //   const mockStore = createStore(reducer, { count: 0 });
  //   mockStore.dispatch = jest.fn();
  //   const wrapper = getWrapper(mockStore);
  //   wrapper.find(`button[data-testid="ADD"]`).simulate('click');
  //   expect(mockStore.dispatch).toHaveBeenCalledWith(addCount());
  //
  // });
});

