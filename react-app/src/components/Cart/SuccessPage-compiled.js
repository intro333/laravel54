'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('../../theme/css/index.css');

require('../../theme/css/main.css');

require('../../theme/css/adaptive.css');

var _reactRouterDom = require('react-router-dom');

var _Navigation = require('../Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _MenuMobile = require('../Popups/MenuMobile');

var _MenuMobile2 = _interopRequireDefault(_MenuMobile);

var _ModalLoaderCartSent = require('../Popups/ModalLoaderCartSent');

var _ModalLoaderCartSent2 = _interopRequireDefault(_ModalLoaderCartSent);

var _actions = require('../../actions');

var modelActions = _interopRequireWildcard(_actions);

var _Footer = require('../Navigation/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuccessPage = function (_Component) {
  _inherits(SuccessPage, _Component);

  function SuccessPage(props) {
    _classCallCheck(this, SuccessPage);

    return _possibleConstructorReturn(this, (SuccessPage.__proto__ || Object.getPrototypeOf(SuccessPage)).call(this, props));
  }

  _createClass(SuccessPage, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var dispatch = this.props.dispatch;

      dispatch(modelActions.setSuccessPageStatus(null));
    }
  }, {
    key: 'render',
    value: function render() {
      var api = this.props.api;

      var status = null;
      var statusNull = _react2.default.createElement('div', { className: 'success-page__content' });

      var statusSuccess = _react2.default.createElement(
        'div',
        { className: 'success-page__content' },
        _react2.default.createElement(
          'div',
          { className: 'success-page__title' },
          '\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u043F\u0440\u0438\u043D\u044F\u0442!'
        ),
        _react2.default.createElement(
          'div',
          { className: 'success-page__text' },
          '\u0412 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u0431\u0443\u0434\u0435\u0442 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D. \u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u0441\u043B\u0435\u0434\u0438\u0442\u044C ',
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: "/orders" },
            _react2.default.createElement(
              'b',
              null,
              '\u0437\u0434\u0435\u0441\u044C'
            )
          ),
          '.',
          _react2.default.createElement('br', null),
          '\u0421\u043F\u0430\u0441\u0438\u0431\u043E!'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/" },
          _react2.default.createElement(
            'div',
            { className: 'success-button' },
            _react2.default.createElement(
              'p',
              null,
              '\u041D\u0410 \u0413\u041B\u0410\u0412\u041D\u0423\u042E'
            )
          )
        )
      );

      var statusError = _react2.default.createElement(
        'div',
        { className: 'success-page__content' },
        _react2.default.createElement(
          'div',
          { className: 'success-page__title' },
          '\u0417\u0430\u043A\u0430\u0437 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D'
        ),
        _react2.default.createElement(
          'div',
          { className: 'success-page__text' },
          '\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442 \u0441\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u0438\u043B\u0438 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443 \u0441\u0430\u0439\u0442\u0430 \u043F\u043E \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u0435.',
          _react2.default.createElement('br', null),
          '\u041F\u0440\u0438\u043D\u043E\u0441\u0438\u043C \u0441\u0432\u043E\u0438 \u0438\u0437\u0432\u0438\u043D\u0435\u043D\u0438\u044F.'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/" },
          _react2.default.createElement(
            'div',
            { className: 'success-button' },
            _react2.default.createElement(
              'p',
              null,
              '\u041D\u0410 \u0413\u041B\u0410\u0412\u041D\u0423\u042E'
            )
          )
        )
      );

      switch (api.get('successPageStatus')) {
        case 'success':
          status = statusSuccess;
          break;
        case 'error':
          status = statusError;
          break;
        default:
          status = statusNull;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_Navigation2.default, null),
          _react2.default.createElement(_MenuMobile2.default, null),
          _react2.default.createElement(
            'section',
            { className: 'success-page animation-page-load-medium' },
            _react2.default.createElement(_ModalLoaderCartSent2.default, null),
            status
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return SuccessPage;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(SuccessPage);

//# sourceMappingURL=SuccessPage-compiled.js.map