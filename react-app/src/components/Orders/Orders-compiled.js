'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('../../theme/css/index.css');

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _reactRouterDom = require('react-router-dom');

var _Navigation = require('../Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('../Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

var _OrderItem = require('../Orders/OrderItem');

var _OrderItem2 = _interopRequireDefault(_OrderItem);

var _api = require('../../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Orders = function (_Component) {
  _inherits(Orders, _Component);

  function Orders(props) {
    _classCallCheck(this, Orders);

    return _possibleConstructorReturn(this, (Orders.__proto__ || Object.getPrototypeOf(Orders)).call(this, props));
  }

  _createClass(Orders, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;

      (0, _api.ordersGetAll)(dispatch);
    }
  }, {
    key: 'render',
    value: function render() {
      var api = this.props.api;

      var orders = api.get('orders');
      console.log(orders.size);
      var tables = null;
      if (orders.size !== 0) {
        tables = orders.map(function (item, index) {
          return _react2.default.createElement(_OrderItem2.default, {
            key: index,
            item: item
          });
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_Navigation2.default, null),
        _react2.default.createElement(_MenuMobile2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'main-container' },
          _react2.default.createElement(
            'div',
            { className: 'category-head' },
            _react2.default.createElement(
              'h3',
              { className: 'bread-crumbs-on-page' },
              '\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'orders-all' },
            _react2.default.createElement(
              'div',
              { className: 'orders-item' },
              tables
            )
          )
        )
      );
    }
  }]);

  return Orders;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(Orders);

//# sourceMappingURL=Orders-compiled.js.map