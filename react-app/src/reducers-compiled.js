'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = undefined;

var _redux = require('redux');

var _immutable = require('immutable');

// Just ease ESLint rule
/* global NODE_ENV */

var map = _immutable.Map;
var orderedMap = _immutable.OrderedMap;
var list = _immutable.List;

var api = exports.api = function api() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : map({
    userToken: null,
    categories: map()

  });
  var action = arguments[1];

  switch (action.type) {
    case 'SET_USER_TOKEN':
      return state.set('userToken', action.userToken);

    case 'SET_CATEGORIES':
      return state.set('categories', action.categories);

    default:
      return state;
  }
};

var defaultSessionState = map({
  mobNavElement: true
});

var session = function session() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSessionState;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_MOB_NAV_ELEMENT':
      return state.set('mobNavElement', action.mobNavElement);

    default:
      return state;
  }
};

exports.default = (0, _redux.combineReducers)({
  api: api,
  session: session
});

//# sourceMappingURL=reducers-compiled.js.map