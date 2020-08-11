import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './Component.css';
import { addCount, minusCount } from './actions';

const Component = ({value = 2}) => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(minusCount(11))
    dispatch(addCount(value));
  }
  const handleMinus = () => dispatch(minusCount(value));

  return (
    <div className="App">
      <h3>
        Count: {count}
      </h3>
    <button onClick={handleAdd} data-testid="ADD">
      Increase count
    </button>

      {/*<button onClick={handleMinus} data-testid="DECREASE">*/}
      {/*  Decrease count*/}
      {/*</button>*/}
    </div>
  );
};

export default Component;
