
import {ADD_COUNT_TYPE, MINUS_COUNT_TYPE} from "./actionTypes";


  export const addCount = (payload) => ({
    type: ADD_COUNT_TYPE,
    payload
  });
  export const minusCount = (payload) => ({
    type: MINUS_COUNT_TYPE,
    payload
  })

