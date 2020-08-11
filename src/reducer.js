import {ADD_COUNT_TYPE, MINUS_COUNT_TYPE} from './actions';

const initialState = {
  count: 0,
};

export default(state = initialState, action) => {
  switch(action.type) {
    case ADD_COUNT_TYPE:
      return {...state, count: state.count + action.payload};
    case MINUS_COUNT_TYPE:
      return {...state, count : state.count-action.payload}

    default:
      return state;
  }
};