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

var _actions = require('../Products/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuccessSaveModal = function (_Component) {
  _inherits(SuccessSaveModal, _Component);

  function SuccessSaveModal(props) {
    _classCallCheck(this, SuccessSaveModal);

    var _this = _possibleConstructorReturn(this, (SuccessSaveModal.__proto__ || Object.getPrototypeOf(SuccessSaveModal)).call(this, props));

    _this.state = {
      fadeIn: false
    };
    return _this;
  }

  _createClass(SuccessSaveModal, [{
    key: 'render',
    value: function render() {
      var products = this.props.products;

      var windowWidth = window.innerWidth;
      var scrollTopStyle = '1px';
      var resize = products.get('resize');

      if ((resize ? resize : windowWidth) > 540) {
        scrollTopStyle = {
          top: products.get('scrollTop') < 113 ? 113 - products.get('scrollTop') + 'px' : '1px'
        };
      } else {
        scrollTopStyle = {
          top: products.get('scrollTop') < 105 ? 105 - products.get('scrollTop') + 'px' : '1px'
        };
      }

      var modalDialog = (0, _classnames2.default)({
        'modal-dialog-success': true,
        'modal-dialog-success-save': true,
        'transition-scale': this.props.successModalDisplay
      });

      var colorBack = { background: this.props.colorBack };
      var modalHeaderSuccess = {
        padding: '7px',
        color: this.props.colorText
      };
      // setTimeout(dispatch(changeSuccessModalDisplay(false)), 2000);


      return _react2.default.createElement(
        'div',
        { className: modalDialog, style: scrollTopStyle },
        _react2.default.createElement(
          'div',
          { className: 'modal-content-success modal-content-success-save', style: colorBack },
          _react2.default.createElement(
            'div',
            { className: 'modal-header-success modal-header-success-save', style: modalHeaderSuccess },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'close', onClick: this.props.handlerCloseModal },
              '\xD7'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'modal-title' },
              this.props.modalTitle
            ),
            _react2.default.createElement(
              'h6',
              { className: 'modal-title' },
              this.props.modalSubTitle && this.props.modalSubTitle
            )
          )
        )
      );
    }
  }]);

  return SuccessSaveModal;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    dispatch: store.dispatch,
    session: store.session,
    products: store.products,
    productsForCart: store.api.get('productsForCart')
  };
})(SuccessSaveModal);

//# sourceMappingURL=SuccessSaveModal-compiled.js.map