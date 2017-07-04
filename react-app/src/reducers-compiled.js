'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = undefined;

var _redux = require('redux');

var _immutable = require('immutable');

var _redusers = require('./components/Products/redusers');

var _redusers2 = _interopRequireDefault(_redusers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Just ease ESLint rule
var map = _immutable.Map; /* global NODE_ENV */

var orderedMap = _immutable.OrderedMap;
var list = _immutable.List;

var api = exports.api = function api() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : map({
    userToken: null,
    categories: map(),
    products: map(),
    productsForCart: map()

  });
  var action = arguments[1];

  switch (action.type) {
    case 'SET_USER_TOKEN':
      return state.set('userToken', action.userToken);

    case 'SET_CATEGORIES':
      return state.set('categories', action.categories);

    case 'SET_PRODUCTS':
      return state.set('products', action.products);

    case 'SET_PRODUCTS_FOR_CART':
      return state.set('productsForCart', action.productsForCart);

    default:
      return state;
  }
};

var defaultSessionState = map({
  mobNavElement: true,
  categoryId: null,
  categoryName: null
});

var session = function session() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSessionState;
  var action = arguments[1];

  switch (action.type) {
    case 'SET_MOB_NAV_ELEMENT':
      return state.set('mobNavElement', action.mobNavElement);

    case 'SET_CATEGORY_ID':
      return state.set('categoryId', action.categoryId);

    case 'SET_CATEGORY_NAME':
      return state.set('categoryName', action.categoryName);

    default:
      return state;
  }
};

exports.default = (0, _redux.combineReducers)({
  api: api,
  session: session,
  products: _redusers2.default
});

//# sourceMappingURL=reducers-compiled.js.map