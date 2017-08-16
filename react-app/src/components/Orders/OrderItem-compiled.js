'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../../theme/css/bootstrap-datepicker3.min.css');

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _api = require('../../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import * as modelActions from './actions';

var OrderItem = function (_Component) {
  _inherits(OrderItem, _Component);

  function OrderItem(props) {
    _classCallCheck(this, OrderItem);

    var _this = _possibleConstructorReturn(this, (OrderItem.__proto__ || Object.getPrototypeOf(OrderItem)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(OrderItem, [{
    key: 'render',
    value: function render() {
      var orderNumberInp = (0, _classnames2.default)({
        'order-number-inp': true
      });
      var inputVal = this.props.item.count === '' ? '' : parseInt(this.props.item.count);
      var cost = this.props.item.price * (inputVal === '' ? 1 : parseInt(this.props.item.count));

      // console.log('this.props.visible', this.props.visible)
      var trStyle = {
        display: this.props.visible
      };
      return _react2.default.createElement(
        'tr',
        { style: trStyle },
        _react2.default.createElement(
          'td',
          { className: 'table-40-procent-td' },
          _react2.default.createElement('img', { className: 'cart-product-image', src: this.props.item.imagePath }),
          _react2.default.createElement(
            'span',
            null,
            this.props.item.name
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.item.price,
          ' \u20BD / ',
          this.props.item.unit
        ),
        _react2.default.createElement(
          'td',
          { style: { textAlign: 'start' } },
          _react2.default.createElement(
            'div',
            { className: 'order-table__cell' },
            _react2.default.createElement(
              'div',
              { className: 'b-number' },
              _react2.default.createElement(
                'div',
                { className: 'order-number' },
                _react2.default.createElement(
                  'div',
                  { className: 'order-number__field' },
                  _react2.default.createElement('input', {
                    className: orderNumberInp,
                    type: 'number',
                    max: '99',
                    min: '0',
                    value: inputVal ? inputVal : ''
                  })
                ),
                _react2.default.createElement('div', {
                  className: 'order-number__spin minus'
                }),
                _react2.default.createElement('div', {
                  className: 'order-number__spin plus'
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          cost,
          ' \u20BD'
        ),
        _react2.default.createElement(
          'td',
          { style: { color: 'firebrick' } },
          _react2.default.createElement('span', {
            className: 'remove-product',
            'aria-hidden': 'true'
          })
        )
      );
    }
  }]);

  return OrderItem;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api,
    products: store.products
  };
})(OrderItem);

//# sourceMappingURL=OrderItem-compiled.js.map