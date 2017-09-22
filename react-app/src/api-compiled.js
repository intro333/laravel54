'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatOrChangeOrder = exports.cancelOrDeleteOrder = exports.ordersGetAll = exports.changePhotoPersonalData = exports.updatePersonalData = exports.setUserInfo = exports.checkTimeQuota = exports.showCurrentOrder = exports.showOrdersQuotaInCart = exports.clearCart = exports.sendOrder = exports.deleteProductFromCart = exports.showProductsInCart = exports.addProductToCart = exports.getProductCounts = exports.setProducts = exports.setCategories = exports.logOut = exports.fetch = exports.makeRequest = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _actions = require('./actions');

var modelActions = _interopRequireWildcard(_actions);

var _actions2 = require('./components/Products/actions');

var _helpers = require('./helpers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeRequest = exports.makeRequest = function makeRequest(dispatcher, params, then, error) {
  (0, _axios2.default)(params).then(function (result) {
    if (then) then(result);
  }).catch(function (r) {
    if (error) error(r);
  });
};

//Пример с параметрами
var fetch = exports.fetch = function fetch(dispatcher, options, then, error) {
  makeRequest(dispatcher, options, function (r) {
    if (then) then(r.data);
  }, error);
};

//Выход, разлогиниться.
var logOut = exports.logOut = function logOut(token) {
  var params = {
    method: 'post',
    url: '/logout',
    data: token
  };

  var then = function then(response) {
    window.location.href = '/';
  };

  var error = function error(_error) {
    console.log("error", _error);
  };

  makeRequest('', params, then, error);
};

//Получить все категории.
var setCategories = exports.setCategories = function setCategories(dispatcher) {
  var params = {
    method: 'post',
    url: '/api/get-categories'
  };

  var then = function then(response) {
    dispatcher(modelActions.setCategories(response.data));
  };

  var error = function error(_error2) {
    console.log(_error2);
  };

  makeRequest(dispatcher, params, then, error);
};

//Получить продукты нужной категории.
var setProducts = exports.setProducts = function setProducts(dispatcher, productId) {
  var params = {
    method: 'post',
    url: '/api/get-products/' + productId
  };

  var then = function then(response) {
    dispatcher(modelActions.setProducts(response.data));
  };

  var error = function error(_error3) {
    console.log(_error3);
  };

  makeRequest(dispatcher, params, then, error);
};

//Получить количество товаров, которые уже в заказе.
var getProductCounts = exports.getProductCounts = function getProductCounts(dispatcher) {
  var params = {
    method: 'post',
    url: '/api/get-product-counts'
  };

  var then = function then(response) {
    dispatcher(modelActions.setProductCounts(response.data));
  };

  var error = function error(_error4) {
    console.log(_error4);
  };

  makeRequest(dispatcher, params, then, error);
};

//Добавить товар в корзину.
var addProductToCart = exports.addProductToCart = function addProductToCart(dispatcher, data) {
  var params = {
    method: 'post',
    url: '/api/add-product-to-cart',
    data: data
  };

  var then = function then(response) {
    dispatcher(modelActions.setProductsForCart(response.data));
  };

  var error = function error(_error5) {
    console.log(_error5);
  };

  makeRequest(dispatcher, params, then, error);
};

//Показать товар в корзине.
var showProductsInCart = exports.showProductsInCart = function showProductsInCart(dispatcher) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var params = {
    method: 'post',
    url: '/api/get-products-in-cart',
    data: data
  };

  var then = function then(response) {
    dispatcher(modelActions.setProductsForCart(response.data));
  };

  var error = function error(_error6) {
    console.log(_error6);
  };

  makeRequest(dispatcher, params, then, error);
};

//Удалить товар из корзины.
var deleteProductFromCart = exports.deleteProductFromCart = function deleteProductFromCart(dispatcher, data) {
  var params = {
    method: 'post',
    url: '/api/delete-product-from-cart',
    data: data
  };

  var then = function then(response) {
    dispatcher(modelActions.setProductsForCart(response.data));
  };

  var error = function error(_error7) {
    console.log(_error7);
  };

  makeRequest(dispatcher, params, then, error);
};

//Отправить заказ.
var sendOrder = exports.sendOrder = function sendOrder(dispatcher, data, history) {
  var params = {
    method: 'post',
    url: '/api/send-order',
    data: data
  };

  var then = function then(response) {
    if (response.data.successTime) {
      setTimeout(function () {
        dispatcher(modelActions.setSuccessPageStatus('success'));
      }, 5000);
      // setTimeout(function(){ dispatcher(modelActions.setModalLoaderCartSentStatus(false)); }, 5000);
    } else if (response.data.errorTime) {
      dispatcher(modelActions.setErrors(response.data));
      showOrdersQuotaInCart(dispatcher);
    }
  };

  var error = function error(_error8) {
    console.log(_error8);
    setTimeout(function () {
      dispatcher(modelActions.setSuccessPageStatus('error'));
    }, 5000);
    setTimeout(function () {
      dispatcher(modelActions.setModalLoaderCartSentStatus(false));
    }, 5000);
  };

  makeRequest(dispatcher, params, then, error);
};

//Очистить корзину.
var clearCart = exports.clearCart = function clearCart(dispatcher, history) {
  var params = {
    method: 'post',
    url: '/api/clear-cart'
  };

  var then = function then(response) {
    if (response.status === 200) {
      history.push('/');
    }
  };

  var error = function error(_error9) {
    console.log(_error9);
  };

  makeRequest(dispatcher, params, then, error);
};

//Показать квоты в корзине.
var showOrdersQuotaInCart = exports.showOrdersQuotaInCart = function showOrdersQuotaInCart(dispatcher) {
  var params = {
    method: 'post',
    url: '/api/get-orders-quota-in-cart'
  };

  var then = function then(response) {
    dispatcher(modelActions.setOrdersQuotaForCart(response.data));
  };

  var error = function error(_error10) {
    console.log(_error10);
  };

  makeRequest(dispatcher, params, then, error);
};

//Показать текущий заказ(со статусом 1 или 4).
var showCurrentOrder = exports.showCurrentOrder = function showCurrentOrder(dispatcher) {
  var params = {
    method: 'post',
    url: '/api/get-order-current'
  };

  var then = function then(response) {
    if (response.status === 200) {
      dispatcher(modelActions.setCurrentOrder(response.data));
    }
  };

  var error = function error(_error11) {
    console.log(_error11);
  };

  makeRequest(dispatcher, params, then, error);
};

//Прочекать квоты в корзине на наличие 0.
var checkTimeQuota = exports.checkTimeQuota = function checkTimeQuota(dispatcher, data) {
  var params = {
    method: 'post',
    url: '/api/check-time-quota-in-cart',
    data: data
  };

  var then = function then(response) {
    dispatcher(modelActions.setCheckTimeQuotaForCart(response.data));
  };

  var error = function error(_error12) {
    console.log(_error12);
  };

  makeRequest(dispatcher, params, then, error);
};

//Получить данные для личного кабинета
var setUserInfo = exports.setUserInfo = function setUserInfo(dispatcher) {
  var params = {
    method: 'post',
    url: '/api/getUserInfo'
  };

  var then = function then(response) {
    dispatcher(modelActions.setUserInfo(response.data));
  };

  var error = function error(_error13) {
    console.log(_error13);
  };

  makeRequest(dispatcher, params, then, error);
};

//Сохранить данные личного кабинета
var updatePersonalData = exports.updatePersonalData = function updatePersonalData(dispatcher, data) {
  var params = {
    method: 'post',
    url: '/api/update-data-of-personal-account',
    data: data
  };

  var then = function then(response) {
    if (response.status === 200) {
      dispatcher((0, _actions2.changeSuccessModalDisplay)(true));
      dispatcher(modelActions.setUserInfo(response.data));
      setTimeout(function () {
        dispatcher((0, _actions2.changeSuccessModalDisplay)(false));
      }, 2000);
    }
  };

  var error = function error(_error14) {
    console.log(_error14);
  };

  makeRequest(dispatcher, params, then, error);
};

//Изменить фото в личном аккаунте
var changePhotoPersonalData = exports.changePhotoPersonalData = function changePhotoPersonalData(dispatcher, data) {
  console.log("dataOfFile", data);
  var form = new FormData();
  form.append('image', data['image']);
  // form.append('name', name);
  var params = {
    method: 'post',
    url: '/api/change-photo-in-personal-account',
    data: form
  };

  var then = function then(response) {
    console.log('image data', response.data);
    dispatcher(modelActions.setUserImage(response.data));
  };

  var error = function error(_error15) {
    console.log(_error15);
  };

  makeRequest(dispatcher, params, then, error);
};

//Получить все заказы пользователя
var ordersGetAll = exports.ordersGetAll = function ordersGetAll(dispatcher, data) {
  var params = {
    method: 'post',
    url: '/api/orders-get-all',
    data: data
  };

  var then = function then(response) {
    dispatcher(modelActions.setOrders(response.data));
    // console.log('ordersGetAll response.data', response.data);
  };

  var error = function error(_error16) {
    console.log(_error16);
  };

  makeRequest(dispatcher, params, then, error);
};

//Отменить или удалить заказ
var cancelOrDeleteOrder = exports.cancelOrDeleteOrder = function cancelOrDeleteOrder(dispatcher, data, history) {
  var params = {
    method: 'post',
    url: '/api/order-cancel-or-delete',
    data: data
  };

  var then = function then(response) {
    // history.push('/orders');
    if (response.data === 1) dispatcher(modelActions.componentWillReceivePropsChange(true));
    // console.log('ordersGetAll response.data', response.data);
  };

  var error = function error(_error17) {
    console.log(_error17);
  };

  makeRequest(dispatcher, params, then, error);
};

//Повторить заказ
var repeatOrChangeOrder = exports.repeatOrChangeOrder = function repeatOrChangeOrder(dispatcher, data, history) {
  var params = {
    method: 'post',
    url: '/api/order-repeat-or-change',
    data: data
  };

  var then = function then(response) {
    if (response.status === 200) {
      dispatcher(modelActions.setProductsForCart(response.data));
      history.push('/cart');
    }
  };

  var error = function error(_error18) {
    console.log(_error18);
  };

  makeRequest(dispatcher, params, then, error);
};

//# sourceMappingURL=api-compiled.js.map