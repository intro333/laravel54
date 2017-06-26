'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '\u0417\u0434\u0435\u0441\u044C \u0431\u0443\u0434\u0435\u0442 \u043F\u0430\u043D\u0435\u043B\u044C \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438!'
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/categories' },
      '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/products' },
      '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B'
    )
  );
}

//# sourceMappingURL=Home-compiled.js.map