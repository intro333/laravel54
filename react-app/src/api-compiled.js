'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logOut = exports.getUserToken = exports.fetch = exports.makeRequest = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _actions = require('./actions');

var modelActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeRequest = exports.makeRequest = function makeRequest(dispatcher, params, then, error) {
  (0, _axios2.default)(params).then(function (result) {
    if (then) then(result);
  }).catch(function (r) {
    if (error) error(r);
  });
};

var fetch = exports.fetch = function fetch(dispatcher, options, then, error) {
  makeRequest(dispatcher, options, function (r) {
    if (then) then(r.data);
  }, error);
};

var getUserToken = exports.getUserToken = function getUserToken(dispatcher) {
  var params = {
    method: 'post',
    url: '/api/getUserToken'
  };

  var then = function then(response) {
    dispatcher(modelActions.getUserToken(response.data));
  };

  var error = function error(_error) {
    console.log(_error);
  };

  makeRequest(dispatcher, params, then, error);
};

var logOut = exports.logOut = function logOut(token) {
  var params = {
    method: 'post',
    url: '/logout',
    data: token
  };

  var then = function then(response) {
    window.location.href = '/';
  };

  var error = function error(_error2) {
    console.log("error", _error2);
  };

  makeRequest('', params, then, error);
};

//# sourceMappingURL=api-compiled.js.map