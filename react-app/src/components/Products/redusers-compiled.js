'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

// Just ease ESLint rule
var map = _immutable.Map;
var list = _immutable.List;

var defaultState = map({
  orderNumberInp: 1
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE_ORDER_NUMBER_INP':
      return state.set('orderNumberInp', action.orderNumberInp);

    default:
      return state;
  }
};

//# sourceMappingURL=redusers-compiled.js.map