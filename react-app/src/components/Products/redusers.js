import { Map, List } from 'immutable';

// Just ease ESLint rule
const map = Map;
const list = List;

const defaultState = map({
  orderNumberInp: 1,
  successModalDisplay: false,
  errorModalDisplay: false,
  scrollTop: 0,
  resize: null,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_ORDER_NUMBER_INP':
      return state.set('orderNumberInp', action.orderNumberInp);

    case 'CHANGE_SUCCESS_MODAL_DISPLAY':
      return state.set('successModalDisplay', action.successModalDisplay);

    case 'SET_ERROR_MODAL_DISPLAY':
      return state.set('errorModalDisplay', action.errorModalDisplay);

    case 'SET_SCROLL_TOP':
      return state.set('scrollTop', action.scrollTop);

    case 'SET_RESIZE':
      return state.set('resize', action.resize);

    default:
      return state;
  }
};