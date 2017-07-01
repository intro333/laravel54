'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../theme/css/index.css');

require('../../theme/css/adaptive.css');

require('../../theme/css/main.css');

var _reactRouterDom = require('react-router-dom');

var _Navigation = require('../Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('../Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Products = function (_Component) {
  _inherits(Products, _Component);

  function Products(props) {
    _classCallCheck(this, Products);

    return _possibleConstructorReturn(this, (Products.__proto__ || Object.getPrototypeOf(Products)).call(this, props));
  }

  _createClass(Products, [{
    key: 'render',
    value: function render() {

      var categoryItemImg = {
        padding: '0 20px 0 20px'
      };

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
              _reactRouterDom.Link,
              { to: '/categories' },
              _react2.default.createElement(
                'h3',
                { className: 'bread-crumbs-link' },
                '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B'
              )
            ),
            _react2.default.createElement('div', { className: 'bread-crumbs-circle' }),
            _react2.default.createElement(
              'h3',
              { className: 'bread-crumbs-on-page' },
              '\u041C\u044F\u0441\u043E \u0438 \u043A\u0443\u0440\u0438\u0446\u0430'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'category-all' },
            _react2.default.createElement(
              'div',
              { className: 'category-item' },
              _react2.default.createElement(
                'div',
                { className: 'category-item__img', style: categoryItemImg },
                _react2.default.createElement('img', { src: '/images/meatorchicken/beef.jpg', width: '190' }),
                _react2.default.createElement(
                  'div',
                  { className: 'category-item__name' },
                  ' \u0413\u043E\u0432\u044F\u0434\u0438\u043D\u0430'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'category-item__price-measure' },
                  _react2.default.createElement(
                    'span',
                    null,
                    '800 \u20BD / \u043A\u0433.'
                  ),
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
                          _react2.default.createElement('input', { type: 'number', max: '99', min: '0', value: '1', className: 'order-number-inp',
                            'data-product-id': '1' })
                        ),
                        _react2.default.createElement('div', { className: 'order-number__spin minus order-spin-minus' }),
                        _react2.default.createElement('div', { className: 'order-number__spin plus order-spin-plus' })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'add-to-cart-button' },
                  _react2.default.createElement(
                    'p',
                    null,
                    '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'category-item' },
              _react2.default.createElement(
                'div',
                { className: 'category-item__img', style: categoryItemImg },
                _react2.default.createElement('img', { src: '/images/meatorchicken/pork.jpg', width: '190' }),
                _react2.default.createElement(
                  'div',
                  { className: 'category-item__name' },
                  ' \u0421\u0432\u0438\u043D\u0438\u043D\u0430'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'category-item__price-measure' },
                  _react2.default.createElement(
                    'span',
                    null,
                    '650 \u20BD / \u043A\u0433.'
                  ),
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
                          _react2.default.createElement('input', { type: 'number', max: '99', min: '0', value: '1', className: 'order-number-inp',
                            'data-product-id': '2' })
                        ),
                        _react2.default.createElement('div', { className: 'order-number__spin minus order-spin-minus' }),
                        _react2.default.createElement('div', { className: 'order-number__spin plus order-spin-plus' })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'add-to-cart-button' },
                  _react2.default.createElement(
                    'p',
                    null,
                    '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'category-item' },
              _react2.default.createElement(
                'div',
                { className: 'category-item__img', style: categoryItemImg },
                _react2.default.createElement('img', { src: '/images/meatorchicken/veal.jpg', width: '190' }),
                _react2.default.createElement(
                  'div',
                  { className: 'category-item__name' },
                  ' \u0422\u0435\u043B\u044F\u0442\u0438\u043D\u0430'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'category-item__price-measure' },
                  _react2.default.createElement(
                    'span',
                    null,
                    '545 \u20BD / \u0448\u0442.'
                  ),
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
                          _react2.default.createElement('input', { type: 'number', max: '99', min: '0', value: '1', className: 'order-number-inp',
                            'data-product-id': '3' })
                        ),
                        _react2.default.createElement('div', { className: 'order-number__spin minus' }),
                        _react2.default.createElement('div', { className: 'order-number__spin plus' })
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'add-to-cart-button' },
                  _react2.default.createElement(
                    'p',
                    null,
                    '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Products;
}(_react.Component);

exports.default = Products;

//# sourceMappingURL=Products-compiled.js.map