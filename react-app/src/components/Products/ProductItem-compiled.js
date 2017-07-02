'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

require('../../theme/css/bootstrap-datepicker3.min.css');

require('../../theme/css/adaptive.css');

require('../../theme/css/main.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductItem = function (_Component) {
  _inherits(ProductItem, _Component);

  function ProductItem(props) {
    _classCallCheck(this, ProductItem);

    return _possibleConstructorReturn(this, (ProductItem.__proto__ || Object.getPrototypeOf(ProductItem)).call(this, props));
  }

  _createClass(ProductItem, [{
    key: 'render',
    value: function render() {

      var categoryItemImg = {
        padding: '0 20px 0 20px'
      };

      return _react2.default.createElement(
        'div',
        { className: 'category-item' },
        _react2.default.createElement(
          'div',
          { className: 'category-item__img', style: categoryItemImg },
          _react2.default.createElement('img', { src: this.props.imgSrc, width: '190' }),
          _react2.default.createElement(
            'div',
            { className: 'category-item__name' },
            ' ',
            this.props.itemName
          ),
          _react2.default.createElement(
            'div',
            { className: 'category-item__price-measure' },
            _react2.default.createElement(
              'span',
              null,
              this.props.price,
              ' \u20BD / \u043A\u0433.'
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
                    _react2.default.createElement('input', { type: 'number', max: '99', min: '0', value: '1', className: 'order-number-inp' })
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
      );
    }
  }]);

  return ProductItem;
}(_react.Component);

exports.default = ProductItem;

//# sourceMappingURL=ProductItem-compiled.js.map