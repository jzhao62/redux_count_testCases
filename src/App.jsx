import {useDispatch, useSelector} from "react-redux";
import {addCount, minusCount} from "./actions";
import React from 'react';
import Child from "./Child";

const App = ({value = 0}) => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleAdd = () => dispatch(addCount(value))
    const handleMinus = () => dispatch(minusCount(value));

    return (
        <div className="App">
            <h3>
                Counts: {count}
            </h3>
            <button onClick={handleAdd} data-testid="ADD_1">
                Increase count
            </button>

            <button onClick={handleMinus} data-testid="DECREASE_1">
                Decrease count
            </button>
            <Child value={100}/>
        </div>
    );
};


export default App