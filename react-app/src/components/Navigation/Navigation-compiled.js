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

require('../../theme/css/bootstrap-datepicker3.min.css');

var _reactRouterDom = require('react-router-dom');

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

var _api = require('../../api');

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
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          dispatch = _props2.dispatch,
          session = _props2.session;
      //Заполнить количество продуктов в корзине в меню

      (0, _api.getProductCounts)(dispatch);

      var productsCounts = session.get('productCounts');
      var cartUrl = productsCounts && productsCounts !== 0 ? '/cart' : '/';

      return _react2.default.createElement(
        'div',
        null,
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
              '\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430'
            ),
            _react2.default.createElement(
              'span',
              null,
              'shop-travel17@yandex.ru'
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
                _react2.default.createElement('span', {
                  onClick: this.logOut.bind(this),
                  className: 'glyphicon glyphicon-log-out mob-menu-right'
                }),
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { onClick: this.closeMobNavElem.bind(this), to: '/cart' },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-shopping-cart mob-menu-right' }),
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
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-user  mob-menu-right' })
                ),
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  {
                    onClick: this.closeMobNavElem.bind(this),
                    to: '/orders'
                  },
                  _react2.default.createElement('span', { className: 'glyphicon glyphicon-list-alt mob-menu-right' })
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
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-list-alt' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'mob-nav-text' },
                      '\xA0\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B'
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/personal-account' },
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-user' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'mob-nav-text' },
                      '\xA0\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442'
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: cartUrl },
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-shopping-cart' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'mob-nav-text' },
                      '\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430'
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
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-log-out' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'mob-nav-text' },
                      '\xA0\u0412\u044B\u0445\u043E\u0434'
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
    api: store.api
  };
})(Navigation);

//# sourceMappingURL=Navigation-compiled.js.map