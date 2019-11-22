import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import './Component.css';
import { addCount } from './actions';

const Component = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(addCount());

  return (
    <div className="App">
      <h3>
        Count: {count}
      </h3>
    <button onClick={handleClick}>
      Increase count
    </button>
    </div>
  );
};

export default Component;
