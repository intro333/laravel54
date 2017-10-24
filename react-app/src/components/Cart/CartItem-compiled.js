'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _api = require('../../api');

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

var _close = require('react-icons/lib/fa/close');

var _close2 = _interopRequireDefault(_close);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.item.count === "") {
        this.setState({
          errorBorderRed: true,
          inputPlaceHolder: '?'
        });
      }
    }
  }, {
    key: 'addProductToCart',
    value: function addProductToCart(productCounts) {
      var dispatch = this.props.dispatch;


      dispatch(modelActions.setLoaderStatus(true));

      if (Number.isInteger(productCounts)) {
        var data = {
          barCode: this.props.item.barCode,
          productId: this.props.item.productId,
          productCounts: productCounts
        };
        (0, _api.addProductToCart)(dispatch, data);
      } else if (typeof productCounts === 'string' && productCounts !== '') {
        var _data = {
          barCode: this.props.item.barCode,
          productId: this.props.item.productId,
          productCounts: parseInt(productCounts)
        };
        (0, _api.addProductToCart)(dispatch, _data);
      } else {
        var _data2 = {
          barCode: this.props.item.barCode,
          productId: this.props.item.productId,
          productCounts: ''
        };
        (0, _api.addProductToCart)(dispatch, _data2);
        this.setState({
          errorBorderRed: true,
          inputPlaceHolder: '?'
        });
      }
    }
  }, {
    key: 'setPlusNumber',
    value: function setPlusNumber() {
      var inputVal = this.props.item.count;
      if (Number.isInteger(inputVal) && inputVal < 99) {
        this.addProductToCart(parseInt(inputVal) + 1);
      } else if (inputVal === "") {
        this.setState({
          errorBorderRed: false
        });
        this.addProductToCart(1);
      } else {
        this.setState({
          errorBorderRed: false
        });
        this.addProductToCart(1);
      }
    }
  }, {
    key: 'setMinusNumber',
    value: function setMinusNumber() {
      var inputVal = this.props.item.count;
      if (Number.isInteger(inputVal) && inputVal > 1) {
        this.addProductToCart(parseInt(inputVal) - 1);
      } else if (inputVal === "") {
        this.setState({
          errorBorderRed: false
        });
        this.addProductToCart(1);
      } else {
        this.setState({
          errorBorderRed: false
        });
        this.addProductToCart(1);
      }
    }
  }, {
    key: 'setChangeNumber',
    value: function setChangeNumber(e) {
      var targetValue = e.target.value;

      if (targetValue <= 99 && targetValue > 0 || targetValue === '') {
        this.setState({
          errorBorderRed: false,
          inputPlaceHolder: ''
        });
        this.addProductToCart(targetValue);
      }
    }
  }, {
    key: 'deleteProductFromCart',
    value: function deleteProductFromCart() {
      var _props = this.props,
          dispatch = _props.dispatch,
          history = _props.history;

      var data = {
        barCode: this.props.item.barCode,
        productId: this.props.item.productId
      };
      dispatch(modelActions.setLoaderStatus(true));
      (0, _api.deleteProductFromCart)(dispatch, data, history);
    }
  }, {
    key: 'render',
    value: function render() {
      var orderNumberInp = (0, _classnames2.default)({
        'order-number-inp': true,
        'error-border-red': this.state.errorBorderRed
      });
      var inputVal = this.props.item.count === '' ? '' : parseInt(this.props.item.count);
      var inputPlaceHolder = this.state.inputPlaceHolder;
      var cost = this.props.item.price * (inputVal === '' ? 1 : parseInt(this.props.item.count));

      return _react2.default.createElement(
        'tr',
        { key: this.props.keyProductId },
        _react2.default.createElement(
          'td',
          { className: 'table-40-procent-td' },
          _react2.default.createElement('img', { className: 'cart-product-image', src: '/storage/images/products/' + this.props.item.imagePath }),
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
          ' \u0420 / ',
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
                    value: inputVal ? inputVal : '',
                    placeholder: inputPlaceHolder,
                    onChange: this.setChangeNumber.bind(this)
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
          ' \u0420'
        ),
        _react2.default.createElement(
          'td',
          { style: { color: 'firebrick' } },
          _react2.default.createElement(
            'span',
            {
              className: 'remove-product',
              onClick: this.deleteProductFromCart.bind(this)
            },
            _react2.default.createElement(_close2.default, { size: '25' })
          )
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