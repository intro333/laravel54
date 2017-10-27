'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuMobile = function (_Component) {
  _inherits(MenuMobile, _Component);

  function MenuMobile(props) {
    _classCallCheck(this, MenuMobile);

    return _possibleConstructorReturn(this, (MenuMobile.__proto__ || Object.getPrototypeOf(MenuMobile)).call(this, props));
  }

  _createClass(MenuMobile, [{
    key: 'closeMobNavElem',
    value: function closeMobNavElem() {
      var dispatch = this.props.dispatch;

      dispatch(modelActions.setMobNavElement(true));
    }
  }, {
    key: 'render',
    value: function render() {
      var session = this.props.session;

      var showPopupMonNavElement = (0, _classnames2.default)({
        'popup_mob-nav-elem': true,
        'show-hide': session.get('mobNavElement')
      });

      return _react2.default.createElement(
        'div',
        { className: showPopupMonNavElement },
        _react2.default.createElement('div', { onClick: this.closeMobNavElem.bind(this), className: 'popup_mob-nav-elem_bg' }),
        _react2.default.createElement(
          'div',
          { className: 'for-mob-nav-elem' },
          _react2.default.createElement(
            'div',
            { id: 'blok_mob-nav-elem' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { onClick: this.closeMobNavElem.bind(this), to: '/' },
              _react2.default.createElement(
                'div',
                { className: 'on-off-nmob-nav-elem' },
                _react2.default.createElement(
                  'p',
                  null,
                  '\u0413\u043B\u0430\u0432\u043D\u0430\u044F'
                )
              )
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { onClick: this.closeMobNavElem.bind(this), to: '/categories' },
              _react2.default.createElement(
                'div',
                { className: 'on-off-nmob-nav-elem' },
                _react2.default.createElement(
                  'p',
                  null,
                  '\u041F\u0440\u043E\u0434\u0443\u043A\u0442\u044B'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MenuMobile;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session
  };
})(MenuMobile);

//# sourceMappingURL=MenuMobile-compiled.js.map