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

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalLoaderCartSent = function (_Component) {
  _inherits(ModalLoaderCartSent, _Component);

  function ModalLoaderCartSent(props) {
    _classCallCheck(this, ModalLoaderCartSent);

    var _this = _possibleConstructorReturn(this, (ModalLoaderCartSent.__proto__ || Object.getPrototypeOf(ModalLoaderCartSent)).call(this, props));

    _this.state = {
      fadeIn: false
    };
    return _this;
  }

  _createClass(ModalLoaderCartSent, [{
    key: 'render',
    value: function render() {
      var api = this.props.api;

      var modalFadeIn = (0, _classnames2.default)({
        'animation-popup-load-fast': true,
        'modal': true,
        'fade': true,
        'in': api.get('modalLoaderCartSentStatus')
      });

      var modalStyleOn = {
        display: 'block', paddingLeft: '15px'
      };
      var modalStyleOff = {
        display: 'none'
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: 'modal-backdrop-white fade in', style: api.get('modalLoaderCartSentStatus') ? modalStyleOn : modalStyleOff }),
        _react2.default.createElement(
          'div',
          { className: modalFadeIn, role: 'dialog', style: api.get('modalLoaderCartSentStatus') ? modalStyleOn : modalStyleOff },
          _react2.default.createElement(
            'div',
            { className: 'modal-dialog modal-sm' },
            _react2.default.createElement(
              'div',
              { className: 'modal-content' },
              _react2.default.createElement(
                'div',
                { className: 'modal-header' },
                _react2.default.createElement(
                  'h4',
                  { className: 'modal-title' },
                  '\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0437\u0430\u043A\u0430\u0437\u0430...'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ModalLoaderCartSent;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    api: store.api
  };
})(ModalLoaderCartSent);

//# sourceMappingURL=ModalLoaderCartSent-compiled.js.map