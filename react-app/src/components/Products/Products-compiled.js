'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('../../theme/css/index.css');

require('../../theme/css/adaptive.css');

require('../../theme/css/main.css');

var _reactRouterDom = require('react-router-dom');

var _Navigation = require('../Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('../Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

var _ProductItem = require('./ProductItem');

var _ProductItem2 = _interopRequireDefault(_ProductItem);

var _SuccessModal = require('../Popups/SuccessModal');

var _SuccessModal2 = _interopRequireDefault(_SuccessModal);

var _actions = require('./actions');

var _actions2 = require('../../actions');

var mainActions = _interopRequireWildcard(_actions2);

var _immutable = require('immutable');

var _Footer = require('../Navigation/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _api = require('../../api');

var _helpers = require('../../helpers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          dispatch = _props.dispatch,
          session = _props.session;

      dispatch(mainActions.setLoaderStatus(true));
      (0, _api.setProducts)(dispatch, session.get('categoryId'));
      (0, _api.showOrdersQuotaInCart)(dispatch);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var map = _immutable.Map;
      var dispatch = this.props.dispatch;

      dispatch(mainActions.setProducts(map()));
    }
  }, {
    key: 'handlerCloseModal',
    value: function handlerCloseModal() {
      var dispatch = this.props.dispatch;

      dispatch((0, _actions.changeSuccessModalDisplay)(false));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          api = _props2.api,
          session = _props2.session,
          products = _props2.products,
          history = _props2.history,
          ordersQuota = _props2.ordersQuota;

      var productsApi = api.get('products');

      var productItem = (0, _helpers.isEmptyMap)(productsApi) && productsApi.map(function (item) {
        return _react2.default.createElement(_ProductItem2.default, {
          key: item.product_id,
          productId: item.product_id,
          productItems: item,
          barCode: item.bar_code,
          imgSrc: item.image_path,
          itemName: item.name,
          price: item.price,
          unit: item.unit,
          ordersQuota: ordersQuota.delivery ? ordersQuota.delivery : ''
        });
      });
      var deliveryStatus = ordersQuota.delivery && ordersQuota.delivery.status && ordersQuota.delivery.status;
      var deliveryMessage = _react2.default.createElement(
        'p',
        { className: 'order-filds-label scroll-to-error',
          style: { color: 'red', fontSize: '14px', marginTop: '5px' } },
        '\u0414\u0430\u0442\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u0430.\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u0437\u0434\u0435\u0441\u044C.'
      );

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_Navigation2.default, null),
          _react2.default.createElement(_MenuMobile2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'main-container' },
            _react2.default.createElement(_SuccessModal2.default, {
              handlerCloseModal: this.handlerCloseModal.bind(this),
              successModalDisplay: products.get('successModalDisplay'),
              history: history
            }),
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
                session.get('categoryName')
              )
            ),
            deliveryStatus === 0 && deliveryMessage,
            _react2.default.createElement(
              'div',
              { className: 'category-all' },
              productItem
            )
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Products;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api,
    products: store.products,
    ordersQuota: store.api.get('ordersQuota')
  };
})(Products);

//# sourceMappingURL=Products-compiled.js.map