import { createStore } from 'redux';

// Action Types
const REGISTER_COLOR = 'register_color';
const RESET_HISTORY = 'reset_history';

// Actions
export const registerColor = (idx) => ({
  type: REGISTER_COLOR,
  payload: idx,
})

export const resetHistory = () => ({
  type: RESET_HISTORY
})

// Reducers
const reducer = (state = [], { type, payload }) => {
  switch(type) {
    case REGISTER_COLOR:
      return [...state, payload];
    case RESET_HISTORY:
      return [];
    default:
      return state;
  }
}


export const store = createStore(reducer);
