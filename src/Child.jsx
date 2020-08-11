import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './Component.css';
import { addCount, minusCount } from './actions';

const Child = ({value = 2}) => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(addCount(value))
  const handleMinus = () => dispatch(minusCount(value));

  return (
    <div className="App">
      <h3>
        Counts in childrenView: {count}
      </h3>
    <button onClick={handleAdd} data-testid="ADD_2">
      Increase
    </button>
      <button onClick={handleMinus} data-testid="DECREASE_2">
        Decrease
      </button>
    </div>
  );
};

export default Child;
