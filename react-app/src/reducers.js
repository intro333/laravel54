/* global NODE_ENV */

import { combineReducers } from 'redux';
import { List, Map, OrderedMap } from 'immutable';

// Just ease ESLint rule
const map = Map;
const orderedMap = OrderedMap;
const list = List;

export const api = (state = map({
  userToken: null,

}), action) => {
  switch (action.type) {
    case 'GET_USER_TOKEN':
      return state.set('userToken', action.userToken);

    default:
      return state;
  }
};

let defaultSessionState = map({
  mobNavElement: true,
});

const session = (state = defaultSessionState, action) => {
  switch (action.type) {
    case 'SET_MOB_NAV_ELEMENT':
      return state.set('mobNavElement', action.mobNavElement);

    default:
      return state;
  }
};

export default combineReducers({
  api,
  session,
});
