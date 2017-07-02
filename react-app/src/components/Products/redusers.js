import { Map, List } from 'immutable';

// Just ease ESLint rule
const map = Map;
const list = List;

const defaultState = map({
  orderNumberInp: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_ORDER_NUMBER_INP':
      return state.set('orderNumberInp', action.orderNumberInp);

    default:
      return state;
  }
};