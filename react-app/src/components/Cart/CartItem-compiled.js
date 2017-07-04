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

var CartItem = function (_Component) {
  _inherits(CartItem, _Component);

  function CartItem(props) {
    _classCallCheck(this, CartItem);

    var _this = _possibleConstructorReturn(this, (CartItem.__proto__ || Object.getPrototypeOf(CartItem)).call(this, props));

    _this.state = {
      orderNumberInp: props.count,
      errorBorderRed: false,
      inputPlaceHolder: ''
    };
    return _this;
  }

  _createClass(CartItem, [{
    key: 'addProductToCart',
    value: function addProductToCart(productCounts) {
      if (productCounts) {
        var dispatch = this.props.dispatch;

        var data = {
          barCode: this.props.barCode,
          productId: this.props.productId,
          productCounts: productCounts
        };
        (0, _api.addProductToCart)(dispatch, data);
        (0, _api.showProductsInCart)(dispatch);
        console.log("datadata", data);
        console.log("datadata", productCounts);
      } else {
        this.setState({
          errorBorderRed: true,
          inputPlaceHolder: '?'
        });
      }
    }
  }, {
    key: 'setPlusNumber',
    value: function setPlusNumber() {
      var inputVal = this.state.orderNumberInp;
      if (inputVal < 99) {
        this.setState({
          orderNumberInp: parseInt(inputVal) + 1
        });
        this.addProductToCart(parseInt(inputVal) + 1);
      } else if (isNaN(inputVal)) {
        this.setState({
          orderNumberInp: 1,
          errorBorderRed: false
        });
      }
    }
  }, {
    key: 'setMinusNumber',
    value: function setMinusNumber() {
      var inputVal = parseInt(this.state.orderNumberInp);
      if (inputVal > 1) {
        this.setState({
          orderNumberInp: parseInt(inputVal) - 1
        });
        this.addProductToCart(parseInt(inputVal) - 1);
      } else if (isNaN(inputVal)) {
        this.setState({
          orderNumberInp: 1,
          errorBorderRed: false
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var orderNumberInp = (0, _classnames2.default)({
        'order-number-inp': true,
        'error-border-red': this.state.errorBorderRed
      });
      var inputVal = this.state.orderNumberInp;
      var inputPlaceHolder = this.state.inputPlaceHolder;
      var cost = this.props.price * inputVal;

      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          { className: 'table-40-procent-td' },
          _react2.default.createElement('img', { className: 'cart-product-image', src: this.props.imagePath }),
          _react2.default.createElement(
            'span',
            null,
            this.props.name
          )
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.price,
          ' \u20BD / ',
          this.props.unit
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
                    value: inputVal,
                    placeholder: inputPlaceHolder
                  })
                ),
                _react2.default.createElement('div', {
                  className: 'order-number__spin minus',
                  onClick: this.setMinusNumber.bind(this)
                }),
                _react2.default.createElement('div', {
                  className: 'order-number__spin plus',
                  onClick: this.setPlusNumber.bind(this)
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
          _react2.default.createElement('span', { className: 'remove-product glyphicon glyphicon-trash', 'aria-hidden': 'true' })
        )
      );
    }
  }]);

  return CartItem;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api,
    products: store.products
  };
})(CartItem);

//# sourceMappingURL=CartItem-compiled.js.map