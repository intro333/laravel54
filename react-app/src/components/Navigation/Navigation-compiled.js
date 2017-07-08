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
    key: 'render',
    value: function render() {
      var logoImg = {
        width: '65px',
        height: '40px',
        margin: '5px'
      };

      var session = this.props.session;


      return _react2.default.createElement(
        'div',
        null,
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
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-cog  mob-menu-right' }),
                _react2.default.createElement('span', { className: 'glyphicon glyphicon-search  mob-menu-right' })
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
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/cart' },
                    '\u041A\u043E\u0440\u0437\u0438\u043D\u0430'
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
                    'a',
                    null,
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'mob-nav-text' },
                      '\u041F\u043E\u0438\u0441\u043A'
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { id: 'menu-option' },
                  _react2.default.createElement(
                    'a',
                    null,
                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-cog' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'mob-nav-text' },
                      '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438'
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
                      '\u0410\u043A\u0430\u0443\u043D\u0442'
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
    token: store.api.get('userToken')
  };
})(Navigation);

//# sourceMappingURL=Navigation-compiled.js.map