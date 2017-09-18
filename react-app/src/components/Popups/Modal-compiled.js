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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      fadeIn: false
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var modalFadeIn = (0, _classnames2.default)({
        'modal': true,
        'fade': true,
        'in': this.props.fadeIn
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
        _react2.default.createElement('div', { className: 'modal-backdrop fade in', style: this.props.modalDisplay ? modalStyleOn : modalStyleOff }),
        _react2.default.createElement(
          'div',
          { className: modalFadeIn, role: 'dialog', style: this.props.modalDisplay ? modalStyleOn : modalStyleOff },
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
                  'button',
                  { type: 'button', className: 'close', onClick: this.props.handlerCloseModal },
                  '\xD7'
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'modal-title' },
                  this.props.textHeader && this.props.textHeader
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-footer' },
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'btn btn-default', onClick: this.props.handlerCloseModal },
                  '\u041D\u0435\u0442'
                ),
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'btn btn-default', onClick: this.props.handlerSuccessModal },
                  '\u0414\u0430'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session
  };
})(Modal);

//# sourceMappingURL=Modal-compiled.js.map