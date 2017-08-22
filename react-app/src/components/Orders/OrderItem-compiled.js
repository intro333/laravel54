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

    _this.state = {
      orderNum: false,
      tdBotyVisible: false
    };
    return _this;
  }

  _createClass(OrderItem, [{
    key: 'handleClickOrder',
    value: function handleClickOrder() {
      var orderNum = this.state.orderNum;
      var isVisible = this.state.tdBotyVisible;

      this.setState({
        orderNum: !orderNum,
        tdBotyVisible: !isVisible
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.item;

      var orderNumberInp = (0, _classnames2.default)({
        'order-number-inp': true
      });
      var totalStyle = {
        margin: '10px'
      };

      var productsTr = items.map(function (item, index) {
        if (index !== 0) {
          return _react2.default.createElement(
            'tr',
            { key: index },
            _react2.default.createElement(
              'td',
              { className: 'table-40-procent-td' },
              _react2.default.createElement('img', { className: 'cart-product-image', src: item.image_path }),
              _react2.default.createElement(
                'span',
                null,
                item.name
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              item.price,
              ' \u20BD / ',
              item.unit
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
                    { className: 'order-number', style: { width: '70px' } },
                    _react2.default.createElement(
                      'div',
                      { className: 'order-number__field' },
                      _react2.default.createElement('input', {
                        className: orderNumberInp,
                        type: 'number',
                        max: '99',
                        min: '0',
                        value: item.counts
                      })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'td',
              null,
              item.cost,
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
        } else {
          return _react2.default.createElement(
            'tr',
            { key: index },
            _react2.default.createElement(
              'td',
              { className: 'table-40-procent-td order-td-first' },
              '\u0417\u0430\u043A\u0430\u0437 \u2116 ST-',
              _this2.props.orderId,
              ' \u043E\u0442 ',
              _this2.props.orderDate
            ),
            _react2.default.createElement('td', null),
            _react2.default.createElement('td', null),
            _react2.default.createElement('td', null),
            _react2.default.createElement('td', null)
          );
        }
      });

      var headTd = null;
      var thStyle = {
        textAlign: 'left',
        width: '100%',
        letterSpacing: '0.05em',
        fontWeight: '400 !important'
      };

      // console.log('order number', this.props)

      if (!this.state.orderNum) {
        headTd = _react2.default.createElement(
          'tr',
          { className: 'order-tr-head', onClick: this.handleClickOrder.bind(this) },
          _react2.default.createElement(
            'th',
            { className: 'order-th-head' },
            '\u0417\u0430\u043A\u0430\u0437 \u2116 ST-',
            this.props.orderId,
            ' \u043E\u0442 ',
            this.props.orderDate
          ),
          _react2.default.createElement('th', { className: 'table-25-procent' }),
          _react2.default.createElement('th', { className: 'table-25-procent' }),
          _react2.default.createElement('th', { className: 'table-10-procent' }),
          _react2.default.createElement('th', { className: 'table-10-procent' })
        );
      } else {
        headTd = _react2.default.createElement(
          'tr',
          { className: 'order-tr-head', onClick: this.handleClickOrder.bind(this) },
          _react2.default.createElement(
            'th',
            { className: 'table-30-procent' },
            '\u041F\u0440\u043E\u0434\u0443\u043A\u0442'
          ),
          _react2.default.createElement(
            'th',
            { className: 'table-25-procent' },
            '\u0426\u0435\u043D\u0430'
          ),
          _react2.default.createElement(
            'th',
            { className: 'table-25-procent' },
            '\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E'
          ),
          _react2.default.createElement(
            'th',
            { className: 'table-10-procent' },
            '\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C'
          ),
          _react2.default.createElement('th', { className: 'table-10-procent' })
        );
      }

      var itemsForTotal = items.filter(function (number, index) {
        return index !== 0;
      });
      var total = itemsForTotal.reduce(function (total, item) {
        return total + item.cost;
      }, 0);

      return _react2.default.createElement(
        'div',
        { className: 'orders-item' },
        _react2.default.createElement(
          'table',
          { className: 'cart-products-table margin-off' },
          headTd,
          this.state.tdBotyVisible && productsTr
        ),
        this.state.tdBotyVisible && _react2.default.createElement(
          'div',
          { className: 'cart-order__total', style: totalStyle },
          '\u0418\u0442\u043E\u0433:\xA0',
          _react2.default.createElement(
            'span',
            null,
            total,
            ' \u20BD'
          )
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