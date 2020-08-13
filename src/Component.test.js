import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import {useComplex} from "./hook";
import * as redux from 'react-redux'
import App from "./App";
import * as actions from './actions';
import {useSelector, useDispatch} from "react-redux";

Enzyme.configure({ adapter: new EnzymeAdapter() });

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

const setup = ({ count }) => {
  const spy = jest.spyOn (redux, 'useSelector')
  spy.mockReturnValueOnce(count)
  // jest.spyOn(reducer, "count").mockReturnValue(count);
  jest.spyOn(actions, "addCount")
  jest.spyOn(actions, "minusCount")

};


describe("useReset", () => {
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });
  //
  // afterAll(() => {
  //   jest.restoreAllMocks();
  // });

  it("Success Case", () => {
    setup({count : 33});
    const x= useComplex(3, false);
    x();
    expect(actions.addCount).toHaveBeenCalledTimes(0);
    expect(actions.minusCount).toHaveBeenCalledTimes(0);

  });

  it("Failure Case", () => {
    setup({ totalCost: 0 });

    const resetFunc = useReset();
    resetFunc();

    expect(Actions.reset).toHaveBeenCalledTimes(0);
  });
});



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

    // wrapper.find(`button[data-testid="DECREASE"]`).simulate('click');
    // console.log(mockStore.getState())
  });


  it ('useComplex', ()=>{

  })




  // it('should dispatch the correct action on button click', () => {
  //   const mockStore = createStore(reducer, { count: 0 });
  //   mockStore.dispatch = jest.fn();
  //   const wrapper = getWrapper(mockStore);
  //   wrapper.find(`button[data-testid="ADD"]`).simulate('click');
  //   expect(mockStore.dispatch).toHaveBeenCalledWith(addCount());
  //
  // });
});

