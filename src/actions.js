export const ADD_COUNT_TYPE = 'ADD_COUNT_TYPE';
export const MINUS_COUNT_TYPE = 'MINUS_COUNT_TYPE'
export const addCount = (payload) => ({
  type: ADD_COUNT_TYPE,
  payload
});
export const minusCount = (payload) => ({
  type: MINUS_COUNT_TYPE,
  payload
})