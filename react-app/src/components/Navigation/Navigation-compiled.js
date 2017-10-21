'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _reactRouterDom = require('react-router-dom');

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

var _api = require('../../api');

var _fileText = require('react-icons/lib/fa/file-text');

var _fileText2 = _interopRequireDefault(_fileText);

var _user = require('react-icons/lib/fa/user');

var _user2 = _interopRequireDefault(_user);

var _shoppingCart = require('react-icons/lib/fa/shopping-cart');

var _shoppingCart2 = _interopRequireDefault(_shoppingCart);

var _signOut = require('react-icons/lib/fa/sign-out');

var _signOut2 = _interopRequireDefault(_signOut);

var _Loader = require('../Popups/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _SuccessSaveModal = require('../Popups/SuccessSaveModal');

var _SuccessSaveModal2 = _interopRequireDefault(_SuccessSaveModal);

var _Modal = require('../Popups/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _actions2 = require('../Products/actions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));
  }

  _createClass(Navigation, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var dispatch = this.props.dispatch;

      dispatch((0, _actions2.errorModalDisplay)(false));
      dispatch((0, _actions2.changeSuccessModalDisplay)(false));
      dispatch(modelActions.setOpenCloseModal({
        show: false,
        textHeader: '',
        textAlign: 'center',
        function: null
      }));
    }
  }, {
    key: 'mobileMenuClick',
    value: function mobileMenuClick() {
      var _props = this.props,
          dispatch = _props.dispatch,
          session = _props.session;

      dispatch(modelActions.setMobNavElement(!session.get('mobNavElement')));
    }
  }, {
    key: 'logOut',
    value: function logOut() {
      var token = this.props.token;

      (0, _api.logOut)(token);
    }
  }, {
    key: 'closeMobNavElem',
    value: function closeMobNavElem() {
      var dispatch = this.props.dispatch;

      dispatch(modelActions.setMobNavElement(true));
    }
  }, {
    key: 'handlerCloseModal',
    value: function handlerCloseModal() {
      var dispatch = this.props.dispatch;

      dispatch((0, _actions2.errorModalDisplay)(false));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          session = _props2.session,
          products = _props2.products;
      //Заполнить количество продуктов в корзине в меню

      (0, _api.getProductCounts)(dispatch);

      var productsCounts = session.get('productCounts');
      var cartUrl = productsCounts && productsCounts !== 0 ? '/cart' : '/';
      // console.log(2, window.location.href)

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Loader2.default, null),
        _react2.default.createElement(_SuccessSaveModal2.default, {
          handlerCloseModal: this.handlerCloseModal.bind(this),
          successModalDisplay: products.get('errorModalDisplay'),
          modalTitle: '\u041D\u0435\u0442 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F.',
          modalSubTitle: '\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.',
          colorBack: '#ffe500',
          colorText: '#000'
        }),
        _react2.default.createElement(_Modal2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'contacts-main' },
          _react2.default.createElement(
            'div',
            { className: 'contacts-item' },
            _react2.default.createElement(
              'span',
              null,
              '\u0421\u0435\u0440\u0433\u0435\u0439'
            ),
            _react2.default.createElement(
              'span',
              null,
              '8(985)851-20-86'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'contacts-item' },
            _react2.default.createElement(
              'span',
              null,
              '\u0415\u043B\u0435\u043D\u0430'
            ),
            _react2.default.createElement(
              'span',
              null,
              '8(929)622-98-15'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'contacts-item' },
            _react2.default.createElement(
              'span',
              null,
              'Email'
            ),
            _react2.default.createElement(
              'span',
              null,
              'shop-travel@ya.ru'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mobile-nav-bar-1' },
          _react2.default.createElement(
            'nav',
            { className: 'navbar navbar-default' },
            _react2.default.createElement(
              'div',
              { className: 'container-fluid' },
              _react2.default.createElement(
                'div',
                { className: 'mobile-nav-head' },
                session.get('mobNavElement') && _react2.default.createElement(
                  'div',
                  { className: 'mob-nav-elem', onClick: this.mobileMenuClick.bind(this) },
                  _react2.default.createElement('div', { className: 'mob-rectangle' }),
                  _react2.default.createElement('div', { className: 'mob-rectangle' }),
                  _react2.default.createElement('div', { className: 'mob-rectangle' })
                ),
                !session.get('mobNavElement') && _react2.default.createElement(
                  'div',
                  { className: 'mob-nav-elem', onClick: this.mobileMenuClick.bind(this) },
                  _react2.default.createElement('div', { className: 'close-mobile-elem' })
                ),
                _react2.default.createElement(
                  'span',
                  {
                    onClick: this.logOut.bind(this),
                    className: ' mob-menu-right'
                  },
                  _react2.default.createElement(_signOut2.default, { size: '17' })
                ),
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { onClick: this.closeMobNavElem.bind(this), to: '/cart' },
                  _react2.default.createElement(
                    'span',
                    { className: 'mob-menu-right' },
                    _react2.default.createElement(_shoppingCart2.default, { size: '17' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'menu__item--basket__amount' },
                    productsCounts && productsCounts
                  )
                ),
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { onClick: this.closeMobNavElem.bind(this),
                    to: '/personal-account' },
                  _react2.default.createElement(
                    'span',
                    { className: 'mob-menu-right' },
                    _react2.default.createElement(_user2.default, { size: '17' })
                  )
                ),
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  {
                    onClick: this.closeMobNavElem.bind(this),
                    to: '/orders'
                  },
                  _react2.default.createElement(
                    'span',
                    { className: 'mob-menu-right' },
                    _react2.default.createElement(_fileText2.default, { size: '16' })
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mobile-nav-bar-2' },
          _react2.default.createElement(
            'nav',
            { className: 'navbar navbar-default' },
            _react2.default.createElement(
              'div',
              { className: 'container-fluid' },
              _react2.default.createElement(
                'ul',
                { className: 'nav navbar-nav' },
                _react2.default.createElement(
                  'li',
                  { id: 'mob-www-logo' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/' },
                    _react2.default.createElement(
                      'span',
                      null,
                      '\u0413\u043B\u0430\u0432\u043D\u0430\u044F'
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/categories' },
                    '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B'
                  )
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'nav navbar-nav navbar-right' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/orders' },
                    _react2.default.createElement(_fileText2.default, { size: '15' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'mob-nav-text' },
                      '\u0417\u0430\u043A\u0430\u0437\u044B'
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/personal-account' },
                    _react2.default.createElement(_user2.default, { size: '16' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'mob-nav-text' },
                      '\u041C\u043E\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442'
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: cartUrl },
                    _react2.default.createElement(_shoppingCart2.default, { size: '16' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'mob-nav-text' },
                      '\u041A\u043E\u0440\u0437\u0438\u043D\u0430'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'menu__item--basket__amount' },
                      productsCounts && productsCounts
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { onClick: this.logOut.bind(this) },
                  _react2.default.createElement(
                    'a',
                    null,
                    _react2.default.createElement(_signOut2.default, { size: '16' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'mob-nav-text' },
                      '\u0412\u044B\u0445\u043E\u0434'
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    token: store.api.get('userToken'),
    api: store.api,
    products: store.products
  };
})(Navigation);

//# sourceMappingURL=Navigation-compiled.js.map