'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuccessModal = function (_Component) {
  _inherits(SuccessModal, _Component);

  function SuccessModal(props) {
    _classCallCheck(this, SuccessModal);

    var _this = _possibleConstructorReturn(this, (SuccessModal.__proto__ || Object.getPrototypeOf(SuccessModal)).call(this, props));

    _this.state = {
      fadeIn: false
    };
    return _this;
  }

  _createClass(SuccessModal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
    //console.log(3, scrollTop);


    // componentWillReceiveProps(next) {
    //   console.log(3, next.products.get('scrollTop'));
    // }

  }, {
    key: 'handlerGoToCart',
    value: function handlerGoToCart() {
      var history = this.props.history;

      history.push('/cart');
    }
  }, {
    key: 'dec',
    value: function dec(a, b, c, s) {
      var variants = [a, b, c];
      var index = s % 100;
      if (index >= 11 && index <= 14) {
        index = 0;
      } else {
        index = (index %= 10) < 5 ? index > 2 ? 2 : index : 0;
      }
      return variants[index];
    }
  }, {
    key: 'render',
    value: function render() {

      var total = 0;
      var _props = this.props,
          session = _props.session,
          productsForCart = _props.productsForCart,
          products = _props.products,
          scrollTop = _props.scrollTop;


      total = productsForCart.reduce(function (total, item) {
        return total + (item.count === '' ? 1 : parseInt(item.count, 10)) * parseInt(item.price, 10);
      }, 0);

      var unit = this.dec("товаров", "товар", "товара", session.get("productCounts")); // склоняем по падежам
      var scrollTopStyle = {
        top: products.get('scrollTop') < 98 ? 98 - products.get('scrollTop') + 'px' : '1px'
      };

      return _react2.default.createElement(
        'div',
        { className: 'modal-dialog-success', style: scrollTopStyle },
        _react2.default.createElement(
          'div',
          { className: 'modal-content-success' },
          _react2.default.createElement(
            'div',
            { className: 'modal-header-success' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'close', onClick: this.props.handlerCloseModal },
              '\xD7'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'modal-title', style: { marginBottom: '5px' } },
              _react2.default.createElement(
                'span',
                { style: { textDecoration: 'underline' } },
                '\u041A\u043E\u0440\u0437\u0438\u043D\u0430'
              ),
              ': ',
              session.get("productCounts"),
              ' ',
              unit,
              ' ',
              _react2.default.createElement(
                'b',
                null,
                total
              ),
              ' \u20BD'
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-default', style: { width: '100%' }, onClick: this.handlerGoToCart.bind(this) },
              '\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C'
            )
          )
        )
      );
    }
  }]);

  return SuccessModal;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    products: store.products,
    productsForCart: store.api.get('productsForCart')
  };
})(SuccessModal);

//# sourceMappingURL=SuccessModal-compiled.js.map