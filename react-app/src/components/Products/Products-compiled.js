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

var _api = require('../../api');

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

      (0, _api.setProducts)(dispatch, session.get('categoryId'));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          api = _props2.api,
          session = _props2.session;

      var products = api.get('products');

      var productItem = products.map(function (item) {
        return _react2.default.createElement(_ProductItem2.default, {
          key: item.product_id,
          productId: item.product_id,
          barCode: item.bar_code,
          imgSrc: item.image_path,
          itemName: item.name,
          price: item.price
        });
      });

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
              session.get('categoryName')
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'category-all' },
            productItem
          )
        )
      );
    }
  }]);

  return Products;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(Products);

//# sourceMappingURL=Products-compiled.js.map