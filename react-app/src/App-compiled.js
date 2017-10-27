'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./theme/css/index.css');

var _reactRouterDom = require('react-router-dom');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Categories = require('./components/Categories/Categories');

var _Categories2 = _interopRequireDefault(_Categories);

var _Products = require('./components/Products/Products');

var _Products2 = _interopRequireDefault(_Products);

var _Cart = require('./components/Cart/Cart');

var _Cart2 = _interopRequireDefault(_Cart);

var _SuccessPage = require('./components/Cart/SuccessPage');

var _SuccessPage2 = _interopRequireDefault(_SuccessPage);

var _PersonalAccount = require('./components/PersonalAccount/PersonalAccount');

var _PersonalAccount2 = _interopRequireDefault(_PersonalAccount);

var _Orders = require('./components/Orders/Orders');

var _Orders2 = _interopRequireDefault(_Orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        { history: _createBrowserHistory2.default },
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/categories', component: _Categories2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/products', component: _Products2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/cart', component: _Cart2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/sussess-page', component: _SuccessPage2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/personal-account', component: _PersonalAccount2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/orders', component: _Orders2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

//# sourceMappingURL=App-compiled.js.map