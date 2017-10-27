'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

// Just ease ESLint rule
var map = _immutable.Map;
var list = _immutable.List;

var defaultState = map({
  orderNumberInp: 1,
  successModalDisplay: false,
  errorModalDisplay: false,
  scrollTop: 0,
  resize: null
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

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

//# sourceMappingURL=redusers-compiled.js.map