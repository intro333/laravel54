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

var _api = require('../../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cart = function (_Component) {
  _inherits(Cart, _Component);

  function Cart(props) {
    _classCallCheck(this, Cart);

    return _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));
  }

  _createClass(Cart, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;

      (0, _api.showProductsInCart)(dispatch);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_Navigation2.default, null),
        _react2.default.createElement(_MenuMobile2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'main-container' },
          _react2.default.createElement(
            'h2',
            null,
            '\u041A\u043E\u0440\u0437\u0438\u043D\u0430'
          ),
          _react2.default.createElement(
            'table',
            { id: 'cart-products-table' },
            _react2.default.createElement(
              'tr',
              null,
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
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { className: 'table-40-procent-td' },
                _react2.default.createElement('img', { className: 'cart-product-image', src: '/storage/images/products/beef.jpg' }),
                _react2.default.createElement(
                  'span',
                  null,
                  '\u0413\u043E\u0432\u044F\u0434\u0438\u043D\u0430'
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                '800 \u20BD / \u043A\u0433.'
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
                        _react2.default.createElement('input', { type: 'number', max: '99', min: '0', value: '2', className: 'order-number-inp' })
                      ),
                      _react2.default.createElement('div', { className: 'order-number__spin minus' }),
                      _react2.default.createElement('div', { className: 'order-number__spin plus' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                '1600 \u20BD'
              ),
              _react2.default.createElement(
                'td',
                { style: { color: 'firebrick' } },
                _react2.default.createElement('span', { className: 'remove-product glyphicon glyphicon-trash', 'aria-hidden': 'true' })
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { className: 'table-40-procent-td' },
                _react2.default.createElement('img', { className: 'cart-product-image', src: '/storage/images/products/pork.jpg' }),
                _react2.default.createElement(
                  'span',
                  null,
                  '\u0421\u0432\u0438\u043D\u0438\u043D\u0430'
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                '650 \u20BD / \u043A\u0433.'
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
                        _react2.default.createElement('input', { type: 'number', max: '99', min: '0', value: '2', className: 'order-number-inp' })
                      ),
                      _react2.default.createElement('div', { className: 'order-number__spin minus' }),
                      _react2.default.createElement('div', { className: 'order-number__spin plus' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                '1300 \u20BD'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement('span', { className: 'remove-product glyphicon glyphicon-trash', 'aria-hidden': 'true' })
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { className: 'table-40-procent-td' },
                _react2.default.createElement('img', { className: 'cart-product-image', src: '/storage/images/products/veal.jpg' }),
                _react2.default.createElement(
                  'span',
                  null,
                  '\u0422\u0435\u043B\u044F\u0442\u0438\u043D\u0430'
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                '545 \u20BD / \u0448\u0442.'
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
                        _react2.default.createElement('input', { type: 'number', max: '99', min: '0', value: '3', className: 'order-number-inp' })
                      ),
                      _react2.default.createElement('div', { className: 'order-number__spin minus' }),
                      _react2.default.createElement('div', { className: 'order-number__spin plus' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'td',
                null,
                '1635 \u20BD'
              ),
              _react2.default.createElement(
                'td',
                { style: { color: 'firebrick' } },
                _react2.default.createElement('span', { className: 'remove-product glyphicon glyphicon-trash', 'aria-hidden': 'true' })
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'cart-order__total' },
            '\u0418\u0442\u043E\u0433:\xA0',
            _react2.default.createElement(
              'span',
              null,
              '4535'
            )
          )
        )
      );
    }
  }]);

  return Cart;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(Cart);

//# sourceMappingURL=Cart-compiled.js.map