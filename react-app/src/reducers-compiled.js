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
    categories: map(),
    products: map(),
    productsForCart: map(),
    dataOfPersonalAccount: map(),
    imagePath: false

  });
  var action = arguments[1];

  switch (action.type) {

    case 'SET_CATEGORIES':
      return state.set('categories', action.categories);

    case 'SET_PRODUCTS':
      return state.set('products', action.products);

    case 'SET_PRODUCTS_FOR_CART':
      return state.set('productsForCart', action.productsForCart);

    case 'SET_DATA_OF_PERSONAL_ACCOUNT':
      return state.set('dataOfPersonalAccount', action.dataOfPersonalAccount);

    case 'SET_USER_IMAGE':
      return state.set('imagePath', action.imagePath);

    default:
      return state;
  }
};

var defaultSessionState = map({
  userInfo: map(),
  mobNavElement: true,
  categoryId: null,
  categoryName: null,
  productCounts: 0
});

var session = function session() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSessionState;
  var action = arguments[1];

  switch (action.type) {

    case 'SET_USER_INFO':
      return state.set('userInfo', action.userInfo);

    case 'SET_MOB_NAV_ELEMENT':
      return state.set('mobNavElement', action.mobNavElement);

    case 'SET_CATEGORY_ID':
      return state.set('categoryId', action.categoryId);

    case 'SET_CATEGORY_NAME':
      return state.set('categoryName', action.categoryName);

    case 'SET_PRODUCT_COUNTS':
      return state.set('productCounts', action.productCounts);

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