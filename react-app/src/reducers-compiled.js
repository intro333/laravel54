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

var api = exports.api = function api() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : map({
    categories: map(),
    products: map(),
    productsForCart: map(),
    ordersQuota: map(),
    currentOrder: map(),
    checkTimeQuota: null,
    dataOfPersonalAccount: map(),
    imagePath: false,
    componentWillReceivePropsChange: false,
    modalLoaderCartSentStatus: false,
    loaderStatus: false,
    successPageStatus: null,
    orders: map()

  });
  var action = arguments[1];

  switch (action.type) {

    case 'SET_CATEGORIES':
      return state.set('categories', action.categories);

    case 'SET_PRODUCTS':
      return state.set('products', action.products);

    case 'SET_PRODUCTS_FOR_CART':
      return state.set('productsForCart', action.productsForCart);

    case 'SET_ORDERS_QUOTA_FOR_CART':
      return state.set('ordersQuota', action.ordersQuota);

    case 'SET_CURRENT_ORDER':
      return state.set('currentOrder', action.currentOrder);

    case 'SET_CHECK_TIME_QUOTA_FOR_CART':
      return state.set('checkTimeQuota', action.checkTimeQuota);

    case 'SET_DATA_OF_PERSONAL_ACCOUNT':
      return state.set('dataOfPersonalAccount', action.dataOfPersonalAccount);

    case 'SET_USER_IMAGE':
      return state.set('imagePath', action.imagePath);

    case 'SET_ORDERS':
      return state.set('orders', action.orders);

    case 'SET_COMPONENT_WILL_RECEIVE_PROPS':
      return state.set('componentWillReceivePropsChange', action.componentWillReceivePropsChange);

    case 'SET_MODAL_LOADER_CART_SENT_STATUS':
      return state.set('modalLoaderCartSentStatus', action.modalLoaderCartSentStatus);

    case 'SET_LOADER_STATUS':
      return state.set('loaderStatus', action.loaderStatus);

    case 'SET_SUCCESS_PAGE_STATUS':
      return state.set('successPageStatus', action.successPageStatus);

    default:
      return state;
  }
};

var defaultSessionState = map({
  userInfo: map(),
  errors: '',
  mobNavElement: true,
  openCloseModal: {
    show: false,
    textHeader: '',
    textAlign: '',
    function: null
  },
  categoryId: null,
  categoryName: null,
  productCounts: 0,
  totalSum: 0
});

var session = function session() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSessionState;
  var action = arguments[1];

  switch (action.type) {

    case 'SET_USER_INFO':
      return state.set('userInfo', action.userInfo);

    case 'SET_ERRORS':
      return state.set('errors', action.errors);

    case 'SET_MOB_NAV_ELEMENT':
      return state.set('mobNavElement', action.mobNavElement);

    case 'SET_OPEN_CLOSE_MODAL':
      return state.set('openCloseModal', action.openCloseModal);

    case 'SET_CATEGORY_ID':
      return state.set('categoryId', action.categoryId);

    case 'SET_CATEGORY_NAME':
      return state.set('categoryName', action.categoryName);

    case 'SET_PRODUCT_COUNTS':
      return state.set('productCounts', action.productCounts);

    case 'SET_TOTAL_SUM':
      return state.set('totalSum', action.totalSum);

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