'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  _createClass(Footer, [{
    key: 'closeMobNavElem',
    value: function closeMobNavElem() {
      var dispatch = this.props.dispatch;

      dispatch(modelActions.setMobNavElement(true));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        { id: 'footer' },
        _react2.default.createElement(
          'div',
          { className: 'layout' },
          _react2.default.createElement(
            'div',
            { className: 'b-footer' },
            _react2.default.createElement(
              'div',
              { className: 'b-menu' },
              _react2.default.createElement(
                'nav',
                { className: 'menu_footer menu_footer--footer' },
                _react2.default.createElement(
                  'li',
                  { className: 'menu__item_footer' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                      className: 'menu__item__link_footer',
                      onClick: this.closeMobNavElem.bind(this), to: '/cart'
                    },
                    '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'menu__item_footer' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                      className: 'menu__item__link_footer',
                      onClick: this.closeMobNavElem.bind(this), to: '/orders'
                    },
                    '\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'menu__item_footer' },
                  _react2.default.createElement(
                    _reactRouterDom.Link,
                    {
                      className: 'menu__item__link_footer',
                      onClick: this.closeMobNavElem.bind(this), to: '/personal-account'
                    },
                    '\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'b-footer__bottom' },
              _react2.default.createElement(
                'div',
                { className: 'footer__copy' },
                '\xA9 \xAB\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0438\u0437 \u041E\u0440\u043B\u0430\xBB, 2017'
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(Footer);

//# sourceMappingURL=Footer-compiled.js.map