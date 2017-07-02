'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

require('../../theme/css/bootstrap-datepicker3.min.css');

require('../../theme/css/adaptive.css');

require('../../theme/css/main.css');

var _api = require('../../api');

var _actions = require('./actions');

var modelActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductItem = function (_Component) {
  _inherits(ProductItem, _Component);

  function ProductItem(props) {
    _classCallCheck(this, ProductItem);

    var _this = _possibleConstructorReturn(this, (ProductItem.__proto__ || Object.getPrototypeOf(ProductItem)).call(this, props));

    _this.state = {
      orderNumberInp: 1
    };
    return _this;
  }

  _createClass(ProductItem, [{
    key: 'setPlusNumber',
    value: function setPlusNumber() {
      var inputVal = this.state.orderNumberInp;
      if (inputVal < 99) {
        this.setState({
          orderNumberInp: parseInt(inputVal) + 1
        });
      } else if (isNaN(inputVal)) {
        this.setState({
          orderNumberInp: 1
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
      } else if (isNaN(inputVal)) {
        this.setState({
          orderNumberInp: 1
        });
      }
    }
  }, {
    key: 'setChangeNumber',
    value: function setChangeNumber(e) {
      var targetValue = e.target.value;
      if (targetValue <= 99 && targetValue > 0 || targetValue === '') {
        this.setState({
          orderNumberInp: parseInt(targetValue)
        });
      }
    }
  }, {
    key: 'addProductToCart',
    value: function addProductToCart() {
      var dispatch = this.props.dispatch;

      var data = {
        barCode: this.props.barCode,
        productId: this.props.productId,
        productCounts: this.state.orderNumberInp
      };

      (0, _api.addProductToCart)(dispatch, data);
    }
  }, {
    key: 'render',
    value: function render() {

      var categoryItemImg = {
        padding: '0 20px 0 20px'
      };

      var inputVal = this.state.orderNumberInp;

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
                    _react2.default.createElement('input', {
                      className: 'order-number-inp',
                      type: 'number',
                      max: '99',
                      min: '0',
                      value: inputVal,
                      onChange: this.setChangeNumber.bind(this)
                    })
                  ),
                  _react2.default.createElement('div', {
                    className: 'order-number__spin minus order-spin-minus',
                    onClick: this.setMinusNumber.bind(this)
                  }),
                  _react2.default.createElement('div', {
                    className: 'order-number__spin plus order-spin-plus',
                    onClick: this.setPlusNumber.bind(this)
                  })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            {
              className: 'add-to-cart-button',
              onClick: this.addProductToCart.bind(this)
            },
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

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api,
    products: store.products
  };
})(ProductItem);

//# sourceMappingURL=ProductItem-compiled.js.map