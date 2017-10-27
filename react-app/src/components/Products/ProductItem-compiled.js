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

var _actions = require('./actions');

var _helpers = require('../../helpers');

var _actions2 = require('../../actions');

var mainActions = _interopRequireWildcard(_actions2);

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
      scrollTop: 0,
      orderNumberInp: 1,
      errorBorderRed: false,
      inputPlaceHolder: '',
      addButtonText: 'Добавить в корзину',
      addToCartButtonStyle: {
        background: 'steelblue'
      }
    };
    return _this;
  }

  _createClass(ProductItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var dispatch = this.props.dispatch;

      var data = {
        emptyArray: true
      };
      (0, _api.showProductsInCart)(dispatch, data);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var dispatch = this.props.dispatch;
      // window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('scroll', function (event) {
        var dispatch = _this2.props.dispatch;

        var target = event.target || event.srcElement;
        var scrollTop = target.body.scrollTop;
        dispatch((0, _actions.setScrollTop)(scrollTop));
      });
      window.addEventListener('resize', function (event) {
        var dispatch = _this2.props.dispatch;

        var target = event.target || event.srcElement;
        var resize = target.innerWidth;
        dispatch((0, _actions.setResize)(resize));
      });
    }
  }, {
    key: 'getCountProductCart',
    value: function getCountProductCart() {
      var _this3 = this;

      var productsForCart = this.props.productsForCart;

      var product = (0, _helpers.isEmptyArray)(productsForCart) && productsForCart.filter(function (item) {
        return item.name === _this3.props.itemName;
      });
      return parseInt(this.state.orderNumberInp) ? parseInt(this.state.orderNumberInp) : (0, _helpers.isEmptyArray)(product) ? product[0]['count'] : this.state.orderNumberInp;
    }
  }, {
    key: 'setPlusNumber',
    value: function setPlusNumber() {
      var inputVal = this.getCountProductCart();
      // console.log(1, inputVal)
      if (Number.isInteger(inputVal) && inputVal < 99) {
        this.setState({
          orderNumberInp: parseInt(inputVal) + 1,
          errorBorderRed: false
        });
      } else {
        this.setState({
          orderNumberInp: 1,
          errorBorderRed: false
        });
      }
    }
  }, {
    key: 'setMinusNumber',
    value: function setMinusNumber() {
      var _this4 = this;

      var productsForCart = this.props.productsForCart;

      var product = (0, _helpers.isEmptyArray)(productsForCart) && productsForCart.filter(function (item) {
        return item.name === _this4.props.itemName;
      });
      var inputVal = this.getCountProductCart();
      if (Number.isInteger(inputVal) && inputVal > 1) {
        this.setState({
          orderNumberInp: parseInt(inputVal) - 1,
          errorBorderRed: false
        });
      } else {
        this.setState({
          orderNumberInp: 1,
          errorBorderRed: false
        });
      }
    }
  }, {
    key: 'setChangeNumber',
    value: function setChangeNumber(e) {
      var targetValue = e.target.value;
      if (targetValue <= 99 && targetValue > 0) {
        this.setState({
          orderNumberInp: parseInt(targetValue),
          errorBorderRed: false,
          inputPlaceHolder: ''
        });
      } else if (targetValue === '') {
        this.setState({
          orderNumberInp: '',
          errorBorderRed: true,
          inputPlaceHolder: '?'
        });
      }
    }
  }, {
    key: 'addProductToCart',
    value: function addProductToCart() {
      if (this.props.ordersQuota && this.props.ordersQuota.status) {
        var productCounts = this.getCountProductCart();

        if (productCounts) {
          var dispatch = this.props.dispatch;

          dispatch(mainActions.setLoaderStatus(true));
          var data = {
            barCode: this.props.barCode,
            productId: this.props.productId,
            productCounts: productCounts
          };
          (0, _api.addProductToCart)(dispatch, data);
          this.setState({
            addButtonText: 'Товар в корзине',
            addToCartButtonStyle: {
              background: '#3c763d'
            }
          });
          // dispatch(changeSuccessModalDisplay(true));
        } else {
          this.setState({
            errorBorderRed: true,
            inputPlaceHolder: '?'
          });
        }
      } else {
        this.setState({
          addButtonText: 'Доставка закрыта'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var productsForCart = this.props.productsForCart;

      var categoryItemImg = {
        padding: '0 20px 0 20px'
      };

      var orderNumberInp = (0, _classnames2.default)({
        'order-number-inp': true,
        'error-border-red': this.state.errorBorderRed
      });

      var product = (0, _helpers.isEmptyMap)(productsForCart) && productsForCart.filter(function (item) {
        return item.name === _this5.props.itemName;
      });
      var inputVal = this.state.orderNumberInp ? this.state.orderNumberInp : (0, _helpers.isEmptyArray)(product) ? product[0]['count'] : this.state.orderNumberInp;
      var inputPlaceHolder = this.state.inputPlaceHolder;
      var addToCartButtonText = (0, _helpers.isEmptyArray)(product) ? 'Товар в корзине' : this.state.addButtonText;
      var addToCartButtonStyle = this.props.ordersQuota && this.props.ordersQuota.status ? (0, _helpers.isEmptyArray)(product) ? { background: '#3c763d' } : this.state.addToCartButtonStyle : { background: '#aab5bf' };

      return _react2.default.createElement(
        'div',
        { className: 'category-item animation-page-load-medium' },
        _react2.default.createElement(
          'div',
          { className: 'category-item__img', style: categoryItemImg },
          _react2.default.createElement('img', { src: '/storage/images/products/' + this.props.imgSrc, width: '190' }),
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
              ' \u0420 / ',
              this.props.unit
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
                      className: orderNumberInp,
                      type: 'number',
                      max: '99',
                      min: '0',
                      value: inputVal,
                      placeholder: inputPlaceHolder,
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
              style: addToCartButtonStyle,
              onClick: this.addProductToCart.bind(this)
            },
            _react2.default.createElement(
              'p',
              null,
              addToCartButtonText
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
    products: store.products,
    productsForCart: store.api.get('productsForCart')
  };
})(ProductItem);

//# sourceMappingURL=ProductItem-compiled.js.map